-- CreateTable
CREATE TABLE "tb_attendees" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dt_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "event_id" TEXT NOT NULL,

    CONSTRAINT "tb_attendees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_attendees_email_key" ON "tb_attendees"("email");

-- AddForeignKey
ALTER TABLE "tb_attendees" ADD CONSTRAINT "tb_attendees_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "tb_events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
