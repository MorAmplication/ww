import { Field, ObjectType } from "@nestjs/graphql";
import { Login } from "../login/base/Login";

@ObjectType()
export class LoginInfo implements Partial<Login> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
