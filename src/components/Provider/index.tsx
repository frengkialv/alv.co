import DetailProvider from "./DetailProvider";
import MainWrapperProvider from "./MainWrapperProvider";
import CategoryProvider from "./CategoryProvider";
import ToastProvider from "./ToastProvider/ToastProvider";
import HeaderProvider from "./HeaderProvider";
import CartProvider from "./CartProvider";
import { ChildrenProps } from "@/types/common";
import FooterProvider from "./FooterProvider";

function Provider({ children }: ChildrenProps) {
  return (
    <MainWrapperProvider>
      <ToastProvider>
        <HeaderProvider>
          <FooterProvider>
            <CartProvider>
              <DetailProvider>
                {/* <CategoryProvider> */}
                {children}
                {/* </CategoryProvider> */}
              </DetailProvider>
            </CartProvider>
          </FooterProvider>
        </HeaderProvider>
      </ToastProvider>
    </MainWrapperProvider>
  );
}

export default Provider;
