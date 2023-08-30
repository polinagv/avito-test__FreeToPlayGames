import { FC } from 'react'
import styled from 'styled-components'
import { Image } from 'antd'

const DescriptionFieldWrap = styled.li`
    display: flex;
    gap: 30px;
    justify-content: space-between;
`

const DescriptionFieldLabel = styled.span`
    color: rgba(0, 0, 0, 0.45);
`

const DescriptionFieldContent = styled.span`
    color: rgba(0, 0, 0, 1);
`

const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
`

type Props = {
    label?: string
    content: string
    image?: boolean
}

const DescriptionField: FC<Props> = ({ label, content, image = false }) => {
    return image ? (
        <ImageWrap>
            <Image width={500} src={content} key={content} />
        </ImageWrap>
    ) : (
        <DescriptionFieldWrap>
            <DescriptionFieldLabel>{label}</DescriptionFieldLabel>
            <DescriptionFieldContent>{content}</DescriptionFieldContent>
        </DescriptionFieldWrap>
    )
}

export default DescriptionField
