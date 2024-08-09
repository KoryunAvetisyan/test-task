<script setup lang="ts">
import { sites } from './constants'
</script>

<template>
    <div class="w-[90%] m-auto flex items-center justify-center gap-4 flex-wrap py-10">
        <div v-for="site in sites" :key="site.name" class="w-[200px] h-[150px] flex justify-center items-center rounded-l-lg rounded-b-lg rounded-tr-none gray-bg cursor-pointer">
            <img :src="site.img" :alt="site.name" class="w-[150px] h-[100px] object-contain">
        </div>
    </div>
</template>