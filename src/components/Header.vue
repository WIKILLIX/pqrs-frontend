<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <header class="text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
        <div class="flex justify-between items-center h-full px-5 max-[524px]:px-1 ">
            <div class="w-16 h-16">

                <img src="../imgs/Leonardo_Diffusion_logo_includes_the_letters_PQRS_1-PhotoRoom.png-PhotoRoom.png" alt="">
            </div>
            <div class="items-center text-2xl self-center">
                <button @click="pqrs.toggleBooleanMenu" :class="[pqrs.booleanMenu ? 'md:hidden' : 'hidden']"><i
                        class="fas fa-bars"></i></button>
                <button @click="pqrs.toggleBooleanMenu" :class="[pqrs.booleanMenu ? 'hidden' : 'md:hidden']"><i
                        class="fas fa-times text-3xl"></i></button>
            </div>
        </div>
    </header>
</template>
<script setup>
import { usePqrsStore } from '../stores/pqrs';
const pqrs = usePqrsStore()


// const toggleMenu = () => {
//     const navbar = document.getElementById('navbar')

//     navbar.classList.toggle('max-md:menu-hidden')
// }


</script>