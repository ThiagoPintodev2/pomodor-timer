import type { DefaultTitleProps } from "./defaultTtileProps"

function DefaultTitle({ value }: DefaultTitleProps) {
  return (
    <div >
      <div className="text-[1.8rem] font-bold text-gray-600 text-start">{value}</div>
    </div>
  )
}

export default DefaultTitle
