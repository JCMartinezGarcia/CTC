import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FaTrash } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import './TaskTable.css';


const TaskTable = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState([]);
    const actions = [
        'like',
        'delete'
    ];
    const columns = [
        {
            key: "title",
            label: "TITULO",
        },
        {
            key: "description",
            label: "DESCRIPCION",
        },
        {
            key: "created_at",
            label: "FECHA DE CREACIÓN",
        },
        {
            key: "state_name",
            label: "ESTADO DE LA REPÚBLICA",
        },
        {
            key: "task_creator",
            label: "CREADOR",
        },
        {
            key: "likes",
            label: "LIKES",
        },
        {
            key: "actions",
            label: "ACCIONES",
        },
    ];

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = async () => {
        try {
            const response = await axios.get("/api/task");
            setRows(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const disableLikeButton = (id) => {
        document.getElementById(`like-button-${id}`).disabled = true;
    }
    const validateLikesDelete = (likes) => {
        return likes !== 0;
    }
    const handleCreateTask = () => {
        navigate('/task/create');
    }
    const handleUpdateLike = async (id, likes) => {
        const likesUpdateData = likes + 1;
        try {
            const response = await axios.put(`/api/task/${id}`, { likes: likesUpdateData });
            if (response.status === 200) {
                const taskTitleMsg = response.data.title;
                toast.success(`¡Gracias por tu like a la tarea: "${taskTitleMsg}" !`);
                getTasks();
                disableLikeButton(id);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleDeleteTask = async (id, likes) => {
        if (validateLikesDelete(likes)) {
            toast.info('No se pueden eliminar tareas que tengan likes.');
            return
        }
        try {
            const response = await axios.delete(`/api/task/${id}`);
            if (response.status === 200) {
                const delSucMessage = response.data.title;
                toast.success(`Tarea "${delSucMessage}" eliminada con exito.`);
                getTasks();
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getActionFunction = (action, id, likes) => {
        switch (action) {
            case "like":
                return () => handleUpdateLike(id, likes);
            case "delete":
                return () => handleDeleteTask(id, likes);
        }
    }

    const getIcon = (type) => {
        switch (type) {
            case "like":
                return <GrLike />;
            case "delete":
                return <FaTrash />;
        }
    }

    const getActionButtons = (id, likes) => {
        return actions.map((action, i) => {
            return <Button
                id={`like-button-${id}`}
                key={i}
                size="sm"
                className="action-buttons"
                onClick={getActionFunction(action, id, likes)}
            >{getIcon(action)}</Button>
        });
    }

    return (
        <>
            <div className="m-5 p-5">
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
                <h1 className="task-table-title m-1">Lista de Tareas Comunitarias</h1>
                <span className="underline-title m-1"></span>
                <div className="mt-10">
                    <div className="table-actions">
                        <Button className="bg-amber-800 mb-3" size="sm" onClick={handleCreateTask}>
                            Agregar Tarea
                        </Button>
                    </div>
                    <Table aria-label="Example table with dynamic content">
                        <TableHeader columns={columns}>
                            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={rows}>
                            {(item) => (
                                <TableRow key={item.task_id}>
                                    {(columnKey) => <TableCell className={(columnKey === "actions") ? "inline-flex" : ''}>{(columnKey === "actions") ? getActionButtons(item.task_id, item.likes) : getKeyValue(item, columnKey)}</TableCell>}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}


export default TaskTable;