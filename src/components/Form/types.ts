import { IFormData } from '../../globalTypes'

type IFormError = {
    message: string,
    isError: boolean,
    isInputFocus: boolean
}

type IFormErrors<T> = {
    [K in keyof T]: IFormError
}

export type IErrors = IFormErrors<IFormData>