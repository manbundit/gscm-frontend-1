<template>
  <v-card elevation="0" style="border-radius: 0px" class="text-center tw-mb-8">
    <div class="tw-aspect-square tw-p-8 tw-bg-gradient-to-b tw-from-[#2AB3A3] partner-card-item">
      <v-img :src="image"></v-img>
    </div>
    <p class="!tw-mb-2" style="font-weight: 600; font-size: 20px; line-height: 32px">
      {{ name }}
    </p>
  </v-card>
</template>
<script>
export default {
  props: {
    image: String,
    name: String,
  },
  methods: {
    gotodetail(id) {
      this.$router.push(`/staff-detail?id=${id}`);
    },
  }
};
</script>

