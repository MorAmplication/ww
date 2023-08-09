import { LoginInfo } from "./LoginInfo";

export interface IAuthStrategy {
  validate: (...any: any) => Promise<LoginInfo>;
}
