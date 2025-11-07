import type { DefaultTitleProps } from "./defaultTtileProps"

function DefaultTitle({ value }: DefaultTitleProps) {
  return (
    <div >
      <h6 className="text-[1.8rem] font-bold text-gray-600">{value}</h6>
    </div>
  )
}

export default DefaultTitle
