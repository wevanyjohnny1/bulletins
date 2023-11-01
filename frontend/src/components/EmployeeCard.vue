<template>
  <div
    class="flex py-2 px-3 bg-app-secondary rounded-md shadow-sm cursor-pointer"
  >
    <div v-if="employee.id" class="md:flex md:flex-row flex-col flex-1">
      <div class="md:pl-2 flex-1 text-center">
        <h2 class="text-lg">{{ employee.name }}</h2>
        <div class="mt-4 mb-4 flex items-center justify-center">
          <img
            class="md:w-24 md:h-24 w-16 h-16 object-cover rounded-full"
            :src="employee.image"
            alt="Employee Image"
            :class="{
              'border-2 border-green-500': employee.active,
              'border-2 border-red-500': !employee.active,
            }"
          />
        </div>
        <p class="text-lg">Cód: {{ employee.code }}</p>
      </div>
    </div>
    <div v-else>
      <div
        class="md:pl-16 flex-1 flex flex-col items-center justify-center h-full"
      >
        <i class="text-6xl fas fa-plus cursor-pointer"></i>
        <p>Criar Novo</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  employee: {
    type: Object,
    default: () => {},
  },
});
</script>
