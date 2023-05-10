import axios from "axios";
import { ref } from "vue";

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS

const axiosFunctions = () => {
    const response = ref([]); // guarda la responsermacion de la peticion getAxios y getByIdAxios
    const arrayBoolean = ref(null); // se le asigna valor cada vez que una peticion axios e resuleve de forma correcta
    const latestRegister = ref({}); // guarda el ultimo registro creado

    // trae todos los registros de la base de datos
    const getData = async (url) => {
        try {
            const { data } = await axios.get(url);
            response.value = data?._embedded?.dependences;
            changeArrayBoolean('get');
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al cargar los datos",
            });
        }
    };
    // trae un registro de la base de datos por su id
    const getDataById = async (url) => {
        try {
            const { data } = await axios.get(url);
            response.value = data;
            changeArrayBoolean('getById');
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al cargar los datos",
            });
        }
    };

    // crea un registro en la base de datos
    const postData = async (
        url,
        dataQuestion,
        header = null
    ) => {
        try {
            await axios.post(url, dataQuestion, header).then(({ data }) => {
                latestRegister.value = data;
                changeArrayBoolean('post');
                Swal.fire({
                    icon: "success",
                    title: 'Registro guardado correctamente',
                    showConfirmButton: false,
                    timer: 1000,
                });
            });
        } catch (e) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: e.response.data.message,
            });
        }
    };

    // actualiza un registro en la base de datos
    const updateData = async (
        url,
        updateData,
    ) => {
        try {
           await axios.put(url, updateData);
            Swal.fire({
                icon: "success",
                title: 'registro actualizado correctamente',
                showConfirmButton: false,
                timer: 1000,
            });
            changeArrayBoolean('put');
        } catch (e) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salio mal!",
            });
        }
    };
    // elimina un registro de la base de datos
    const deleteData = (
        url,
    ) => {
        Swal.fire({
            title: "Estas seguro que deseas eliminar este registro",
            text: "Esta accion no se puede revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminala",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(url)
                    .then(() => {
                        Swal.fire({
                            icon: "success",
                            title: "registro eliminado correctamente",
                            showConfirmButton: false,
                            timer: 1000,
                        });
                        changeArrayBoolean('delete');
                    })
                    .catch(() => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Algo salio mal!",
                        });
                    });
            }
        });
    };


    // cambia el valor de arrayBoolean cada vez que una peticion axios se resuelve de forma correcta
    //despues de 500ms lo vuelve a poner en null
    const changeArrayBoolean = (value) => {
        arrayBoolean.value = value;
        setTimeout(() => {
            arrayBoolean.value = null;
        }, 500);
    };

    return {
        arrayBoolean,
        deleteData,
        getData,
        getDataById,
        response,
        postData,
        updateData,
        latestRegister,
    };
};


export default axiosFunctions;
