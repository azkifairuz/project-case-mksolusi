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
import Item from "./pages/item";
import AddItem from "./pages/item/input";
import Transaction from "./pages/transaction";
import AddTransaction from "./pages/transaction/input";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
            <Route index  element={<Member/>}/>
            <Route path="/dashboard/member/add"  element={<AddMember/>}/>
            <Route path="/dashboard/item"  element={<Item/>}/>
            <Route path="/dashboard/item/add"  element={<AddItem/>}/>
            <Route path="/dashboard/transaction"  element={<Transaction/>}/>
            <Route path="/dashboard/transaction/add"  element={<AddTransaction/>}/>

            
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
