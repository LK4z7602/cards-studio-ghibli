import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { FilmDetail } from "../pages/FilmDetail"

export const Router = () => {
    return(
        <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path="/films/:id" element={<FilmDetail/>}/>
        </Routes>
    )
}