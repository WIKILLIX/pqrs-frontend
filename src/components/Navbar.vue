<template>
    <!-- component -->
    <div class="h-full flex  justify-center bg-gray-100 border-e-2 transition-all duration-300 max-md:w-[350px]">
        <div class="flex w-full p-4 bg-white flex-col justify-between">
            <ul class="flex flex-col w-full">
                <li class="my-px">
                    <router-link to="/" class="flex flex-row items-center h-12 px-4
                        rounded-lg text-gray-600 bg-gray-100">
                        <span class="flex items-center justify-center text-lg text-gray-400">
                            <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                <path
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                </path>
                            </svg>
                        </span>
                        <span class="ml-3">Dashboard</span>
                        <!-- <span
                            class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">3</span> -->
                    </router-link>
                </li>
                <li class="my-px">
                    <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">Pqrs</span>
                </li>
                <li class="my-px">
                    <router-link :to="{ name: 'dependence' }" href="#"
                        class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                        <span class="flex items-center justify-center text-lg text-gray-400">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span class="ml-3">Dependencias</span>
                    </router-link>
                </li>
                <li class="my-px">
                    <a href="#" class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                        <span class="flex items-center justify-center text-lg text-gray-400">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span class="ml-3">Asuntos</span>
                    </a>
                </li>
                <li class="my-px">
                    <a href="#" class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                        <span class="flex items-center justify-center text-lg text-gray-400">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span class="ml-3">Tipos</span>

                    </a>
                </li>
                <li class="my-px">
                    <a href="#" class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                        <span class="flex items-center justify-center text-lg text-gray-400">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span class="ml-3">solicitudes</span>

                    </a>
                </li>
                <li class="my-px">
                    <a href="#" class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                        <span class="flex items-center justify-center text-lg text-gray-400">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span class="ml-3">Seguimiento</span>

                    </a>
                </li>
            </ul>
            <button @click="pqrs.toggleBooleanMenu" class="md:hidden"><i class="fas fa-times text-3xl"></i></button>
        </div>
    </div>
</template>

<script setup>
import { usePqrsStore } from '../stores/pqrs';

const pqrs = usePqrsStore()


</script>

