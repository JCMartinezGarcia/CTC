import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { FaRegUser } from 'react-icons/fa';
import { GrTask, GrLike } from "react-icons/gr";
import "./CardData.css";

const CardData = ({ icon, quantity }) => {

    const setCardIcon = (iconText) => {
        switch (iconText) {
            case "users":
                return <FaRegUser className="user-card-icon" />
                break;
            case "tasks":
                return <GrTask className="user-card-icon" />
                break;
            case "likes":
                return <GrLike className="user-card-icon" />
                break;
            default:
                break;
        }
    }
    return (
        <>
            <div className="card-container">
                <Card>
                    <CardBody>
                        <div className="inline-flex">
                            {setCardIcon(icon)}
                            <div className="max-w-max p-1">
                                <h1 className="text-2xl">4k</h1>
                                <small>Registro Mensual</small>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default CardData;