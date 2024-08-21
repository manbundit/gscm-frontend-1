<template>
  <v-row align="center" justify="center" class="text-center">
    <v-btn class="ml-4 mb-4"
      ><download-excel
        class="btn btn-default"
        :data="data"
        :fields="json_fields"
        worksheet="My Worksheet"
        name="สรุปการขายSCB.xls"
        header="สรุปการขายSCB"
      >
        <img src="@/assets/Excel-Logo.png" width="50px" />
        Export สรุปการขายSCB
      </download-excel></v-btn
    >
  </v-row>
</template>
<script>
export default {
  // :formDate="datefrom"
  // :toDate="dateto"
  props: ["data", "formDate", "toDate"],
  data() {
    return {
      json_fields: {
        วันที่สั่งซื้อ: "order_Date",
        รุ่น: "device_Name",
        สี: "device_Colour",
        หมายเลขสั่งซื้อ: "order_Id",
        ชื่อจริง: "first_Name",
        นามสกุล: "last_Name",
        "ที่อยู่ 1": "address_Line1",
        "ที่อยู่ 2": "address_Line2",
        "ที่อยู่ 3": "address_Line3",
        "ที่อยู่ 4": "address_Line4",
        รหัสไปรษณีย์: "zipc_Code",
        เบอร์โทรศัพท์: "phone_No",
        อีเมล: "email_id",
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
