/* eslint-disable indent */
import {
    MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class CreateAppointments1698467696029 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'appointments',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'startDate',
                        type: 'timestamp',
                    },
                    {
                        name: 'endDate',
                        type: 'timestamp',
                    },
                    {
                        name: 'activity_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'appointments',
            new TableForeignKey({
                name: 'FKActivityAppointment',
                referencedTableName: 'activities',
                referencedColumnNames: ['id'],
                columnNames: ['activity_id'],
                onDelete: 'SET NULL',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments');
    }
}
