import React from "react";
import styled from "styled-components";

interface Props {
  size?: string;
  color?: string;
  $outercolor?: string;
}

function TriangleAsset({
  size = "50",
  color = "black",
  $outercolor = "white",
  ...delegated
}: Props) {
  return (
    <Wrapper $outercolor={$outercolor} color={color} size={size} {...delegated}>
      <Filler style={{ top: "-50%", left: "-50%" }} />
      <Filler style={{ top: "-50%", right: "-50%" }} />
      <Filler style={{ bottom: "-50%", left: "-50%" }} />
      <Filler style={{ bottom: "-50%", right: "-50%" }} />
    </Wrapper>
  );
}

const Wrapper = styled.div<Props>`
  --color: ${(props) => props.color};
  --outer-color: ${(props) => props.$outercolor};
  --size: ${(props) => props.size + "px"};

  position: relative;
  width: var(--size);
  height: var(--size);
  overflow: hidden;
  background-color: var(--color);
`;

const Filler = styled.div`
  position: absolute;

  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--outer-color);
`;

export default TriangleAsset;
