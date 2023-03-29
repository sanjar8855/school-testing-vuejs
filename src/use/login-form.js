import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { computed, watch } from "vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

export function useLoginForm() {
    const { handleSubmit, isSubmitting, submitCount } = useForm()
    const store = useStore()
    const router = useRouter()
    const onSubmit = handleSubmit(async values => {
        // console.log('Form:', values)

            const auth = await store.dispatch('auth/login', values)
            if(auth==true){
                const role = localStorage.getItem('role')
                if (role == 'admin') {
                    router.push('/dashboard')
                }
                else if (role == 'teacher') {
                    router.push('/dashboard')
                }
                else if (role == 'student') {
                    router.push('/student')
                }
            }
    })

    const { value: login, errorMessage: lError, handleBlur: lBlur } = useField('login',
        yup
            .string()
            .trim()
            .required('Loginni kiritish shart')
    )

    const { value: password, errorMessage: pError, handleBlur: pBlur } = useField('password',
        yup
            .string()
            .trim()
            .required('Parolni kiritish shart')
    )

    const urinishSoni = computed(() => submitCount.value >= 3)
    watch(urinishSoni, val => {
        if (val) {
            setTimeout(() => submitCount.value = 0, 3000)
        }
    })

    return {
        login,
        lError,
        lBlur,
        password,
        pError,
        pBlur,
        onSubmit,
        isSubmitting,
        urinishSoni
    }
}