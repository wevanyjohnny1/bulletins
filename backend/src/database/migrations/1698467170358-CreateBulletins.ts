/* eslint-disable indent */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBulletins1698467170358 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'bulletins',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'employee_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKEmployeeBulletin',
                        referencedTableName: 'employees',
                        referencedColumnNames: ['id'],
                        columnNames: ['employee_id'],
                        onDelete: 'SET NULL',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('bulletins');
    }
}
