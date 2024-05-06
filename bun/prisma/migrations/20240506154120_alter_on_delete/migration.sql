-- DropForeignKey
ALTER TABLE "check_ins" DROP CONSTRAINT "check_ins_attendee_id_fkey";

-- DropForeignKey
ALTER TABLE "tb_attendees" DROP CONSTRAINT "tb_attendees_event_id_fkey";

-- AddForeignKey
ALTER TABLE "tb_attendees" ADD CONSTRAINT "tb_attendees_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "tb_events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_attendee_id_fkey" FOREIGN KEY ("attendee_id") REFERENCES "tb_attendees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
