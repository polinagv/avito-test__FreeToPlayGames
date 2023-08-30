import styled from 'styled-components'

const DescriptionFieldWrap = styled.li`
    display: flex;
    gap: 30px;
`

const DescriptionFieldLabel = styled.span`
    color: rgba(0, 0, 0, 0.45);
    min-width: 104px;
`

const DescriptionFieldContent = styled.span`
    color: rgba(0, 0, 0, 1);
`

type Props = {
    label?: string
    content: string
}

const DescriptionField = ({ label = '', content = 'No data' }: Props) => {
    return (
        <DescriptionFieldWrap>
            {label?.length > 0 && (
                <DescriptionFieldLabel>{label}</DescriptionFieldLabel>
            )}
            <DescriptionFieldContent>{content}</DescriptionFieldContent>
        </DescriptionFieldWrap>
    )
}

export default DescriptionField
