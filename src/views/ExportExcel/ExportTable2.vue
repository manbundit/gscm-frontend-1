<template>
  <v-row align="center" justify="center" class="text-center">
    <v-btn class="ml-0 mt-4 pl-0 mr-6"
      ><download-excel
        class="btn btn-default"
        :data="data"
        :fields="json_fields"
        worksheet="My Worksheet"
        name="สรุปรายชื่อผู้ต้องสงสัย.xls"
        :header="
          'สรุปรายชื่อผู้ต้องสงสัยทั้งหมด' +
          ' ระหว่างวันที่ ' +
          formDate +
          ' ถึง ' +
          toDate
        "
      >
        <img src="@/assets/Excel-Logo.png" width="50px" />
        Export สรุปรายชื่อผู้ต้องสงสัย
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
      //  { text: "ลำดับ", value: "number", align: "center" },
      // { text: "ชื่อ", value: "suspect_name", align: "center" },
      // { text: "นามสกุล", value: "suspect_lastname", align: "center" },
      // { text: "จำนวนที่ถูกแจ้ง(ครั้ง)", value: "count", align: "center" },
      // { text: "เพศ", value: "suspect_sex", align: "center" },
      // // { text: "เจ้าหน้าที่รัฐ", value: "",align:"center" },
      // { text: "สีผิว", value: "suspect_skin", align: "center" },
        ชื่อ: "suspect_name",
        นามสกุล: "suspect_lastname",
        "จำนวนที่ถูกแจ้ง(ครั้ง)": "count",
        เพศ: "suspect_sex",
        สีผิว: "suspect_skin",
        // วันที่รับแจ้ง: {
        //   field: "createdAt",
        //   callback: (value) => {
        //     return moment(value).format("MM/DD/YYYY hh:mm");
        //   },
        // },
        // วันที่ดำเนินการ: {
        //   field: "updatedAt",
        //   callback: (value) => {
        //     return moment(value).format("MM/DD/YYYY hh:mm");
        //   },
        // },
        // ผู้ดำเนินการ: "updateBy",
        // สถานะ: "status",
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
