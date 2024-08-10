<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header/Header.vue'
import Intro from './components/Intro/Intro.vue'
import Sphere from './components/Sphere/Sphere.vue'
import Site from './components/Site/Site.vue'
import Seo from './components/Seo/Seo.vue'
import Form from './components/Form/Form.vue'
import { spheres } from './components/Sphere/constants'

const formRef = ref<HTMLElement | null>(null)

const handleScrollToForm = () => {
  if (formRef.value) {
    formRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}

</script>

<template>
  <div>
    <Header @scrollToForm="handleScrollToForm" />
    <Intro />
    <div class="w-[90%] 2xl:h-[500px] lg:mh[500px] m-auto flex justify-center flex-wrap py-10">
      <Sphere v-for="sphere in spheres" :key="sphere" :sphereData="sphere"/>
    </div>
    <Site />
    <div ref="formRef" class="bg-[#02030B] 2xl:flex py-10">
      <Seo class="2xl:w-[50%] lg:w-full"/>
      <Form class="2xl:w-[50%] lg:w-full"/>
    </div>
  </div>
</template>