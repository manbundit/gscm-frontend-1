
<template>
  <!-- <v-container> -->
  <div class="tw-flex tw-gap-[24px] sm:tw-flex-row tw-flex-col">

    <div class="tw-flex-1">
      <div
        style="background-color: #EEFBFA; width: 100%;"
        class="tw-p-[32px] tw-flex tw-flex-col tw-gap-[32px]"
      >

          <img class="tw-max-w-[48px]" src="/about/education.png"/>
          <div>
            <span class="tw-text-[28px] tw-font-semibold tw-mb-[6px]">{{ form.graduated_amount }} </span
            >{{ $t("person") }}
            <div class="tw-mt-[6px]">
              <span style="font-weight: 400; font-size: 16px;">{{ $t("graduatingStudent") }}</span>
            </div>
          </div>

      </div>
    </div>

    <div class="tw-flex-1">
      <div
        style="background-color: #EEFBFA; width: 100%;"
        class="tw-p-[32px] tw-flex tw-flex-col tw-gap-[32px]"
      >

        <img class="tw-max-w-[48px]" src="/about/certification-star.png"/>
        <div>
          <span class="tw-text-[28px] tw-font-semibold tw-mb-[6px]">{{ form.master_amount }} </span
          >{{ $t("person") }}
          <div class="tw-mt-[6px]">
            <span style="font-weight: 400; font-size: 16px;">{{ $t("masterStudent") }}</span>
          </div>
        </div>

      </div>
    </div>

    <div class="tw-flex-1">
      <div
        style="background-color: #EEFBFA; width: 100%;"
        class="tw-p-[32px] tw-flex tw-flex-col tw-gap-[32px]"
      >

        <img class="tw-max-w-[48px]" src="/about/certification-badge.png"/>
        <div>
          <span class="tw-text-[28px] tw-font-semibold tw-mb-[6px]">{{ form.doctor_amount }} </span
          >{{ $t("person") }}
          <div class="tw-mt-[6px]">
            <span style="font-weight: 400; font-size: 16px;">{{ $t("doctoralStudent") }}</span>
          </div>
        </div>

      </div>

    </div>
  </div>
  <!-- </v-container> -->
</template>
<script>
import { Decode } from "@/services";
export default {
  data() {
    return {
      form: {
        graduated_amount: "",
        master_amount: "",
        doctor_amount: "",
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/c_configs/2`
      );
      console.log("response", response);
      this.form = response.data.data;
    },
  },
};
</script><style lang="scss">
.fontbig {
  @media only screen and (min-width: 0px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 414px) {
    font-size: 36px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 42px;
  }
}
</style>