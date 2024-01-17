<script lang="ts">
import Button from "@components/Button.svelte"

export let src: string = "https://via.placeholder.com/1920x1080.jpg"
export let alt: string = "Placeholder image"
export let button: { text: string; href: string } = {
    text: "CTA Button",
    href: "#",
}
export let noButton: Boolean = false
</script>

<section
    class="
        relative
        w-full"
>
    <img
        {src}
        {alt}
        class="
            absolute left-0
            top-0 z-0 h-full w-full
            object-cover
            brightness-65 saturate-75"
    />
    <div
        class="
            pointer-events-none
            absolute z-10 min-w-[1600px]
            -translate-y-24 rotate-180 scale-110 select-none
            overflow-x-hidden xl:translate-x-12"
    >
        <img
            src={`${import.meta.env.BASE_URL}/graphics/swooshes/Asset 2.svg`}
            alt=""
        />
    </div>
    <div
        class="
        relative mx-auto flex max-w-[540px] flex-col gap-4 px-8 pb-16 pt-36
        md:mx-0
        lg:ml-24 lg:max-w-xl lg:px-0"
    >
        <h2 class="text-white">
            <slot name="title">Title</slot>
        </h2>
        <div class="mb-2 flex flex-col gap-4">
            <slot />
        </div>

        {#if !noButton}
            <Button href={button.href}>{button.text}</Button>
        {/if}
    </div>
</section>
