import { Login as TLogin } from "../api/login/Login";

export const LOGIN_TITLE_FIELD = "username";

export const LoginTitle = (record: TLogin): string => {
  return record.username || String(record.id);
};
