<template>
  <v-card elevation="0" style="border-radius: 0px; height: auto;" class="text-center tw-mb-8">
    <div class="tw-aspect-square tw-p-8 tw-bg-gradient-to-b tw-from-[#2AB3A3]" style="width: 100%;text-align: -webkit-center;">
      <v-img :src="image" style="width: 244px; height: 286px;"></v-img>
    </div>
    <p class="!tw-mb-2" style="font-weight: 600; font-size: 20px; line-height: 32px">
      {{ name }}
    </p>
    <p class="!tw-mb-2" style="font-weight: 400; font-size: 14px; line-height: 24px">

      {{ position }}
    </p>
  </v-card>
</template>
<script>
export default {
  props: {
    image: String,
    name: String,
    position: String,
    id: Number
  },
  methods: {
    gotodetail(id) {
      this.$router.push(`/staff/${id}`);
    },
  }
};
</script>