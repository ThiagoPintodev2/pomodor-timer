import type { ChangeEventHandler } from "react"

export type InputProps = {
    className?: string,
    label?: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}