import { prisma } from "./prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "5b1c6987-1d50-41a0-a41f-4a77fc0aea52",
      title: "Unite Submit",
      slug: "unite-submit",
      details: "Um evento para apaixonados por tecnologia e programação.",
      maximumAttendees: 120
    }
  });
}

try {
  await seed();
  console.log("Database seeded!");
} catch {
  console.error("An error occur!");
} finally {
  prisma.$disconnect();
}
