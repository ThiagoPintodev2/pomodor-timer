import { RippleButton } from '@/components/ui/shadcn-io/ripple-button';
import type { BtnAnimationProps } from './btnAnimationProps';
 
export const BtnAnimation = ({style, className, value, onClick}: BtnAnimationProps) => {
  return (
    <div>
      <RippleButton style={style} className={className} onClick={onClick} variant="default">{value}</RippleButton>
    </div>
  );
};
export default BtnAnimation;