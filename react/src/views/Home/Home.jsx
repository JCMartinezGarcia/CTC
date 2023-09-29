import React from "react";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import CardData from "../../components/CardData/CardData";
import TaskTable from "../../components/TaskTable/TaskTable";
import './Home.css';

const Home = () => {
    return (
        <>
            <div>
                <NavbarComponent />
                <div className="cards-container grid grid-flow-col auto-cols-auto gap-4 m-5 p-5">
                    <CardData icon="users" quantity="4" />
                    <CardData icon="tasks" quantity="4" />
                    <CardData icon="likes" quantity="4" />
                </div>
                <TaskTable />
            </div>
        </>
    )
}

export default Home;