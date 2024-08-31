import { ChildrenProps } from "@/type";
import DetailProvider from "./DetailProvider";
import MainWrapperProvider from "./MainWrapperProvider";
import CategoryProvider from "./CategoryProvider";

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
