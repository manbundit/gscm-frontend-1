<template>
  <section class="tw-mb-[56px]">
    <div class="tw-mt-[40px] tw-flex tw-justify-between tw-items-center">
      <h3 class="tw-text-[24px] tw-font-semibold">{{ title }}</h3>
      <!-- <v-btn
        class="mt-6"
        style="background: #ddf2f0; border-radius: 0px; box-shadow: none"
        router-link
        to=""
        ><span style="font-weight: 500; font-size: 16px; color: #2ab3a3"
          >รูปภาพทั้งหมด</span
        ></v-btn
      > -->
      <v-btn
        outlined
        class="!tw-h-[32px] !tw-px-[8px]"
        style="border-radius: 0px; font-weight: 500; font-size: 14px"
        color="#2ab3a3"
        large
        @click="openGallery(1)"
        >{{ $t("allPhotos") }}</v-btn
      >
    </div>
    <div class="tw-w-full tw-mt-[24px] tw-max-w-[1200px] tw-mx-auto tw-relative">
      <div class="sm:tw-flex tw-gap-[24px] tw-hidden">
        <div class="tw-aspect-[1/1] tw-flex-1 tw-relative tw-flex-1">
          <img :src="images[0].src" @click="openGallery(1)" class="tw-absolute tw-cursor-pointer tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"/>
        </div>
        <div class="tw-aspect-[1/1] tw-flex-1 tw-flex tw-flex-col tw-gap-[24px]">
          <div class="tw-aspect-[544/230] tw-relative tw-flex-1">
            <img :src="images[1].src" @click="openGallery(2)" class="tw-absolute tw-cursor-pointer tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"/>
          </div>
          <div class="tw-aspect-[544/230]">
            <div class="tw-flex tw-gap-[24px] tw-flex-1">
              <div class="tw-aspect-[1/1] tw-relative tw-flex-1">
                <img :src="images[2].src" @click="openGallery(3)" class="tw-absolute tw-cursor-pointer tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"/>
              </div>
              <div class="tw-aspect-[1/1] tw-relative tw-flex-1">
                <img :src="images[3].src" @click="openGallery(4)" class="tw-absolute tw-cursor-pointer tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tw-mx-[-16px]">
        <div class="tw-flex tw-gap-[16px] sm:tw-hidden tw-whitespace-nowrap tw-overflow-x-auto">
          <div :class="{'tw-ml-[16px]': index === 0, 'tw-mr-[16]': index === images.length}" class="tw-aspect-[1/1] tw-shrink-0 tw-basis-[calc(100%-48px)] tw-relative tw-flex-1 tw-w-[100%]" v-for="_, index in images">
            <img :src="images[index].src" class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover" @click="openGallery(index + 1)"/>
          </div>
          <div class="tw-w-[16px]"/>
        </div>
      </div>

    </div>
    <fs-lightbox
      :sources="sources"
      :slide="galleryIndex"
      :toggler="galleryOpen"
    />
  </section>
</template>

<script>
import FsLightbox from "fslightbox-vue";

export default {
  components: { FsLightbox },
  computed: {
    sources() {
      return this.images.map(i => i.src)
    }
  },
  props: {
    title: {
      type: String
    },
    images: {
      type: Array
    }
  },
  data() {
    return {
      galleryIndex: 0,
      galleryOpen: false
    }
  },
  methods: {
    openGallery(index) {
      this.galleryOpen = !this.galleryOpen
      this.galleryIndex = index
    },
  }
}
</script>