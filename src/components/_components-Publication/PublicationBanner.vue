<template>
  <div>
    <div class="tw-min-h-[412px] tw-relative">
      <img
        v-if="img"
        :src="img"
        class="tw-absolute tw-h-full tw-w-full tw-object-cover"
      />
      <!-- <img v-if="img == ''" :src="require('@/assets/icons/Poster2.png')" class="tw-absolute tw-h-full tw-w-full tw-object-cover"/> -->
      <div
        class="tw-backdrop-blur-2xl tw-absolute tw-h-full tw-w-full tw-object-cover tw-bg-backdrop/50"
      />
      <div class="content-container tw-max-w-[1680px] tw-mx-auto">
        <div
          class="content tw-pt-[106px] md:tw-pt-[130px] tw-pb-[60px] tw-z-index-1 tw-relative tw-px-[16px] md:tw-px-[60px] md:tw-max-w-[calc(100%-250px-120px)] lg:tw-max-w-[calc(100%-360px-120px)] sm:tw-max-w-[100%]"
        >
          <div class="content-inner tw-relative">
            <div class="tw-flex tw-items-center tw-mb-[24px]">
              <router-link :to="backLink">
                <v-icon
                  color="white"
                  style="font-size: 30px; display: inline"
                  class="mr-3"
                >
                  mdi-chevron-left-circle
                </v-icon>
                <div
                  style="
                    font-family: 'IBM Plex Sans Thai';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    color: #ffffff;
                    display: inline;
                  "
                >
                  <!-- {{ $t("communicationArtsAndManagementInnovation") }}  -->
                  {{ backLinkText }}
                </div>
              </router-link>
            </div>
            <h1
              style="color: white; font-weight: 600"
              class="tw-text-[24px] sm:tw-text-[36px] md:tw-text-[42px] tw-mb-[24px]"
            >
              {{ title }}
            </h1>
            <div
              class="tw-flex tw-gap-[6px] sm:tw-gap-[4px] tw-flex-col sm:tw-flex-row"
            >
              <!-- <div
                cols="6"
                class="totextcenter tw-flex tw-gap-[6px] tw-items-center"
              >
                <img
                  src="/icons/user-avatar.svg"
                  max-width="20px"
                  max-height="20px"
                />
                <span
                  style="font-weight: 400; color: white; white-space: nowrap"
                >
                  {{ $t("publishedBy") }}: {{ publishBy }}</span
                >
              </div>
              <div
                class="dot tw-w-[20px] tw-items-center tw-justify-center tw-hidden sm:tw-flex"
              >
                <div
                  class="tw-w-[4px] tw-h-[4px] tw-rounded-full tw-bg-white/30"
                />
              </div> -->
              <div class="totextcenter tw-flex tw-gap-[6px] tw-items-center">
                <img
                  src="/icons/calendar.svg"
                  max-width="20px"
                  max-height="20px"
                />
                <span style="font-size: 14px; color: white">
                  {{ publishDate }}</span
                >
              </div>
            </div>

            <div
              class="share-buttons tw-flex tw-gap-[12px] tw-items-center tw-mt-[24px] md:tw-mt-[36px] tw-mb-[48px] md:tw-mb-[24px]"
            >
              <span class="tw-font-bold tw-text-white">{{ $t("share") }}</span>
              <img
                src="/icons/social-copy-button.svg"
                class="tw-cursor-pointer"
                @click="copyToClipboard"
              />
              <Sharer socialNetwork="facebook" :url="currentUrl">
                <img
                  src="/icons/social-facebook-button.svg"
                  class="tw-cursor-pointer"
                />
              </Sharer>
              <Sharer socialNetwork="facebook-messenger" :url="currentUrl">
                <img
                  src="/icons/social-messenger-button.svg"
                  class="tw-cursor-pointer"
                />
              </Sharer>
              <Sharer socialNetwork="line" :url="currentUrl" :message="title">
                <img
                  src="/icons/social-line-button.svg"
                  class="tw-cursor-pointer"
                />
              </Sharer>
              <Sharer
                socialNetwork="twitter"
                :url="currentUrl"
                :message="title"
              >
                <img
                  src="/icons/social-twitter-button.svg"
                  class="tw-cursor-pointer"
                />
              </Sharer>
            </div>

            <img
              :src="img"
              class="tw-absolute tw-top-0 lg:tw-right-[calc(-360px-60px)] md:tw-right-[calc(-250px-60px)] lg:tw-w-[360px] md:tw-w-[250px] tw-hidden md:tw-block"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="tw-px-[16px] md:tw-hidden tw-mt-[-64px]">
      <ImageWithCover :src="img" ratio="[1/1]" :hasBackdrop="true" />
    </div>
  </div>
</template>
<script>
import ImageWithCover from "../ImageWithCover.vue";
import Sharer from "../Sharer.vue";
export default {
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    publishBy: {
      type: String,
    },
    publishDate: {
      type: String,
    },
    backLinkText: {
      type: String,
    },
    backLink: {
      type: String,
    },
  },
  components: { ImageWithCover, Sharer },
  methods: {
    async copyToClipboard() {
      const textarea = document.createElement("textarea");
      textarea.value = this.currentUrl;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        await navigator.clipboard.writeText(this.currentUrl);
      } catch (error) {
        document.execCommand("copy");
      }
      document.body.removeChild(textarea);
    },
  },
  computed: {
    currentUrl() {
      return window.location.href;
    },
  },
};
</script>