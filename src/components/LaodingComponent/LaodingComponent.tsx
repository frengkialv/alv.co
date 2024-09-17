import * as React from "react";
import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { WEIGHT } from "@/constants";

interface Props {
  isOpen: boolean;
  onOpenChange?: (open: boolean) => void;
}

function LoadingComponent({ isOpen, onOpenChange }: Props) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent aria-describedby={undefined}>
          <VisuallyHidden.Root>
            <Dialog.Title />
            <Dialog.Description />
          </VisuallyHidden.Root>
          <Spinner />
          <Logo>Alv.co</Logo>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// Animasi putaran loading
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Overlay untuk backdrop
const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

// Kontainer konten dialog
const DialogContent = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
`;

// Spinner loading
const Spinner = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  position: absolute;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--color-black);
  border-radius: 50%;
  width: 66px;
  height: 66px;
  animation: ${spin} 1s linear infinite;
`;

const Logo = styled.span`
  position: relative;
  font-size: ${12 / 16}rem;
  font-family: var(--integral-cf);
  font-weight: ${WEIGHT.black};
  line-height: 1;
`;

export default LoadingComponent;
