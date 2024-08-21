<template>
  <v-card elevation="0" style="border-radius: 0px" class="text-center tw-mb-8">
    <div class="tw-aspect-square tw-p-6 tw-bg-gradient-to-b tw-from-[#2AB3A3]">
      <!-- <v-img src="@/assets/icons/alumni-man.png"></v-img> -->
      <v-img :src="fields.image[0].url" width="250px" height="250px"></v-img>
      <!-- <v-img
        v-if="fields.image[0]"
        :src="
          fields.image[0].thumbnails
            ? fields.image[0].thumbnails.url
            : fields.image[0].url
        "
      ></v-img>
      <v-img v-else src="@/assets/icons/alumni-man.png"></v-img> -->

      <!-- <v-img :src="fields.image[0].url"></v-img> -->
      <!-- {{ fields.image }} -->
    </div>
    <p
      class="!tw-mb-2"
      style="font-weight: 600; font-size: 20px; line-height: 32px"
    >
      {{ fields.firstname }} {{ fields.lastname }}
    </p>
    <p
      class="!tw-mb-2"
      style="font-weight: 400; font-size: 14px; line-height: 24px"
    >
      {{ fields.ระดับปริญญา }} {{ fields.batch }}
      <br />
      {{ fields.major }}
    </p>
    <p
      class="!tw-mt-2 !tw-mb-1"
      style="
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #2ab3a3;
      "
    >
      <v-icon color="#2AB3A3">mdi-briefcase-outline</v-icon>{{ $t("job") }}
    </p>
    <p
      class="!tw-mb-2"
      style="
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #0d0e10;
      "
    >
      {{ fields.job.length > 40 ? fields.job.substring(0, 40)+'...' : fields.job }}
    </p>
  </v-card>
</template>
<script>
export default {
  props: {
    name: String,
    level: String,
    branch: String,
    jobs: String,
    fields: Object,
  },
  created() {
    // console.log("fields", this.fields);
  },
};
</script>