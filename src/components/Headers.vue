<template>
  <v-img
    :src="img"
    class="tw-relative tw-w-full"
    :class="
      !img
        ? 'tw-h-[276px] sm:tw-h-[276px] md:tw-h-[308px]'
        : 'tw-h-[334px] sm:tw-h-[432px] md:tw-h-[462px]'
    "
  >
    <!-- <h1
      style="
        font-size: 1px;
        color: #ffffff00;
        position: absolute;
        pointer-events: none;
      "
    >
      {{ title }}
    </h1> -->
    <div
      :style="cssProps"
      class="tw-absolute tw-w-full tw-h-full tw-top-0 tw-left-0 tw-pointer-events-none"
    >
      <img
        v-if="polygon"
        src="@/assets/polygon/Network_header.png"
        class="tw-h-2/3 sm:tw-h-full -tw-mr-10 sm:tw-mr-0 tw-opacity-70 tw-ml-auto"
      />
    </div>
    <v-row align="center" no-gutters class="tw-w-full">
      <v-col
        v-if="$slots.before"
        cols="12"
        class="tw-absolute tw-text-center sm:tw-text-left sm:!tw-max-w-md sm:tw-left-4 md:tw-left-16 tw-mb-[24px]"
        :class="!img ? 'tw-bottom-[40%]' : 'tw-bottom-1/2  sm:tw-bottom-2/3'"
      >
        <slot name="before"></slot>
      </v-col>
      <v-col
        cols="12"
        class="tw-absolute tw-text-center sm:tw-text-left !tw-px-4 sm:!tw-px-0 sm:!tw-max-w-[95%] md:!tw-max-w-[600px] sm:tw-left-4 md:tw-left-16"
        :class="!img ? 'tw-top-[60%]' : 'tw-top-1/2  sm:tw-top-1/3'"
      >
        <div
          v-if="$slots.above"
          class="tw-w-full tw-text-center sm:tw-text-left -tw-mt-8 sm:tw-mt-auto header-tag"
        >
          <slot name="above"></slot>
        </div>
        <h1>
          <span
            class="header-title"
            :class="
              !img
                ? 'tw-text-[36px] md:tw-text-[42px]'
                : 'tw-text-[36px] sm:tw-text-[57px]'
            "
            style="color: white; font-weight: 600"
          >
            {{ $t(title) }}
          </span>
          <br />
          <br />
          <span
            class="tw-text-[16px] sm:tw-text-[22px]"
            style="color: white; font-weight: 400; white-space: pre-line"
          >
            {{ $t(description) }}
          </span>
        </h1>
      </v-col>
    </v-row>
  </v-img>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    img: String,
    polygon: Boolean,
    smColor: String,
    mdColor: String,
  },
  computed: {
    cssProps() {
      if (window.innerWidth > 600) return this.mdColor;
      return this.smColor;
    },
  },
};
</script>