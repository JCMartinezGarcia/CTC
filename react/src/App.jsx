import { Route, Routes } from "react-router-dom"
import Home from './views/Home/Home.jsx'
import CreateTask from "./views/CreateTask/CreateTask.jsx"
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/create" element={<CreateTask />} />
      </Routes>
    </>
  )
}

export default App
