<template>
  <div>
    <Homepage />
  </div>
</template>
<script>
import Homepage from "@/components/Homepage";
export default {
  components: {
    Homepage,
  },
  created() {
    // if (localStorage.getItem('userBebraveWeb') === null) {
    //   this.$router.push('/').catch(() => {})
    // }
  },
};
</script>
