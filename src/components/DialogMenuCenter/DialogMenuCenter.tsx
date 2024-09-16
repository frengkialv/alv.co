"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Icon from "../Icon";

interface Props {
  title?: string;
  open: boolean | undefined;
  onOpenChange: (val: boolean) => void;
  children: React.ReactNode;
}

function DialogMenuCenter({ title, open, onOpenChange, children }: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Backdrop>
          <Content aria-describedby={undefined}>
            <VisuallyHidden.Root>
              <Dialog.Title>Navigation Modal</Dialog.Title>
              <Dialog.Description />
            </VisuallyHidden.Root>
            <InnerWrapper>
              <Header>
                <HeaderTitle>{title}</HeaderTitle>
                <Dialog.Close asChild>
                  <CloseButton className="IconButton" aria-label="Close">
                    <Icon id="close" strokeWidth={1.5} />
                  </CloseButton>
                </Dialog.Close>
              </Header>

              <MainContent>{children}</MainContent>
            </InnerWrapper>
          </Content>
        </Backdrop>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const fadeIn = keyframes`
from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    bottom: -90%;
  }

  to {
    bottom: 0;
  }
`;

const Backdrop = styled(Dialog.Overlay)`
  background-color: var(--color-backdrop);
  position: fixed;
  inset: 0;
  animation: ${fadeIn} 0.3s linear;
  will-change: transform;
`;

const Content = styled(Dialog.Content)`
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 85%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  animation: ${slideIn} 0.3s ease-out;
  animation-fill-mode: backwards;
  will-change: transform;
`;

const InnerWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px 10px 20px;
  border-bottom: 1px solid var(--color-gray-200);
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 6px;
  cursor: pointer;
  user-select: none;
`;

const HeaderTitle = styled.span`
  font-size: ${18 / 16}rem;
  font-weight: 600;
`;

const MainContent = styled.div`
  padding: 25px;
  padding-top: 30px;
  height: calc(85vh - 63.8px);
  overflow-y: auto;
`;

export default DialogMenuCenter;
