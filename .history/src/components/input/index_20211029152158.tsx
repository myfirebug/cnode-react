import React, { ReactNode } from 'react'

interface IInput {
    after?: ReactNode,
    before?: ReactNode
}

type InputHTMLAttributes = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputHTMLAttributes & IInput> = ({
    after,
    before,
    ...reset
}) => {
    return (
        <div className="ds-input__wrapper">
            <input {...reset} />
        </div>
    )
}

export default Input
