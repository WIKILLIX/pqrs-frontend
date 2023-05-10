<template>
    <div class="container mx-auto">
        <div class="flex justify-center">
            <Transition name="fade">
                <div v-show="isOpen" class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-gray-700 bg-opacity-50
        ">
                    <div class="max-w-4xl p-6 mx-4 bg-white rounded-md shadow-xl">
                        <div class="flex items-center justify-between">
                            <h2 class="font-bold text-2xl uppercase">Nueva dependencia</h2>
                        </div>
                        <div class="mt-4">
                            <form @submit.prevent="updateDependence"
                                class="bg-[#fff] p-4 rounded-lg shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] flex flex-col gap-5">
                                <div class="flex flex-col gap-3 w-[40rem]">
                                    <label for="name">Nombre</label>
                                    <input class="bg-[#fff] p-4  border-2" placeholder="Nombre" name="name" type="text"
                                        v-model="dependence.name" />
                                </div>

                                <div class="flex gap-5 justify-between">
                                    <button @click="isOpen = false"
                                        class="px-3 py-4 border-2 border-[red] text-[red] text-lg leading-5 font-medium w-40 rounded-lg uppercase"
                                        type="button">
                                        Cancelar
                                    </button>
                                    <button
                                        class="px-3 py-5 border-2 border-[green] text-[green] text-lg leading-5 font-medium w-40 rounded-lg uppercase "
                                        type="submit">
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false);
const dependence = ref({})

const props = defineProps({
    updateData: Function,
})

const messageSuccess = 'Dependencia actualizada correctamente';

const updateDependence = () => {

    props.updateData(dependence.value._links?.dependence?.href, dependence.value, messageSuccess);
}



defineExpose({ isOpen, dependence })


</script>

