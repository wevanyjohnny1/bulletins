/* eslint-disable indent */
import { MigrationInterface, QueryRunner } from 'typeorm';

import BulletinsAppointments from '../../assets/data/bulletinsAppointments.json';

export class CreateBulletinsAppointmentsDefaultData1698552752463 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.createQueryBuilder().insert().into('bulletins_appointments').values(BulletinsAppointments)
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.createQueryBuilder().delete().from('bulletins_appointments').where('bulletins_appointments.id = :id', { id: '7d46630f-c5a0-405a-ae01-f938e3863863' })
            .execute();
    }
}
