interface IFormData {
    name: string,
    company: string,
    mail: string,
    phone: string,
    message: string
}

type formDataKeys = keyof IFormData

export type {
    IFormData,
    formDataKeys
}