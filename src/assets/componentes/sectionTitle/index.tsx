import type { SectionTitleProps } from "./sectionTitleProps"

function SectionTitle({ img, value }: SectionTitleProps) {
  return (
    <div className="flex items-center mt-[3rem] mb-[2rem] gap-[0.5rem] text-[1.5rem] font-bold text-gray-400">
        <div>{img}</div>
        <h5>{value}</h5>
    </div>
  )
}

export default SectionTitle
