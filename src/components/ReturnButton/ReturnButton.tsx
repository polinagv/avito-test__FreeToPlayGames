import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

type Props = {
    to: string
}
const ReturnButton = ({ to }: Props) => {
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
            Back
        </Button>
    )
}

export default ReturnButton
