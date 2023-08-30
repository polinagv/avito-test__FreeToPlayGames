import styled from 'styled-components'

export const DescriptionWrap = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    max-width: 600px;

    @media (max-width: 468px) {
        gap: 10px;
    }
`

export const DescriptionHeader = styled.h1`
    font-size: 24px;

    @media (max-width: 468px) {
        font-size: 0.9rem;
    }
`

export const GameDetailsPageWrap = styled.div`
    padding: 50px 70px;

    @media (max-width: 468px) {
        padding: 30px 0;
        font-size: 0.8rem;
    }
`
