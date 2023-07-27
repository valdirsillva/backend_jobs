import { prisma } from "../../views/lib/prisma";
import { UserRepository, User, Users } from "../UserRepository";

export class PrismaUserRepository implements UserRepository {
   async create(data: User) {
      try {
        await prisma.user.create({
          data: { ...data },
        })

      } catch(error) {
        console.log(error)
      }
   }

   async getUsers(): Promise <{} | undefined> {
      try {
        const users = await prisma.user.findMany()
        return { users: users}
      } catch(error) {
        console.log(error)
      }
   }
}
