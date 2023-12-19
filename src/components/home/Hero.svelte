<script lang="ts">
import Button from "@components/Button.svelte"
</script>

<section
    class="
        relative mb-16
        w-full
        
        before:absolute before:left-0
        before:top-0 before:-z-0 before:h-full before:w-full
        before:bg-navy
        before:bg-[url('/childhood-cancer/images/landing-hero.jpg')] before:bg-cover before:bg-left before:brightness-65
        before:saturate-75 sm:before:bg-center"
>
    <div
        class="
            relative mx-auto flex max-w-lg flex-col items-center gap-4 px-8
            pb-[30vw] pt-24 text-center lg:max-w-4xl lg:items-start
            lg:text-left xl:ml-24
            xl:pb-48"
    >
        <h1 class="text-white">
            Helping Upper Peninsula families <span class="text-orange"
                >fight</span
            > childhood cancer.
        </h1>
        <p class=" text-white">
            We have seen a rise in the number of families living in the Upper
            Peninsula of Michigan seeking help with a child battling cancer.
        </p>
        <p class="mb-2 text-lg font-bold text-white">
            Since our program began in 2020, that number has increased by more
            than <span class="text-orange">twenty-fold!</span>
        </p>
        <Button
            href="{import.meta.env.BASE_URL}/donate"
            alt="Visit our donate page to support our cause."
            >Join the fight</Button
        >
    </div>
    <div
        class="
            pointer-events-none absolute -left-8
            bottom-24 z-10 -mt-[15rem] w-full translate-y-32
            -rotate-9 scale-[3] overflow-x-hidden sm:scale-[2] xl:bottom-auto xl:min-w-[1600px] xl:translate-y-0 xl:scale-110
            2xl:-translate-y-1.5"
    >
        <img
            src="{import.meta.env.BASE_URL}/graphics/swooshes/Asset 2.svg"
            alt=""
            class="select-none"
        />
    </div>
</section>
