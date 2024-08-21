<template>
  <div v-if="items" style="background-color: #fff" class="-mt-top tw-w-full">
    <v-row no-gutters justify="center" align="center" class="tw-relative">
      <div
        class="tw-absolute tw-w-full tw-h-full tw-top-0 tw-left-0 tw-overflow-hidden"
      >
        <!-- :src="items.img_url" -->
        <img
          src="@/assets/icons/CoverAlum3.png"
          class="tw-h-full tw-w-full tw-object-cover tw-blur-[50px] tw-scale-150 tw-brightness-50"
        />
      </div>
      <v-col cols="11" md="8" class="tw-relative !tw-my-32">
        <v-icon
          color="white"
          style="font-size: 40px"
          class="mr-3"
          @click="goback()"
          >mdi-chevron-left-circle
        </v-icon>
        <span
          @click="goback()"
          style="
            font-family: 'IBM Plex Sans Thai';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #ffffff;
            cursor: pointer;
          "
          >{{ title }}</span
        >
        <br />
        <h1
          class="tw-line-clamp-3 mb-0"
          style="color: white; font-weight: 600; font-size: 36px"
        >
          {{
            $store.state.lang == "th"
              ? items.title_th
              : items.title_en
              ? items.title_en
              : items.title_th
          }}
        </h1>
        <div
          style="
            font-family: 'IBM Plex Sans Thai';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: white;
          "
        >
          {{
            $store.state.lang == "th"
              ? items.short_desc_th
              : items.short_desc_en
              ? items.short_desc_en
              : items.short_desc_th
          }}
        </div>
        <br />
        <!-- <img
              src="@/assets/icons/user-avatar.png"
              max-width="20px"
              max-height="20px"
            /> -->

        <!-- <span style="font-weight: 400; color: white" class="tw-mr-4"
          ><v-icon color="white">mdi-account-circle-outline</v-icon>
          {{ $t("publishedBy") }} Admin</span
        > -->
        <br class="tw-inline sm:tw-hidden" />
        <!-- <img
              src="@/assets/icons/Calendar.png"
              max-width="20px"
              max-height="20px"
            /> -->
        <span style="font-size: 14px; color: white" class="tw-leading-10">
          <v-icon color="white">mdi-calendar-outline</v-icon>
          {{ $t("publishedOn") }} : {{ convertDate(items.updatedAt) }}
        </span>
        <div
          class="share-buttons tw-flex tw-gap-[12px] tw-items-center tw-mt-[24px] md:tw-mt-[36px] md:tw-mb-[24px]"
        >
          <span class="tw-font-bold tw-text-white">{{ $t("share") }}</span>
          <img
            src="/icons/social-copy-button.svg"
            class="tw-cursor-pointer"
            @click="copyToClipboard"
          />
          <Sharer socialNetwork="facebook" :url="currentUrl">
            <img
              src="/icons/social-facebook-button.svg"
              class="tw-cursor-pointer"
            />
          </Sharer>
          <Sharer socialNetwork="facebook-messenger" :url="currentUrl">
            <img
              src="/icons/social-messenger-button.svg"
              class="tw-cursor-pointer"
            />
          </Sharer>
          <Sharer socialNetwork="line" :url="currentUrl" :message="title">
            <img
              src="/icons/social-line-button.svg"
              class="tw-cursor-pointer"
            />
          </Sharer>
          <Sharer socialNetwork="twitter" :url="currentUrl" :message="title">
            <img
              src="/icons/social-twitter-button.svg"
              class="tw-cursor-pointer"
            />
          </Sharer>
        </div>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" no-gutters>
      <v-col cols="11" md="8">
        <v-row align="center" justify="center" no-gutters v-if="items.img_url">
          <!-- :src="items.img_url"  -->
          <!-- :src="require('@/assets/icons/news_img.png')" -->

          <image-with-cover style="margin-top: -80px" :src="items.img_url" />
        </v-row>
      </v-col>
      <v-col cols="11" md="8" class="my-12 tw-overflow-scroll">
        <!-- <span style="font-weight: 400; font-size: 15px; line-height: 24px">{{
        items.full_desc_th
      }}</span> -->
        <span
          v-html="
            $store.state.lang == 'th'
              ? items.full_desc_th
              : items.full_desc_en
              ? items.full_desc_en
              : items.full_desc_th
          "
        ></span>
      </v-col>

      <!-- <v-col
        cols="11"
        md="8"
        v-for="(item, indexItemDocs) in items.documentFilesNews"
        :key="indexItemDocs"
      >
        <p
          style="
            color: #4caf50;
            cursor: pointer;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
          "
          @click="onClickFile(item.path)"
        >
          {{ item.name }}
        </p>
      </v-col> -->

      <v-col cols="11" md="8" sm="8">
        <div class="tw-my-[24px] sm:tw-my-[36px] md:tw-my-[48px]">
          <div
            class="tw-max-w-[1680px] tw-mx-auto tw-grid tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-[24px] tw-px-[16px] md:tw-px-[64px]"
          >
            <div v-for="i in items.pathPic" :key="i.id">
              <v-card elevation="0" class="ma-4">
                <v-row align="center" justify="center">
                  <v-img
                    width="300px"
                    height="300px"
                    :src="i.path"
                    style="
                      filter: blur(4px) brightness(0.5);
                      z-index: 0;
                      background: rgba(13, 14, 16, 0.2);
                    "
                    @click="opendialogdetail(i.path)"
                  >
                  </v-img>
                  <v-img
                    :src="i.path"
                    style="position: absolute; z-index: 2; top: 8%"
                    max-width="80%"
                    max-height="80%"
                    @click="opendialogdetail(i.path)"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <span
                    style="
                      font-style: normal;
                      font-weight: 600;
                      font-size: 24px;
                      line-height: 36px;
                      color: #0d0e10;
                      margin-top: 16px;
                    "
                  >
                    <!-- {{ i.name_th }} -->
                  </span>
                  <br />
                </v-row>
              </v-card>
            </div>
          </div>
        </div>
      </v-col>

      <!-- <v-col cols="11" md="8" sm="8">
        <v-row>
          <v-col
            v-for="(item, indexItemPic) in items.pathPic"
            :key="indexItemPic"
            class="d-flex child-flex"
            cols="4"
          >
            <v-img :src="item.path" contain max-width="100%" min-height="100%">
            </v-img>
          </v-col>
        </v-row>
      </v-col> -->

      <v-col
        cols="11"
        md="8"
        class="my-4 tw-overflow-scroll"
        v-if="items.documentFilesNews.length"
      >
        <span style="font-size: 22px; font-weight: 600">{{
          $t("documentDownload")
        }}</span>
      </v-col>
      <v-col
        cols="11"
        sm="8"
        md="8"
        v-for="i in items.documentFilesNews"
        class="pa-0"
        style="margin-bottom: 60px; font-size: 16px"
      >
        <div class="cardbig">
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <span>
                <v-icon
                  class="mr-2"
                  style="font-weight: 600; font-size: 16px; color: #0d0e10"
                  >mdi-file-document</v-icon
                >
                {{ i.name }}</span
              >
            </v-col>

            <v-col cols="12" sm="6" md="6" class="text-right">
              <!-- <a :href="i.attachFile1" download > dsd </a> -->
              <v-btn
                color="#2AB3A3"
                text
                class="mr-2"
                @click="onClickFile(i.path)"
                style="font-size: 16px"
                ><v-icon>mdi-file-find</v-icon> {{ $t("viewDocument") }}</v-btn
              >
              <!-- <v-btn color="#2AB3A3" text @click="viewFile(i.attachFile1)"
                ><v-icon>mdi-download</v-icon> {{ $t("download") }}</v-btn
              > -->
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-row
        justify="center"
        no-gutters
        class="py-6 tw-w-full tw-bg-[#F6F6F6]"
        v-if="feedsMore.length"
      >
        <div
          class="tw-w-full my-12 tw-text-center tw-font-semibold tw-text-[22px] sm:tw-text-[24px] md:tw-text-[36px]"
        >
          {{ $t("latestGeneralNotice") }}
        </div>
        <v-col cols="11" sm="8" v-for="(i, key) in feedsMore" :key="key">
          <NewsItem @click="gotodetail(i)" :item="i" />
        </v-col>
        <v-col cols="12">
          <v-row justify="center" align="center" class="mb-6" no-gutters>
            <v-btn
              color="#2AB3A3"
              dark
              class="!tw-shadow-none !tw-rounded-none !tw-font-semibold hover:!tw-bg-[#24988B]"
              width="128px"
              height="48px"
              @click="goback()"
              :loading="loading"
              >{{ $t("all") }}</v-btn
            >
            <!-- @click="goload()" -->
          </v-row>
        </v-col>
      </v-row>

      <v-dialog scrollable v-model="dialogdetail" width="40vw" height="80vh">
        <v-card class="" height="80vh">
          <v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="dialogdetail = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="px-8">
            <v-img :src="selectedImg" class="responsive" height="auto"></v-img>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-row no-gutters justify="center">
        <Footers />
      </v-row>
    </v-row>
  </div>
</template>
<script>
import Footers from "@/components/Footers.vue";
import NewsItem from "./newsItem.vue";
import ImageWithCover from "../ImageWithCover.vue";
import Sharer from "../Sharer.vue";
import moment from "moment";

export default {
  components: { Footers, NewsItem, ImageWithCover, Sharer },
  data() {
    return {
      dialogdetail: false,

      loading: false,
      items: {},
      id: null,
      feeds: [],
      feedsMore: [],
      title: "ข่าวสารและกิจกรรมคณะ",
      newstype: "",
      mapTypes: {
        faculty: 1,
        general: 2,
        "admission-result": 3,
        interesting: 4,
      },

      urlPath: "",
    };
  },
  watch: {
    newstype(val) {
      if (val) {
        if (val == "1") {
          this.title = "ข่าวสารและกิจกรรมคณะ";
        } else if (val == "2") {
          this.title = "ประกาศทั่วไป";
        } else if (val == "3") {
          this.title = "ประกาศผล";
        } else if (val == "4") {
          this.title = "สาระน่ารู้";
        }
      }
    },
  },
  async created() {
    const pathParam = Object.entries(this.mapTypes)
      .map(([param, value]) => ({
        param,
        value,
      }))
      .find((obj) => obj.param == this.$route.params.type).value;
    if (pathParam) {
      this.newstype = pathParam;
      this.getdetail();
    }

    await this.getAll();
  },
  computed: {
    currentUrl() {
      return window.location.href;
    },
  },
  methods: {
    opendialogdetail(img) {
      this.selectedImg = img;
      this.dialogdetail = true;
    },
    onClickFile(val) {
      window.open(val, "_blank");
    },
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
    async copyToClipboard() {
      const textarea = document.createElement("textarea");
      textarea.value = this.currentUrl;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        await navigator.clipboard.writeText(this.currentUrl);
      } catch (error) {
        document.execCommand("copy");
      }
      document.body.removeChild(textarea);
    },
    async getAll() {
      // if (this.$route.params.id) {
      //   this.id = this.$route.params.id;
      // }
      // console.log("this.$route.params.slug", this.$route.params.slug);
      // const response = await this.axios.get(
      //   `${process.env.VUE_APP_API}/news/${this.id}`
      //   // `${process.env.VUE_APP_API}/news?id=${this.id}`
      // );
      // console.log("news", response.data.data);
      // this.items = response.data.data;

      console.log("this.$route", this.$route);
      let url = window.location.pathname;
      let substring = "/news/faculty/";
      let result = url.replace(substring, "");
      let modifiedUrl = result.replace(/_/g, " ");
      this.urlPath = this.$route.params.slug.replace(/_/g, " ");
      console.log("this.urlPath this.urlPath", this.urlPath);
      console.log("this.newstype", this.newstype);
      const response1 = await this.axios.get(
        `${process.env.VUE_APP_API}/news?type=${this.newstype}&status=เปิดใช้งาน`
      );
      let itemFilter = response1.data.data.filter((x) =>
        x.url_seo_th
          ? x.url_seo_th.replace(/_/g, " ")
          : x.url_seo_en
          ? x.url_seo_en.replace(/_/g, " ")
          : x.title_en
          ? x.title_en.replace(/_/g, " ")
          : x.title_th
          ? x.title_th.replace(/_/g, " ")
          : null === modifiedUrl
      );
      // console.log("itemFilter news", itemFilter);
      // let modifiedTitle = this.$route.params.slug.replace(/_/g, " ");
      // console.log("modifiedTitle news", modifiedTitle);

      // if (itemFilter.length == 1) {
      //   console.log("if");
      //   const response = await this.axios.get(
      //     `${process.env.VUE_APP_API}/news/${itemFilter[0].id}`
      //   );
      //   console.log("news", response.data.data);
      //   this.items = response.data.data;
      // } else {
      // console.log("else");
      let modifiedTitle = this.$route.params.slug.replace(/_/g, " ");
      console.log("modifiedTitle", modifiedTitle);
      console.log("itemFilter modifiedTitle", itemFilter);
      let slug = itemFilter.filter(
        (x) =>
          (x.url_seo_en && x.url_seo_en.replace(/_/g, " ") === modifiedTitle) ||
          (x.url_seo_th && x.url_seo_th.replace(/_/g, " ") === modifiedTitle) ||
          (x.title_en && x.title_en.replace(/_/g, " ") === modifiedTitle) ||
          (x.title_th && x.title_th.replace(/_/g, " ") === modifiedTitle)
      );
      console.log("slug", slug);
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/news/${slug[0].id}`
      );
      console.log("news", response.data.data);
      this.items = response.data.data;
      // }
    },

    async getdetail() {
      const newsType = Object.entries(this.mapTypes)
        .map(([param, value]) => ({
          param,
          value,
        }))
        .find((obj) => obj.param == this.$route.params.type).value;
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/news?type=${newsType}&status=เปิดใช้งาน`
      );
      let itemFilter = response.data.data.filter(
        (x) => x.title_en != this.urlPath
      );
      console.log("itemFilter", itemFilter);
      this.feeds = response.data.data;
      this.feedsMore = itemFilter;
      console.log("feeds", this.feeds);
    },
    gotodetail(item) {
      // this.$router.push(`newsdetail?id=${id}&type=${this.newstype}`);
      const pathParam = Object.entries(this.mapTypes)
        .map(([param, value]) => ({
          param,
          value,
        }))
        .find((obj) => obj.param == this.$route.params.type).param;
      console.log(pathParam);
      // window.open(`/news/${pathParam}/${id}`, "_blank");
      // this.getAll();
      let title_en = item.url_seo_th
        ? item.url_seo_th
        : item.url_seo_en
        ? item.url_seo_en
        : item.title_en
        ? item.title_en
        : item.title_th;

      let modifiedUrl = title_en.replace(/ /g, "_");
      window.open(`/news/${pathParam}/${modifiedUrl}`, "_blank");
    },
    goback() {
      const pathParam = Object.entries(this.mapTypes)
        .map(([param, value]) => ({
          param,
          value,
        }))
        .find((obj) => obj.param == this.$route.params.type).param;
      this.$router.push(`/news/${pathParam}`);
    },
  },
};
</script>

<style scoped>
>>> p {
  margin-bottom: 5px;
}

>>> a {
  font-family: "IBM Plex Sans Thai Looped" !important;
}
</style>

<style lang="scss">
.cardbig {
  @media only screen and (min-width: 0px) {
    padding: 24px;
    gap: 24px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
  }
  @media only screen and (min-width: 414px) {
    padding: 24px;
    gap: 24px;
    // height: 84px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
  }
  @media only screen and (min-width: 1440px) {
    padding: 24px;
    gap: 24px;
    // height: 84px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
  }
}
.greenbutton {
  @media only screen and (min-width: 0px) {
    width: 100vw;
    height: auto;
    background: conic-gradient(
      from 51.2deg at 50% 50%,
      #4cbfb4 0deg,
      #2ab3a3 190deg
    );
  }
  @media only screen and (min-width: 414px) {
    width: 100vw;
    height: auto;
    background: conic-gradient(
      from 51.2deg at 50% 50%,
      #4cbfb4 0deg,
      #2ab3a3 190deg
    );
  }
  @media only screen and (min-width: 1440px) {
    width: 80vw;
    height: auto;
    background: conic-gradient(
      from 51.2deg at 50% 50%,
      #4cbfb4 0deg,
      #2ab3a3 190deg
    );
  }
}
</style>
