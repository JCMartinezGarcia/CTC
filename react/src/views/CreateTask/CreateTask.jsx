import React, { useEffect, useState } from "react";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import { Input, Textarea, Select, SelectItem, Button } from "@nextui-org/react";
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import './CreateTask.css';


const CreateTask = () => {
    const navigate = useNavigate();
    const [states, setStates] = useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dateInput = watch("fecha");
    const dateObject = new Date();
    const todayDate = dateObject.getFullYear() + "-0" + (dateObject.getMonth() + 1) + "-" + dateObject.getDate();

    useEffect(() => {
        getStates();
    }, []);

    const getStates = async () => {
        try {
            const response = await axios.get("api/republicstates");
            setStates(response.data);
        } catch (error) {

        }
    }

    const createTaskSubmit = async (data) => {
        try {
            const response = await axios.post('/api/task', data);
            const taskTitleMessage = response.data.title;
            if (response.status === 200) {
                toast.success(`Tarea: ${taskTitleMessage} creada con exito.`);
                setTimeout(() => {
                    navigate("/");
                }, 1 * 5000);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const validateSelectedDate = () => {
        return todayDate === dateInput
    }
    return (
        <>
            <div>
                <NavbarComponent />
                <div className="form-container">
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <h1 className="task-create-title m-1">Agregar Tareas Comunitarias</h1>
                    <span className="underline-title m-1"></span>
                    <form onSubmit={handleSubmit((data) => {
                        if (validateSelectedDate()) {
                            createTaskSubmit(data);
                        } else {
                            toast.info('selecciona una fecha valida.');
                        }

                    })}>
                        <div>
                            <Input
                                {...register("title", {
                                    required: "* Este campo es requerido.",
                                    maxLength: {
                                        value: 50,
                                        message: "Solo puedes ingresar 50 caracteres."
                                    }
                                })}
                                type="text"
                                variant="underlined"
                                label="Título"
                                placeholder="Introduce un título"
                            />
                            <p className="text-red-600">{errors.title?.message}</p>
                        </div>
                        <div>
                            <Textarea
                                {...register("description", { required: "* Este campo es requerido." })}
                                key="underlined"
                                variant="underlined"
                                label="Descripción"
                                labelPlacement="inside"
                                placeholder="Introduce una descripción"
                                className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                            />
                            <p className="text-red-600">{errors.description?.message}</p>
                        </div>
                        <div>
                            <Input
                                {...register("fecha", { required: "* Este campo es requerido." })}
                                type="date"
                                variant="underlined"
                                label="Fecha"
                            />
                            <p className="text-red-600">{errors.fecha?.message}</p>
                        </div>
                        <div>
                            <Select
                                {...register("state_id", { required: "* Este campo es requerido." })}
                                variant="underlined"
                                label="Estado de la República"
                                placeholder="Selecciona un estado"
                                className="max-w-xs"
                            >

                                {states.map((state) => (
                                    <SelectItem key={state.state_id} value={state.state_id}>
                                        {state.state_name}
                                    </SelectItem>
                                ))}

                            </Select>
                            <p className="text-red-600">{errors.state_id?.message}</p>
                        </div>
                        <div>
                            <Input
                                {...register("task_creator",
                                    {
                                        required: "* Este campo es requerido.",
                                        maxLength: {
                                            value: 50,
                                            message: "Solo puedes ingresar 50 caracteres."
                                        }
                                    })}
                                type="text"
                                variant="underlined"
                                label="Creador"
                                placeholder="Introduce un nombre"
                            />
                            <p className="text-red-600">{errors.task_creator?.message}</p>
                        </div>
                        <div className="submit-button-container">
                            <input type="submit" className="bg-amber-800" size="sm" value="Agregar" />
                        </div>
                    </form>
                </div >
            </div >
        </>
    )
}

export default CreateTask;