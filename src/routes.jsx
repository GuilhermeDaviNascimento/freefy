import { BrowserRouter, Routes, Route} from "react-router-dom";
import Musica_Tocando from "./pages/Musica-Tocando/Musica";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/musica' element={<Musica_Tocando/>}> </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
