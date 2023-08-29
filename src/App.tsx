import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import GameItem from './components/GameItem.tsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:id" element={<GameItem />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
