<template>
  <div class="-mt-top">
    <div class="tw-min-h-[412px] tw-relative" v-if="teacherDetail">
      <img :src="teacherDetail.images_url_profile_big" class="tw-absolute tw-h-full tw-w-full tw-object-cover"/>
      <div class="tw-backdrop-blur-2xl tw-absolute tw-h-full tw-w-full tw-object-cover tw-bg-backdrop/50" style="background: rgba(28, 123, 188, 0.65);" />
      <div class="content-container md:tw-max-w-[720px] xl:tw-max-w-[720px] 2xl:tw-max-w-[1280px] tw-mx-auto">
        <div class="content
          tw-pt-[106px] md:tw-pt-[130px] tw-pb-[120px]
          tw-z-index-1 tw-relative
          tw-px-[16px] md:tw-px-[60px]
          sm:tw-max-w-[100%]
        ">
          <div class="content-inner tw-relative">
            <div class="tw-flex tw-items-center tw-mb-[24px]">
              <router-link to="/teachers">
                <v-icon color="white" style="font-size: 30px;display: inline" class="mr-3">
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
                  ">
                  {{ $t("personnel") }}
                </div>
              </router-link>
            </div>
            <h1 style="color: white; font-weight: 600" class="tw-text-[24px] sm:tw-text-[36px] md:tw-text-[42px] tw-mb-[8px]">
              {{ $store.state.lang == 'th' ?teacherDetail.name_th :teacherDetail.name_en ?teacherDetail.name_en :teacherDetail.name_th }}
            </h1>
            <div style="color: white;" class="tw-text-[16px] tw-mb-[24px]">
              {{ $store.state.lang == 'th' ?teacherDetail.position_th :teacherDetail.position_en ?teacherDetail.position_en :teacherDetail.position_th }}
            </div>
            <div class="tw-flex tw-gap-[6px] sm:tw-gap-[4px] tw-flex-col sm:tw-flex-row">
              <div
                cols="6"
                class="totextcenter tw-flex tw-gap-[6px] tw-items-center"
              >
                <v-icon color="white">mdi-phone-outline</v-icon>
                <span style="font-weight: 400; color: white; white-space: nowrap;">{{ $t("tel") }} : {{teacherDetail.tel}}</span>
              </div>
              <div class="dot tw-w-[20px] tw-items-center tw-justify-center tw-hidden sm:tw-flex">
                <div class="tw-w-[4px] tw-h-[4px] tw-rounded-full tw-bg-white/30" />
              </div>
              <div class="totextcenter tw-flex tw-gap-[6px] tw-items-center">
                <v-icon color="white">mdi-email-outline</v-icon>
                <span style="font-size: 14px; color: white">{{ $t("email") }} : {{teacherDetail.email}}</span>
              </div>
            </div>
            <div class="tw-flex tw-gap-[6px] sm:tw-gap-[4px] tw-flex-col sm:tw-flex-row">
              <div class="totextcenter tw-flex tw-gap-[6px] tw-items-center" v-if="teacherDetail.id == 27">
                <v-icon color="white">mdi-information-outline</v-icon>
                <span style="font-size: 14px; color: white">Website : <a target="_blank" href="https://gscm.nida.ac.th/chutisant/index.html" style="color: #ffffff;">https://gscm.nida.ac.th/chutisant/index.html</a></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- <div class="tw-px-[16px] md:tw-px-[60px] tw-mt-[-86px] sm:tw-mt-[-64px] tw-relative tw-mx-auto md:tw-max-w-[720px] xl:tw-max-w-[720px] 2xl:tw-max-w-[1280px] tw-text-center">
      <img :src="teacherDetail.images_url_profile_big" class="tw-mx-auto" />
    </div> -->
  </div>
</template>
<script>
  export default {
    props: {
      teacherDetail: {
          type: Object
      },
    },
    computed: {
      currentUrl() {
        return window.location.href
      }
    }
}
</script>