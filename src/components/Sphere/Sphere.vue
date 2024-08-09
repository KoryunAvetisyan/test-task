<script setup lang="ts">
import { ref } from 'vue'
import { ISpheres } from './types'

const isHovered = ref(false)

const props = defineProps<{
  sphereData: ISpheres
}>()
</script>

<template>
    <div
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    class="rounded-lg p-10 transition-all duration-300 ease-in-out"
    :class="{ 'hovered': isHovered }">
        <div class="flex justify-center">
            <img v-show="!isHovered" class="transition-opacity duration-300 ease-in-out" src="../../assets/planet.png" alt="planet">
            <img v-show="isHovered" class="transition-opacity duration-300 ease-in-out" src="../../assets/hovered-planet.png" alt="hovered-planet" :class="{ 'hovered-image': isHovered }">
        </div>
        <p 
        class="text-xl text-center  transition-all duration-300 ease-in-out" 
        :class="{ 'hovered-text': isHovered }"
            >{{ sphereData.title }}
        </p>
        <ul class="text-center" v-show="isHovered">
            <li v-for="tech in sphereData.technologies" :key="tech">{{ tech }}</li>
        </ul>
    </div>
</template>


<style scoped>
@import './sphere.css';
</style>