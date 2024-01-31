import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.comment.create({
    data: {
      name: "Jesse",
      message: "Hello, world!",
    },
  });

  await prisma.comment.create({
    data: {
      name: "Dahlia",
      message: "Hey I'm a dog. Let's go for a walk!",
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
