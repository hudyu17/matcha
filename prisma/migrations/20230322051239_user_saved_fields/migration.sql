-- CreateTable
CREATE TABLE "Career" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "path" TEXT[],
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSaved" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "saved" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "cmplus" BOOLEAN NOT NULL DEFAULT false,
    "accessed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserSaved_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSaved_userId_key" ON "UserSaved"("userId");
