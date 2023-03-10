import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {SearchPage, MoviesPage, MovieCardPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'search'} element={<SearchPage/>}/>
                <Route path={'MovieCard'} element={<MovieCardPage/>}/>
            </Route>
        </Routes>
    );
}

export {App};
