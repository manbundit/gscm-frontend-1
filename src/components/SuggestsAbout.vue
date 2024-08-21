
<template>
  <!-- <v-container> -->
  <v-col cols="12">
    <v-row class="pb-12 px-6">
      <v-col cols="11" sm="12" md="12" class="text-center mt-12">
        <span style="font-weight: 600; font-size: 36px">{{ $t("justInCaseYouInterested")}}</span>
      </v-col>

      <v-col cols="12" md="4" sm="6" class="px-0">
        <v-card
          elevation="0"
          style="
            border-radius: 0px;
            cursor: pointer;
            background-color: #2ab3a3;
            padding: 32px;
          "
          class="mx-2"
          max-width="354.67px"
          max-height="180px"
        >
          <v-row>
            <v-col cols="12"
              ><v-img
                src="@/assets/icons/Union.png"
                width="38px"
                height="30px"
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
                >สำรวจหลักสูตร</span
              ><v-icon style="float: right; margin-top: 4px; color: white"
                >mdi-arrow-right</v-icon
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" sm="6" class="px-0">
        <v-card
          elevation="0"
          style="
            border-radius: 0px;
            cursor: pointer;
            background-color: #ffffff;
            padding: 32px;
          "
          max-width="354.67px"
          max-height="180px"
          class="mx-2"
        >
          <v-row>
            <v-col cols="12"
              ><v-img
                src="@/assets/icons/bullhorn.png"
                width="36px"
                height="30px"
              ></v-img>
            </v-col>

            <v-col cols="12">
              <span
                style="
                  color: #2ab3a3;
                  font-weight: 600;
                  font-size: 22px;
                  line-height: 36px;
                "
                >ประกาศรับสมัคร</span
              >
              <v-icon style="float: right; margin-top: 4px; color: #2ab3a3"
                >mdi-arrow-right</v-icon
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" sm="12" class="px-0">
        <v-card
          elevation="0"
          style="
            border-radius: 0px;
            cursor: pointer;
            background-color: #24a0e4;
            padding: 32px;
          "
          class="mx-2"
          max-width="354.67px"
          max-height="180px"
        >
          <v-row>
            <v-col cols="12"
              ><v-img
                src="@/assets/icons/help-desk.png"
                width="30px"
                height="30px"
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
                >ติดต่อเรา</span
              ><v-icon style="float: right; margin-top: 4px; color: white"
                >mdi-arrow-right</v-icon
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
  <!-- </v-container> -->
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