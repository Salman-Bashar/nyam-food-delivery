<template>
  <img :src="imageLink" class="w-10 h-10 image-contain rounded-3xl mr-7" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: require("@/assets/images/profile-image.png"),
    };
  },
};
</script>
