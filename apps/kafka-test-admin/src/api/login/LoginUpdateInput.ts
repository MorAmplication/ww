import { InputJsonValue } from "../../types";

export type LoginUpdateInput = {
  accessKey?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
};
