import { BrowserRouter,Routes, Route } from "react-router-dom"

import {Home} from "../pages/Home"
import { Tienda } from "../pages/Tienda";
import { Venta } from "../pages/Venta";
import { Carrito } from "../pages/Carrito";
import { MiCuenta } from "../pages/MiCuenta";
import {Acerca} from "../pages/Acerca";
import {Contactanos} from "../pages/Contactanos"

export function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
        <Route path="/venta" element={<Venta/>} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/micuenta" element={<MiCuenta/>} />
        <Route path="/acerca" element={<Acerca/>} />
        <Route path="/contactanos" element={<Contactanos/>}/>
    </Routes>
    </BrowserRouter>
  );
}