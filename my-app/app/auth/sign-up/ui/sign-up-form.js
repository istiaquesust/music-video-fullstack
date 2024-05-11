'use client'

import { useFormState } from 'react-dom'
import { SignUpFormState } from '@/app/auth/sign-up/actions/sign-up-action'
import { SignupButton } from './sign-up-button'


export function SignupForm() {
    const [state, action] = useFormState(SignUpFormState, undefined)

    return (
        <div className="form-div max-w-sm mx-auto rounded-md px-8 py-4">
            <p className='text-2xl py-2'>Sign Up</p>
            <form action={action} className="">
                <div className="mb-4">
                    <label htmlFor="full_name" className="block mb-1">Full Name*</label>
                    <input id="full_name" name="full_name" placeholder="Full Name" className="form-input w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                {state?.errors?.full_name && <p className="text-red-500">{state.errors.full_name}</p>}

                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">Email*</label>
                    <input id="email" name="email" placeholder="Valid email" type="email" className="form-input w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                {state?.errors?.email && <p className="text-red-500">{state.errors.email}</p>}

                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">Password*</label>
                    <input id="password" name="password" placeholder="At least 8 characters" type="password" className="form-input w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                {state?.errors?.password && (
                    <div className="mb-4">
                        <p className="mb-1">Password must:</p>
                        <ul className="list-disc ml-4">
                            {state?.errors?.password.map((error) => (
                                <li key={error} className="text-red-500">- {error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <SignupButton />
                <div className='mt-4'>
                    {state?.message && <p className="text-red-500">{state.message}</p>}
                </div>
            </form>
        </div>

    )
}