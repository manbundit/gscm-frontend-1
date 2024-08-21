<template>
   <div class="pa-0 wrap-cardbig">
      <div class="cardbig-new">
        <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap">
          <v-col
            cols="auto"
            class="text-md-righ pa-0"
            style="place-self: center"
          >
            <v-icon
              class="tw-mr-[30px] pa-0 tw-mb-[16px] sm:tw-mb-0"
              style="font-weight: 600; font-size: 32px; color: #0d0e10"
              >mdi-file-document-outline</v-icon
            >
          </v-col>
          <div class="tw-shrink">
            <span
              class="mr-2 tw-text-md sm:tw-text-lg"
              style="font-weight: 600; color: #0d0e10"
            >
              {{ title }}</span
            >
            <div class="tw-mt-[6px] tw-text-sm" v-if="authorName">
                <!-- <img
                  src="@/assets/icons/user-avatar.png"
                  width="17.5px"
                  height="17.5px"
                />
                ผู้จัดทำ : {{ i.name_th }} -->
                <span><v-icon color="#2AB3A3">mdi-account-circle-outline</v-icon>
                  {{ $t("author") }} : {{ authorName }}
              </span>
            </div>
          </div>

          <div
            class="tw-shrink-0 tw-mt-[16px] sm:tw-mt-[0] tw-flex tw-flex-nowrap text-right ml-auto tw-w-full sm:tw-min-w-[120px] md:tw-min-w-[230px] sm:tw-max-w-[120px] md:tw-max-w-[230px]"
            style="place-self: center"
          >
            <v-btn
              color="#2AB3A3"
              text
              class="!tw-min-w-[100%] sm:tw-min-w-[auto] md:tw-mr-2 tw-flex tw-font-medium sm:px-2"
              @click="gotodownload(downloadUrl)"
              ><img class="tw-mr-2 sm:tw-mr-0 md:tw-mr-2" src="/icons/document-view.svg"/> <span class="md:tw-block tw-block sm:tw-hidden">{{ $t("viewDocument") }}</span></v-btn
            >
            <!-- <v-btn color="#2AB3A3" class="!tw-min-w-[50%] sm:tw-min-w-[auto] tw-flex tw-font-medium sm:px-2" text @click="gotodownload(i.download_url)"
              ><img src="/img/download.svg" class="tw-mr-2 sm:tw-mr-0 md:tw-mr-2"/> <span class="md:tw-block tw-block sm:tw-hidden">{{ $t("download") }}</span></v-btn
            > -->
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    authorName: {
      type: String,
      default: ''
    },
    downloadUrl: {
      type: String,
      default: ''
    },
  },
  methods: {
    gotodownload(val) {
      window.open(val);
    },
    gotodetail(id) {
      this.$router.push(`/newsdetail?id=${id}&type=${this.newstype}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap-cardbig {
  border: 1px solid #e2e2e2;
  &:not(:last-child) {
    border-bottom: none;
  }
}
.cardbig-new {
  @media only screen and (min-width: 0px) {
    padding: 24px;
    gap: 24px;
    background: #ffffff;
    height: auto;
  }
  @media only screen and (min-width: 414px) {
    padding: 24px;
    gap: 24px;
    // height: 84px;
    background: #ffffff;
  }
  @media only screen and (min-width: 1440px) {
    padding: 24px;
    gap: 24px;
    // height: 84px;
    background: #ffffff;
  }
}
</style>