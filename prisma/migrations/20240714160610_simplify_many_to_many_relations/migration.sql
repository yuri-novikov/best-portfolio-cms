/*
  Warnings:

  - You are about to drop the `TagsOnCases` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TagsOnCases";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_CaseToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CaseToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Case" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CaseToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CaseToTag_AB_unique" ON "_CaseToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_CaseToTag_B_index" ON "_CaseToTag"("B");
