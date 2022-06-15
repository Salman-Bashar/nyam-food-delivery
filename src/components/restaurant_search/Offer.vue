<template>
  <ul>
    <li v-for="offer in offers" :key="offer.id">
      <slot :offer="offer"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Offer",
  data() {
    return {
      offers: [
        {
          id: 1,
          img: require("@/assets/images/foodImage01.jpg"),
          title: "Buy 1 Get 1 Offer!",
          description:
            "This week enjoy our double burger offer, by paying only for one. Time limited offer. Get it now!",
        },
        {
          id: 2,
          img: require("@/assets/images/foodImage02.jpg"),
          title: "10% Discount Offer!",
          description: "Get any pizza at 10% discount.",
        },
        {
          id: 3,
          img: require("@/assets/images/foodImage04.jpg"),
          title: "Free Wedges with Steak Platter",
          description: "Get free wedges with any of our steak platters.",
        },
      ],
    };
  },
};
</script>
