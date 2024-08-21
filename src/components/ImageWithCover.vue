<template>
  <div
    :class="`
      tw-w-full
      tw-aspect-${aspectRatio}
      tw-relative
      tw-overflow-hidden
      tw-flex
      tw-justify-center
    `"
  >
    <div class="tw-absolute tw-w-full tw-h-full">
      <v-img :src="src" width="100%" height="100%" cover />
    </div>
    <div class="tw-backdrop-blur-2xl tw-absolute tw-w-full tw-h-full" :class="{'tw-bg-backdrop/20': !!hasBackdrop}" />
    <div :class="`tw-p-[${margin}] tw-w-full tw-flex te-items-center tw-justify-center`">
      <v-img :src="src" contain />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    aspectRatio() {
      return this.ratio || 'video'
    }
  },
  props: ["src", "ratio", 'margin', 'hasBackdrop'],
};
</script>