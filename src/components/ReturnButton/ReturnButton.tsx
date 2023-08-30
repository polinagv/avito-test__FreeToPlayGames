import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { type ReactNode } from 'react'

type Props = {
    to: string
    children?: ReactNode
}
const ReturnButton = ({ to, children = 'Go back' }: Props) => {
    const navigate = useNavigate()

    return (
        <Button
            type="link"
            icon={<ArrowLeftOutlined />}
            size="middle"
            onClick={() => {
                navigate(to)
            }}
        >
            {children}
        </Button>
    )
}

export default ReturnButton
