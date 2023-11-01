<template>
  <main class="container text-white">
    <div class="flex flex-col gap-4">
      <Suspense>
        <EmployeesList />

        <template #fallback>
          <EmployeeCardSkeleton />
        </template>
      </Suspense>
    </div>
  </main>
</template>

<script setup>
import EmployeeCardSkeleton from "../components/EmployeeCardSkeleton.vue";
import EmployeesList from "../components/EmployeesList.vue";
</script>

<style lang="scss" scoped></style>
