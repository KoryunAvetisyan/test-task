import { IFormData } from '../globalTypes'

export const handleSubmit = async (formData: IFormData):Promise<string> => {
    try {
        const username = 's2s_test_exercise'
        const password = 'xE1727}IHxiO'
        const base64Credentials = btoa(`${username}:${password}`)

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${base64Credentials}`
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch('https://test-admin.s2s.am/api/sendMessage', requestOptions)
        if (response.ok) {
            return 'Message sent successfully'
        } else {
            return ''
        }
    } catch (err) {
        return 'Network error'
    }
}