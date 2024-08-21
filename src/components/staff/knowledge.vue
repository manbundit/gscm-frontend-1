<template>
  <v-form style="background-color: #fff" class="-mt-top">
    <Headers
      :img="require('@/assets/icons/journeyBG.png')"
      polygon
      title="communicationArtsKnowledge"
      description="facultyOfCommunicationArtsAndManagementInnovation"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #B429F9 0%, rgba(255, 143, 74, 0.92) 51.56%, rgba(255, 143, 74, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #B429F9 0%, rgba(255, 143, 74, 0.92) 51.56%, rgba(255, 143, 74, 0.25) 100%);"
    >
      <template #above>
        <v-chip outlined dark style="border: solid 1px">
          {{ $t("academicWork") }}
        </v-chip>
      </template>
    </Headers>
    <!-- <Tabs :tabs="tabs" v-model="selectedtab" /> -->
    <!-- //body -->
    <div
      class="tw-flex tw-max-w-[1680px] tw-mx-auto tw-my-[48px] tw-px-[16px] md:tw-px-[64px] tw-flex-col-reverse sm:tw-flex-row"
      no-gutters
    >
      <span
        class="tw-self-start tw-mt-[16px] sm:tw-mt-0 sm:tw-self-end"
        style="font-weight: 600; font-size: 32px; color: #0d0e10"
        >{{ $t("documentDownload") }}</span
      >
      <!-- <v-text-field
        class="search-input"
        :placeholder="`ค้นหาจากชื่อ${datatype}`"
        outlined
        clearable
        append-icon="mdi-magnify"
      ></v-text-field> -->
    </div>

    <div
      class="tw-max-w-[1680px] tw-mx-auto tw-my-[48px] tw-px-[16px] md:tw-px-[64px]"
    >
      <div v-for="i in slicedItems" class="pa-0 wrap-cardbig">
        <div class="cardbig-new">
          <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap">
            <v-col
              cols="auto"
              class="text-md-right pa-0"
              style="place-self: center"
            >
              <v-icon
                class="tw-mr-[30px] pa-0 tw-mb-[16px] sm:tw-mb-0"
                style="font-weight: 600; font-size: 32px; color: #0d0e10"
                >mdi-file-document-outline</v-icon
              >
            </v-col>
            <div class="tw-shrink">
              <span
                class="mr-2 tw-text-md sm:tw-text-lg"
                style="font-weight: 600; color: #0d0e10; font-size: 16px"
              >
                {{
                  $store.state.lang == "th"
                    ? i.name_th
                    : i.name_en
                    ? i.name_en
                    : i.name_th
                }}</span
              >
              <!-- <a :href="i.attachFile1" download>Download PDF</a> -->
            </div>

            <div
              class="tw-shrink-0 tw-mt-[16px] sm:tw-mt-[0] tw-flex tw-flex-nowrap text-right ml-auto tw-w-full sm:tw-min-w-[120px] md:tw-min-w-[230px] sm:tw-max-w-[120px] md:tw-max-w-[230px]"
              style="place-self: center"
            >
              <v-btn
                color="#2AB3A3"
                text
                class="!tw-min-w-[100%] sm:tw-min-w-[auto] md:tw-mr-2 tw-flex tw-font-medium sm:px-2"
                @click="gotodownload(i.attachFile1)"
                ><img
                  class="tw-mr-2 sm:tw-mr-0 md:tw-mr-2"
                  src="/icons/document-view.svg"
                />
                <span class="md:tw-block tw-block sm:tw-hidden">{{
                  $t("viewDocument")
                }}</span></v-btn
              >
              <!-- <v-btn color="#2AB3A3" class="!tw-min-w-[50%] sm:tw-min-w-[auto] tw-flex tw-font-medium sm:px-2" text @click="onClickDownload(i.attachFile1)"
                ><img src="/img/download.svg" class="tw-mr-2 sm:tw-mr-0 md:tw-mr-2"/> <span class="md:tw-block tw-block sm:tw-hidden">{{ $t("download") }}</span></v-btn
              > -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-row class="my-10" align="center" justify="center" no-gutters>
      <v-btn
        class="text-center"
        color="#ddf2f0"
        v-if="slicedItems.length != items.length"
        @click="showMore()"
        style="
          color: #2ab3a3;
          border-radius: 0px;
          padding: 12px 16px;
          width: 128px;
          height: 48px;
          font-size: 16px;
          box-shadow: none;
        "
        >{{ $t("more") }}</v-btn
      >
    </v-row>
    <v-row justify="center" no-gutters>
      <Footers />
    </v-row>
  </v-form>
</template>
<script>
import Footers from "@/components/Footers.vue";
import BigButton from "../BigButton.vue";
import Headers from "../Headers.vue";
import SearchInput from "../SearchInput.vue";
import Tabs from "../Tabs.vue";
export default {
  components: { Footers, BigButton, Headers, Tabs, SearchInput },
  data() {
    return {
      // ข่าวสารและกิจกรรมคณะ
      // ประกาศทั่วไป
      // ประกาศผล
      // สาระน่ารู้
      title: "ข่าวสารและกิจกรรมคณะ",
      newstype: "",
      loading: false,
      showBanner: true,
      showNav: false,
      items: [
        // {
        //   title:
        //     "COMMUNICATION FOR LOCALISM EMPOWERMENT THROUGH SINGING CONTEST KIKDUU TV PROGRAM",
        //   name: "Pimchaya Fakpiem",
        // },
        // {
        //   title:
        //     "การรังแกทางไซเบอร์ผ่านสื่อออนไลน์ สาเหตุ และแนวทางการจัดการปัญหา",
        //   name: "พินวา แสนใหม่",
        // },
        // {
        //   title:
        //     "ROLES OF DISCOURSES AND THE MEANINGS OF SAME-SEX MARRIAGE COMMUNICATED IN THE NEWS OF MASS MEDIA IN THAILAND",
        //   name: "Siriwat Mathet",
        // },
        // {
        //   title: "แบบฟอร์มการแจ้งเลือกแผนการเรียนและสาขาวิชาเอก (PDF)",
        //   name: "Siriwat Mathet",
        // },
      ],
      tabs: [
        {
          id: 1,
          text: "วิทยานิพนธ์",
        },
        {
          id: 2,
          text: "งานวิจัย",
        },
      ],
      selectedtab: 1,
      selectedbtn: 1,
      datatype: "วิทยานิพนธ์",
      search: "",
      offset: 1,
      limit: 10,
      itemsToShow: 10,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.datatype = "วิทยานิพนธ์";
    this.getAll();
  },
  computed: {
    slicedItems() {
      return this.items.slice(0, this.itemsToShow);
    },
  },
  watch: {
    selectedtab(val) {
      if (val == 1) {
        this.datatype = "วิทยานิพนธ์";
        this.offset = 1;
        this.getAll();
      } else if (val == 2) {
        this.datatype = "งานวิจัย";
        this.offset = 1;
        this.getAll();
      }
    },
  },
  methods: {
    showMore() {
      this.itemsToShow += 10;
    },
    onClickDownload(val) {
      fetch(val)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "myfile.pdf";
          document.body.appendChild(a);
          a.click();
          setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          }, 0);
        });
    },
    handleSearch() {
      this.offset = 1;
      this.getAll();
    },
    gotodownload(val) {
      window.open(val);
    },
    loadMore() {
      this.offset = this.offset + this.limit;
      this.getAll();
    },
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/knowledgeLibraries`
      );
      // let itemfilter = response.data.data;
      // itemfilter.forEach((element) => {
      //   if (element.type == "งานวิจัย") {
      //     this.items.push(element);
      //   } else if (element.type == "วิทยานิพนธ์") {
      //     this.items.push(element);
      //   }
      // });
      this.items =
        this.offset > 1
          ? [...this.items, ...response.data.data]
          : response.data.data;
    },
    gotodetail(id) {
      this.$router.push(`/newsdetail?id=${id}&type=${this.newstype}`);
    },
    handleScroll() {
      // console.log("window.pageYOffset", window.pageYOffset);
      this.pageYOffset = window.pageYOffset;
      if (window.pageYOffset > 465) {
        // ซ่อน banner เปิด nav
        this.showBanner = false;
        this.showNav = true;
      } else if (window.pageYOffset == 0) {
        this.showBanner = true;
        this.showNav = false;
      }
    },
    // goload(val) {
    //   setTimeout(() => {
    //     // do function
    //     this.loading = true;
    //   }, 500);
    //   this.loading = false;
    // },
  },
};
</script>
  <style lang="scss" scoped>
.search-input {
  fieldset {
    padding: 0 !important;
  }
}
.bg-img-1 {
  position: absolute;
  right: -19%;
  width: 700px;
  height: 808px;
  .v-image__image {
    background-position: center;
    background-size: 198px 220px;
    margin-top: -90px;
  }
}
.btnblock {
  padding: 16px 24px;
  gap: 8px;
  width: 256px;
  height: 56px;
  border: 0.5px solid #e2e2e2;
  background: #ffffff;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.btnblocknav {
  padding: 16px 24px;
  gap: 8px;
  width: 256px;
  height: 56px;
  background: #ffffff;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.btnblockdark {
  padding: 16px 24px;
  gap: 8px;
  width: 256px;
  height: 56px;
  border: 0.5px solid #0d0e10;
  background: #0d0e10;
  color: #ffffff;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
* {
  box-sizing: border-box;
}
.btnblockgreen {
  padding: 16px 24px;
  gap: 8px;
  width: 256px;
  height: 56px;
  border: 0.5px solid #2ab3a3;
  background: #2ab3a3;
  color: #ffffff;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
* {
  box-sizing: border-box;
}

.bg-image {
  /* The image used */

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Position text in the middle of the page/image */
.bg-text {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 40%;
  padding: 20px;
  text-align: center;
}
.fixed-bar {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 4.3em;
  z-index: 2;
}
.selectedtab {
  padding: 20px 24px;
  gap: 16px;
  width: 212px;
  height: 68px;
  border-bottom: 3px solid #2ab3a3;
}
.notselectedtab {
  padding: 20px 24px;
  gap: 16px;
  width: 212px;
  height: 68px;
}
.selectedbtn {
  padding: 12px 18px;
  border: 1px solid #2ab3a3;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
}
.notselectedbtn {
  padding: 12px 18px;
  background: #f6f6f6;
  border: 1px solid #eeeeee;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
}
.selectedspan {
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #2ab3a3;
}
.notselectedspan {
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #0d0e10;
}
</style>
<style lang="scss" scoped>
.wrap-cardbig {
  border: 1px solid #e2e2e2;
  &:not(:last-child) {
    border-bottom: none;
  }
}
.cardbig-new {
  @media only screen and (min-width: 0px) {
    padding: 24px;
    gap: 24px;
    background: #ffffff;
    height: auto;
  }
  @media only screen and (min-width: 414px) {
    padding: 24px;
    gap: 24px;
    // height: 84px;
    background: #ffffff;
  }
  @media only screen and (min-width: 1440px) {
    padding: 24px;
    gap: 24px;
    // height: 84px;
    background: #ffffff;
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