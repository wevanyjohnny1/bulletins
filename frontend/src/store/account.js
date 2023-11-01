import { reactive, toRefs } from "vue";

const state = reactive({
  user: null,
  loading: true,
});

export default function useTodos() {
  const getUser = async () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) state.user = storedUser;
  };

  return {
    ...toRefs(state),
    getUser,
  };
}
