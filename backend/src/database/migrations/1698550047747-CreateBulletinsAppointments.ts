/* eslint-disable indent */
import {
    MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class CreateBulletinsAppointments1698550047747 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'bulletins_appointments',
                columns: [
                    {
                        name: 'bulletin_id',
                        type: 'uuid',
                    },
                    {
                        name: 'appointment_id',
                        type: 'uuid',
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
            'bulletins_appointments',
            new TableForeignKey({
                name: 'FKBulletinAppointment',
                referencedTableName: 'appointments',
                referencedColumnNames: ['id'],
                columnNames: ['appointment_id'],
                onDelete: 'SET NULL',
            }),
        );

        await queryRunner.createForeignKey(
            'bulletins_appointments',
            new TableForeignKey({
                name: 'FKAppointmentBulletin',
                referencedTableName: 'bulletins',
                referencedColumnNames: ['id'],
                columnNames: ['bulletin_id'],
                onDelete: 'SET NULL',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'bulletins_appointments',
            'FKBulletinAppointment',
        );
        await queryRunner.dropForeignKey(
            'bulletins_appointments',
            'FKAppointmentBulletin',
        );
        await queryRunner.dropTable('bulletins_appointments');
    }
}
