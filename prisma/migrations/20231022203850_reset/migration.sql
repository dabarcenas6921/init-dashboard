/*
  Warnings:

  - The primary key for the `JobPosting` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobPosting" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "jobPosition" TEXT NOT NULL,
    "jobLocation" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "url" TEXT NOT NULL
);
INSERT INTO "new_JobPosting" ("company", "date", "id", "image", "jobLocation", "jobPosition", "jobType", "title", "url") SELECT "company", "date", "id", "image", "jobLocation", "jobPosition", "jobType", "title", "url" FROM "JobPosting";
DROP TABLE "JobPosting";
ALTER TABLE "new_JobPosting" RENAME TO "JobPosting";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
