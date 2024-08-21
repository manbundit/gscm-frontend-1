<template>
  <v-row align="center" justify="center" class="text-center">
    <v-btn class="ml-4 mb-4"
      ><download-excel
        class="btn btn-default"
        :data="data"
        :fields="json_fields"
        worksheet="My Worksheet"
        name="รหัสบัตรเงินสดทั้งหมด.xls"
        :header="
          'รายการรหัสบัตรเงินสดทั้งหมด' +
          ' ระหว่างวันที่ ' +
          formDate +
          ' ถึง ' +
          toDate
        "
      >
        <img src="@/assets/Excel-Logo.png" width="50px" />
        ดาวน์โหลดคูปองทั้งหมด
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
        รหัสบัตรเงินสด: "voucherCode",
        ราคาคูปอง: "voucherPrice",
        สามารถใช้งานได้: "activeFlag",
        ชื่อผู้ใช้: "user.firstname",
        นามสกุลผู้ใช้: "user.lastname",
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
