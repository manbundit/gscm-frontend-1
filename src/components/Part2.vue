<template>
  <v-form class="test-form-width">
    <!-- <v-col cols="12"> -->
    <v-row class="!tw-ml-4 !tw-mt-6" justify="center" no-gutters>
      <v-col cols="12" sm="8" class="pt-6" style="display: inherit">
        <span
          class="fonthead"
          style="
            font-family: 'IBM Plex Sans Thai';
            font-style: normal;
            font-weight: 700;
            line-height: 42px;
            color: #2ab3a3;
          "
        >
          {{ $t("weWillOpenYour") }}
          <span style="color: #000">{{ $t("viewAbout") }}</span>
          {{ $t("communicationEducation") }}
          <br />
          <span style="color: #000">{{ $t("thatCombines") }}</span>
          {{ $t("innovation") }}
          <span style="color: #000">{{ $t("and") }}</span>
          {{ $t("digitalTechnology") }}
        </span>
      </v-col>
      <v-col cols="12" sm="3" class="tw-flex sm:tw-justify-end">
        <v-btn
          class=""
          color="#2AB3A3"
          dark
          style="
            border-radius: 0px;
            float: right;
            margin-top: 40px;
            box-shadow: none;
            cursor: pointer;
            height: 48px;
            font-weight: 500;
          "
          >{{ $t("aboutTheFaculty") }}</v-btn
        >
      </v-col>
    </v-row>
    <!-- </v-col> -->
    <v-row
      class="!-tw-mt-24 md:!-tw-mt-12 !tw-mb-24 md:!tw-mb-16 lg:!tw-mb-16"
      no-gutters
    >
      <v-img
        src="@/assets/polygon/Network01.png"
        style="position: absolute; right: 0px"
        class="!tw-w-2/3 sm:!tw-w-auto"
      >
      </v-img>
    </v-row>
    <v-row class="backgroundcard pl-0 pt-4" justify="center" no-gutters>
      <v-col cols="11" class="my-12">
        <v-img
          src="@/assets/icons/Course.png"
          height="64px"
          width="64px"
          class="tw-mb-4"
        ></v-img>
        <h2
          class="tw-text-[36px] sm:tw-text-[42px] mb-0"
          style="
            font-family: 'IBM Plex Sans Thai';
            font-style: normal;
            font-weight: 600;
            color: #2ab3a3;
          "
        >
          {{ $t("interestingCourseToRegister") }}
        </h2>
      </v-col>
      <v-col cols="11">
        <v-row no-gutters>
          <v-col
            v-for="course in [
              { title: 'masterDegree', id: course_level.master },
              { title: 'doctoralDegree', id: course_level.phd },
            ]"
            :key="course.id"
            cols="12"
            sm="6"
            md="6"
            class="pl-0 pr-0 pb-0"
          >
            <div
              class="pa-6"
              :style="
                selectedTab == course.id
                  ? ' background-color:white; cursor: pointer; border-top:4px solid rgba(13, 185, 99, 0.76);margin:-4px 0'
                  : 'background: linear-gradient(90deg, #abded7 -6.89%, #2ab3a3 123.33%); cursor: pointer;'
              "
              @click="selectedTab = course.id"
            >
              <span
                style="font-style: normal; font-weight: 700"
                class="fontcard"
                >{{ $t(course.title) }}</span
              >
              <br />
              <span style="font-weight: 400; font-size: 16px"
                >{{ courses.filter((c) => c.levelId == course.id).length }}
                {{ $t("branchOpened") }}</span
              >
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-12" no-gutters>
      <CourseCards @setcourses="setcourses" :selected="selectedTab">
        <v-col cols="12" style="margin-top: 15px">
          <v-img
            src="@/assets/polygon/Network03.png"
            style="position: absolute; margin-top: -50px"
          ></v-img>
          <v-btn
            class="mr-4"
            style="
              border-radius: 0px;
              float: right;
              background: #ddf2f0;
              color: #2ab3a3;
              box-shadow: none;
            "
            router-link
            to="/course/master/all"
            >{{ $t("allCourse") }}</v-btn
          >
        </v-col>
      </CourseCards>
    </v-row>
  </v-form>
</template>
<script>
import CourseCards, { course_level } from "./CourseCards.vue";
export default {
  components: { CourseCards },
  data() {
    return {
      course_level,
      courses: [],
      selectedTab: course_level.master,
      user: "",
    };
  },
  methods: {
    setcourses(courses) {
      this.courses = courses;
    },
  },
};
</script>
<style scoped>
.backgroundcard {
  background: linear-gradient(
    180deg,
    rgba(221, 242, 240, 0) 0%,
    #abded7 105.88%
  );
}
</style>
<style lang="scss">
.fonthead {
  @media only screen and (min-width: 0px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 414px) {
    font-size: 28px;
  }
}
.fontcard {
  @media only screen and (min-width: 0px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 414px) {
    font-size: 28px;
  }
}
.imagecard {
  @media only screen and (min-width: 0px) {
    width: 272px;
    // height: 160px;
  }
  @media only screen and (min-width: 414px) {
    width: 292px;
    // height: 200px;
  }
  @media only screen and (min-width: 960px) {
    width: 544px;
    // height: 300px;
  }
}
.fontcardtitle {
  @media only screen and (min-width: 0px) {
    font-size: 22px;
  }
  @media only screen and (min-width: 414px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 960px) {
    font-size: 28px;
  }
}
</style>

