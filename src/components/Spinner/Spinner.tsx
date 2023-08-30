import { Spin } from 'antd'
import styled from 'styled-components'

const SpinnerWrap = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Spinner = () => (
    <SpinnerWrap>
        <Spin size="large" />
    </SpinnerWrap>
)

export default Spinner
