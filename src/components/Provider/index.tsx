import DetailProvider from "./DetailProvider";
import MainWrapperProvider from "./MainWrapperProvider";
import CategoryProvider from "./CategoryProvider";
import { ChildrenProps } from "@/types/common";

function Provider({ children }: ChildrenProps) {
  return (
    <MainWrapperProvider>
      <DetailProvider>
        <CategoryProvider>{children}</CategoryProvider>
      </DetailProvider>
    </MainWrapperProvider>
  );
}

export default Provider;
