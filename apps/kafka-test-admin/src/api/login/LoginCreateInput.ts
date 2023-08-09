import { InputJsonValue } from "../../types";

export type LoginCreateInput = {
  accessKey?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
};
