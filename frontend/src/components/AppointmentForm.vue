<template>
  <div>
    <h1 class="text-2xl font-semibold mb-4 text-gray-700">
      Criar Novo Agendamento
    </h1>
    <form @submit.prevent="createAppointment">
      <div class="mb-4">
        <label for="name" class="block text-gray-700"
          >Data e hora de início</label
        >
        <VueDatePicker
          v-model="startDate"
          timezone="America/Sao_Paulo"
          locale="pt-BR"
          format="dd/MM/yyyy, HH:mm"
        ></VueDatePicker>
      </div>

      <div class="mb-4">
        <label for="name" class="block text-gray-700"
          >Data e hora de término</label
        >
        <VueDatePicker
          v-model="endDate"
          timezone="America/Sao_Paulo"
          locale="pt-BR"
          format="dd/MM/yyyy, HH:mm"
        ></VueDatePicker>
      </div>

      <div class="mb-4">
        <label for="activity" class="block text-gray-700">Atividade</label>
        <div class="relative">
          <select
            v-model="selectedActivity"
            class="form-select appearance-none w-full border border-gray-300 py-2 px-3 rounded leading-tight focus:outline-none focus:border-blue-500 focus:bg-white text-gray-700"
          >
            <option value="">Selecione uma atividade</option>
            <option v-for="activity in activities" :value="activity.id">
              {{ activity.description }}
            </option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <i class="fas fa-caret-down"></i>
          </div>
        </div>
      </div>

      <div v-if="errorMessage" class="text-red-600">{{ errorMessage }}</div>
      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
      >
        Criar Agendamento
      </button>
    </form>
  </div>
</template>

<script>
import BulletinsService from "../services/BulletinsService";

export default {
  props: {
    toggleModal: Function,
    bulletin_id: String,
  },
  data() {
    return {
      employee: {
        name: "",
        image: "",
        code: "",
        active: true,
      },
      errorMessage: "",
      startDate: new Date(),
      endDate: new Date(),
      activities: [],
      selectedActivity: "",
    };
  },
  created() {
    BulletinsService.getActivities()
      .then((response) => {
        this.activities = response.data;
      })
      .catch((error) => {
        console.error("Erro ao buscar atividades:", error);
      });
  },
  methods: {
    async createAppointment() {
      try {
        const appointment = {
          startDate: this.$moment(this.startDate).format("YYYY-MM-DD HH:MM:ss"),
          endDate: this.$moment(this.endDate).format("YYYY-MM-DD HH:MM:ss"),
          activity_id: this.selectedActivity,
          bulletin_id: this.bulletin_id,
        };
        await BulletinsService.createAppointment(appointment);
        this.toggleModal(true);
      } catch (err) {
        if (!err.response?.data?.message) {
          this.errorMessage = "Erro ao efetuar o login, tente novamente.";
        } else {
          this.errorMessage = err.response.data.message;
        }
      }
    },
  },
};
</script>
<style>
.dp__action_select {
  background-color: #1976d2 !important;
}
</style>
