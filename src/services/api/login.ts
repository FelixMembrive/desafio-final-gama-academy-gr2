// LOGIN

import { baseApi } from ".";

interface ILoginPayload {
    email: string;
    password: string;
}

export function loginUsuario(payload: ILoginPayload) {
  return baseApi.post("/login", payload);
}