<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-app-primary">
    <SiteNavigation />
    <RouterView v-slot="{ Component }" class="flex-1">
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
</script>

<style>
.page-enter-active {
  transition: 600ms ease all;
}

.page-enter-from {
  opacity: 0;
}
</style>
