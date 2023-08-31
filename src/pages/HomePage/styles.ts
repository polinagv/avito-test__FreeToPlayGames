import styled from 'styled-components'
import { Form } from 'antd'

export const HomePageWrap = styled.div`
    padding: 30px 30px;

    @media (max-width: 468px) {
        padding: 20px 0;
    }
`

export const FiltersFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const FormItemWrap = styled(Form.Item)`
    max-width: 300px;
    width: 100%;
`
