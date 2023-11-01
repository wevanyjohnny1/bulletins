<template>
  <main class="container text-white">
    <h1 class="text-xl font-semibold text-white mb-8 pt-4">{{ employeeName }}</h1>

    <table v-if="bulletins.length > 0" class="table-auto">
      <thead>
        <tr>
          <th class="border p-2">Código</th>
          <th class="border p-2">Descrição</th>
          <th class="border p-2">Começo em</th>
          <th class="border p-2">Termina em</th>
          <th class="border p-2">Total em horas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(appointment, index) in bulletins[0].appointments" :key="appointment.id">
          <td class="border p-2">{{ appointment.activity.code }}</td>
          <td class="border p-2">{{ appointment.activity.description }}</td>
          <td class="border p-2">{{ this.$moment(appointment.startDate).format("DD MMM, YYYY [às] HH:mm") }}</td>
          <td class="border p-2">{{ this.$moment(appointment.endDate).format("DD MMM, YYYY [às] HH:mm") }}</td>
          <td class="border p-2">{{ formatHours(this.$moment.duration(this.$moment(appointment.endDate).diff(this.$moment(appointment.startDate)))) }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>Sem agendamentos.</p>

    <button @click="toggleModal" class="bg-blue-500 text-white p-2 mt-4">Adicionar Agendamento</button>
    
    <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
      <AppointmentForm :toggleModal="toggleModal" :bulletin_id="bulletins[0].id" />
    </BaseModal>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import BaseModal from './BaseModal.vue';
import AppointmentForm from "./AppointmentForm.vue";

import BulletinsService from "../services/BulletinsService";

const modalActive = ref(false);

const props = defineProps({
  employeeId: {
    type: String,
    default: () => "",
  },
});

const bulletins = ref([]);
const employeeName = ref(""); 

const getBulletins = async () => {
  try {
    const { data } = await BulletinsService.getBulletinsByEmployeeId(props.employeeId);
    bulletins.value = data;
    if (data && data[0] && data[0].employee) {
      employeeName.value = data[0].employee.name;
    }
  } catch (error) {
    console.error("Error fetching bulletins:", error);
  }
};

const toggleModal = async (refreshPage) => {
  modalActive.value = !modalActive.value;

  if (refreshPage) await getBulletins()
};

const formatHours = (diff) => {
  return [diff.hours(), diff.minutes()].join(':')
}

onMounted(() => {
  getBulletins();
});
</script>

<style lang="scss" scoped></style>
