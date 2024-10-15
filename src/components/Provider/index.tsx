import MainWrapperProvider from "./MainWrapperProvider";
import ToastProvider from "./ToastProvider/ToastProvider";
import HeaderProvider from "./HeaderProvider";
import CartProvider from "./CartProvider";
import FooterProvider from "./FooterProvider";
import { ChildrenProps } from "@/types/common";

function Provider({ children }: ChildrenProps) {
  return (
    <MainWrapperProvider>
      <ToastProvider>
        <HeaderProvider>
          <FooterProvider>
            <CartProvider>{children}</CartProvider>
          </FooterProvider>
        </HeaderProvider>
      </ToastProvider>
    </MainWrapperProvider>
  );
}

export default Provider;
