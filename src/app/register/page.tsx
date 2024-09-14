"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { QUERIES, WEIGHT } from "@/constants";
import Spacer from "@/components/Spacer";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

function RegisterPage() {
  const id = React.useId();
  const router = useRouter();
  const [isChecked, setIsChecked] = React.useState<boolean>(true);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <Wrapper>
      <InnerWrapper>
        <Header>
          <HeaderTitle>New customer</HeaderTitle>
          <HeaderTitle onClick={() => router.push("/login")}>
            Returning customer
          </HeaderTitle>
        </Header>
        <Content>
          <Title>Create an account</Title>
          <Notes>
            We will never post on your behalf or share any information without
            your permission.
          </Notes>
          <FormWrapper>
            <LabelInput htmlFor={`${id}-name`}>Name</LabelInput>
            <Input id={`${id}-name`} placeholder="Joe Schmo" />

            <Spacer size={20} />

            <LabelInput htmlFor={`${id}-username`}>Username</LabelInput>
            <Input id={`${id}-username`} placeholder="joeschomo" />

            <Spacer size={20} />

            <LabelInput htmlFor={`${id}-email`}>Email address</LabelInput>
            <Input
              id={`${id}-email`}
              placeholder="example@gmail.com"
              type="email"
            />

            <EmailNotes>
              Information on your account and on your orders will be sent to
              this address. Please ensure it is correctly entered.
            </EmailNotes>

            <Spacer size={20} />

            <LabelInput
              htmlFor={`${id}-password`}
              style={{ marginBottom: "4px" }}
            >
              Password
            </LabelInput>
            <PasswordInputWrapper>
              <Input
                id={`${id}-password`}
                placeholder="must have at least 6 characters"
                type={showPassword ? "text" : "password"}
                style={{ marginTop: 0 }}
              />
              <PasswordIconWrapper
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword && <Icon id="eye" size={18} strokeWidth={1.2} />}
                {!showPassword && (
                  <Icon id="eye-off" size={18} strokeWidth={1.2} />
                )}
              </PasswordIconWrapper>
            </PasswordInputWrapper>

            <CheckboxWrapper>
              <Checkbox
                id={`${id}-save-info`}
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <LabelCheckbox htmlFor={`${id}-save-info`}>
                Keep me signed in
              </LabelCheckbox>
            </CheckboxWrapper>

            <ButtonWrapper>
              <Button grow={true} size="medium" type="submit">
                LOG IN
              </Button>
            </ButtonWrapper>

            <NotesBottom>
              By creating your account or signing in, you agree to our Terms and
              Conditions & Privacy Policy.
            </NotesBottom>
          </FormWrapper>
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const InnerWrapper = styled.div`
  width: 550px;
  border-radius: 12px;
  border: 1px solid var(--color-gray-200);

  @media ${QUERIES.phoneAndSmaller} {
    border: none;
    width: 90%;
  }
`;

const Header = styled.div`
  display: flex;
  padding: 20px 0;
  padding-bottom: 0;
  border-bottom: 1px solid var(--color-gray-200);
`;

const HeaderTitle = styled.div`
  flex: 1;
  text-align: center;
  padding: 0 20px;
  padding-bottom: 20px;
  white-space: nowrap;
  font-size: ${18 / 16}rem;
  font-weight: 500;

  &:first-child {
    border-bottom: 3px solid var(--color-black);
  }

  &:last-child {
    cursor: pointer;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const Content = styled.div`
  padding: 40px 30px;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 30px;
  }
`;

const Title = styled.h4`
  font-size: ${26 / 16}rem;
  text-align: center;
  line-height: 1.2;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${22 / 16}rem;
  }
`;

const Notes = styled.div`
  font-size: ${15 / 16}rem;
  font-weight: ${WEIGHT.medium};
  color: #6d6e6e;
  width: 350px;
  margin: 35px auto;
  margin-top: 20px;
  text-align: center;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
    font-size: ${14 / 16}rem;
    margin: 20px auto;
  }
`;

const FormWrapper = styled.form`
  width: 350px;
  margin: 0 auto;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const LabelInput = styled.label`
  display: block;
  font-size: ${15 / 16}rem;
  font-weight: ${WEIGHT.medium};
  color: #434545;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const Input = styled.input`
  font-size: ${15 / 16}rem;
  padding: 10px;
  outline-offset: 4px;
  margin-top: 4px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--color-gray-600);
`;

const EmailNotes = styled.p`
  font-size: ${12 / 16}rem;
  margin-top: 6px;
  font-weight: ${WEIGHT.medium};
`;

const PasswordInputWrapper = styled.div`
  position: relative;
`;

const PasswordIconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const CheckboxWrapper = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  appearance: none; // Menghilangkan tampilan checkbox default
  border: 1px solid #000000;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  position: relative;

  // Background default
  background-color: ${({ checked }) => (checked ? "#000000" : "#fff")};

  // Menampilkan centang jika checkbox dalam kondisi checked
  &:checked {
    background-color: #000000; // Warna ketika tercentang
    border-color: #000000;
  }

  &:hover {
    border-color: #888; // Warna saat hover
  }

  // Menggunakan pseudo-element untuk menampilkan simbol centang
  &:checked::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 6px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const LabelCheckbox = styled.label`
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHT.medium};
  color: #434545;
  user-select: none;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  margin-top: 25px;
`;

const NotesBottom = styled.div`
  font-size: ${12 / 16}rem;
  margin-top: 12px;
  padding: 0 14px;
  text-align: center;
  font-weight: ${WEIGHT.medium};
`;

export default RegisterPage;
