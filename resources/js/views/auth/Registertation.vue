<template>
  <suspense>
    <template #default>
      <FormComponent>
        <form class="p-5">
          <div class="form-row">
            <div class="form-group col-12 mb-4">
              <label for="validationServer03" class="mb-1">Name</label>
              <input
                type="text"
                class="form-control p-3"
                id="validationServer03"
                placeholder="username"
                v-model="user.name"
                required
              />
              <div class="invalid-feedback"></div>
            </div>
            <div class="form-group col-12 mb-4">
              <label for="validationServer03" class="mb-1">Login</label>
              <input
                type="text"
                class="form-control p-3"
                id="validationServer03"
                placeholder="username@email.com"
                v-model="user.email"
                required
              />
              <div class="invalid-feedback"></div>
            </div>
            <div class="form-group col-12 mb-4">
              <label for="validationServer03" class="mb-1">Password</label>
              <input
                type="password"
                class="form-control p-3"
                id="validationServer03"
                placeholder="********"
                v-model="user.password"
                required
              />
              <div class="invalid-feedback"></div>
            </div>
            <div class="form-group col-12 mb-4">
              <label for="validationServer03" class="mb-1"
                >Password Confirm</label
              >
              <input
                type="password"
                class="form-control p-3"
                id="validationServer03"
                placeholder="********"
                v-model="user.password_confirmation"
                required
              />
              <div class="invalid-feedback"></div>
            </div>
          </div>
          <div class="form-group d-flex justify-content-center">
            <button type="button" class="btn btn-danger px-5 py-3">
              Registertation
            </button>
          </div>
        </form>
      </FormComponent>
    </template>
    <template #fallback>
      <h1>loading</h1>
    </template>
  </suspense>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { defineAsyncComponent, defineComponent, onMounted } from "@vue/runtime-core";

export default defineComponent({
  components: {
    FormComponent: defineAsyncComponent(() =>
      import("./../../components/FormComponent.vue")
    ),
  },
  setup() {

    onMounted(() => {
      console.log(user);
    });

    return {
      user,
    };
  },
});
</script>