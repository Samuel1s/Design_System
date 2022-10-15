
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
    children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex py-4 px-3 h-12 gap-3 items-center rounded bg-gray-900 w-full focus-within:ring-2 ring-cyan-300'>
            { props.children }
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'> 
            { props.children }
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputProps) {
    return (
        <input className='bg-transparent w-full text-gray-100 text-xs placeholder:text-gray-400 outline-none'
        {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Root'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}