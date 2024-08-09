import { reactive, watch } from 'vue'
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
            isError: false
        },
        company: {
            message: '',
            isError: false
        },
        mail: {
            message: '',
            isError: false
        },
        phone: {
            message: '',
            isError: false
        },
        message: {
            message: '',
            isError: false
        },
    })

    
    watch(formData, () => {
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
               if (!formData[objKeys]) {
                    errors[objKeys].message = `${objKeys} is required!`
                    errors[objKeys].isError = true
               } else {
                    errors[objKeys].message = ''
                    errors[objKeys].isError = false
               }
            }
        }
    }, {deep: true, immediate: false})


    return {
        formData,
        errors
    }
}

export default fields