-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chatflow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "configJSON" TEXT NOT NULL DEFAULT '{}',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chatbotId" TEXT NOT NULL,
    CONSTRAINT "Chatflow_chatbotId_fkey" FOREIGN KEY ("chatbotId") REFERENCES "Chatbot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Chatflow" ("chatbotId", "configJSON", "createdAt", "id", "name", "updatedAt") SELECT "chatbotId", "configJSON", "createdAt", "id", "name", "updatedAt" FROM "Chatflow";
DROP TABLE "Chatflow";
ALTER TABLE "new_Chatflow" RENAME TO "Chatflow";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
