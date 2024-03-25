import type {
    CcDataMedia,
    CcDataHero,
    CcDataPageBanner,
    CcDataNewsletter,
} from "@payloadTypes"

async function fetchCMSJson(slug: string): Promise<any> {
    const { PUBLIC_CMS_URL, CMS_API_KEY } = import.meta.env

    try {
        const cmsResponse = await fetch(
            `${PUBLIC_CMS_URL}/api/${slug}?limit=1024`,
            {
                headers: {
                    Authorization: `api-keys API-Key ${CMS_API_KEY}`,
                },
            },
        )

        const cmsJson = await cmsResponse.json()
        return cmsJson
    } catch (error) {
        console.log("Error fetching CMS data: ", error)
    }
}

export async function getHeroes(): Promise<Array<CcDataHero>> {
    try {
        const heroesCollection = await fetchCMSJson("cc-data-heroes")
        const heroes: Array<CcDataHero> = heroesCollection.docs ?? []

        return heroes
    } catch (error) {
        console.log(error)

        return []
    }
}

export async function getBanner(url: URL): Promise<CcDataMedia> {
    try {
        const pageBannersCollection = await fetchCMSJson("cc-data-page-banners")
        const pageBanner: CcDataPageBanner = pageBannersCollection.docs.find(
            (doc: CcDataPageBanner) => doc.url! === url.pathname,
        )

        return pageBanner.banner as CcDataMedia
    } catch (error) {
        console.log(error)

        return {
            id: -1,
            alt: "Temp banner",
            updatedAt: "",
            createdAt: "string",
            url: "/childhood-cancer/images/banners/superior-health-foundation.jpg",
        }
    }
}

export async function getNewsletters(): Promise<Array<CcDataNewsletter>> {
    try {
        const newslettersCollection = await fetchCMSJson("cc-data-newsletters")
        const newsletters: Array<CcDataNewsletter> =
            newslettersCollection.docs ?? []

        return newsletters
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function getPhotos(): Promise<Array<[string, CcDataMedia[]]>> {
    try {
        const mediaCollection = await fetchCMSJson("cc-data-media")
        const photos: Array<CcDataMedia> = mediaCollection.docs.filter(
            // Filter to only include images enabled for the photo gallery
            (media: CcDataMedia) =>
                /image\/*/.test(media.mimeType!) && media.photo_gallery,
        )

        const photosByCategory = photos.reduce(
            (acc: Record<string, Array<CcDataMedia>>, photo) => {
                if (!photo.category) {
                    acc["uncategorized"] = [
                        ...(acc["uncategorized"] ?? []),
                        photo,
                    ]
                } else {
                    acc[photo.category] = [
                        ...(acc[photo.category] ?? []),
                        photo,
                    ]
                }

                return acc
            },
            {},
        )

        return Object.entries(photosByCategory).toSorted((a, b) =>
            a[0] < b[0] ? -1 : 1,
        )
    } catch (error) {
        console.log(error)

        return []
    }
}
