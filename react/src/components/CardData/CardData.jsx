import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { FaRegUser } from 'react-icons/fa';
import { GrTask, GrLike } from "react-icons/gr";
import "./CardData.css";

const ICONS = {
    users: <FaRegUser className="user-card-icon" />,
    tasks: <GrTask className="user-card-icon" />,
    likes: <GrLike className="user-card-icon" />,
};

const CardData = ({ icon, quantity }) => {

    const IconComponent = ICONS[icon];


    return (
        <div className="card-container">
            <Card>
                <CardBody>
                    <div className="inline-flex">
                        <div className="flex items-center gap-3">
                            {IconComponent}
                            <div className="max-w-max p-1">
                                <h1 className="text-2xl font-semibold">{quantity}k</h1>
                                <small>Registro Mensual</small>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default CardData;