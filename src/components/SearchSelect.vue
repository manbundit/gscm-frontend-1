<template>
  <div class="tw-flex tw-w-full">
    <div class=" align-right " :class="{focus: isFocusing || currentValue}">
      <!-- <input type="select" ref="input" v-bind="{...$props, ...$attrs}" :value="currentValue" @change="onChange" @input="onChange" @focus="isFocusing = true" @blur="isFocusing = false" class="tw-w-full tw-h-full py-3 px-4 border-none no-outline" /> -->
      <v-select
          :items="items"
          value="ปี 2565"
          filled
        ></v-select>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: ["ปี 2565"],
        isFocusing: false,
        currentValue: ''
      }
    },
    methods: {
      onChange(e) {
        const val = e.target.value
        this.currentValue = val
        this.$emit('input', val)
      },
      onSearch() {
        this.$emit('onSearch', this.currentValue)
      },
      clear() {
        this.currentValue = ''
        this.$emit('input', '')
        this.$refs.input.focus()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .input-wrapper {
    &.focus {
      background: white;
      border-color: #2AB3A3;
    }
  }
  .no-outline {
    outline: none !important;
  }
</style>