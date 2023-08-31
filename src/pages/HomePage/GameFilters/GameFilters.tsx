import { Select, Form, Button } from 'antd'
import { categoryFilters, platformFilters, sortFields } from 'constants.tsx'
import { Dispatch, SetStateAction } from 'react'
import { ListQueryParams } from 'api/games.ts'
import { FiltersFlex, FormItemWrap } from 'pages/HomePage/styles.ts'
import { LoadingState } from 'common/hooks.ts'

type Props = {
    setParams: Dispatch<SetStateAction<ListQueryParams>>
    loadingState: LoadingState
}

type FormFields = {
    sortBy?: string
    category?: string[]
    platform?: string[]
}

const GameFilters = ({ setParams, loadingState }: Props) => {
    const onFinishHandler = (values: FormFields) => {
        const { category, platform, sortBy } = values
        console.log(values)
        setParams((prevState) => ({
            ...prevState,
            'sort-by': sortBy || undefined,
            category: category || undefined,
            platform: platform || undefined,
        }))
    }

    return (
        <Form
            name="filters"
            initialValues={{}}
            autoComplete="off"
            onFinish={onFinishHandler}
        >
            <FiltersFlex>
                <FormItemWrap label="Genre" name="category">
                    <Select
                        mode="multiple"
                        allowClear
                        placeholder="Select genres to filter"
                        options={categoryFilters}
                    />
                </FormItemWrap>

                <FormItemWrap label="Platform" name="platform">
                    <Select
                        mode="multiple"
                        allowClear
                        placeholder="Select platform to filter"
                        options={platformFilters}
                    />
                </FormItemWrap>

                <FormItemWrap label="Sort by" name="sortBy">
                    <Select
                        allowClear
                        placeholder="Select field to sort"
                        options={sortFields}
                    />
                </FormItemWrap>

                <FormItemWrap>
                    <Button
                        loading={loadingState === 'pending'}
                        type="primary"
                        htmlType="submit"
                    >
                        Search
                    </Button>
                </FormItemWrap>
            </FiltersFlex>
        </Form>
    )
}

export default GameFilters
