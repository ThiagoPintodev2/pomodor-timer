import { Button } from '@/components/ui/button'

import { type BtnProps } from './type'


function Btn({ onClick, className, value, img, style}: BtnProps) {
  return (
    <div>
        <Button onClick={onClick} style={style} className={className} variant="outline">{img}{value}</Button>
    </div>
  )
}

export default Btn
