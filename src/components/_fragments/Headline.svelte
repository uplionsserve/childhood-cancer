<script lang="ts">
export let direction: string = "center"
export let inline: boolean = false
export let id: string | null = null
export let capitalize: boolean = false

switch (direction) {
    case "left":
        direction = "items-start"
        break
    case "center":
        direction = "items-center"
        break
    case "right":
        direction = "items-end"
        break
}
</script>

<div
    class="{inline
        ? 'w-auto'
        : 'w-full'} flex flex-col {direction} {capitalize && 'capitalize'}"
>
    <h2 {id} class="scroll-mt-36 text-3xl md:scroll-mt-32">
        <slot>Section <span class="text-orange">Headline</span></slot>
    </h2>
    <div
        class="
            flex flex-col
            space-y-2 py-2 {direction}"
    >
        <hr
            class="
                h-0.5 w-40
                rounded-full border-none
                bg-orange"
        />
        <hr
            class="
                h-0.5 w-24
                rounded-full border-none
                bg-orange-light"
        />
    </div>
</div>
