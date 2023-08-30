import { Game } from 'common/types.ts'
import DescriptionField from 'components/DescriptionField'
import {
    DescriptionHeader,
    DescriptionWrap,
} from 'pages/GameDetailsPage/styles.ts'

type Props = {
    requirements: Game['minimum_system_requirements']
}

const SystemReqDescription = ({ requirements }: Props) => (
    <>
        <DescriptionHeader>Minimum system requirements</DescriptionHeader>
        <DescriptionWrap>
            <DescriptionField label="OS" content={requirements?.os} />
            <DescriptionField
                label="Graphics"
                content={requirements?.graphics}
            />
            <DescriptionField label="Storage" content={requirements?.storage} />
            <DescriptionField label="Memory" content={requirements?.memory} />
            <DescriptionField
                label="Processor"
                content={requirements?.processor}
            />
        </DescriptionWrap>
    </>
)

export default SystemReqDescription
