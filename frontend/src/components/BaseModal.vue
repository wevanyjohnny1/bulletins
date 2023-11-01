<template>
  <transition v-if="modalActive" name="modal">
    <div
      v-show="modalActive"
      class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      @click="closeModal"
    >
      <div class="fixed inset-0 flex items-center justify-center z-50">
        <div class="modal-container" @click.stop>
          <div class="modal-content bg-white p-4 relative">
            <button
              class="modal-close absolute top-0 right-0 text-gray-700"
              @click="closeModal"
            >
              ×
            </button>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: {
    modalActive: Boolean,
  },
  setup(props, { emit }) {
    const localModalActive = ref(props.modalActive);

    watch(
      () => props.modalActive,
      (newValue) => {
        localModalActive.value = newValue;
      },
    );

    const closeModal = () => {
      localModalActive.value = false;
      emit("close-modal", false);
    };

    return {
      modalActive: localModalActive,
      closeModal,
    };
  },
};
</script>

<style scoped>
.modal-container {
  background-color: white;
  padding: 1rem;
}
</style>
