<script lang="ts">
import Button from "@components/Button.svelte"
</script>

<section
    class="
        before:bg-navy before:brightness-65
        before:saturate-75
        
        relative mb-16
        w-full before:absolute before:left-0 before:top-0
        before:-z-0
        before:h-full before:w-full before:bg-[url('/childhood-cancer/images/landing-hero.jpg')] before:bg-cover
        before:bg-left sm:before:bg-center"
>
    <div
        class="
            relative mx-auto flex max-w-lg flex-col items-center gap-4 px-8
            pb-[30vw] pt-24 text-center lg:max-w-3xl lg:items-start
            lg:text-left xl:ml-24
            xl:pb-48"
    >
        <h1 class="text-white">
            Helping Upper Peninsula families <span class="text-orange"
                >fight</span
            > childhood cancer.
        </h1>
        <p class=" text-white">
            Since our program began, we have seen a rise in the number of
            families living in the Upper Peninsula of Michigan seeking help with
            a child battling cancer.
        </p>
        <p class="mb-2 text-lg font-bold text-white">
            As of December 2022, that number has increased by more <span
                class="text-orange">than twenty-fold!</span
            >
        </p>
        <Button
            href="{import.meta.env.BASE_URL}/donate"
            alt="Visit our donate page to support our cause."
            >Join the fight</Button
        >
    </div>
    <div
        class="
            -rotate-9 pointer-events-none absolute
            -left-8 bottom-24 z-10 -mt-[15rem] w-full
            translate-y-32 scale-[3] overflow-x-hidden sm:scale-[2] xl:bottom-auto xl:min-w-[1600px] xl:translate-y-0 xl:scale-110
            2xl:-translate-y-1.5"
    >
        <img
            src="{import.meta.env.BASE_URL}/graphics/swooshes/Asset 2.svg"
            alt=""
            class="select-none"
        />
    </div>
</section>
