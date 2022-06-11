<template>
  <button class="primary">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text"],
};
</script>

<style scoped>
button {
  @apply px-8 py-3 font-medium rounded-full;
}

.primary {
  @apply text-white bg-brand-red-2 hover:shadow-red;
}
</style>
