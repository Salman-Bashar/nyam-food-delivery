<template>
  <accordion-button header="Location">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input id="Dhanmondi" type="checkbox" class="mr-3" />
            <label for="Dhanmondi">Dhanmondi</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Uttara" type="checkbox" class="mr-3" />
            <label for="Uttara">Uttara</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Mirpur" type="checkbox" class="mr-3" />
            <label for="Mirpur">Mirpur</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Banani" type="checkbox" class="mr-3" />
            <label for="Banani">Banani</label>
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
