<template>
  <footer>
    <section class="flex flex-col h-72 pt-10 pb-20 bg-white">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-4">
          <div class="flex flex-nowrap">
            <img :src="logo" class="h-8 w-8 mr-2" />
            <div class="text-l font-bold">Nyam.</div>
          </div>
          <div class="mt-2">Fast & reliable delivery service in the city.</div>
        </div>
        <div class="col-start-6 col-span-2">
          <div class="font-bold mb-4">Links</div>
          <div>
            <ul class="list-none">
              <li
                v-for="menuLink in menuLinks"
                :key="menuLink"
                class="py-2"
                data-test="main-nav-menu-item"
              >
                <a href="" class="font-normal">{{ menuLink }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-start-8 col-span-2">
          <div class="font-bold mb-4">About</div>
          <div>
            <ul class="list-none">
              <li
                v-for="aboutLink in aboutLinks"
                :key="aboutLink"
                class="py-2"
                data-test="main-nav-menu-item"
              >
                <a href="" class="font-norma">{{ aboutLink }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-start-10 col-span-2">
          <div class="font-bold mb-4">Our Office</div>
          <div>
            <div>
              <span>Bangladesh</span><br /><span>Flat X, Road X</span
              ><br /><span>Gulshan-1, Dhaka</span>
            </div>
          </div>
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
    <div class="font-light text-center mb-4 pt-4 border-t border-brand-dark-1">
      &copy; Nyam. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
  data() {
    return {
      logo: require("@/assets/images/logo.png"),
      menuLinks: ["Home", "Services", "Restaurants", "Contact", "Career"],
      aboutLinks: ["Partners", "Press", "Community"],
    };
  },
};
</script>
