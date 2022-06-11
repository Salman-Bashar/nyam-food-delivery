<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-brand-red-1">
      <div class="flex flex-nowrap h-full px-44 mx-auto">
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
              <a href="" class="flex items-center h-full py-2.5 font-medium">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Login"
            data-test="login-button"
            @click="userLogin"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";

export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage },
  data() {
    return {
      company: "Nyam.",
      menuItems: ["Home", "Services", "Menu", "Contact", "Location"],
      isLoggedIn: false,
    };
  },
  methods: {
    userLogin() {
      this.isLoggedIn = true;
    },
  },
};
</script>
