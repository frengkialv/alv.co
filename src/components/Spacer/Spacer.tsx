import styled from "styled-components";

interface SpacerProps {
  size: number;
  axis?: string;
}

function Spacer({ size, axis }: SpacerProps) {
  return <Wrapper size={size} axis={axis} />;
}

function getHeight({ axis, size }: SpacerProps) {
  return axis === "horizontal" ? 1 : size;
}
function getWidth({ axis, size }: SpacerProps) {
  return axis === "vertical" ? 1 : size;
}

const Wrapper = styled.span<{ size: number; axis: string | undefined }>`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

export default Spacer;
