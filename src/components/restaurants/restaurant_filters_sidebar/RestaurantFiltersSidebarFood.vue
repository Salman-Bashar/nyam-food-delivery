<template>
  <accordion-button header="Food Items">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input id="Pizza" type="checkbox" class="mr-3" />
            <label for="Pizza">Pizza</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Burger" type="checkbox" class="mr-3" />
            <label for="Burger">Burger</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Pasta" type="checkbox" class="mr-3" />
            <label for="Pasta">Pasta</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Steak" type="checkbox" class="mr-3" />
            <label for="Steak">Steak</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion-button>
</template>

<script>
import AccordionButton from "@/components/shared/AccordionButton.vue";

export default {
  name: "RestaurantFiltersSidebar",
  components: { AccordionButton },
};
</script>
