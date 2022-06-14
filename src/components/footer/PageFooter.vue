<template>
  <footer>
    <section class="flex flex-col h-56 pt-10 pb-20 bg-white">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-4">
          <div class="flex flex-nowrap">
            <img :src="logo" class="h-8 w-8 mr-2" />
            <div class="text-l font-bold">Nyam.</div>
          </div>
          <div class="mt-2">Fast & reliable delivery service in the city.</div>
          <div class="pt-2 text-m">Call Us: +880 1XXXXXXXXX</div>
          <div class="flex flex-nowrap h-5 pt-5 text-3xl">
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              class="text-blue-900 pr-3"
            />
            <font-awesome-icon :icon="['fab', 'instagram']" class="px-3" />
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              class="text-blue-500 px-3"
            />
            <font-awesome-icon
              :icon="['fab', 'youtube']"
              class="text-red-700 px-3"
            />
          </div>
        </div>
        <div class="col-start-6 col-span-2">
          <div class="font-bold mb-4">Links</div>
          <div>
            <ul class="list-none">
              <li
                v-for="menuLink in menuLinks"
                :key="menuLink"
                class="py-2 hover:font-bold"
                data-test="footer-menu-links"
              >
                <a href="" class="font-normal hover:font-bold">{{
                  menuLink
                }}</a>
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
                data-test="footer-about-links"
              >
                <a href="" class="font-normal hover:font-bold">{{
                  aboutLink
                }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-start-10 col-span-2">
          <div class="font-bold mb-4">Our Office</div>
          <div>
            <div>
              <span>Flat X, Road X</span><br /><span>Gulshan-1, Dhaka</span
              ><br /><span>Bangladesh</span>
            </div>
          </div>
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
    <section class="bg-brand-dark-1 border-t border-brand-dark-1">
      <div class="text-center font-light text-white pt-4">
        &copy; Nyam. All rights reserved.
      </div>
      <div class="text-right p-2 font-bold text-brand-red-2">
        Made with <font-awesome-icon :icon="['fas', 'heart']" /> & VueJS
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
  data() {
    return {
      logo: require("@/assets/images/logo.png"),
      menuLinks: ["Home", "Services", "Restaurants"],
      aboutLinks: ["Partners", "Press", "Career"],
    };
  },
};
</script>
