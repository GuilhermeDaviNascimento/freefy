import { BrowserRouter, Routes, Route} from "react-router-dom";
import Musica_tocando from "./pages/Musica-Tocando/Musica";
import Primeira_tela from "./pages/primeira_tela/primeira";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/musica' element={<Musica_tocando/>}> </Route>
                <Route path='/' element={<Primeira_tela/>}> </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
