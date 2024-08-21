<template>
  <v-card
    class="
      sm:!tw-hidden
      tw-block tw-text-center
      !tw-bg-brand
      tw-py-16 tw-w-full
      !tw-border-0
    "
    style="border-radius: 0px;"
  >
    <div
      class="
        tw-flex tw-items-center tw-justify-center tw-flex-wrap
        pt-top
        tw-text-center
      "
    >
      <span
        style="
          font-family: 'IBM Plex Sans Thai';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 36px;
          color: #ffffff;
          text-align: center;
        "
      >
        {{ $t("welcome") }}
        <br />
        <span
          style="
            width: 288px;
            height: 156px;
            font-family: 'IBM Plex Sans Thai';
            font-style: normal;
            font-weight: 600;
            font-size: 36px;
            line-height: 52px;
            text-align: center;
            color: #ffffff;
          "
          >{{ $t("facultyOfCommunicationArts") }} <br />{{
                      $t("andManagementInnovation")
                    }}</span
        >
        <br />{{ $t("nida") }}
      </span>
    </div>
  </v-card>
</template>