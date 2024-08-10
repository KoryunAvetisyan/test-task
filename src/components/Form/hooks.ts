import { reactive, watch, ref } from 'vue'
import { IFormData, formDataKeys } from '../../globalTypes'
import { IErrors } from './types'

const fields = () => {
    const formData = reactive<IFormData>({
        name: '',
        company: '',
        mail: '',
        phone: '',
        message: ''
    })
    const errors = reactive<IErrors>({
        name: {
            message: '',
            isError: false,
            isInputFocus: false
        },
        company: {
            message: '',
            isError: false,
            isInputFocus: false
        },
        mail: {
            message: '',
            isError: false,
            isInputFocus: false
        },
        phone: {
            message: '',
            isError: false,
            isInputFocus: false
        },
        message: {
            message: '',
            isError: false,
            isInputFocus: false
        },
    })
    const disabled = ref(true)

    const focusFn = (key:formDataKeys, val:boolean) => {
        errors[key].isInputFocus = val
    }


    
    watch([formData, errors], () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        for(const key in formData) {
            const objKeys:formDataKeys = key as formDataKeys
            if(objKeys === 'mail') {
                if(!emailRegex.test(formData.mail)) {
                    errors[objKeys].message = 'Mail is invalid!'
                    errors[objKeys].isError = true
                } else {
                    errors[objKeys].message = ''
                    errors[objKeys].isError = false
                }
            } else {
               if(!formData[objKeys]) {
                    errors[objKeys].message = `${objKeys} is required!`
                    errors[objKeys].isError = true
               } else {
                    errors[objKeys].message = ''
                    errors[objKeys].isError = false
               }
            }
        }
        const isDisabled = Object.values(errors).some(item => item.isError) || Object.values(errors).some(item => !item.isInputFocus)
        disabled.value = isDisabled

    }, {deep: true, immediate: false})


    return {
        formData,
        errors,
        focusFn,
        disabled
    }
}

export default fields