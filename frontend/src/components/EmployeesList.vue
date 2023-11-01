<template>
  <div>
    <div class="pt-4 mb-8 relative">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Procurar por nome ou código"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-app-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
        @input="getSearchResults"
      />
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1"
    >
      <EmployeeCard
        v-for="employee in filteredEmployees"
        :key="employee.id"
        :employee="employee"
        @click="handleOnClick(employee.id)"
      />
    </div>

    <BaseModal :modal-active="modalActive" @close-modal="toggleModal">
      <NewEmployeeForm :toggle-modal="toggleModal" />
    </BaseModal>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import EmployeesService from "../services/EmployeesService";
import EmployeeCard from "./EmployeeCard.vue";
import BaseModal from "./BaseModal.vue";
import NewEmployeeForm from "./NewEmployeeForm.vue";

const router = useRouter();

const modalActive = ref(false);
const savedEmployees = ref([]);
const searchQuery = ref("");

const getEmployees = async () => {
  const { data } = await EmployeesService.getAllEmployees();
  data.push({});
  savedEmployees.value = data;
};
await getEmployees();

const toggleModal = async (refreshPage) => {
  modalActive.value = !modalActive.value;

  if (refreshPage) await getEmployees();
};

const handleOnClick = (employeeId) => {
  if (employeeId) {
    const routeData = router.resolve({
      name: "bulletinView",
      params: { employeeId: employeeId },
    });
    window.open(routeData.href, "_blank");
  } else {
    toggleModal();
  }
};

let filteredEmployees = ref(savedEmployees.value);

const getSearchResults = () => {
  const query = searchQuery.value.trim().toLowerCase();

  if (query === "") {
    filteredEmployees.value = savedEmployees.value;
  } else {
    filteredEmployees.value = savedEmployees.value.filter((employee) => {
      return (
        (employee.name && employee.name.toLowerCase().includes(query)) ||
        (employee.code && employee.code.toLowerCase().includes(query))
      );
    });
  }
};

watch(searchQuery, () => {
  getSearchResults();
});
</script>
