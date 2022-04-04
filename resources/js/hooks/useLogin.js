import axios from "../utils/axios";
import { computed, reactive } from "vue";
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default defineComponent({
    setup() {

        const data = reactive({
            login: null,
            password: null
        });

        axios.post("login", data)
            .then((response) => {
                let token = response.data.refresh_token || null
                localStorage.setItem("access_token", token)
            })
            .catch((error) => {
                localStorage.removeItem("access_token")
            })

        return {
            data,
            $v: computed(() => useVuelidate({
                login: { required, email },
                password: { required }
            }, data)),
        }
    }
});