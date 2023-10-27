/* eslint-disable indent */
import { MigrationInterface, QueryRunner } from 'typeorm';

import Activities from '../../assets/data/activities.json';

export class CreateActivityDefaultData1698420092785 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.createQueryBuilder().insert().into('activities').values(Activities)
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.createQueryBuilder().delete().from('activities').where('activities.id = :id', { id: '7d46630f-c5a0-405a-ae01-f938e3863863' })
            .execute();
    }
}
