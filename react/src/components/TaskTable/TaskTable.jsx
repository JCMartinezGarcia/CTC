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
import axios from "axios";
import './TaskTable.css';


const TaskTable = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState([]);
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
    ];

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = async () => {
        try {
            const response = await axios.get("/api/task");
            setRows(response.data);
            console.log(rows);
        } catch (error) {
            console.log(error);
        }
    }
    const handleCreateTask = () => {
        navigate('/task/create');
    }
    return (
        <>
            <div className="m-5 p-5">
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
                                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
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