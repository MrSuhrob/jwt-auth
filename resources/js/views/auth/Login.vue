<template>
  <suspense>
    <template #default>
        <FormComponent>
          <form class="p-5">
            
            <div class="form-row">
              <div class="form-group col-12 mb-4">
                <label for="validationServer03" class="mb-1">Login</label>
                <input
                  type="email"
                  class="form-control p-3"
                  id="validationServer03"
                  placeholder="Alex@email.com"
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
                  required
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="form-group d-flex justify-content-center">
              <button type="button" class="btn btn-danger px-5 py-3">
                Sign In
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
import { defineComponent } from "@vue/runtime-core";
import FormComponent from "./../../components/FormComponent.vue";

export default defineComponent({
  components: {
    FormComponent,
  },
  setup() {},
});
</script>