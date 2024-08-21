<template>
  <v-row
    class="pb-12 pt-0 mx-10"
    style="background-color: white"
    justify="center"
  >
    <v-col cols="11" sm="12" md="12" class="text-center mt-0 mb-12">
      <!-- <span style="color: #0d0e10; font-weight: 600" class="fontbig"
        >สำรวจหลักสูตรที่เปิดรับ</span
      > -->
    </v-col>

    <v-col cols="12" md="6" sm="6" class="mb-10">
      <v-card
        style="
          border-radius: 0px;
          cursor: pointer;
          background-color: #1c7bbc;
          padding: 32px;
        "
        class="mx-2"
      >
        <v-img
          src="@/assets/polygon/23.png"
          style="position: absolute; transform: rotate(180deg)"
        ></v-img>
        <v-row>
          <v-col cols="12"
            ><v-img
              src="@/assets/icons/apply-certification-star.png"
              width="48px"
              height="48px"
            ></v-img>
          </v-col>

          <v-col cols="12">
            <span
              style="
                color: white;
                font-weight: 600;
                font-size: 22px;
                line-height: 36px;
              "
              >{{ $t("masterProgram") }}</span
            ><v-icon style="float: right; margin-top: 4px; color: white"
              >mdi-arrow-right</v-icon
            >
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <v-col cols="12" md="6" sm="6" class="mb-10">
      <v-card
        style="
          border-radius: 0px;
          cursor: pointer;
          background-color: #2ab3a3;
          padding: 32px;
        "
        class="mx-2"
      >
        <v-img
          src="@/assets/polygon/23.png"
          style="position: absolute; margin-top: -60px; right: 20px"
        ></v-img>
        <v-row>
          <v-col cols="12"
            ><v-img
              src="@/assets/icons/apply-certification-badge.png"
              width="48px"
              height="48px"
            ></v-img>
          </v-col>

          <v-col cols="12">
            <span
              style="
                color: white;
                font-weight: 600;
                font-size: 22px;
                line-height: 36px;
              "
              >{{ $t("doctoralProgram") }}</span
            ><v-icon style="float: right; margin-top: 4px; color: white"
              >mdi-arrow-right</v-icon
            >
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
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