/* eslint-disable indent */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateActivity1698419347538 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'activities',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'code',
                        type: 'int',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'color',
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
        await queryRunner.dropTable('activities');
    }
}
