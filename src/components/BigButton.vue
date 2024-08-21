<template>
  <v-card
    style="
      border-radius: 0px;
      background-color: #2ab3a3;
      cursor: pointer;
      box-shadow: none;
    "
    @click="gotolink()"
    class="my-12 tw-p-4 tw-relative tw-w-full tw-overflow-hidden"
  >
    <v-img
      src="@/assets/polygon/Polygon21.png"
      style="position: absolute; z-index: -1; padding: 0"
      class="tw-max-h-full tw-right-1/2 tw-top-0"
    ></v-img>
    <v-row
      align="center"
      justify="center"
      class="pa-6"
      style="z-index: 2"
      no-gutters
    >
      <v-col cols="12" sm="8">
        <h2
          class="tw-text-2xl mb-0"
          style="
            font-weight: 600;
            line-height: 42px;
            color: #ffffff;
            z-index: 2;
          "
        >
        {{ $t("cic") }}
        </h2></v-col
      >
      <v-col
        cols="12"
        sm="4"
        class="tw-text-left sm:tw-text-right tw-mt-8 sm:tw-mt-0"
      >
        <span
          style="
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #ffffff;
          "
          >{{ $t("visitWebsite") }}</span
        ><v-icon color="white">mdi-arrow-top-right</v-icon>
      </v-col>
    </v-row>
    <v-img
      src="@/assets/polygon/Polygon23.png"
      style="position: absolute; z-index: -1"
      class="tw-max-h-full tw-left-3/4 tw-bottom-0"
    ></v-img>
  </v-card>
</template>
<script>
export default {
  methods: {
    gotolink() {
      window.open(`https://cic.gscm.nida.ac.th/th/`, "_blank");
    },
  },
};
</script>
<style lang="scss">
// .greenbutton {
//   @media only screen and (min-width: 0px) {
//     width: 288px;
//     height: auto;
//     background-color: #2ab3a3;
//   }
//   @media only screen and (min-width: 414px) {
//     width: 609px;
//     height: auto;
//     background-color: #2ab3a3;
//   }
//   @media only screen and (min-width: 1240px) {
//     width: 1112px;
//     height: auto;
//     background-color: #2ab3a3;
//   }
// }
</style>