<template>
  <button :class="buttonClass" data-test="action-button">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply px-8 py-3 font-medium;
}

.primary {
  @apply rounded-full text-white bg-brand-red-2 hover:shadow-red;
}

.secondary {
  @apply text-brand-red-2 bg-transparent hover:text-white hover:bg-brand-red-2;
}
</style>
