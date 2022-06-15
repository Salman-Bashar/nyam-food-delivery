<template>
  <li class="mb-7">
    <router-link
      to="/restaurants/1"
      class="block mx-auto bg-brand-red-1 border border-solid border-brand-grey-2 rounded hover:shadow-grey"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-grey-2">
        <h2 class="mb-2 text-2xl">Nyam Restaurant</h2>
        <div class="mr-5">
          <span>House X, Road X, Gulshan-1, Dhaka</span>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Restaurant Info:</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li>Ratings: 4.5</li>
              <li>Total Reviews: 312</li>
              <li>
                Latest Review: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link to="/restaurants/1" class="font-bold text-brand-dark-1"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "RestaurantListing",
};
</script>
