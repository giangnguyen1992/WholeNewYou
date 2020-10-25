<template>
    <BaseSection v-if="bonus" class="bg-sec2-base">
        <div class="mx-auto">
            <BaseSectionHeadline class="text-center text-sec-base"
                >{{ bonus.headline }}
            </BaseSectionHeadline>
            <ul class="space-y-8 mt-8">
                <li
                    v-for="(module, index) in bonus.modules"
                    :key="index"
                    class="bg-white flex sm:flex-col w-full items-center justify-start rounded-lg lg:py-8 md:py-8 sm:py-4 px-4 my-4 shadow-lg"
                >
                    <img
                        v-if="index % 2 == 0"
                        class="w-48 sm:mb-4"
                        :src="iconPath(index)"
                    />
                    <img
                        v-if="index % 2 != 0"
                        class="lg:hidden md:hidden w-48 sm:mb-4"
                        :src="iconPath(index)"
                    />
                    <div class="sm:text-center">
                        <h3
                            class="font-sans text-sec-base font-semibold text-2xl mb-2"
                        >
                            {{ module.headline }}
                        </h3>
                        <p class="text-sec-base">
                            {{ module.text }}
                        </p>
                    </div>
                    <img
                        v-if="index % 2 != 0"
                        class="w-48 sm:hidden"
                        :src="iconPath(index)"
                    />
                </li>
            </ul>
        </div>
    </BaseSection>
</template>

<script>
export default {
    props: {
        bonus: {
            type: Object,
            required: true
        }
    },
    methods: {
        iconPath(index) {
            return require(`~/assets/images/icons/bonus${index + 1}.svg`);
        }
    }
};
</script>
