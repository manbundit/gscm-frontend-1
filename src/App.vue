<template>
  <v-app style="background-color: #f2f4f7">
    <Seo :key="$route.path + 'seo'" />
    <div>
      <router-view :key="$route.path + 'router'" />
    </div>
    <footer>
      <cookie-law theme="dark-lime" buttonText="ยอมรับ">
        <div slot="message">
          เว็บไซต์นี้ใช้คุกกี้
          เราใช้คุกกี้เพื่อให้ท่านได้รับประสบการณ์การใช้งานที่ดีที่สุดบน
          เว็บไซต์ของเรา
        </div>
        <div slot="buttonText">ยอมรับ</div>
      </cookie-law>
    </footer>
  </v-app>
</template>

<script>
import Seo from "@/components/Seo.vue";
import CookieLaw from "vue-cookie-law";
export default {
  methods: {},
  watch: {
    "$route.path"() {
      this.$nextTick(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    },
  },
  components: { Seo, CookieLaw },
};
</script>
<style>
@import "./assets/styles.css";
@import "./styles/global.scss";
</style>
