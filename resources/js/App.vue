<template>
  <header-component class="mb-4" />
  <div class="container content">
    <router-view />
  </div>
</template>

<script>
import { computed, defineComponent } from "@vue/runtime-core";
import { useStore } from "vuex";
import HeaderComponent from "./components/HeaderComponent.vue";

export default defineComponent({
  components: { HeaderComponent },
  setup() {
    const store = useStore();

    return {
      name: computed(() => store.state.auth.name),
    };
  },
});
</script>