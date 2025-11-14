import type { CSSProperties, ReactNode } from "react"

export type BtnProps = {
    className: string,
    value: string,
    img?: ReactNode,
    onClick?: React.MouseEventHandler
    style?: CSSProperties
}