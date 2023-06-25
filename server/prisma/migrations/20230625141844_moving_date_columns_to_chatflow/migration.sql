/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Chatbot` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Chatbot` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chatbot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Chatbot" ("id", "name") SELECT "id", "name" FROM "Chatbot";
DROP TABLE "Chatbot";
ALTER TABLE "new_Chatbot" RENAME TO "Chatbot";
CREATE TABLE "new_Chatflow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "configJSON" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chatbotId" TEXT NOT NULL,
    CONSTRAINT "Chatflow_chatbotId_fkey" FOREIGN KEY ("chatbotId") REFERENCES "Chatbot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Chatflow" ("chatbotId", "configJSON", "id", "name") SELECT "chatbotId", "configJSON", "id", "name" FROM "Chatflow";
DROP TABLE "Chatflow";
ALTER TABLE "new_Chatflow" RENAME TO "Chatflow";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
