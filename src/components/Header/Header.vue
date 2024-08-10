<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { navigation } from './constants'

const isMenuOpen = ref(false)
const emit = defineEmits(['scrollToForm'])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToForm = () => {
  emit('scrollToForm')
}

</script>

<template>
    <header class="bg-black">
        <div class="w-[90%] m-auto flex 2xl:flex-row lg:flex-col 2xl:items-center justify-between p-3 lg:gap-y-3">
            <div class="flex items-center justify-between">
                <div class="font-semibold text-3xl">
                    Logo
                </div>
                <button @click="toggleMenu" class="lg:block 2xl:hidden px-4 py-2 text-white text-3xl"> ☰ </button>
            </div>
            <div class="flex">
                <ul :class="{'hidden': !isMenuOpen}" class="2xl:flex">
                    <li v-for="nav in navigation" :key="nav.name" class="2xl:mr-8 2xl:mb-0 lg:mb-3 cursor-pointer">{{ nav.name }}</li>
                </ul>
            </div>
            <div class="flex items-center gap-7">
                <select class="bg-transparent outline-none">
                    <option class="text-black" value="armenian">ՀԱՅ</option>
                    <option class="text-black" value="russian">РУС</option>
                    <option class="text-black" value="english">ENG</option>
                </select>
                <div>
                    <img src="../../assets/search-icon.png" alt="search">
                </div>
                <div>
                    <button @click="scrollToForm" class="bg-white p-2 rounded-l-lg rounded-b-lg rounded-tr-none button-shadow text-black">Կապ մեզ հետ</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.button-shadow:hover {
    transition: .5s;
    box-shadow: 0px 5px 15px 0px #00C9C991;
}
</style>