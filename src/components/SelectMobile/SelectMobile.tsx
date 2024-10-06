"use client";
import React from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Icon from "../Icon";

type Options = {
  label: string | number;
  value: string | number;
};

interface Props {
  label?: string;
  value: string | number;
  options: Options[];
  handleChange: (val: string | number) => void;
}

function SelectMobile({ label, value, options, handleChange }: Props) {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <>
      <Select onClick={() => setShow(true)}>
        {label && label} {value}{" "}
        <Icon id="chevron-down" size={18} strokeWidth={1.5} color="#666666" />
      </Select>

      <Dialog.Root open={show} onOpenChange={setShow}>
        <Dialog.Portal>
          <DialogOverlay />
          <DialogContent aria-describedby={undefined}>
            <VisuallyHidden.Root>
              <Dialog.Title />
              <Dialog.Description />
            </VisuallyHidden.Root>

            <Wrapper>
              <InnerWrapper>
                {options.map((option) => (
                  <Option
                    key={option.value}
                    value={option.value}
                    onClick={() => {
                      if (value === option.value) {
                        setShow(false);
                        return;
                      }
                      handleChange(option.value);
                      setShow(false);
                    }}
                  >
                    {option.label}
                  </Option>
                ))}
              </InnerWrapper>
            </Wrapper>
          </DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

const Select = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${14 / 16}rem;
  line-height: 1;
  border: 1.5px solid #dedede;
  color: #666666;
  border-radius: 8px;
  padding: 2px 6px;
  background-color: transparent;
  outline: none;
`;

const Option = styled.option`
  padding: 22px 18px;
  border-top: 1px solid #606060;

  &:first-child {
    border-top: none;
  }
`;

const RadioButton = styled.input``;

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

const Wrapper = styled.div`
  padding: 0 10px;
  width: 100vw;
`;

const InnerWrapper = styled.div`
  background-color: #23262f;
  border-radius: 22px;
  font-size: ${16 / 16}rem;
  color: white;
  max-height: 350px;
  overflow-y: auto;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default SelectMobile;
