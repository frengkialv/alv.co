import {
  CommonApiResponse,
  FindUserDtoOut,
  LoginDtoOut,
  LoginProps,
} from "@/type";
import { BaseHttpInstance, BaseHttpInstanceWithToken } from "./base.service";

export async function login({
  email,
  password,
}: LoginProps): Promise<CommonApiResponse<LoginDtoOut>> {
  const url = "/auth/login";
  const { data: resp } = await BaseHttpInstance.post(url, {
    email,
    password,
  });

  return resp;
}

export async function findUser(): Promise<CommonApiResponse<FindUserDtoOut>> {
  const url = "/user/find";
  const { data: resp } = await BaseHttpInstanceWithToken.get(url);

  return resp;
}
