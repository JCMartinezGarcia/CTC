import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    getKeyValue
} from "@nextui-org/react";
import { Button, Input, Select, SelectItem, Spinner } from "@nextui-org/react";
import { FaTrash, FaSearch } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import './TaskTable.css';


const TaskTable = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(true);
    const [states, setStates] = useState([]);
    const [rows, setRows] = useState([]);
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 5;

    const pages = Math.ceil(rows.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return rows.slice(start, end);
    }, [page, rows]);

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
        getStates();
    }, []);

    const getTasks = async () => {
        try {
            const response = await axios.get("/api/task");
            setRows(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error.message);
            toast.error(`Ocurrio un error en el servidor`);
        }
    }
    const getStates = async () => {
        try {
            const response = await axios.get("api/republicstates");
            setStates(response.data);
        } catch (error) {
            console.log(error.message);
            toast.error(`Ocurrio un error en el servidor`);
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
            console.log(error.message);
            toast.error(`Ocurrio un error en el servidor`);
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
            console.log(error.message);
            toast.error(`Ocurrio un error en el servidor`);
        }
    }
    const handleSearchTask = async (e) => {
        setIsLoading(true);
        const { value } = e.target;
        if (value === '') {
            getTasks();
            return
        }
        try {
            const response = await axios.get(`/api/taskbyname/${value}`);
            if (response.status === 200) {
                setRows(response.data);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error.message)
            toast.error(`Ocurrio un error en el servidor`);
        }
    }
    const handleStateFilter = async (e) => {
        setIsLoading(true);
        const { value } = e.target;
        try {
            const response = await axios.get(`/api/taskbystate/${value}`);
            if (response.status === 200) {
                setRows(response.data);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error.message)
            toast.error(`Ocurrio un error en el servidor`);
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
                    <div className="table-actions inline-flex w-full mb-4">
                        <Button
                            className="create-task-button col-span-1"
                            size="sm"
                            onClick={handleCreateTask}>
                            Agregar Tarea
                        </Button>
                        <div className="task-filters-container grid grid-cols-2 gap-4 ml-auto">
                            <Input
                                size="sm"
                                label="Search"
                                radius="sm"
                                className="task-search-input"
                                classNames={{
                                    label: "text-black/50 dark:text-white/90",
                                }}
                                placeholder="Type to search..."
                                startContent={
                                    <FaSearch />
                                }
                                onChange={handleSearchTask}
                            />
                            <Select
                                size="sm"
                                label="Estado de la república"
                                placeholder="Selecciona estado"
                                className=""
                                onChange={handleStateFilter}
                            >

                                {states.map((state) => (
                                    <SelectItem key={state.state_id} value={state.state_id}>
                                        {state.state_name}
                                    </SelectItem>
                                ))}

                            </Select>
                        </div>
                    </div>
                    <Table
                        aria-label="Example table with dynamic content"
                        bottomContent={
                            <div className="flex w-full justify-center">
                                <Pagination
                                    isCompact
                                    showControls
                                    showShadow
                                    color="secondary"
                                    page={page}
                                    total={pages}
                                    onChange={(page) => setPage(page)}
                                />
                            </div>
                        }
                        classNames={{
                            wrapper: "min-h-[222px]",
                        }}
                    >
                        <TableHeader columns={columns}>
                            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody
                            items={items}
                            isLoading={isLoading}
                            loadingContent={<Spinner label="Loading..." />}
                        >
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