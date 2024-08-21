<template>
  <v-row align="center" justify="center" style="text-align: -webkit-center">
    <v-card>
      <v-row align="center" justify="center" style="text-align: -webkit-center">
        <!-- <v-col cols="12" class="text-center mt-10"> -->
        <v-img
          class="mt-10"
          max-width="600px"
          src="@/assets/404-error-page.png"
        ></v-img>
        <!-- </v-col> -->

        <v-col cols="12" class="text-center">
          <span>ไม่พบหน้าที่ท่านค้นหา</span>
        </v-col>
        <!-- <v-col cols="12" class="text-center mb-10">
          <v-btn rounded @click="gotohomepae()">กลับสู่หน้าหลัก</v-btn>
        </v-col> -->
      </v-row>
    </v-card>
  </v-row>
</template>
<script>
export default {
  //   methods: {
  //     gotohomepae() {
  //       this.$router.push("/");
  //     },
  //   },
  created() {
    this.$router.push("/");
  },
};
</script>