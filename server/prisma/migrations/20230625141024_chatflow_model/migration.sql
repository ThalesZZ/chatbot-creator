-- CreateTable
CREATE TABLE "Chatflow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "configJSON" TEXT NOT NULL,
    "chatbotId" TEXT NOT NULL,
    CONSTRAINT "Chatflow_chatbotId_fkey" FOREIGN KEY ("chatbotId") REFERENCES "Chatbot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
