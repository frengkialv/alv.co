import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Icon from "../Icon";
import styled from "styled-components";
import UnstyledButton from "../UnstyledButton";
import SearchInput from "../SearchInput";
import { WEIGHT } from "@/constants";

interface SearchModal {
  open: boolean | undefined;
  handleShowSearchModal: (val: boolean) => void;
}

function SearchModal({ open, handleShowSearchModal }: SearchModal) {
  return (
    <Wrapper open={open} onOpenChange={handleShowSearchModal}>
      <Dialog.Portal>
        <Backdrop />
        <Content aria-describedby={undefined}>
          <VisuallyHidden.Root>
            <Dialog.Title>Search Modal</Dialog.Title>
            <Dialog.Description />
          </VisuallyHidden.Root>

          <SearchInputWrapper>
            <SearchInput type="search" placeholder="Search..." />
            <CloseButtonWrapper asChild>
              <BackButton>Batalkan</BackButton>
            </CloseButtonWrapper>
          </SearchInputWrapper>

          <SuggestionWrapper>
            <Title>Pencarian populer</Title>

            <ListSuggest>
              <Icon id="clock" strokeWidth={2} color="hsl(0, 0%, 60%)" />
              Nike
            </ListSuggest>
            <ListSuggest>
              <Icon id="clock" strokeWidth={2} color="hsl(0, 0%, 60%)" />
              Vans
            </ListSuggest>
            <ListSuggest>
              <Icon id="clock" strokeWidth={2} color="hsl(0, 0%, 60%)" />
              Stussy
            </ListSuggest>
            <ListSuggest>
              <Icon id="clock" strokeWidth={2} color="hsl(0, 0%, 60%)" />
              Comme Des Garcons
            </ListSuggest>
          </SuggestionWrapper>
        </Content>
      </Dialog.Portal>
    </Wrapper>
  );
}

const Wrapper = styled(Dialog.Root)``;

const Backdrop = styled(Dialog.Overlay)`
  background-color: var(--color-backdrop);
  position: fixed;
  inset: 0;
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: white;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const BackButton = styled(UnstyledButton)`
  color: var(--color-black);
  font-size: 14px;
  font-weight: ${WEIGHT.medium};
`;

const SuggestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

const Title = styled.h3`
  font-size: 18px;
`;

const ListSuggest = styled.a`
  display: flex;
  gap: 15px;
`;

const CloseButtonWrapper = styled(Dialog.Close)``;

export default SearchModal;
