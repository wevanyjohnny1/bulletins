<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h1 class="text-2xl font-semibold mb-4">Cadastro</h1>
      <form @submit.prevent="signup">
        <div class="mb-4">
          <label for="name" class="block text-gray-700">Nome</label>
          <input
            v-model="name"
            type="text"
            id="name"
            name="name"
            class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input
            v-model="email"
            type="text"
            id="email"
            name="email"
            class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Senha</label>
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Cadastre-se
        </button>
        <p class="text-red-500 mt-2" v-if="errorMessage">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AccountsService from '../services/AccountsService';

export default {
  setup() {
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const router = useRouter()
    const accountsService = new AccountsService()

    const signup = async () => {
      try {
        const response = await accountsService.create(name.value, email.value, password.value);
        localStorage.setItem("user", JSON.stringify(response.data));
        router.push({ name: 'home' });
      } catch (err) {
        if (!err.response?.data?.message) {
          errorMessage.value = 'Erro ao efetuar o cadastro, tente novamente.';
        } else {
          errorMessage.value = err.response.data.message;
        }
      }
      name.value = '';
      email.value = '';
      password.value = '';
    };

    return { name, email, password, errorMessage, signup };
  },
};
</script>

<style scoped>
</style>
