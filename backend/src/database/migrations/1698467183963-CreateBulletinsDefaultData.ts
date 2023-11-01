/* eslint-disable indent */
import { MigrationInterface, QueryRunner } from 'typeorm';

import Bulletins from '../../assets/data/bulletins.json';

export class CreateBulletinsDefaultData1698467183963 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.createQueryBuilder().insert().into('bulletins').values(Bulletins)
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.createQueryBuilder().delete().from('bulletins').where('bulletins.id = :id', { id: '7d46630f-c5a0-405a-ae01-f938e3863863' })
            .execute();
    }
}
