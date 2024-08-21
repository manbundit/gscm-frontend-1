<template>
  <v-form class="-mt-top">
    <Headers
      :img="require('@/assets/icons/alumni-image.webp')"
      polygon
      title="successfulAlumnus"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #2FEAA8 0%, rgba(2, 140, 243, 0.92) 51.56%, rgba(2, 140, 243, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #2FEAA8 0%, rgba(2, 140, 243, 0.92) 51.56%, rgba(2, 140, 243, 0.25) 100%);"
    >
      <template #before>
        <div class="tw-flex tw-items-center tw-w-fit tw-mx-auto sm:tw-mx-0">
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
            >{{ $t("alumnus") }}</span
          >
        </div>
      </template>
    </Headers>
    <!-- <v-img src="@/assets/icons/New-Banner.png" style="margin-top: -54px">
      <v-row justify="center">
        <v-col cols="10" style="position: absolute; bottom: 10%; left: 10%">
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
            >ศิษย์เก่า</span
          >
          <br />
          <span style="color: white; font-weight: 600; font-size: 57px">
            ศิษย์เก่าที่
          </span>
          <br />
          <span style="color: white; font-weight: 600; font-size: 57px"
            >ประสบความสำเร็จ
          </span>
        </v-col>
      </v-row>
    </v-img> -->
    <v-row class="mt-12 ma-6" justify="start">
      <v-col cols="12" md="12">
        <span style="font-weight: 600; font-size: 36px; line-height: 52px">
          {{ $t("successfulAlumnus") }}
        </span>
      </v-col>
      <!-- <v-col cols="12" class="tw-relative">
        <div
          class="
            !tw-snap-x !tw-flex
            tw-w-full tw-px-12
            md:tw-justify-center
            !tw-overflow-x-scroll
          "
        >
        </div>
      </v-col> -->
      <!-- <v-col cols="3"> -->
      <AlumniCard
        v-for="i in alumniData"
        :key="i"
        class="!tw-px-3 tw-snap-start !tw-block"
        :class="i > 2 ? 'md:!tw-hidden lg:!tw-block' : ''"
        :fields="i.fields"
      />

      <!-- </v-col> -->
    </v-row>
    <v-row justify="center" no-gutters>
      <Footers />
    </v-row>
  </v-form>
</template>

<script>
import Footers from "@/components/Footers.vue";
import Headers from "../Headers.vue";
import AlumniCard from "../AlumniCard.vue";
export default {
  components: { Footers, Headers, AlumniCard },
  data() {
    return {
      alumniData: [],
    };
  },

  created() {
    // window.scrollTo(0, 0);
    this.getAllAlumni();
  },
  methods: {
    async getAllAlumni() {
      const auth = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer keyVuBPJGIwXXOQIU`,
        },
      };

      const response = await this.axios.get(
        `https://api.airtable.com/v0/appReDmebSKVQfkch/Student`,
        auth
      );

      // console.log("response alumni", response.data.records);
      this.alumniData = response.data.records.filter(
        (word) => word.fields.status == "Published"
      );
    },
    goback() {
      this.$router.push("/alumni");
    },
  },
};
</script>