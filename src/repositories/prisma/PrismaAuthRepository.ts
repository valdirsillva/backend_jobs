import { prisma } from "../../views/lib/prisma";
import { Auth, AuthRepository } from "../AuthRepository";

export class PrismaAuthRepository implements AuthRepository {
    async login({ email }: Auth) {
        const user = await prisma.user.findFirst({
            where: {
                email,
            }
        })

        return user ?? null;
    }
}