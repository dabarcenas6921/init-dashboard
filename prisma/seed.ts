import { events } from "../src/Data/eventsData";
import { jobPostings } from "../src/Data/jobPostingsData";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  for (const event of events) {
    await prisma.event.create({
      data: event,
    });
  }
  for (const jobPosting of jobPostings) {
    await prisma.jobPosting.create({
      data: jobPosting,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
