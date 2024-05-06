/*
  Warnings:

  - The primary key for the `tb_attendees` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "tb_attendees" DROP CONSTRAINT "tb_attendees_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "tb_attendees_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "tb_attendees_id_seq";
