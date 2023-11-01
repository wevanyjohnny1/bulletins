/* eslint-disable indent */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEmployees1698466387370 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'employees',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'code',
                        type: 'varchar',
                    },
                    {
                        name: 'active',
                        type: 'boolean',
                    },
                    {
                        name: 'image',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('employees');
    }
}
