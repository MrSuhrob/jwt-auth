import axios from "../utils/axios";
import {
    reactive
} from "vue";
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {

        const router = useRouter()

        const data = reactive({
            name: null,
            email: null,
            password: null,
            password_confirmation: null
        });


        axios.post("register")
            .then(response => {
                router.push({
                    name: 'home'
                })
            }).catch(error => {

            })

        return {
            data,
            $v: computed(() =>
                useVuelidate({
                    name: { required },
                    email: { required, email },
                    password: { required },
                    password_confirmation: { required },
                }, data)
            )
        }

    }
});