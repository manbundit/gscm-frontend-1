<template>
  <v-row align="center" justify="center" class="text-center">
    <v-btn class="ml-0 mt-4 pl-0 mr-6"
      ><download-excel
        class="btn btn-default"
        :data="data"
        :fields="json_fields"
        worksheet="My Worksheet"
        name="ข้อมูลการแจ้งจุดเสี่ยง.xls"
        :header="
          'ข้อมูลการแจ้งจุดเสี่ยงทั้งหมด'
        "
      >
        <img src="@/assets/Excel-Logo.png" width="50px" />
        Export ข้อมูลการแจ้งจุดเสี่ยง
      </download-excel></v-btn
    >
  </v-row>
</template>
<script>
import moment from "moment";
export default {
  // :formDate="datefrom"
  // :toDate="dateto"
  props: ["data", "formDate", "toDate"],
  data() {
    return {
      json_fields: {
        ชื่อสถานที่: "name",
        รายละเอียด: "descriptions",
        ภาพถ่าย: "image_url",
        Latitude: "latitude",
        Longtitude: "longitude",
        วันที่แจ้ง: {
          field: "createdAt",
          callback: (value) => {
            return moment(value).format("MM/DD/YYYY hh:mm");
          },
        },
      },

      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8",
          },
        ],
      ],
      list1: [],
    };
  },
  async created() {
    // this.getHistory();
    // this.getREportXray();
  },
  methods: {
    // async getREportXray() {
    //   const response = await this.axios.get(
    //     `${process.env.VUE_APP_API}/form/xrayReport`
    //   );
    //   console.log("data", response.data.data[0]);
    //   this.list1 = response.data.data[0];
    // },
  },
};
</script>
