import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
// import { computed, watch } from "vue";

export function useStudentUpdateForm() {
    const store = useStore()
    const router = useRouter()
    const { handleSubmit, isSubmitting } = useForm()

    const onSubmit = handleSubmit(async values => {
        console.log('Form:', values)
        const val = await store.dispatch('student/update', values)
        console.log(val)
        if(val==false){
            router.push('/dashboard')
        }
    })

    const { value: name, errorMessage: nError, handleBlur: nBlur } = useField('name',
        yup
            .string()
            .trim()
            .required('FISH ni kiritish shart')
    )

    const { value: phone_number, errorMessage: pnError, handleBlur: pnBlur } = useField('phone_number',
        yup
            .string()
            .trim()
            .required('Telefon raqamni kiritish shart')
    )

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

    const { value: maktab_id } = useField('maktab_id')
    const { value: status } = useField('status')


    return {
        name,
        nError,
        nBlur,
        phone_number,
        pnError,
        pnBlur,
        login,
        lError,
        lBlur,
        password,
        pError,
        pBlur,
        maktab_id,
        status,
        onSubmit,
        isSubmitting
    }
}