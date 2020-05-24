<template>
    <div class="bg-sec2-light flex align-middle justify-between p-16 ">
        <div>
            <h1 class="text-sec-base flex flex-col mb-8">
                <span class="font-heading text-5xl leading-tight mb-8">{{
                    heroSectionData.headline
                }}</span>
                <span>{{ heroSectionData.intro }}</span>
            </h1>

            <BaseButton button-path="#">{{
                heroSectionData.buttonText
            }}</BaseButton>
        </div>
        <div>
            <img src="~/assets/images/hero-img.svg" alt="" />
        </div>
    </div>
</template>

<script>
import data from '~/data/langdingpage.json';

export default {
    data() {
        return {
            heroSectionData: data.hero ? data.hero : {}
        };
    }
};
</script>
