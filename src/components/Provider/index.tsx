import DetailProvider from "./DetailProvider";
import MainWrapperProvider from "./MainWrapperProvider";
import CategoryProvider from "./CategoryProvider";
import ToastProvider from "./ToastProvider/ToastProvider";
import { ChildrenProps } from "@/types/common";

function Provider({ children }: ChildrenProps) {
  return (
    <MainWrapperProvider>
      <ToastProvider>
        <DetailProvider>
          <CategoryProvider>{children}</CategoryProvider>
        </DetailProvider>
      </ToastProvider>
    </MainWrapperProvider>
  );
}

export default Provider;
