<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-brand-red-1">
      <div class="flex flex-nowrap h-full px-44 mx-auto">
        <img :src="logo" class="h-12 mr-2 pt-4" />
        <a href="/" class="flex items-center h-full text-xl font-bold">{{
          company
        }}</a>

        <nav class="h-full ml-48">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full ml-14 first:ml-0"
              data-test="main-nav-menu-item"
            >
              <a
                href=""
                class="flex items-center h-full py-2.5 font-bold hover:text-brand-red-2 hover:border-b-2 hover:border-brand-red-2"
                >{{ menuItem }}</a
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <div>
            <font-awesome-icon
              :icon="['fas', 'bag-shopping']"
              class="mr-12 h-6"
            />
          </div>
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Login"
            data-test="login-button"
            @click="userLogin"
          />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" data-test="sub-nav" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import ProfileImage from "@/components/navigation/ProfileImage.vue";
import SubNav from "@/components/navigation/SubNav.vue";

export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage, SubNav },
  data() {
    return {
      company: "Nyam.",
      logo: require("@/assets/images/logo.png"),
      menuItems: ["Home", "Services", "Restaurants"],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    userLogin() {
      this.isLoggedIn = true;
    },
  },
};
</script>
