<template>
  <div v-if="teacherDetail">
    <StaffBanner :teacherDetail="teacherDetail" />

    <div
      align="start"
      class="tw-relative"
      style="background-image: url('@/assets/icons/Pattern03.png')"
    >
      <div
        class="tw-px-[16px] md:tw-px-[60px] tw-mt-[-86px] sm:tw-mt-[-64px] tw-relative tw-mx-auto md:tw-max-w-[720px] xl:tw-max-w-[720px] 2xl:tw-max-w-[1280px] tw-text-center"
      >
        <img :src="teacherDetail.images_url_profile_big" class="tw-mx-auto" />
      </div>
      <div
        class="tw-absolute tw-top-[102px] tw-left-0 tw-h-full tw-p-[48px] tw-hidden md:tw-block"
      >
        <div class="tw-sticky tw-top-[150px] tw-left-[40px]">
          <v-row
            class="py-1"
            v-if="aboutTabs.length"
            :style="
              currentSection === 'staffDetailSection1'
                ? 'color: #2ab3a3; border-left: solid 4px;'
                : 'color: #E2E2E2; border-left: solid 4px;'
            "
          >
            <a
              class="ml-2"
              :style="
                currentSection === 'staffDetailSection1'
                  ? 'font-weight: 500; font-size: 16px; color: #2ab3a3;cursor:pointer'
                  : 'font-weight: 500; font-size: 16px; color: #000;cursor:pointer'
              "
              @click="scrollToSection('staffDetailSection1')"
            >
              {{ $t("aboutTeacher") }}
            </a>
          </v-row>

          <v-row
            class="py-1"
            v-if="performanceTabs.length"
            :style="
              currentSection === 'staffDetailSection2'
                ? 'color: #2ab3a3; border-left: solid 4px;cursor:pointer;'
                : 'color: #E2E2E2; border-left: solid 4px;cursor:pointer;'
            "
          >
            <a
              class="ml-2"
              :style="
                currentSection === 'staffDetailSection2'
                  ? 'font-weight: 500; font-size: 16px; color: #2ab3a3;cursor:pointer'
                  : 'font-weight: 500; font-size: 16px; color: #000;cursor:pointer'
              "
              @click="scrollToSection('staffDetailSection2')"
              >{{ $t("academicAchievements") }}</a
            >
          </v-row>
          <v-row
            class="py-1"
            v-if="teacherDetail && teacherDetail.other_detail_th"
            :style="
              currentSection === 'staffDetailSection3'
                ? 'color: #2ab3a3; border-left: solid 4px;'
                : 'color: #E2E2E2; border-left: solid 4px;'
            "
          >
            <a
              class="ml-2"
              :style="
                currentSection === 'staffDetailSection3'
                  ? 'font-weight: 500; font-size: 16px; color: #2ab3a3;cursor:pointer'
                  : 'font-weight: 500; font-size: 16px; color: #000;cursor:pointer'
              "
              @click="scrollToSection('staffDetailSection3')"
              >ข้อมูลอื่น ๆ</a
            >
          </v-row>
        </div>
      </div>
      <div
        class="content-container tw-px-[16px] md:tw-px-[60px] tw-max-w-[100%] md:tw-max-w-[720px] xl:tw-max-w-[720px] 2xl:tw-max-w-[1280px] tw-mx-auto tw-pb-[64px]"
      >
        <div>
          <div class="content">
            <section
              ref="staffDetailSection1"
              class="staff-detail-section"
              v-if="aboutTabs.length"
            >
              <div
                class="tw-mt-[32px] sm:tw-mt-[48px] sm:tw-mb-[24px] md:tw-mt-[56px] md:tw-mb-[36px] tw-mb-[24px]"
              >
                <span
                  class="tw-font-semibold sm:tw-text-[24px] tw-text-[22px] md:tw-text-[28px]"
                  id="tab1"
                >
                  {{ $t("aboutTeacher") }}</span
                >
              </div>

              <StaffDetailTab :tabs="aboutTabs" v-model="aboutTab" />
              <div
                class="tw-mt-[24px] tw-text-[15px] font-thai-looped"
                v-if="teacherDetail && teacherDetail[aboutTab]"
                v-html="teacherDetail[aboutTab]"
              />
            </section>
            <section
              ref="staffDetailSection2"
              class="staff-detail-section"
              v-if="performanceTabs.length"
            >
              <div
                class="tw-mt-[32px] sm:tw-mt-[48px] sm:tw-mb-[24px] md:tw-mt-[56px] md:tw-mb-[36px] tw-mb-[24px]"
              >
                <span
                  class="tw-font-semibold sm:tw-text-[24px] tw-text-[22px] md:tw-text-[28px]"
                  id="tab2"
                  >{{ $t("academicAchievements") }}</span
                >
              </div>
              <StaffDetailTab
                :tabs="performanceTabs"
                v-model="performanceTab"
              />
              <div
                class="tw-mt-[24px] tw-text-[15px] font-thai-looped"
                v-if="teacherDetail && teacherDetail[performanceTab]"
                v-html="teacherDetail[performanceTab]"
              />
              <!-- <li>
                  การสื่อสารประเด็นสาธารณะของสังคมไทยผ่ายเว็บไซต์เพื่อการรณรงค์
                  Change.org Public Issue Communication of Change.org (2559)
                  ปฎิภาณ ชัยช่วย
                </li>
                <li>
                  การสื่อสารผ่านกิจกรรมเชิงสังคมกับการมีส่วนร่วมของชุมชนศูนย์การค้าอิมพีเรียล
                  เวิล์ด สำโรง (2558) , สุพิชญา เลิศประภานนท์
                </li> -->
            </section>
            <section
              ref="staffDetailSection3"
              class="staff-detail-section"
              v-if="teacherDetail && teacherDetail.other_detail_th"
            >
              <div
                class="tw-mt-[32px] sm:tw-mt-[48px] sm:tw-mb-[24px] md:tw-mt-[56px] md:tw-mb-[36px] tw-mb-[24px]"
              >
                <span
                  class="tw-font-semibold sm:tw-text-[24px] tw-text-[22px] md:tw-text-[28px]"
                  id="tab2"
                  >ข้อมูลอื่น ๆ</span
                >
              </div>
              <div
                class="tw-mt-[24px] tw-text-[15px] font-thai-looped"
                v-html="
                  $store.state.lang == 'th'
                    ? teacherDetail.other_detail_th
                    : teacherDetail.other_detail_en
                    ? teacherDetail.other_detail_en
                    : teacherDetail.other_detail_th
                "
              />
            </section>
          </div>
          <!-- <v-btn style="background: #ddf2f0; border-radius: 0px; box-shadow: none" block><span
                style="font-weight: 500; font-size: 16px; color: #2ab3a3">ข่าวสารทั้งหมด</span></v-btn> -->
          <!-- <div sm="12" md="8" v-if="selected == 2">
            <v-card class="pa-4" flat v-for="i in 5" >
              <v-row>
                <div md="10">
                  <span style="font-weight: 600; font-size: 18px"
                    >ประชาสัมพันธ์ กิจกรรมบรรยายพิเศษ “How to be top influencers
                    on Facebook and Twitter”</span
                  >
                </div>
                <v-col cols="2" class="hidden-xs-only"
                  ><v-img src="@/assets/icons/ScreenShot-card.png"></v-img
                ></v-col>
                <div>
                  <v-icon color="#2AB3A3">mdi-calendar</v-icon
                  ><span
                    style="margin-left: 4px; font-weight: 400; font-size: 14px"
                    >12 ม.ค. 2565</span
                  >
                </div>
              </v-row>
              <v-divider class="mt-6" />
            </v-card>
            <v-btn
              style="background: #ddf2f0; border-radius: 0px; box-shadow: none"
              block
              ><span style="font-weight: 500; font-size: 16px; color: #2ab3a3"
                >ข่าวสารทั้งหมด</span
              ></v-btn
            >
          </v-col>
          <div sm="12" md="8" v-if="selected == 3">
            <v-card class="pa-4" flat v-for="i in 5" >
              <v-row>
                <div md="10">
                  <span style="font-weight: 600; font-size: 18px"
                    >ประกาศผลการคัดเลือกผู้เข้าอบรมหลักสูตรการ
                    สร้างสรรค์เนื้อหาด้วยข้อมูลเพื่อการเป็นผู้ประกอบการ
                    และเพิ่มคุณค่าขององค์กรในบริบทดิจิทัล</span
                  >
                </div>
                <v-col cols="2" class="hidden-xs-only"
                  ><v-img src="@/assets/icons/ScreenShot-card.png"></v-img
                ></v-col>
                <div>
                  <v-icon color="#2AB3A3">mdi-calendar</v-icon
                  ><span
                    style="margin-left: 4px; font-weight: 400; font-size: 14px"
                    >12 ม.ค. 2565</span
                  >
                </div>
              </v-row>
              <v-divider class="mt-6" />
            </v-card>
            <v-btn
              style="background: #ddf2f0; border-radius: 0px; box-shadow: none"
              block
              ><span style="font-weight: 500; font-size: 16px; color: #2ab3a3"
                >ข่าวสารทั้งหมด</span
              ></v-btn
            >
          </v-col> -->
        </div>
      </div>
    </div>
    <Footers />
  </div>
</template>
<script>
import StaffBanner from "../_components-Staff/StaffBanner.vue";
import Footers from "@/components/Footers.vue";
import StaffDetailTab from "../_components-Staff/StaffDetailTab.vue";

export default {
  // computed: {
  //   aboutTabs() {
  //     const tabs = [
  //       {
  //         id: "educational_record_th",
  //         text: "education",
  //       },
  //       {
  //         id: "expertise_and_interest_th",
  //         text: "expertiseAndInterests",
  //       },
  //       {
  //         id: "off_campus_position_th",
  //         text: "positionsOutsideTheInstitution",
  //       },
  //       {
  //         id: "awards_and_honors_th",
  //         text: "awardsAndHonors",
  //       },
  //     ];
  //     if (!this.teacherDetail) return [];
  //     return tabs.filter((tab) => this.teacherDetail[tab.id]);
  //   },
  //   performanceTabs() {
  //     const tabs = [
  //       {
  //         id: "list_of_thesis_th",
  //         text: "listOfDissertationsAndIndependentResearchStudies",
  //       },
  //       {
  //         id: "research_results_th",
  //         text: "publishedResearch",
  //       },
  //       {
  //         id: "research_project_th",
  //         text: "fundedResearchProjects",
  //       },
  //     ];
  //     if (!this.teacherDetail) return [];
  //     return tabs.filter((tab) => this.teacherDetail[tab.id]);
  //   },
  // },
  computed: {
    aboutTabs() {
      const langSuffix = this.$store.state.lang === "th" ? "_th" : "_en";
      const tabs = [
        {
          id: "educational_record" + langSuffix,
          text: "education",
        },
        {
          id: "expertise_and_interest" + langSuffix,
          text: "expertiseAndInterests",
        },
        {
          id: "off_campus_position" + langSuffix,
          text: "positionsOutsideTheInstitution",
        },
        {
          id: "awards_and_honors" + langSuffix,
          text: "awardsAndHonors",
        },
      ];
      if (!this.teacherDetail) return [];
      return tabs.filter((tab) => this.teacherDetail[tab.id]);
    },
    performanceTabs() {
      const langSuffix = this.$store.state.lang === "th" ? "_th" : "_en";
      const tabs = [
        {
          id: "list_of_thesis" + langSuffix,
          text: "listOfDissertationsAndIndependentResearchStudies",
        },
        {
          id: "research_results" + langSuffix,
          text: "publishedResearch",
        },
        {
          id: "research_project" + langSuffix,
          text: "fundedResearchProjects",
        },
      ];
      if (!this.teacherDetail) return [];
      return tabs.filter((tab) => this.teacherDetail[tab.id]);
    },
  },
  watch: {
    aboutTabs(val) {
      // console.log(val)
      this.aboutTab = val[0].id;
    },
    performanceTabs(val) {
      this.performanceTab = val[0].id;
    },
  },
  data() {
    return {
      currentSection: 1,
      performanceTab: 1,
      aboutTab: 1,
      selected: 1,
      teacherDetail: null,
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    bindScroll() {
      const _this = this;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry._this.currentSection = entry.target.id;
            }
          });
        },
        {
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
      Object.entries(this.$refs).forEach(([refName, elm]) => {
        if (refName.includes("staffDetailSection")) {
          observer.observe(elm);
        }
      });
    },
    async getDetail() {
      // console.log(this.$route.query.id);
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/teacherDetails/${this.$route.params.id}`
      );
      // console.log("teacherDetail", response.data.data);
      this.teacherDetail = response.data.data;
      this.$nextTick(() => {
        window.addEventListener("scroll", this.updateActiveSection);
        this.$nextTick(() => {
          this.updateActiveSection();
        });
      });
    },
    updateActiveSection() {
      const sections = Object.entries(this.$refs);
      const currentPosition = window.pageYOffset;
      sections.forEach(([sectionName, section], index) => {
        const checkLastElement =
          index === sections.length - 1 && currentPosition > section.offsetTop;
        const checkFirstElement =
          index === 0 &&
          (currentPosition < section.offsetTop ||
            (currentPosition > section.offsetTop &&
              sections[index + 1] &&
              currentPosition < sections[index + 1][1].offsetTop));
        const checkBetweenElement =
          currentPosition > section.offsetTop &&
          sections[index + 1] &&
          currentPosition < sections[index + 1][1].offsetTop;

        if (checkLastElement || checkFirstElement || checkBetweenElement) {
          this.currentSection = sectionName;
        }
      });
    },
    scrollToSection(sectionRef) {
      const section = this.$refs[sectionRef];
      window.scrollTo({
        top: section.offsetTop + 100,
        behavior: "smooth",
      });
      window.dispatchEvent(new Event("scroll"));
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateActiveSection);
  },
  components: { StaffBanner, Footers, StaffDetailTab },
};
</script>

<style scoped>
.cardtitle {
  font-family: "IBM Plex Sans Thai";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #0d0e10;
  flex: none;
  order: 0;
  flex-grow: 1;
}

.fontselected {
  font-family: "IBM Plex Sans Thai";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #2ab3a3;
}

.fontnotselected {
  font-family: "IBM Plex Sans Thai";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #0d0e10;
}
</style>