<template>
  <!-- <v-form style="background-color: #fff">
    <v-img src="@/assets/icons/staffImage.png" style="margin-top: -54px">
      <v-row justify="center">
        <v-col
          cols="10"
          style="position: absolute; bottom: 10%; left: 10%"
          class="totextcenter"
        >
          <v-chip outlined dark style="border: solid 1px">
            เกี่ยวกับคณะ
          </v-chip>
          <br />
          <span style="color: white; font-weight: 600; font-size: 57px">
            เครือข่ายความร่วมมือ
          </span>
          <br />
          <span style="color: white; font-weight: 400; font-size: 22px"
            >เหล่าองค์กรที่ให้การสนับสนุนและร่วมงานกับเรา</span
          >
        </v-col>
      </v-row>
    </v-img> -->
  <!-- <v-row style="background-color: #fff" class="-mt-top" no-gutters> -->
  <v-form style="background-color: #fff" class="-mt-top">
    <Headers
      :img="require('@/assets/icons/About.jpg')"
      polygon
      title="cooperationNetwork"
      description="organizationsThatSupportAndCollaborateWithTheFacultyOfCommunicationArtsAndManagementInnovation"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #2FEAA8 0%, rgba(2, 140, 243, 0.92) 51.56%, rgba(2, 140, 243, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #2FEAA8 0%, rgba(2, 140, 243, 0.92) 51.56%, rgba(2, 140, 243, 0.25) 100%);"
    >
      <template #above>
        <v-chip outlined dark style="border: solid 1px">
          {{ $t("aboutTheFaculty") }}
        </v-chip>
      </template>
    </Headers>

    <!-- //body -->
    <!-- <v-form style="background-color: #fff"> -->
    <!-- <v-row align="center" justify="center" class="my-12 py-12 mx-3"> -->
    <div class="tw-my-[24px] sm:tw-my-[36px] md:tw-my-[48px]">
      <div
        class="tw-max-w-[1680px] tw-mx-auto tw-grid tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-[24px] tw-px-[16px] md:tw-px-[64px]"
      >
        <div v-for="i in items" :key="item">
          <PartnerCard
            :name="
              $store.state.lang == 'th'
                ? i.name_th
                : i.name_en
                ? i.name_en
                : i.name_th
            "
            :image="i.cover_img_url"
          />
        </div>
      </div>
    </div>

    <!-- <v-col sm="6" md="3" cols="12" v-for="i in items" :key="i" class="pa-3" >
      <PartnerCard :name="i.name_th" :image="i.cover_img_url" />
    </v-col> -->
    <!-- </v-row> -->
    <!-- <v-row justify="center"> -->
    <Footers />
    <!-- </v-row> -->
    <!-- </v-form> -->
    <!-- </v-row> -->
  </v-form>
</template>
<script>
import Footers from "@/components/Footers.vue";
import BigButton from "../BigButton.vue";
import PartnerCard from "../PartnerCard.vue";
import Headers from "@/components/Headers.vue";
export default {
  components: { Footers, BigButton, Headers, PartnerCard },
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
        { title: "แบบคำร้องทั่วไป (PDF)" },
        { title: "แบบคำร้องขอพักการศึกษา/รักษาสถานภาพการศึกษา (PDF)" },
        { title: "แบบคำร้องขอหนังสือไปหน่วยงานภายนอก (PDF)" },
        { title: "แบบฟอร์มการแจ้งเลือกแผนการเรียนและสาขาวิชาเอก (PDF)" },
      ],
      selectedtab: 1,
      selectedbtn: 1,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.getAll();
  },
  watch: {},
  methods: {
    async getAll() {
      const response = await this.axios.get(`${process.env.VUE_APP_API}/mou`);
      console.log("news", response.data.data);
      this.items = response.data.data;
    },
    gotodetail(id) {
      this.$router.push(`/staff-detail?id=${id}`);
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
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/opacity/see-through */
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
  position: -webkit-sticky;
  /* for Safari */
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

.cardtitle {
  width: 260px;
  height: 32px;
  font-family: "IBM Plex Sans Thai";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: #0d0e10;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.cardsubtitle {
  width: 260px;
  height: 24px;
  font-family: "IBM Plex Sans Thai";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #545454;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
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
    height: 84px;
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