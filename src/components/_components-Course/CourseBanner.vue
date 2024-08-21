<template>
  <div>
    <div class="md:tw-min-h-[430px] tw-relative">
      <img :src="img" class="tw-absolute tw-h-full tw-w-full tw-object-cover"/>
      <div class="tw-absolute tw-h-full tw-w-full tw-object-cover" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, #000000 100%);" />
      <div class="content-container tw-max-w-[1680px] tw-mx-auto">
        <div class="content
          tw-pt-[106px] md:tw-pt-[130px] tw-pb-[100px] md:tw-pb-[60px]
          tw-z-index-1 tw-relative
          tw-px-[16px] md:tw-px-[60px]
          md:tw-max-w-[calc(66.66%-120px)] sm:tw-max-w-[100%]
        ">
          <div class="content-inner tw-relative" style="font-size: 16px;" >
            <div class="tw-flex tw-items-center tw-mb-[24px]">
              <router-link :to="backLink">
                <img style="display:inline" src="/icons/back-button.svg" class="tw-mr-[8px]" />
                <div
                  class="tw-text-accent"
                  style="
                    font-family: 'IBM Plex Sans Thai';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    display:inline
                  ">
                  {{ backLinkText }}
                </div>
              </router-link>
            </div>
            <h1 style="color: white; font-weight: 600" class="tw-text-[24px] sm:tw-text-[36px] md:tw-text-[42px]">
                {{ title }}
            </h1>
            <div class="tw-mt-[8px] tw-mb-[24px] tw-text-white">
              {{ description }}
            </div>
            <div class="tw-flex tw-gap-[6px] sm:tw-gap-[24px] tw-flex-col sm:tw-flex-row">
              <div class="totextcenter tw-flex tw-gap-[6px] tw-items-center">
                  <img
                    src="/icons/catalog-active.svg"
                    class="tw-max-w-[20px] tw-max-h-[20px]"
                  />
                  <span style="font-size: 14px; color: white"> {{ updatedDate }}</span>
              </div>
              <div
                cols="6"
                class="totextcenter tw-flex tw-gap-[6px] tw-items-center"
              >
                <img
                  src="/icons/certificate-star-active.svg"
                  class="tw-max-w-[20px] tw-max-h-[20px]"
                />
                <span style="font-weight: 400; color: white; white-space: nowrap;"> หลักสูตร: {{ course }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import ImageWithCover from '../ImageWithCover.vue';

  export default {
    props: {
        img: {
            type: String
        },
        title: {
            type: String
        },
        description: {
            type: String
        },
        course: {
            type: String
        },
        updatedDate: {
            type: String
        },
        backLinkText: {
            type: String
        },
        backLink: {
            type: String
        },
    },
    components: { ImageWithCover }
}
</script>