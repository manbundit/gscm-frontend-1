<template>
  <v-row align="center" justify="center" class="text-center">
    <v-btn class="ml-0 mt-4 pl-0 mr-6"
      ><download-excel
        class="btn btn-default"
        :data="data"
        :fields="json_fields"
        worksheet="My Worksheet"
        name="ข้อมูลตามประเภทข้อมูล.xls"
        :header="
          'ข้อมูลตามประเภทข้อมูลทั้งหมด' +
          ' ระหว่างวันที่ ' +
          formDate +
          ' ถึง ' +
          toDate
        "
      >
        <img src="@/assets/Excel-Logo.png" width="50px" />
        Export ข้อมูลตามประเภทข้อมูล
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
        ประเภทข้อมูล: "type_name",
        "จำนวน(รายการ)": "count",
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
