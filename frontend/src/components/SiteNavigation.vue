<template>
  <header class="sticky top-0 bg-app-primary shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6"
    >
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-file text-2xl sm:text-xl"></i>
          <p class="text-2xl sm:text-xl">Bulletins</p>
        </div>
      </RouterLink>

      <div class="flex gap-3 flex-1 justify-end">
        <i
          class="fa-solid fa-right-from-bracket text-xl sm:text-lg hover:text-app-secondary duration-150 cursor-pointer"
          @click="logout"
        ></i>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  localStorage.removeItem("user");
  router.replace({ name: "signin" });
};
</script>
