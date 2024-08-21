<template>
  <div class="tab-wrapper tw-flex tw-flex-wrap tw-gap-[16px]">
    <div v-for="tab in tabs" :class="
      selectedtab == tab.id ? 'btnselected--staff' : 'btnnotselected--staff'
    " :color="selectedtab == tab.id ? 'white' : '#F6F6F6'" @click="selectedtab = tab.id">
      <span :class="
        selectedtab == tab.id ? 'fontselected' : 'fontnotselected'
      ">{{ $t(tab.text) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: Array,
  },
  data() {
    return {
      selectedtab: "",
    };
  },
  watch: {
    selectedtab(val) {
      // console.log(val);
      this.$emit("input", val);
    },
    value(val) {
      this.selectedtab = val;
    },
  },
  mounted() {
    this.selectedtab = this.$attrs.value;
  },
}
</script>

<style lang="scss" scoped>
  .btnselected--staff {
    padding: 12px 18px;
    border: 1px solid #2ab3a3;
    border-radius: 0px;
  }

  .btnnotselected--staff {
    padding: 12px 18px;
    border: 1px solid #eeeeee;
    background-color: #f6f6f6;
    border-radius: 0px;
  }
  .fontselected {
    font-family: "IBM Plex Sans Thai";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #2ab3a3;
  }

  .fontnotselected {
    font-family: "IBM Plex Sans Thai";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #0d0e10;
  }
</style>