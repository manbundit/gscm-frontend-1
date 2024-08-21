<template>
  <v-card elevation="0" color="transparent" @click="$emit('click')">
    <v-row no-gutters>
      <v-col sm="8" class="!tw-pr-[16px]">
        <v-chip
          v-if="titleChips[item.type]"
          style="font-weight: 500; font-size: 14px"
          :color="titleChips[item.type].color"
          small
          >{{ $t(titleChips[item.type].title) }}</v-chip
        >
        <br />
        <span
          :class="secondary ? '!tw-text-[18px]' : '!tw-text-[22px]'"
          style="font-weight: 600; line-height: 32px"
        >
          {{ $store.state.lang == "th" ? item.title_th : item.title_en }}</span
        >
        <template>
          <br />
          <span
            style="
              font-weight: 400;
              font-size: 16px;
              color: #545454;
              margin-top: 10px;
            "
            >{{
              $store.state.lang == "th"
                ? item.short_desc_th
                : item.short_desc_en
            }}</span
          >
        </template>
        <br />
        <!-- <span style="font-weight: 400" class="tw-mr-4"
          ><v-icon color="#2AB3A3">mdi-account-circle-outline</v-icon>
          {{ $t("publishedBy") }} Admin</span
        > -->
        <br class="tw-inline sm:tw-hidden" />
        <!-- <img
                  src="@/assets/icons/Calendar.png"
                  max-width="20px"
                  max-height="20px"
                /> -->
        <span style="font-size: 14px" class="tw-leading-10">
          <v-icon color="#2AB3A3">mdi-calendar-outline</v-icon>
          {{ $t("publishedOn") }} : {{ convertDate(item.updatedAt) }}</span
        >
      </v-col>
      <v-col cols="4" class="tw-hidden sm:tw-block">
        <!-- :src="i.img_url" -->
        <image-with-cover
          :src="
            item.img_url ? item.img_url : require('@/assets/default_image.jpeg')
          "
        />
      </v-col>
    </v-row>
    <v-divider class="my-6" />
  </v-card>
</template>
<script>
import ImageWithCover from "../ImageWithCover.vue";
import moment from "moment";

const titleChips = {
  0: {
    title: "article",
    color: "#ddf2f0",
  },
  1: {
    title: "Facultynewsandactivities",
    color: "#C5E1A5",
  },
  2: {
    title: "onlyNewsPage4",
    color: "#BBDEFB",
  },
  3: {
    title: "onlyNewsPage6",
    color: "#D1C4E9",
  },
  4: {
    title: "goodToKnow",
    color: "#FFCC80",
  },
  5: {
    title: "alumnus",
    color: "#69ebd3",
  },
};
export default {
  components: { ImageWithCover },
  emit: ["click"],
  props: ["item", "secondary"],
  data() {
    return {
      titleChips,
    };
  },

  methods: {
    convertDate(val) {
      let monthTH = [
        "ม.ค.",
        "ก.พ.",
        "มี.ค.",
        "เม.ย.",
        "พ.ค.",
        "มิ.ย.",
        "ก.ค.",
        "ส.ค.",
        "ก.ย.",
        "ต.ค.",
        "พ.ย.",
        "ธ.ค.",
      ];
      const d = new Date(val);
      // updatedAt

      return moment(val).format("DD " + monthTH[d.getMonth()] + " YYYY");
    },
  },
};
</script>
<style scoped>
.v-card--link:focus:before {
  opacity: 0 !important;
}
</style>