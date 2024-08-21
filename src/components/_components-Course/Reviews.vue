<template>
  <div class="tw-mb-[100px]">
    <h3 class="tw-text-[24px] tw-font-semibold">{{ title || 'รีวิว' }}</h3>
    <div class="override-carousel">
      <v-carousel hide-delimiter-background height="auto" class="">
        <template v-slot:prev="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" class="!tw-min-w-[36px] tw-h-[36px] !tw-rounded-full sm:!tw-block !tw-hidden"
            color="#F6F6F6" dark style="
                float: left;
                box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
                width: 36px;
                height: 36px;
              ">
            <v-icon color="#2AB3A3">mdi-arrow-left</v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on"
            class="!tw-mx-[] !tw-min-w-[36px] tw-h-[36px] !tw-rounded-full sm:!tw-block !tw-hidden" color="#F6F6F6" dark
            style="
                float: left;
                box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
                width: 36px;
                height: 36px;
              ">
            <v-icon color="#2AB3A3">mdi-arrow-right</v-icon>
          </v-btn>
        </template>
        <v-carousel-item v-for="i in 4" :key="`comments_${i}`">
          <div>
            <v-card style="background-color: white; border: 1px solid #E2E2E2;"
              class="tw-p-[24px] sm:tw-p-[56px] sm:tw-p-[32px] tw-mb-[40px] tw-border-none !tw-shadow-none !tw-rounded-none tw-mx-auto sm:!tw-max-w-[calc(100%-40px)]">
              <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-[32px] md:tw-gap-[64px]">
                <div class="tw-w-[100%]">
                  <div>
                    <div class="tw-flex tw-gap-[12px] tw-mb-[24px]">
                      <div class="tw-w-[48px] tw-min-w-[48px]">
                        <v-avatar><v-img src="@/assets/icons/Avatar.png" width="48px" height="48px"></v-img></v-avatar>
                      </div>
                      <div class="tw-text-left">
                        <span style="
                                display: block;
                                color: black;
                                font-weight: 500;
                                font-size: 16px;
                                line-height: 24px;
                              ">อนุรักษ์ จันทร์ดำ</span>
                        <span class="tw-mt-[4px]" style="
                                display: block;
                                color: black;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 20px;
                                color: #545454;
                              ">Project Maneger Bank of Krungsri</span>
                      </div>
                    </div>
                    <span class="tw-text-[16px] md:tw-text-[16px]" style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 6;
                            text-overflow: ellipsis;
                            text-align: left;
                            overflow: hidden;
                            color: black;
                            font-weight: 600;
                  ">การสื่อสาร คือกุญแจมหัศจรรย์ที่สามารถไขเข้าไปสู่ทุกความสัมพันธ์ ทุกความรู้
                      ทุกกลุ่มคนได้อย่างไม่น่าเชื่อ</span>
                  </div>
                  <div class="tw-text-weak tw-mt-[24px] tw-text-left">20 {{ $t("march") }} {{ $t("lastYear") }}</div>
                </div>
              </div>
            </v-card>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
    title: {
      type: String
    },
    reviews: {
      type: Array
    }
  },
  }
</script>

<style lang="scss" scoped>
.override-carousel {
  @media(min-width: 600px) {
    margin-left: -20px;
    margin-right: -20px;
  }
  ::v-deep {
    .v-window__next {
      margin: 0 !important;
      margin-right: 6px !important;
    }
    .v-window__prev {
      margin: 0 !important;
      margin-left: 6px !important;
    }
    .v-carousel__controls {
      padding-top: 32px !important;

      .v-carousel__controls__item {
        margin: 0 3px !important;
        border-radius: 50%;
        width: 8px !important;
        height: 8px !important;

        i {
          opacity: 1 !important;
          font-size: 8px !important;
          width: 8px !important;
          height: 8px !important;
          color: rgba(0, 0, 0, 0.08);
        }

        &.v-btn--active {
          i {
            color: #2ab3a3;
          }
        }
      }
    }
  }
}
</style>