<template>
  <a :href="shareUrl" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    socialNetwork: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
  },
  computed: {
    shareUrl() {
      let url;
      switch (this.socialNetwork) {
        case 'facebook':
          url = `https://www.facebook.com/sharer/sharer.php?u=${this.url}`;
          break;
        case 'facebook-messenger':
          url = `fb-messenger://share?link=${this.url}`;
          break;
        case 'line':
          url = `https://line.me/R/msg/text/?${this.message}%0D%0A${this.url}`;
          break;
        case 'twitter':
          url = `https://twitter.com/share?url=${this.url}&text=${this.message}`;
          break;
        default:
          console.warn(`Unsupported social network: ${this.socialNetwork}`);
          return null;
      }
      return url;
    },
  },
};
</script>