import type { ChangeEventHandler, ReactNode } from "react"

export type InputProps = {
    type?: string,
    icon?: ReactNode,
    iconPassword?: ReactNode,
    className?: string,
    label?: string,
    placeholder: string,
    value?: string | number,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    onClick?: React.MouseEventHandler,
}