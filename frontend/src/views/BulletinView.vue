<template>
  <main class="container text-white">
    <Suspense>
      <Bulletin :employee-id="id" />

      <template #fallback>
        <EmployeeCardSkeleton />
      </template>
    </Suspense>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";

import Bulletin from "../components/Bulletin.vue";
import EmployeeCardSkeleton from "../components/EmployeeCardSkeleton.vue";

const route = useRoute();

const id = route.params.employeeId;
</script>

<style lang="scss" scoped></style>
