<template>
  <v-card elevation="0" style="border-radius: 0px" class="text-center tw-mb-8">
    <div class="tw-aspect-square tw-p-8 tw-bg-gradient-to-b tw-from-[#2AB3A3]">
      <v-img :src="image"></v-img>
    </div>
    <p class="!tw-mb-2" style="font-weight: 600; font-size: 20px; line-height: 32px">
      {{ name }}
    </p>
    <p class="!tw-mb-2" style="font-weight: 400; font-size: 14px; line-height: 24px">

      {{ position }}
    </p>
    <v-btn elevation="0" color="#fff" style="
                box-sizing: border-box;
                border-radius: 0px;
                border: 1px solid #2ab3a3;
                padding: 12px 16px;
                width: 128px;
                height: 48px;
                font-size: 16px;
              " @click="gotodetail(id)">
      <span style="
                  font-family: 'IBM Plex Sans Thai';
                  font-style: normal;
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 24px;
                  text-align: center;
                  color: #2ab3a3;
                  box-shadow: none;
                ">{{ $t('more') }}</span>
    </v-btn>
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
      this.$router.push(`/teachers/${id}`);
    },
  }
};
</script>