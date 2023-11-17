/*
  Warnings:

  - Added the required column `company` to the `JobPosting` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobPosting" (
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
INSERT INTO "new_JobPosting" ("date", "id", "image", "jobLocation", "jobPosition", "jobType", "title", "url") SELECT "date", "id", "image", "jobLocation", "jobPosition", "jobType", "title", "url" FROM "JobPosting";
DROP TABLE "JobPosting";
ALTER TABLE "new_JobPosting" RENAME TO "JobPosting";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
