<template>
  <v-row no-gutters style="padding-bottom: 96px">
    <v-col cols="12" class="!tw-px-6"
      ><v-img src="@/assets/icons/Image.png" width="64px" height="64px"></v-img>
      <v-img
        src="@/assets/polygon/Network05.png"
        style="position: absolute; order: 1; flex-grow: 0; margin-top: -100px"
        class="!tw-max-w-[50%] tw-w-[336px] tw-right-0"
      ></v-img>
    </v-col>
    <v-col cols="12" class="!tw-px-6 tw-relative">
      <h2
        style="
          font-size: 1px;
          color: #ffffff00;
          position: absolute;
          pointer-events: none;
        "
      >
        ภาพรวมกิจกรรมที่เกิดขึ้นในคณะ
      </h2>
      <span
        class="fontbig !tw-text-[42px]"
        style="font-weight: 600; color: #2ab3a3; line-height: 60px"
        >{{ $t("onlyActivitiesPage") }}<span style="color: black"> {{ $t("onlyActivitiesPage2") }}</span>
      </span>
    </v-col>
    <v-col cols="12" class="my-6 tw-relative">
      <div class="tw-w-full tw-overflow-hidden">
        <div class="tw-w-[4016px] tw-block sm:tw-hidden">
          <img
            src="@/assets/looping_sm.png"
            class="tw-w-[2000px] tw-inline-block tw-pointer-events-none first"
          />
          <img
            src="@/assets/looping_sm.png"
            class="tw-w-[2000px] tw-inline-block tw-pointer-events-none tw-ml-4"
          />
        </div>

        <div class="tw-w-[5216px] sm:tw-block tw-hidden">
          <img
            src="@/assets/looping_md.png"
            class="tw-w-[2600px] tw-inline-block tw-pointer-events-none first"
          />
          <img
            src="@/assets/looping_md.png"
            class="tw-w-[2600px] tw-inline-block tw-pointer-events-none tw-ml-4"
          />
        </div>
      </div>
      <!-- <vue-picture-swipe :items="items" style="margin: auto">
      </vue-picture-swipe> -->
      <!-- <v-carousel v-model="model">
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <span class="text-h2">
              {{ i + 1 }}
            </span>
            <span> ยินดีต้อนรับสู่ </span>
            <br />
            <span
              >คณะนิเทศศาสตร์ และนวัตกรรมการจัดการ"; Text
              Desc="สถาบันบัณฑิตพัฒนบริหารศาสตร์ (NIDA)</span
            >
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel> -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>
<style lang="scss">
.fontbig {
  @media only screen and (min-width: 0px) {
    font-size: 36px;
  }
  @media only screen and (min-width: 414px) {
    font-size: 42px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 42px;
  }
}
</style>