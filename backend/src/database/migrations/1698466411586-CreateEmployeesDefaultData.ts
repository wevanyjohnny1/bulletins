/* eslint-disable indent */
import { MigrationInterface, QueryRunner } from 'typeorm';

import Employees from '../../assets/data/employees.json';

export class CreateEmployeesDefaultData1698466411586 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.createQueryBuilder().insert().into('employees').values(Employees)
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.createQueryBuilder().delete().from('employees').where('employees.id = :id', { id: 'cb89365b-6880-4c96-8dc1-5311e49e1159' })
            .execute();
    }
}
