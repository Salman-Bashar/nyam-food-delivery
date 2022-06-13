<template>
  <section class="self-center justify-self-center pl-24">
    <img
      class="w-4/5 h-4/5 object-contain rounded-full"
      :src="images[currentImageIndex]"
    />
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";

export default {
  name: "HeadImage",
  data() {
    return {
      images: [
        require("@/assets/images/foodImage01.jpg"),
        require("@/assets/images/foodImage02.jpg"),
        require("@/assets/images/foodImage03.jpg"),
        require("@/assets/images/foodImage04.jpg"),
        require("@/assets/images/foodImage05.jpg"),
      ],
      currentImageIndex: 0,
      interval: null,
    };
  },
  created() {
    this.changeImage();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeImage() {
      this.interval = setInterval(() => {
        const indexes = [0, 1, 2, 3, 4];
        this.currentImageIndex = nextElementInList(
          indexes,
          this.currentImageIndex
        );
      }, 3000);
    },
  },
};
</script>
