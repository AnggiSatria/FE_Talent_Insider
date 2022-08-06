import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"
import Homepage from "./pages/Homepage/Homepage";
import CreateUser from "./pages/Create User/CreateUser"
import ListUser from "./pages/List User/ListUser"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/homepage" element={<Homepage/>}/>
      <Route path="/create-user" element={<CreateUser/>}/>
      <Route path="/list-user" element={<ListUser/>}/>
    </Routes>
  );
}

export default App;
