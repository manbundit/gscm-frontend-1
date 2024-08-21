<template>
  <v-row align="center" justify="center" class="text-center">
    <v-btn class="ml-0 mb-4 pl-0"
      ><download-excel
        class="btn btn-default"
        :data="data"
        :fields="json_fields"
        worksheet="My Worksheet"
        name="Export Order.xls"
        header="รายการออเดอร์ทั้งหมด"
      >
        <!-- :header="
          'รายการออเดอร์ทั้งหมด' +
          ' ระหว่างวันที่ ' +
          formDate +
          ' ถึง ' +
          toDate
        " -->
        <img src="@/assets/Excel-Logo.png" width="50px" />
        Export Order
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
        เลขออเดอร์: {
          field: "order.orderNo",
          callback: (value) => {
            return "'" + value.toString();
          },
        },
        วันที่สั่งซื้อ: {
          field: "order.orderdate",
          callback: (value) => {
            return moment(value).format("MM/DD/YYYY hh:mm");
          },
        },
        หมายเลขจัดส่ง: "order.deliveryNo",
        ชื่อผู้สั่งซื้อ: "order.name",
        หมายเลขติดต่อ: {
          field: "order.tel",
          callback: (value) => {
            return "'" + value.toString();
          },
        },
        อีเมล: "order.email",
        sku: "product.sku",
        สินค้า: "product.productName",
        // รายละเอียดสินค้า: "product.description",
        ราคาต่อหน่วย: "product.price",
        จำนวนสินค้า: "amount",
        ราคาสินค้ารวม: "order.totalPrice",
        ค่าจัดส่ง: "order.deliveryPrice",
        ส่วนลดค่าสินค้า: "order.productDiscount",
        ส่วนลดค่าจัดส่ง: "order.deliveryDiscount",
        ส่วนลดคูปอง: "order.couponAmt",
        // ชื่อคูปอง: "order.coupon.couponName",
        ส่วนลดบัตรเงินสด: "order.voucherAmt",
        ราคาสุทธิ: "order.paymentPrice",
        สถานะ: "",
        รหัสชำระเงิน: "order.paymentTransactionId",
        // ที่อยู่:"order.addressDetail" +" "+"order.disrrict"+ " "+ "order.subDistrict"+" "+"order.province"+ " "+ "order.postalCode",
        // ค่าจัดส่ง: {
        //   field: "order.deliveryPrice",
        //   callback: (value) => {
        //     return "'" + value.toString();
        //   },
        // },

        สถานะ: {
          field: "order.orderStatus",
          callback: (value) => {
            if (value == "WAITING_PAYMENT") {
              return "รอการชำระเงิน";
            }
            if (value == "WAITING") {
              return "WAITING";
            }
            if (value == "SUCCESS") {
              return "ชำระเงินสำเร็จ";
            }
            if (value == "CANCEL") {
              return "ยกเลิก";
            }
            if (value == "DERIVERED") {
              return "ส่งแล้ว";
            }
            if (value == "PAID") {
              return "PAID";
            }
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
