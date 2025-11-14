import { RippleButton } from '@/components/ui/shadcn-io/ripple-button';
import type { BtnAnimationProps } from './btnAnimationProps';
 
export const BtnAnimation = ({className, value, onClick}: BtnAnimationProps) => {
  return (
    <div>
      <RippleButton className={className} onClick={onClick} variant="default">{value}</RippleButton>
    </div>
  );
};
export default BtnAnimation;