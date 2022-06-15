<template>
  <section class="mb-24">
    <h1
      class="font-bold tracking-tighter text-8xl mb-12"
      data-test="action-phrase"
    >
      <span :class="actionClasses">{{ action }}</span>
      <br />
      Food Delivery
    </h1>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";

export default {
  name: "HeadLine",
  data() {
    return {
      action: "Fastest",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Fastest", "Delicious", "Quality", "Hygenic", "Nyam"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.fastest {
  color: #f9ab00;
}

.delicious {
  color: #eb3738;
}

.quality {
  color: #1a73a8;
}

.hygenic {
  color: #34a853;
}

.nyam {
  color: #eb3738;
}
</style>
