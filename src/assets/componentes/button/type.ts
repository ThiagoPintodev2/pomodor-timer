import type { ReactNode } from "react"

export type BtnProps = {
    className: string,
    value: string,
    img?: ReactNode,
    onClick?: React.MouseEventHandler
}