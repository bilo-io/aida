import React from 'react'
import { z } from 'zod'
import { Form } from '../ui/Form'
import { FormField } from '../ui/FormField'
import { aiTypes, aiTypeOptions } from '../ui/AITypes'

const schema = z.object({
    search: z.string().min(2, 'Minimum 2 characters').optional(),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error SomeError
    type: z.enum(aiTypes).optional(),
})

type FormData = z.infer<typeof schema>

export default function FormExploreApps({ onSubmit }: { onSubmit: (data: FormData) => void }) {
    return (
        <Form schema={schema} onSubmit={onSubmit} submitOnChange autoSubmitDelay={500}>
            <div className="grid grid-cols-12 gap-4 m-1">
                <FormField
                    name="search"
                    label="Search"
                    type="text"
                    placeholder="Your email"
                    className="col-span-12 sm:col-span-6"
                />
                <FormField
                    name="type"
                    label="Type"
                    type="select"
                    className="col-span-12 sm:col-span-6 md:col-span-4"
                    options={aiTypeOptions}
                />
            </div>
        </Form>

    )
}
