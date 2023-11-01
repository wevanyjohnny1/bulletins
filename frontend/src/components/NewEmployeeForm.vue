<template>
  <div>
    <h1 class="text-2xl font-semibold mb-4 text-gray-700">
      Criar Novo Funcionário
    </h1>
    <form @submit.prevent="createEmployee">
      <div class="mb-4">
        <label for="name" class="block text-gray-700">Nome</label>
        <input
          id="name"
          v-model="employee.name"
          type="text"
          name="name"
          class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 text-gray-700"
        />
      </div>
      <div class="mb-4">
        <label for="image" class="block text-gray-700">Imagem (URL)</label>
        <input
          id="image"
          v-model="employee.image"
          type="text"
          name="image"
          class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 text-gray-700"
        />
      </div>
      <div class="mb-4">
        <label for="code" class="block text-gray-700">Código</label>
        <input
          id="code"
          v-model="employee.code"
          type="text"
          name="code"
          class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 text-gray-700"
        />
      </div>
      <div class="mb-4 flex items-center space-x-4">
        <label for="active" class="text-gray-700">Ativo</label>
        <input
          id="active"
          v-model="employee.active"
          type="checkbox"
          name="active"
          class="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div v-if="errorMessage" class="text-red-600">{{ errorMessage }}</div>
      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
      >
        Criar Funcionário
      </button>
    </form>
  </div>
</template>

<script>
import EmployeesService from "../services/EmployeesService";

export default {
  props: {
    toggleModal: Function,
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
    };
  },
  methods: {
    async createEmployee() {
      try {
        const imageUrl = this.employee.image;
        const regexImageTest = /\.(jpeg|jpg|gif|png)$/i;
        const isImageValid = regexImageTest.test(imageUrl);
        console.log(isImageValid);
        if (isImageValid) {
          await EmployeesService.createEmployee(this.employee);
          this.toggleModal(true);
        } else {
          this.errorMessage = "A imagem que você enviou não é válida!";
        }
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
