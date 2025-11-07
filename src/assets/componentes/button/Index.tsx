import { Button } from '../../../components/ui/button'

import { type BtnProps } from './type'


function Btn({ onClick, className, value, img}: BtnProps) {
  return (
    <div>
        <Button onClick={onClick} className={className} variant="outline">{img}{value}</Button>
    </div>
  )
}

export default Btn
