import { Overlay } from './styled';

interface RLoadingOverlayProps {
  isVisible: boolean;
  bgColor?: string;
}

export function ROverlay({
  isVisible,
  bgColor = 'rgba(0, 0, 0, 0.7)',
}: RLoadingOverlayProps) {
  return (
    <Overlay
      isVisible={isVisible}
      bgColor={bgColor}
    />
  );
}
