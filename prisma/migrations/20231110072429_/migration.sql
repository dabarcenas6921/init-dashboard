-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "time" DATETIME NOT NULL,
    "location" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "rsvpLink" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "JobPosting" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "jobPosition" TEXT NOT NULL,
    "jobLocation" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "url" TEXT NOT NULL
);
