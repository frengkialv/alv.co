"use client";
import React from "react";
import styled from "styled-components";
import Tooltip from "@/components/Tooltip";
import UnstyledButton from "@/components/UnstyledButton";
import Icon from "@/components/Icon";
import { deleteCart } from "@/services/cart.service";
import { QUERIES } from "@/constants";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/Provider/ToastProvider";
import LoadingComponent from "@/components/LaodingComponent";

interface Props {
  id: string;
}

function DeleteCartButton({ id }: Props) {
  const router = useRouter();
  const { showToast } = useToast();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const deleteProductHandler = async (id: string) => {
    try {
      setIsLoading(true);
      const { data } = await deleteCart(id);
      if (data) {
        setTimeout(() => {
          showToast({
            type: "success",
            title: "Success!",
            description: "Item has been removed from the cart.",
          });
        }, 2000);
      }
    } catch (error) {
      console.log("🚀 ~ error:", error);
    } finally {
      router.refresh();
      setTimeout(async () => {
        setIsLoading(false);
      }, 2000);
    }
  };
  return (
    <>
      <DeleteButtonDekstop>
        <Tooltip text="Delete product">
          <UnstyledButton onClick={() => deleteProductHandler(id)}>
            <Icon id="trash2" color="#FF3333" size={20} strokeWidth={2} />
          </UnstyledButton>
        </Tooltip>
      </DeleteButtonDekstop>

      <DeleteButtonMobile>
        <UnstyledButton onClick={() => deleteProductHandler(id)}>
          <Icon id="close" color="#000000" size={20} strokeWidth={2} />
        </UnstyledButton>
      </DeleteButtonMobile>

      <LoadingComponent isLoading={isLoading} />
    </>
  );
}

const DeleteButtonDekstop = styled.div`
  display: inline;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const DeleteButtonMobile = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
  }
`;

export default DeleteCartButton;
