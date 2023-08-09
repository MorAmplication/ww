import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs } from "./LoginArgs";
import { LoginInfo } from "./LoginInfo";

@Resolver(LoginInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => LoginInfo)
  async login(@Args() args: LoginArgs): Promise<LoginInfo> {
    return this.authService.login(args.credentials);
  }

  @Query(() => LoginInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async loginInfo(@UserData() entityInfo: LoginInfo): Promise<LoginInfo> {
    return entityInfo;
  }
}
