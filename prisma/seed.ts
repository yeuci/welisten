import { db } from "@/lib/db";

async function main() {
  console.log(`Start seeding ...`);
  const users = await db.user.createMany({
    data: [
      {
        email: "",
      },
      {
        email: "",
      },
    ],
  });
  console.log(`Seeding finished.`);
}
// main();
