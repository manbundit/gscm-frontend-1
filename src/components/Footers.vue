<template>
  <v-row
    align="start"
    justify="start"
    max-width="100vw"
    class="pt-12 pa-6"
    style="background-color: #1c7bbc"
    no-gutters
  >
    <v-col cols="12" sm="12" md="4" class="tw-mb-2 sm:tw-mb-6">
      <v-img
        src="@/assets/icons/wordmark-white.png"
        width="114px"
        height="40px"
      ></v-img>
      <br />
      <span
        style="
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          color: white;
          margin-top: 20px;
        "
        >Graduate School of Communication Arts
        <br />
        and Management Innovation</span
      >
      <v-row class="my-4">
        <v-col cols="1" v-if="items.facebook">
          <v-icon @click="goTo(items.facebook)" class="body !tw-mt-0" dark
            >mdi-facebook</v-icon
          >
        </v-col>
        <v-col cols="1" v-if="items.twitter" style="margin-left: 20px">
          <v-icon @click="goTo(items.twitter)" class="body !tw-mt-0" dark
            >mdi-twitter</v-icon
          >
        </v-col>
        <v-col cols="1" v-if="items.instagram" style="margin-left: 20px"
          ><v-icon @click="goTo(items.instagram)" class="body !tw-mt-0" dark
            >mdi-instagram</v-icon
          ></v-col
        >
        <v-col cols="1" v-if="items.youtube" style="margin-left: 20px"
          ><v-icon @click="goTo(items.youtube)" class="body !tw-mt-0" dark
            >mdi-youtube</v-icon
          ></v-col
        >
        <v-col cols="1" v-if="items.linkedin" style="margin-left: 20px"
          ><v-icon @click="goTo(items.linkedin)" class="body !tw-mt-0" dark
            >mdi-linkedin</v-icon
          ></v-col
        >
        <v-col cols="1" style="margin-left: 20px">
          <a
            :href="items.tiktok"
            target="_blank"
            class="tw-p-[12px] mt-n15"
            v-if="items.tiktok"
            ><img
              src="/contact/tiktok.ico"
              class="tw-max-w-[24px] tw-max-h-[24px] tw-min-w-[24px]"
          /></a>
          <!-- <v-icon @click="goTo(items.tiktok)" class="body !tw-mt-0" dark
            >mdi-youtube-play</v-icon
          > -->
        </v-col>
        <v-col cols="1" style="margin-left: 20px">
          <a
            :href="items.line"
            target="_blank"
            class="tw-p-[12px] mt-n15"
            v-if="items.line"
            ><img
              src="/contact/lineWhite.svg"
              class="tw-max-w-[24px] tw-max-h-[24px] tw-min-w-[24px]"
          /></a>
          <!-- <v-icon @click="goTo(items.line)" class="body !tw-mt-0" dark
            >mdi-line</v-icon
          > -->
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="4" md="2" class="sm-mb-40">
      <h1 class="header">{{ $t("registerAndCourse") }}</h1>
      <router-link to="/apply/master"
        ><span class="body">{{ $t("register") }}</span></router-link
      >
      <!-- <router-link to="/news/admission-result"
        ><span class="body">{{ $t("registerResult") }}</span></router-link
      > -->
      <router-link to="/course/master/all"
        ><span class="body">{{ $t("masterProgram") }}</span></router-link
      >
      <router-link to="/course/doctoral/all"
        ><span class="body">{{ $t("doctoralProgram") }}</span></router-link
      >
      <router-link to="/scholarship"
        ><span class="body">{{ $t("scholarship") }}</span></router-link
      >
    </v-col>
    <v-col cols="12" sm="4" md="2" class="sm-mb-40">
      <h1 class="header">{{ $t("currentStudent") }}</h1>
      <router-link to="/calendar/master"
        ><span class="body">{{ $t("studyCalendar") }}</span></router-link
      >
      <router-link to="/student-scholarship"
        ><span class="body">{{ $t("scholarship") }}</span></router-link
      >
      <router-link to="/student-download"
        ><span class="body">{{ $t("documentDownload") }}</span></router-link
      >
      <router-link to="/exam"
        ><span class="body">{{
          $t("masterDegreeExamination")
        }}</span></router-link
      >
      <router-link to="/qualification"
        ><span class="body">{{
          $t("doctoralQualificationExamination")
        }}</span></router-link
      >
      <router-link to="/studentwork"
        ><span class="body">{{ $t("studentContribution") }}</span></router-link
      >
    </v-col>
    <v-col cols="12" sm="4" md="2" class="sm-mb-40">
      <h1 class="header">{{ $t("news") }}</h1>
      <router-link to="/news/faculty"
        ><span class="body">{{ $t("facultyNewsAndEvent") }}</span></router-link
      >
      <router-link to="/news/general"
        ><span class="body">{{ $t("generalNotice") }}</span></router-link
      >
      <router-link to="/news/admission-result"
        ><span class="body">{{ $t("registerResult") }}</span></router-link
      >
      <router-link to="/news/interesting"
        ><span class="body">{{ $t("goodToKnow") }}</span></router-link
      >
    </v-col>
    <v-col cols="12" sm="4" md="2" class="sm-margin-40">
      <h1 class="header">{{ $t("aboutTheFaculty") }}</h1>
      <router-link to="/teachers"
        ><span class="body">{{ $t("teachers") }}</span></router-link
      >
      <router-link to="/staff"
        ><span class="body">{{ $t("staff") }}</span></router-link
      >
      <!-- <router-link to="/alumni"
        ><span class="body">{{ $t("alumnus") }}</span></router-link
      > -->
      <router-link to="/partner"
        ><span class="body">{{ $t("cooperationNetwork") }}</span></router-link
      >
      <a
        class="!tw-flex tw-items-center body"
        href="https://cic.gscm.nida.ac.th/th/"
        target="_blank"
      >
        <div class="tw-flex-auto">
          <span class="">{{ $t("cic") }}</span>
        </div>
        <!-- <div class="tw-flex-1">
          <v-icon color="white">mdi-arrow-top-right</v-icon>
        </div> -->
      </a>
      <a
        class="!tw-flex tw-items-center body"
        href="https://nida.ac.th/en/"
        target="_blank"
      >
        <div class="tw-flex-auto">
          <span class="">{{ $t("nida") }}</span>
        </div>
      </a>
    </v-col>
    <v-row class="tw-w-full" no-gutters style="margin-top: 60px">
      <v-col cols="12" sm="6" md="6">
        <div class="body tw-w-fit tw-relative">
          <select
            id="lang"
            class="tw-bg-red-900 tw-w-full tw-absolute tw-left-0 tw-right-0 tw-h-full tw-opacity-0 tw-cursor-pointer"
            @change="setLang"
            v-model="$store.state.lang"
          >
            <option value="th">ภาษาไทย</option>
            <option value="en">English</option>
          </select>
          <span class="tw-pointer-events-none">
            <v-icon class="mr-1 !tw-text-inherit"> mdi-web </v-icon>
            {{
              $store.state.lang == "th"
                ? "ภาษาไทย"
                : $store.state.lang == "en"
                ? "English"
                : ""
            }}
          </span>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <span class="body no-hover tw-text-center sm:tw-text-right"
          >© 2022 GSCM. All Rights Reserved</span
        >
      </v-col>
    </v-row>
  </v-row>
</template>
<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
import { Icon } from "@iconify/vue2";

export default {
  name: "my-cool-component",

  components: {
    SvgIcon,
    Icon,
  },

  data() {
    return {
      path: mdiAccount,
      path: mdiTwitter,

      items: [],
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/c_configs/2`
      );
      this.items = response.data.data;
    },
    goTo(val) {
      window.open(val, "_blank");
    },
    setLang(e) {
      let value = e.target.value;
      this.$store.commit("setLang", value);
      localStorage.setItem("Lang", value);
      this.$i18n.locale = value;
    },
  },
};
</script>
<style>
.header {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #7ecbff;
  display: block;
  margin-bottom: 10px;
  width: 80%;
  border-bottom: none;
  padding: 0px 10px 10px 0px;
}
.body {
  font-family: "IBM Plex Sans Thai";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff !important;
  display: block;
  margin-top: 16px;
}
.body:not(.no-hover):hover {
  cursor: pointer;
  color: #86d7f9 !important;
}
</style>