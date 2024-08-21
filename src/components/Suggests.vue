
<template>
  <!-- <v-container> -->
  <div>
    <v-col cols="12">
      <v-row class="pb-12 px-6">
        <v-col cols="11" sm="12" md="12" class="text-center mt-12">
          <span style="color: #fff; font-weight: 600" class="fontbig">{{
            $t("justInCaseYouForgotSomething")
          }}</span>
        </v-col>

        <v-col cols="12" md="4" sm="6" class="px-0">
          <v-card
            elevation="0"
            style="
              border-radius: 0px;
              border: 0;
              cursor: pointer;
              background-color: #2ab3a3;
              padding: 32px;
              height: 180px;
            "
            class="mx-2"
            @click="onClickCourse()"
          >
            <v-row>
              <v-col cols="12"
                ><v-img
                  src="@/assets/icons/Union.png"
                  width="38px"
                  height="30px"
                ></v-img>
              </v-col>

              <v-col cols="12" style="margin-top: 20px">
                <h2
                  class="mb-0"
                  style="
                    color: white;
                    font-weight: 600;
                    font-size: 22px;
                    line-height: 36px;
                  "
                  @click="goTo('/course/master/all')"
                >
                  {{ $t("exploreCourse") }}
                  <v-icon style="float: right; margin-top: 4px; color: white"
                    >mdi-arrow-right</v-icon
                  >
                </h2>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" sm="6" class="px-0">
          <v-card
            elevation="0"
            style="
              border-radius: 0px;
              border: 0;
              cursor: pointer;
              background-color: #ffffff;
              padding: 32px;
              height: 180px;
            "
            class="mx-2"
            @click="onClickRegister"
          >
            <v-row>
              <v-col cols="12"
                ><v-img
                  src="@/assets/icons/bullhorn.png"
                  width="36px"
                  height="30px"
                ></v-img>
              </v-col>

              <v-col cols="12" style="margin-top: 20px">
                <h2
                  style="
                    color: #2ab3a3;
                    font-weight: 600;
                    font-size: 22px;
                    line-height: 36px;
                  "
                >
                  {{ $t("registerNotice") }}
                  <v-icon style="float: right; margin-top: 4px; color: #2ab3a3"
                    >mdi-arrow-right</v-icon
                  >
                </h2>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" sm="12" class="px-0">
          <v-card
            elevation="0"
            style="
              border-radius: 0px;
              border: 0;
              cursor: pointer;
              background-color: #24a0e4;
              padding: 32px;
              height: 180px;
            "
            class="mx-2"
            @click="onClickContact"
          >
            <v-row>
              <v-col cols="12"
                ><v-img
                  src="@/assets/icons/help-desk.png"
                  width="30px"
                  height="30px"
                ></v-img>
              </v-col>

              <v-col cols="12" style="margin-top: 20px">
                <h2
                  style="
                    color: white;
                    font-weight: 600;
                    font-size: 22px;
                    line-height: 36px;
                  "
                >
                  {{ $t("contactUs") }}
                  <v-icon style="float: right; margin-top: 4px; color: white"
                    >mdi-arrow-right</v-icon
                  >
                </h2>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </div>
  <!-- </v-container> -->
</template>
<script>
// import Footers from "@/components/Footers.vue";
// import Headers from "@/components/Headers.vue";
// import BigButton from "../BigButton.vue";
// import Tabs from "../Tabs.vue";
export default {
  components: {
    // Footers,
    // Headers,
    // BigButton,
    // Tabs
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    goTo(val) {
      this.$router.push(val);
    },
    onClickCourse() {
      this.$router.push(`/course/master/all`);
    },
    onClickRegister() {
      this.$router.push(`/apply/master`);
    },
    onClickContact() {
      this.$router.push(`/contactus`);
    },
  },
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