import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Icon from "../Icon";
import styled from "styled-components";

interface MobileMenuProps {
  open: boolean | undefined;
  handleShowMobileMenu: (val: boolean) => void;
}

function MobileMenu({ open, handleShowMobileMenu }: MobileMenuProps) {
  return (
    <Dialog.Root open={open} onOpenChange={handleShowMobileMenu}>
      <Dialog.Portal>
        <Backdrop />
        <Content aria-describedby={undefined}>
          <VisuallyHidden.Root>
            <Dialog.Title>Navigation Modal</Dialog.Title>
            <Dialog.Description />
          </VisuallyHidden.Root>
          <InnerWrapper>
            {/* <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Icon id="close" strokeWidth={1} />
              </button>
            </Dialog.Close> */}
          </InnerWrapper>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const Backdrop = styled(Dialog.Overlay)`
  background-color: var(--color-backdrop);
  position: absolute;
  inset: 0;
`;

const Content = styled(Dialog.Content)`
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  padding: 25px;
`;

const InnerWrapper = styled.div``;
export default MobileMenu;
