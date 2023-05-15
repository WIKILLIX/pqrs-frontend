<template>
  <div
    class="grid grid-cols-[300px_1fr] max-xl:grid-cols-[200px_1fr] max-md:grid-cols-1 grid-rows-[60px_1fr] h-screen w-full transition-all duration-500 "
    id="homeView">
    <headPqrs class="col-span-full"></headPqrs>
    <nabvar class="max-md:absolute" :class="[pqrs.booleanMenu ? 'max-md:menu-hidden' : '']" id="navbar"></nabvar>
    <RouterView />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router'
import { usePqrsStore } from '../stores/pqrs';
const pqrs = usePqrsStore()


const headPqrs = defineAsyncComponent(() => import('../components/header.vue'))
const nabvar = defineAsyncComponent(() => import('../components/Navbar.vue'))

</script>


