<template>
  <div class="grid grid-cols-[300px_1fr] grid-rows-[60px_1fr] h-screen w-full">
    <headPqrs class="col-span-full"></headPqrs>
    <nabvar class=""></nabvar>
    <RouterView />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router'
import Swal from 'sweetalert2';



const headPqrs = defineAsyncComponent(() => import('../components/header.vue'))
const nabvar = defineAsyncComponent(() => import('../components/Navbar.vue'))

</script>


