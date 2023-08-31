import { Select, Form, Button, type FormInstance } from 'antd'
import { Dispatch, SetStateAction, useRef } from 'react'

import {
    categoryFilters,
    initialParamsState,
    platformFilters,
    sortFields,
} from 'constants.tsx'
import { FiltersFlex, FormItemWrap } from 'pages/HomePage/styles.ts'
import { LoadingState } from 'common/hooks.ts'
import { Params } from 'common/types.ts'
import {
    getFiltersFromLocaleStorage,
    setFiltersToLocaleStorage,
} from 'cache/filtersCache.ts'

type Props = {
    setParams: Dispatch<SetStateAction<Params>>
    loadingState: LoadingState
}

const GameFilters = ({ setParams, loadingState }: Props) => {
    const formRef = useRef<FormInstance>(null)
    const filtersFromLocalStorage = getFiltersFromLocaleStorage()

    const onFinishHandler = (values: Params) => {
        const { category, platform, sortBy } = values

        setParams((prevState) => ({
            ...prevState,
            sortBy,
            category,
            platform,
        }))

        setFiltersToLocaleStorage({ category, platform, sortBy })
    }

    const onReset = () => {
        formRef.current?.resetFields()
        setParams(initialParamsState)
        setFiltersToLocaleStorage(initialParamsState)
    }

    return (
        <Form
            name="filters"
            initialValues={filtersFromLocalStorage || initialParamsState}
            autoComplete="off"
            onFinish={onFinishHandler}
            ref={formRef}
            onChange={(val) => {
                console.log(val)
            }}
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

                <Button
                    loading={loadingState === 'pending'}
                    type="dashed"
                    htmlType="reset"
                    onClick={onReset}
                >
                    Reset
                </Button>
            </FiltersFlex>
        </Form>
    )
}

export default GameFilters
