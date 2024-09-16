import { BaseHttpInstance, BaseHttpInstanceWithToken } from "./base.service";
import { CommonApiResponse } from "@/types/common";

interface LoginProps {
  email: string;
  password: string;
}

interface LoginDtoOut {
  access_token: string;
}

export interface FindUserDtoOut {
  email: string;
  id: string;
  name: string;
  username: string;
}

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
