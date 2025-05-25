import React from 'react'
import { z } from 'zod'
import { Form } from '../ui/Form'
import { FormField } from '../ui/FormField'
import Button from '../ui/Button'

const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Minimum 6 characters'),
    age: z.number().min(18, 'Must be at least 18'),
    bio: z.string().optional(),
    role: z.enum(['admin', 'user', 'guest']),
})

type FormData = z.infer<typeof schema>

export default function FormAccountProfile({ onSubmit }: { onSubmit: (data: FormData) => void }) {
    return (
        <Form schema={schema} onSubmit={onSubmit} submitOnChange autoSubmitDelay={500}>
            <div className="grid grid-cols-12 gap-4">
                <FormField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Your email"
                    // TODO: disable
                    className="col-span-12 sm:col-span-6"
                />
                <FormField
                    name="bio"
                    label="Bio"
                    type="textarea"
                    placeholder="Tell us about yourself"
                    className="col-span-12"
                />
                <FormField
                    name="theme"
                    label="Theme"
                    type="select"
                    placeholder="Choose preferred theme"
                    className="col-span-12"
                />
                <FormField
                    name="theme"
                    label="Theme"
                    type="select"
                    placeholder="Choose preferred theme"
                    className="col-span-12"
                />
                <div className="col-span-12">
                    <Button
                        type="submit"
                        className="mt-2 w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </Form>

    )
}
