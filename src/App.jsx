import Layout from "./pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Member from "./pages/member";
import AddMember from "./pages/member/input";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/member" element={<Dashboard />}>
            <Route index  element={<Member/>}/>
            <Route path="/member/add"  element={<AddMember/>}/>

        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
