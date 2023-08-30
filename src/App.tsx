import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.tsx'
import GameDetailsPage from './pages/GameDetailsPage/GameDetailsPage.tsx'
import styled from 'styled-components'

const BaseStylesWrap = styled.div`
    font-family: 'Roboto', sans-serif;
    background: #f5f5f5;
    font-size: 16px;
`

function App() {
    return (
        <BaseStylesWrap>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/:id" element={<GameDetailsPage />} />
                </Routes>
            </BrowserRouter>
        </BaseStylesWrap>
    )
}

export default App
