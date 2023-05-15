<template>
    <div class="p-10 flex flex-col gap-7 max-[524px]:gap-2 max-[524px]:p-1">
        <div class="flex justify-between items-center max-[524px]:flex-col max-[524px]:items-start max-[524px]:gap-2">
            <h1 class="text-2xl font-bold">DEPENDENCIAS</h1>

            <button @click="isOpenModalCreateRef.isOpen = !isOpenModalCreateRef.isOpen"
                class='btn-outline btn-outline-primary w-[10rem]'><i class="fas fa-plus"></i>
                Nueva
                Dependencia</button>
        </div>
        <create :API_URL="API_URL" :postData="postData" ref="isOpenModalCreateRef" />
        <!-- component -->
        <table class="min-w-full border-collapse block md:table max-[524px]:text-sm">
            <thead class="block md:table-header-group">
                <tr
                    class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                    <th
                        class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell w-[5rem]  max-xl:w-8">
                        #</th>
                    <th
                        class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                        Dependencia</th>
                    <th
                        class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell w-80 max-xl:w-64">
                        Acciones</th>
                </tr>
            </thead>
            <tbody class="block md:table-row-group">
                <transition-group name="list">
                    <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
                        v-for="(item, i) in response" :key="item.id">
                        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span
                                class="inline-block w-1/3 md:hidden font-bold">#</span>{{ i + 1 }}
                        </td>
                        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span
                                class="inline-block w-1/3 md:hidden font-bold ">Dependencias</span>{{ item?.name
                                }}</td>
                        <td class="p-2 md:border md:border-grey-500 md:text-center block md:table-cell">
                            <span class="inline-block w-1/3 md:hidden font-bold ">Acciones</span>

                            <button class=" btn-outline btn-outline-warning" @click="edit(item, i)"><i
                                    class="far fa-edit"></i> Editar</button>
                            <button class=" btn-outline btn-outline-danger ml-2" @click="deleteDependence(item, i)"><i
                                    class="fas fa-trash-alt"></i>
                                Eliminar</button>

                        </td>
                    </tr>
                </transition-group>
            </tbody>
        </table>
        <editDependence ref="isOpenModalEditRef" :updateData="updateData" :dependence="dependence" />
    </div>
</template>

<script setup>

import { defineAsyncComponent, ref, watch } from 'vue';
import axiosFunctions from '../../../../composables/useAxios';

const { getData, response, postData, deleteData, updateData, arrayBoolean, latestRegister } = axiosFunctions()

const API_URL = 'http://localhost:8080/dependences?sort=id,desc'

const create = defineAsyncComponent(() => import('../components/Create.vue'))
const editDependence = defineAsyncComponent(() => import('../components/Edit.vue'))

const position = ref()

const isOpenModalCreateRef = ref(null)
const isOpenModalEditRef = ref(null)


const edit = (item, i) => {
    isOpenModalEditRef.value.dependence = { ...item }
    position.value = i
    isOpenModalEditRef.value.isOpen = !isOpenModalEditRef.value.isOpen
}

getData(API_URL)

const deleteDependence = ({ _links }, i) => {
    deleteData(_links?.dependence?.href)
    position.value = i
}

watch(arrayBoolean, (value) => {
    switch (value) {
        case 'post':
            response.value.unshift(latestRegister.value)
            isOpenModalCreateRef.value.isOpen = !isOpenModalCreateRef.value.isOpen

            break;
        case 'put':
            response.value.splice(position.value, 1, isOpenModalEditRef.value.dependence)
            isOpenModalEditRef.value.isOpen = !isOpenModalEditRef.value.isOpen

            break;

        case 'delete':
            response.value.splice(position.value, 1)

            break;
        default:
            break;
    }
})


</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>