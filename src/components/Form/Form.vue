<script setup lang="ts">
import { handleSubmit } from '../../api/formSubmit'
import { IFormData } from '../../globalTypes'
import fields from './hooks'

const {formData, errors} = fields()
</script>

<template>
    <div class="flex lg:justify-center">
        <div class="w-[90%] rounded-xl bg-[#17383E] p-10">
            <div class="rounded-xl border-4 border-[#00C9C9] bg-[#171A21] p-7">
                <p class="text-2xl">Ստանալ Առաջարկ</p>
                <div class="mt-5">
                    <div class="mb-8 relative">
                        <img class="absolute top-[14px]" src="../../assets/name-icon.png" alt="name-icon">
                        <input type="text" v-model="formData.name" placeholder="Անուն Ազգանուն*" class="w-full bg-transparent py-3 px-10 border-b-2 border-[#00C9C9] outline-none">
                        <small v-if="errors.name.isError" class="text-red-600"> {{ errors.name.message }} </small>
                    </div>
                    <div class="mb-8 relative">
                        <img class="absolute top-[14px]" src="../../assets/company-icon.png" alt="company-icon">
                        <input type="text" v-model="formData.company" placeholder="Կազմակերպություն*" class="w-full bg-transparent py-3 px-10 border-b-2 border-[#00C9C9] outline-none">
                        <small v-if="errors.company.isError" class="text-red-600"> {{ errors.company.message }} </small>
                    </div>
                    <div class="mb-8 relative">
                        <img class="absolute top-[17px]" src="../../assets/mail-icon.png" alt="mail-icon">
                        <input type="mail" v-model="formData.mail" placeholder="Էլ. հասցե*" class="w-full bg-transparent py-3 px-10 border-b-2 border-[#00C9C9] outline-none">
                        <small v-if="errors.mail.isError" class="text-red-600"> {{ errors.mail.message }} </small>
                    </div>
                    <div class="mb-8 relative">
                        <img class="absolute top-[12px]" src="../../assets/phone-icon.png" alt="phone-icon">
                        <input type="text" v-model="formData.phone" placeholder="Հեռախոսահամար*" class="w-full bg-transparent py-3 px-10 border-b-2 border-[#00C9C9] outline-none">
                        <small v-if="errors.phone.isError" class="text-red-600"> {{ errors.phone.message }} </small>
                    </div>
                    <div class="mb-8 relative">
                        <img class="absolute top-[17px]" src="../../assets/message-icon.png" alt="message-icon">
                        <textarea name="message" v-model="formData.message" placeholder="Հաղորդագրություն*" class="w-full bg-transparent py-3 px-10 border-b-2 border-[#00C9C9] outline-none"></textarea>
                        <small v-if="errors.message.isError" class="text-red-600"> {{ errors.message.message }} </small>
                    </div>
                    <div class="mb-8 flex items-center justify-between">
                        <button :disabled="Object.values(errors).some(item => item.isError) || Object.values(formData).some(item => item === '')" @click="handleSubmit(formData)" class="bg-white p-2 rounded-l-lg rounded-b-lg rounded-tr-none button-shadow text-black">Ստանալ Առաջարկ</button>
                        <div class="flex items-center gap-3">
                            <div>
                                <img src="../../assets/whatsapp.png" alt="whatsapp">
                            </div>
                            <div>
                                <img src="../../assets/viber.png" alt="viber">
                            </div>
                            <div>
                                <img src="../../assets/telegram.png" alt="telegram">
                            </div>
                            <div>
                                <img src="../../assets/messenger.png" alt="messenger">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.button-shadow:hover {
    transition: .5s;
    box-shadow: 0px 5px 15px 0px #00C9C991;
}
</style>