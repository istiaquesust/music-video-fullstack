import { useFormStatus } from 'react-dom'

export function SignupButton() {
    const { pending } = useFormStatus()
    return (
        <button aria-disabled={pending} type="submit" className="bg-white text-black font-bold py-2 px-4 border border-gray-300 rounded-md shadow-sm transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
            {pending ? 'Submitting...' : 'Sign up'}
        </button>
    )
}