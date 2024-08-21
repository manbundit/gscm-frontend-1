<template>
  <div class="content-container tw-max-w-[1680px] tw-mx-auto">
    <div class="content
      tw-pt-[48px] tw-pb-[120px] tw-z-index-1 tw-relative
      tw-px-[16px] md:tw-px-[60px]
      tw-max-w-[100%] md:tw-max-w-[calc(100%-120px)] lg:tw-max-w-[calc(100%-360px-120px)]
    ">
      <div class="tw-mb-[20px] tw-font-semibold tw-text-[22px]">{{ $t("documentDownload") }}</div>
      <div class="content-inner tw-relative">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>