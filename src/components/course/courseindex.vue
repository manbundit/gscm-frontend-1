<template>
  <div style="background-color: #fff" class="-mt-top" no-gutters>
    <Headers
      :img="require('@/assets/icons/course-image.png')"
      polygon
      title="allCourse"
      description="allCoursesAndBranchAreOpenToTheFacultyOfCommunicationArtsAndManagementInnovation"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #6E78FF 0%, rgba(97, 218, 244, 0.92) 51.56%, rgba(97, 218, 244, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #6E78FF 0%, rgba(97, 218, 244, 0.92) 51.56%, rgba(97, 218, 244, 0.25) 100%);"
    >
    </Headers>
    <div class="tw-w-[100%] tw-relative">
      <Tabs :tabs="tabs" v-model="selectedtab" />
      <v-sheet
        class="mx-auto tw-max-w-[1200px] tw-mx-auto tw-px-[20px] sm:tw-px-[32px] md:tw-px-[64px] tw-relative md:tw-mt-[50px] md:tw-mb-[100px] sm:tw-mt-[36px] sm:tw-mb-[64px] tw-mt-[32px] tw-mb-[48px]"
        max-width="100vw"
      >
        <div
          class="tw-grid tw-mx-auto tw-max-w-[1200px] sm:tw-grid-cols-2 tw-gap-[24px] tw-grid-cols-1"
        >
          <v-card
            v-for="n in cardItems"
            :key="`c_${n}`"
            style="border-radius: 0px"
            elevation="0"
            class="!tw-w-[100%] imagecard tw-mb-[28px]"
            @click="gotocourse(n)"
          >
            <v-img :src="n.img_url"></v-img>
            <!-- <v-img src="@/assets/icons/Cover.png"></v-img> -->

            <br />

            <!-- <span
              style="font-weight: 400; font-size: 14px; line-height: 20px"
            >
            {{ n.facualty.name_th }}
            </span>
            <br /> -->
            <span
              class="fontcardtitle"
              style="
                font-family: 'IBM Plex Sans Thai';
                font-style: normal;
                font-weight: 600;

                line-height: 42px;
              "
            >
              {{ $store.state.lang == "th" ? n.title_th : n.title_en }}
            </span>
            <br />
            <div style="display: inline-flex">
              <v-img src="@/assets/icons/catalog.png"></v-img>
              <span
                style="
                  font-family: 'IBM Plex Sans Thai';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                  margin-left: 6px;
                "
                >{{ $t("latestUpdates") }}
                {{ convertToYear(n.updatedAt) }}</span
              >
            </div>
            <br />
            <br />
            <span style="font-weight: 400; font-size: 16px; line-height: 24px">
              {{
                $store.state.lang == "th" ? n.short_desc_th : n.short_desc_en
              }}
            </span>
            <br />
            <br />
            <v-btn
              class="mr-4 !tw-p-[12px] tw-mb-[18px] !tw-h-[48px]"
              color="#2AB3A3"
              dark
              style="
                border-radius: 0px;
                float: left;
                box-shadow: none;
                font-size: 16px;
              "
              @click="gotocourse(n)"
              >{{ $t("courseDetail") }}</v-btn
            >
            <v-btn
              class="mr-12 !tw-p-[12px] !tw-h-[48px]"
              color="#2AB3A3"
              text
              style="border-radius: 0px; float: left; font-size: 16px"
              >{{ $t("register") }}
              <v-icon class="tw-ml-[10px]">mdi-arrow-right</v-icon></v-btn
            >
          </v-card>
          <!-- </v-col> -->
        </div>
      </v-sheet>
    </div>
    <div
      class="tw-py-[56px] sm:tw-py-[64px] md:tw-py-[100px]"
      style="background-color: #f6f6f6"
      align="center"
      justify="center"
      no-gutters
    >
      <div class="mx-auto tw-px-[16px] sm:tw-px-[32px] tw-max-w-[1200px]">
        <h2
          class="fontbig tw-mb-[12px]"
          style="font-weight: 600; color: #0d0e10"
        >
          {{ $t("reviewsFromOurStudent") }}
        </h2>
        <span
          class="tw-text-[16px] sm:tw-text-[22px]"
          v-if="selectedtab === 1"
          style="font-style: normal; font-weight: 400"
          >{{
            $t("feedbackFromStudentsWhoHaveStudiedMasterDegreesWithUs")
          }}</span
        >
        <span
          class="tw-text-[16px] sm:tw-text-[22px]"
          v-else-if="selectedtab === 2"
          style="font-style: normal; font-weight: 400"
          >{{
            $t("feedbackFromStudentsWhoHaveStudiedDoctoralDegreesWithUs")
          }}</span
        >
      </div>
      <div
        class="mx-auto tw-px-[16px] sm:tw-px-[32px] tw-max-w-[1200px] tw-mt-[56px] override-carousel"
      >
        <v-carousel
          v-model="model"
          hide-delimiter-background
          height="auto"
          class=""
        >
          <template v-slot:prev="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              class="!tw-mr-[32px] !tw-min-w-[48px] tw-h-[48px] sm:!tw-block !tw-hidden"
              color="#F6F6F6"
              dark
              style="
                border-radius: 0px;
                float: left;
                box-shadow: none;
                border: 1px solid #2ab3a3;
                width: 48px;
                height: 48px;
              "
            >
              <v-icon color="#2AB3A3">mdi-arrow-left</v-icon>
            </v-btn>
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              class="!tw-ml-[32px] !tw-mx-[] !tw-min-w-[48px] tw-h-[48px] sm:!tw-block !tw-hidden"
              color="#F6F6F6"
              dark
              style="
                border-radius: 0px;
                float: left;
                box-shadow: none;
                border: 1px solid #2ab3a3;
                width: 48px;
                height: 48px;
              "
            >
              <v-icon color="#2AB3A3">mdi-arrow-right</v-icon>
            </v-btn>
          </template>
          <v-carousel-item v-for="i in comments" :key="`comments_${i.id}`">
            <div align="center" justify="center">
              <v-card
                style="background-color: white"
                class="tw-p-[32px] sm:tw-p-[56px] md:tw-p-[64px] margincard tw-mb-[40px] tw-border-none !tw-shadow-none !tw-rounded-none sm:!tw-max-w-[calc(100%-160px)]"
              >
                <div
                  class="tw-flex tw-flex-col md:tw-flex-row tw-gap-[32px] md:tw-gap-[64px]"
                >
                  <div class="tw-max-w-[100%] md:tw-max-w-[30%] tw-w-[100%]">
                    <div class="tw-flex tw-flex-col tw-text-left tw-h-[100%]">
                      <div>
                        <!-- src="@/assets/icons/commu.png" -->
                        <v-img
                          src="../../assets/contactStudentComment.png"
                          width="48px"
                          height="48px"
                        ></v-img>
                      </div>
                      <div class="pt-4" v-if="i.level">
                        <span
                          style="
                            font-weight: 400;
                            font-size: 14px;
                            color: #545454;
                          "
                          >{{ $t("student") }}
                          {{
                            $store.state.lang == "th"
                              ? i.level.name_th
                              : i.level_name_en
                          }}
                          {{ $t("generation") }}
                          {{
                            $store.state.lang == "th"
                              ? i.generation_th
                              : i.generation_en
                          }}
                        </span>
                      </div>
                      <div v-if="i.major">
                        <span
                          style="
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 24px;
                            color: #0d0e10;
                          "
                          v-if="i.major.name_th"
                          >{{ $t("branch")
                          }}{{
                            $store.state.lang == "th"
                              ? i.major.name_th
                              : i.major.name_en
                          }}</span
                        >
                      </div>
                      <div
                        class="tw-mt-auto"
                        v-if="i.major"
                        style="
                          color: #2ab3a3;
                          font-weight: 500;
                          font-size: 14px;
                        "
                      >
                        {{ $t("courseDetail")
                        }}<v-icon class="tw-ml-[8px]" style="color: #2ab3a3"
                          >mdi-arrow-right</v-icon
                        >
                      </div>
                    </div>
                  </div>
                  <div class="tw-max-w-[100%] md:tw-max-w-[70%] tw-w-[100%]">
                    <div>
                      <span
                        v-html="
                          $store.state.lang == 'th'
                            ? i.comment_desc_th
                            : i.comment_desc_en
                        "
                        class="tw-text-[22px] md:tw-text-[28px]"
                        style="
                          display: -webkit-box;
                          -webkit-box-orient: vertical;
                          -webkit-line-clamp: 6;
                          text-overflow: ellipsis;
                          text-align: left;
                          overflow: hidden;
                          color: black;
                          font-weight: 600;
                        "
                      ></span>
                      <div class="tw-flex tw-gap-[12px] tw-mt-[40px]">
                        <div
                          class="tw-w-[48px] tw-min-w-[48px]"
                          v-if="i.image_url"
                        >
                          <v-avatar
                            ><v-img
                              :src="i.image_url"
                              width="48px"
                              height="48px"
                            ></v-img
                          ></v-avatar>
                        </div>
                        <div class="tw-text-left">
                          <span
                            style="
                              display: block;
                              color: black;
                              font-weight: 500;
                              font-size: 16px;
                              line-height: 24px;
                            "
                            >{{
                              $store.state.lang == "th"
                                ? i.comment_from_th
                                : i.comment_from_en
                            }}</span
                          >
                          <span
                            class="tw-mt-[4px]"
                            style="
                              display: block;
                              color: black;
                              font-weight: 400;
                              font-size: 14px;
                              line-height: 20px;
                              color: #545454;
                            "
                            >{{
                              $store.state.lang == "th"
                                ? i.comment_position_th
                                : i.comment_position_en
                            }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <v-row align="end" justify="center" class="mt-0">
                  <v-col cols="12" md="4" sm="4">
                    <v-col cols="12">
                      <span
                        style="
                          color: #2ab3a3;
                          font-weight: 500;
                          font-size: 14px;
                        "
                        >รายละเอียดหลักสูตร<v-icon style="color: #2ab3a3"
                          >mdi-arrow-right</v-icon
                        ></span
                      >
                    </v-col>
                  </v-col>
                  <v-col cols="11" md="8" sm="8">
                    <div class="tw-flex tw-gap-[12px]">
                      <div class="tw-w-[48px] tw-min-w-[48px]">
                        <v-avatar
                          ><v-img
                            src="@/assets/icons/Avatar.png"
                            width="48px"
                            height="48px"
                          ></v-img
                        ></v-avatar>
                      </div>
                      <div class="tw-text-left">
                        <span
                          style="
                            display: block;
                            color: black;
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 24px;
                          "
                          >{{ i.comment_from_th }}</span
                        >
                        <span
                          class="tw-mt-[4px]"
                          style="
                            display: block;
                            color: black;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 20px;
                            color: #545454;
                          "
                          >{{ i.comment_position_th }}</span
                        >
                      </div>
                    </div>
                  </v-col>
                </v-row> -->
              </v-card>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <div
      class="tw-py-[56px] sm:tw-py-[64px] md:tw-py-[100px] tw-px-[16px] sm:tw-px-[32px] md:tw-px-[64px]"
      no-gutters
    >
      <div style="text-align: -webkit-center">
        <h2 class="fontbig mb-0" style="font-weight: 600; color: #0d0e10">
          {{ $t("ambianceImage") }}
        </h2>
        <br />
        <span
          style="
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 32px;
          "
          >{{ $t("someOfAmbianceThatHappensInTheMasterCourse") }}</span
        >
      </div>
      <div
        class="tw-w-full tw-mt-[56px] tw-max-w-[1200px] tw-mx-auto tw-relative"
      >
        <div class="sm:tw-flex tw-gap-[24px] tw-hidden">
          <div class="tw-aspect-[1/1] tw-flex-1 tw-relative tw-flex-1">
            <img
              :src="photoswipes[0].src"
              @click="openGallery(1)"
              class="tw-absolute tw-cursor-pointer tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
            />
          </div>
          <div
            class="tw-aspect-[1/1] tw-flex-1 tw-flex tw-flex-col tw-gap-[24px]"
          >
            <div class="tw-aspect-[544/230] tw-relative tw-flex-1">
              <img
                :src="photoswipes[1].src"
                @click="openGallery(2)"
                class="tw-absolute tw-cursor-pointer tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div class="tw-aspect-[544/230]">
              <div class="tw-flex tw-gap-[24px] tw-flex-1">
                <div class="tw-aspect-[1/1] tw-relative tw-flex-1">
                  <img
                    :src="photoswipes[2].src"
                    @click="openGallery(3)"
                    class="tw-absolute tw-cursor-pointer tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                  />
                </div>
                <div class="tw-aspect-[1/1] tw-relative tw-flex-1">
                  <img
                    :src="photoswipes[3].src"
                    @click="openGallery(4)"
                    class="tw-absolute tw-cursor-pointer tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tw-mx-[-16px]">
          <div
            class="tw-flex tw-gap-[16px] sm:tw-hidden tw-whitespace-nowrap tw-overflow-x-auto"
          >
            <div
              :class="{
                'tw-ml-[16px]': index === 0,
                'tw-mr-[16]': index === photoswipes.length,
              }"
              class="tw-aspect-[1/1] tw-shrink-0 tw-basis-[calc(100%-48px)] tw-relative tw-flex-1 tw-w-[100%]"
              v-for="(_, index) in photoswipes"
            >
              <img
                :src="photoswipes[index].src"
                class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                @click="openGallery(index + 1)"
              />
            </div>
            <div class="tw-w-[16px]" />
          </div>
        </div>

        <div class="tw-mt-[40px] tw-flex tw-justify-center tw-items-center">
          <!-- <v-btn
            class="mt-6"
            style="background: #ddf2f0; border-radius: 0px; box-shadow: none"
            router-link
            to=""
            ><span style="font-weight: 500; font-size: 16px; color: #2ab3a3"
              >รูปภาพทั้งหมด</span
            ></v-btn
          > -->
          <v-btn
            outlined
            style="border-radius: 0px; font-weight: 500; font-size: 16px"
            color="#2ab3a3"
            large
            @click="openGallery(1)"
            >{{ $t("allPhotos") }}</v-btn
          >
        </div>
      </div>
    </div>
    <v-row no-gutters>
      <Footers />
    </v-row>
    <fs-lightbox
      :sources="sources"
      :slide="galleryIndex"
      :toggler="galleryOpen"
    />
  </div>
</template>
<script>
import moment from "moment";
import Footers from "../Footers.vue";
import Headers from "../Headers.vue";
import Tabs from "../Tabs.vue";
import FsLightbox from "fslightbox-vue";
// import public from '../../../public/photos_swipe/DSC_0245.jpg'

// import Swiper from 'swiper';
export default {
  components: { Footers, Headers, Tabs, FsLightbox },
  data() {
    return {
      showNav: true,
      showBanner: true,
      model: null,
      items: [],
      masterItems: [],
      phdItems: [],
      cardItems: [],
      user: "",
      comments: [],
      galleryIndex: 0,
      tabs: [
        {
          id: 1,
          text: "masterDegree",
          icon: "/icons/certificate-star.svg",
          iconActive: "/icons/certificate-star-active.svg",
        },
        {
          id: 2,
          text: "doctoralDegree",
          icon: "/icons/certificate-badge.svg",
          iconActive: "/icons/certificate-badge-active.svg",
        },
      ],
      galleryOpen: false,

      selectedtab: null,

      photoswipes: [
        {
          // src: "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
          // thumbnail:"https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
          src: require("../../../public/photos_swipe/DSC_0245.jpg"),
          thumbnail: "../../../public/photos_swipe/DSC_0245.jpg",
          w: 1875,
          h: 2500,
        },
        {
          src: require("../../../public/photos_swipe/DSC_0283.jpg"),
          thumbnail: "../../../public/photos_swipe/DSC_0283.jpg",
          w: 1669,
          h: 2500,
        },
        {
          src: require("../../../public/photos_swipe/DSC_0514.jpg"),
          thumbnail: "../../../public/photos_swipe/DSC_0514.jpg",
          w: 2500,
          h: 1666,
        },
        {
          src: require("../../../public/photos_swipe/DSC_0667.jpg"),
          thumbnail: "../../../public/photos_swipe/DSC_0667.jpg",
          w: 1875,
          h: 2500,
          title: "Will be used for caption",
        },
        {
          src: require("../../../public/photos_swipe/DSC_0815.jpg"),
          thumbnail: "../../../public/photos_swipe/DSC_0815.jpg",
          w: 1669,
          h: 2500,
        },
        {
          src: require("../../../public/photos_swipe/DSC_1041.jpg"),
          thumbnail: "../../../public/photos_swipe/DSC_1041.jpg",
          w: 2500,
          h: 1666,
        },
        {
          src: require("../../../public/photos_swipe/50843.jpg"),
          thumbnail: "../../../public/photos_swipe/50843.jpg",
          w: 2500,
          h: 1666,
        },
        {
          src: require("../../../public/photos_swipe/LINE_ALBUM_DATA 6_6_65_0.jpg"),
          thumbnail:
            "../../../public/photos_swipe/LINE_ALBUM_DATA 6_6_65_0.jpg",
          w: 2500,
          h: 1666,
        },
        {
          src: require("../../../public/photos_swipe/LINE_ALBUM_DATA 15_6_65.jpg"),
          thumbnail: "../../../public/photos_swipe/LINE_ALBUM_DATA 15_6_65.jpg",
          w: 2500,
          h: 1666,
        },
        {
          src: require("../../../public/photos_swipe/LINE_ALBUM_Party camping Ph.D._2022_39.jpg"),
          thumbnail:
            "../../../public/photos_swipe/LINE_ALBUM_Party camping Ph.D._2022_39.jpg",
          w: 2500,
          h: 1666,
        },
      ],
      courseList: [],
      mapTypes: {
        master: 1,
        doctoral: 2,
      },
    };
  },
  async created() {
    if (this.$route.params.id == "master") {
      this.selectedtab = 1;
    } else {
      this.selectedtab = 2;
    }

    // await this.getAll();
    // await this.getAllComment();
    // window.addEventListener("scroll", this.handleScroll);
    // setTimeout(() => {
    //   this.selectedtab = this.mapTypes[this.$route.params.id];
    //   console.log("test selectedtab");
    // }, 500);
  },
  async mounted() {
    await this.getAll();
    await this.getAllComment();
    // this.selectedtab = await this.mapTypes[this.$route.params.id];
    console.log(this.$route.params.id, "this.$route.params.id");

    // if (this.$route.params.id === "doctoral") {
    //   this.selectedtab = 2;
    //   console.log("test doctoraldoctoraldoctoraldoctoral");
    // }
  },
  computed: {
    sources() {
      return this.photoswipes.map((i) => i.src);
    },
  },
  watch: {
    selectedtab(val) {
      // console.log("666");
      const pathParam = Object.entries(this.mapTypes)
        .map(([param, value]) => ({
          param,
          value,
        }))
        .find((obj) => obj.value == val).param;
      history.pushState({}, "", `/course/${pathParam}/all`);
      if (val == 1) {
        // console.log("masterItems", val);
        this.cardItems = this.masterItems;
      } else {
        // console.log("phdItems", val);
        this.cardItems = this.phdItems;
      }
    },
  },
  methods: {
    convertToYear(date) {
      return date ? moment(date).format("YYYY") * 1 + 543 : "";
    },
    openGallery(index) {
      this.galleryOpen = !this.galleryOpen;
      this.galleryIndex = index;
    },
    handleScroll() {
      // console.log("window.pageYOffset", window.pageYOffset);
      this.pageYOffset = window.pageYOffset;
      var navbar = document.getElementById("navbar");
      var sticky = navbar.offsetTop;
      // if (window.pageYOffset >= sticky) {
      //     navbar.classList.add("sticky")
      //   } else {
      //     navbar.classList.remove("sticky");
      //   }
      // if (window.pageYOffset >= sticky) {
      if (window.pageYOffset >= 526) {
        // ซ่อน banner เปิด nav ควร 60
        this.showBanner = false;
        // this.showNav = true;
      } else if (window.pageYOffset == 0) {
        this.showBanner = true;
        // this.showNav = false;
      }
    },
    async getAllComment() {
      const auth = {
        headers: { Authorization: `Bearer ${this.user.token}` },
      };
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/studentComments?type=1`,
        auth
      );
      console.log("getAllStudentComment", response.data.data);
      this.comments = response.data.data;
    },
    gotocourse(item) {
      console.log("item", item);
      let id = item.id;
      let title_en = item.title_en;
      let modifiedUrl = title_en.replace(/ /g, "_");
      // let substring = /\(|\)/g;
      // let result = modifiedUrl.replace(substring, "");
      // console.log("result", result);

      this.$router.push(
        `/course/${
          this.selectedtab === 1 ? "master" : "doctoral"
        }/${modifiedUrl}`
      );

      // targetWindow.postMessage({ id, modifiedUrl }, "*");
    },
    async getAll() {
      const auth = {
        headers: { Authorization: `Bearer ${this.user.token}` },
      };
      console.log("555");
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/courses?status=เปิดใช้งาน`
        // 'http://localhost:8081/types/'
      );
      this.items = response.data.data;
      this.masterItems = this.items.filter((x) => x.levelId == 12);
      this.phdItems = this.items.filter((x) => x.levelId == 13);
      console.log("this.selectedtab Get All", this.selectedtab);
      if (this.selectedtab == 1) {
        console.log("masterItems");
        this.cardItems = this.masterItems;
      } else {
        console.log("phdItems");
        this.cardItems = this.phdItems;
      }
      console.log("cardItems", this.cardItems);
    },
  },
};
</script>
<style scoped lang="scss">
::v-deep {
  .v-lightbox {
    --v-lightbox-color: white;
    --v-lightbox-background-color: rgba(0, 0, 0, 0.8);
  }
  .v-window__next {
    margin: 0 !important;
  }
  .v-window__prev {
    margin: 0 !important;
  }
}
.override-carousel {
  ::v-deep {
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
.pswp-docs__home-gallery {
  grid-gap: 10px;
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
  position: relative;
  width: 100%;
}
/* .content {
  padding: 16px;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.sticky + .content {
  padding-top: 60px;
} */
.fixed-bar {
  /* position: fixed; */
  /* position: -webkit-sticky; for Safari */
  /* top: 4.3em; */
  z-index: 2;
}
.selectedtab {
  cursor: pointer;
  padding: 20px 24px;
  gap: 16px;
  width: 212px;
  height: 68px;
  border-bottom: 3px solid #2ab3a3;
}
.notselectedtab {
  cursor: pointer;
  padding: 20px 24px;
  gap: 16px;
  width: 212px;
  height: 68px;
}
.backgroundcard {
  background: linear-gradient(
    180deg,
    rgba(221, 242, 240, 0) 0%,
    #abded7 105.88%
  );
}
v-btn__content {
  color: black;
}
</style>
<style lang="scss" scoped>
.fonthead {
  @media only screen and (min-width: 0px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 414px) {
    font-size: 28px;
  }
}
.fontbig {
  @media only screen and (min-width: 0px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 414px) {
    font-size: 36px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 42px;
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
    /* width: 272px; */
    // height: 160px;
  }
  @media only screen and (min-width: 414px) {
    /* width: 292px; */
    // height: 200px;
  }
  @media only screen and (min-width: 960px) {
    /* width: 544px; */
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

