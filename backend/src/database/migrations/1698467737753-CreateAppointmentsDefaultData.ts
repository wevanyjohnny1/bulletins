/* eslint-disable indent */
import { MigrationInterface, QueryRunner } from 'typeorm';

import Appointments from '../../assets/data/appointments.json';

export class CreateAppointmentsDefaultData1698467737753 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.createQueryBuilder().insert().into('appointments').values(Appointments)
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.createQueryBuilder().delete().from('appointments').where('appointments.id = :id', { id: '7d46630f-c5a0-405a-ae01-f938e3863863' })
            .execute();
    }
}
