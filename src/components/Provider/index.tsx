import { ChildrenProps } from "@/type";
import DetailProvider from "./DetailProvider";
import MainWrapperProvider from "./MainWrapperProvider";

function Provider({ children }: ChildrenProps) {
  return (
    <MainWrapperProvider>
      <DetailProvider>{children}</DetailProvider>
    </MainWrapperProvider>
  );
}

export default Provider;
