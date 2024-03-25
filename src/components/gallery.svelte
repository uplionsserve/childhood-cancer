<script lang="ts">
import type { CcDataMedia } from "@payloadTypes"

export let photos: CcDataMedia[]
</script>

<!-- Gallery -->
<div
    class="grid w-full grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3"
>
    {#each photos as photo}
        <a
            href={photo.url}
            target="_blank"
            class="aspect-square w-2/3 cursor-pointer rounded-lg drop-shadow-md transition-all ease-out hover:-translate-y-1 hover:drop-shadow-xl sm:w-full"
        >
            <img
                class="h-full w-full rounded-lg object-cover"
                src={photo.sizes?.thumbnail?.url}
                alt={photo.alt}
            />
        </a>
    {/each}
</div>
