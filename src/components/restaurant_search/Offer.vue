<template>
  <ul>
    <li v-for="offer in offers" :key="offer.id">
      <slot :offer="offer"></slot>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Offer",
  data() {
    return {
      offers: [],
    };
  },
  async mounted() {
    const baseUrl = "http://localhost:3000";
    const response = await axios.get(`${baseUrl}/offers`);
    this.offers = response.data;
  },
};
</script>
