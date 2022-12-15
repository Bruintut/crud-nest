-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Procfile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Procfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "cover_image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "imb_score" DOUBLE PRECISION NOT NULL,
    "trailer_youtube_url" TEXT NOT NULL,
    "gameplay_youtube_url" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gender" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Gender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GameToProcfile" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GameToGender" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "Game_title_key" ON "Game"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Gender_name_key" ON "Gender"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_GameToProcfile_AB_unique" ON "_GameToProcfile"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToProcfile_B_index" ON "_GameToProcfile"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GameToGender_AB_unique" ON "_GameToGender"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToGender_B_index" ON "_GameToGender"("B");

-- AddForeignKey
ALTER TABLE "Procfile" ADD CONSTRAINT "Procfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToProcfile" ADD CONSTRAINT "_GameToProcfile_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToProcfile" ADD CONSTRAINT "_GameToProcfile_B_fkey" FOREIGN KEY ("B") REFERENCES "Procfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToGender" ADD CONSTRAINT "_GameToGender_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToGender" ADD CONSTRAINT "_GameToGender_B_fkey" FOREIGN KEY ("B") REFERENCES "Gender"("id") ON DELETE CASCADE ON UPDATE CASCADE;
