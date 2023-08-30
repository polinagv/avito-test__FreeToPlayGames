import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.tsx'
import GameDetailsPage from './pages/GameDetailsPage/GameDetailsPage.tsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:id" element={<GameDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
