/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Login } from "@prisma/client";
import { PasswordService } from "../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../prisma.util";

export class LoginServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count<T extends Prisma.LoginCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.LoginCountArgs>
  ): Promise<number> {
    return this.prisma.login.count(args);
  }

  async findMany<T extends Prisma.LoginFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LoginFindManyArgs>
  ): Promise<Login[]> {
    return this.prisma.login.findMany(args);
  }
  async findOne<T extends Prisma.LoginFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LoginFindUniqueArgs>
  ): Promise<Login | null> {
    return this.prisma.login.findUnique(args);
  }
  async create<T extends Prisma.LoginCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LoginCreateArgs>
  ): Promise<Login> {
    return this.prisma.login.create<T>({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async update<T extends Prisma.LoginUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LoginUpdateArgs>
  ): Promise<Login> {
    return this.prisma.login.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async delete<T extends Prisma.LoginDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LoginDeleteArgs>
  ): Promise<Login> {
    return this.prisma.login.delete(args);
  }
}
