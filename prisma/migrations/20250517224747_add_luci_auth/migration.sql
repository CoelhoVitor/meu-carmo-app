/*
  Warnings:

  - You are about to drop the column `name` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE usuario_id_seq;
ALTER TABLE "Usuario" DROP COLUMN "name",
ADD COLUMN     "nome" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('usuario_id_seq'),
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3) NOT NULL,
ALTER SEQUENCE usuario_id_seq OWNED BY "Usuario"."id";

-- CreateTable
CREATE TABLE "Sessao" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "sessao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "usuario_email_key" RENAME TO "usuario_email_key";
