/* eslint-disable indent */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersDefaultData1698427117354 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.createQueryBuilder().insert().into('users').values({
            id: 'cb89365b-6880-4c96-8dc1-5311e49e1159',
            name: 'test',
            email: 'test@mail.com',
            password: 'test',
        })
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.createQueryBuilder().delete().from('users').where('users.id = :id', { id: 'cb89365b-6880-4c96-8dc1-5311e49e1159' })
            .execute();
    }
}
