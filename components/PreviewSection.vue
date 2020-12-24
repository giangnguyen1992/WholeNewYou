<template>
    <BaseSection v-if="preview">
        <div class="flex flex-col">
            <BaseSectionHeadline class="text-center text-sec-base"
                >{{ preview.headline }}
            </BaseSectionHeadline>
            <div class="video-container mt-8">
                <iframe
                    src="https://www.youtube-nocookie.com/embed/JRiSqisUIoQ"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
            <BaseButton v-if="preview.buttonText" class="self-center mt-8">
                {{ preview.buttonText }}
            </BaseButton>
        </div>
    </BaseSection>
</template>

<script>
export default {
    props: {
        preview: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 0;
    height: 0;
    overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
