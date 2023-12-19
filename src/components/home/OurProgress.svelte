<script lang="ts">
import Headline from "@components/_fragments/Headline.svelte"

const { BASE_URL } = import.meta.env
</script>

<section class="mb-20 flex w-full flex-col items-center gap-8 px-8">
    <Headline>Our <span class="text-orange">Progress</span></Headline>
    <img
        src="{BASE_URL}/graphics/data/cc-data-family-map.svg"
        alt="A map of the Upper Peninsula showcasing amount of recognized families per county."
        class="max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl"
    />
    <p class="max-w-md text-center">
        These numbers represent the families we recognize who are fighting
        childhood cancer. <span class="font-bold"
            >Every dollar earned goes directly to the families and to the
            programs that serve them.</span
        >
    </p>
</section>
