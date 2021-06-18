/**
 * An entity is a mapping of the data on the database.
 *
 * It may not be the same schema as the one to be exposed in an API!
 */

// import { Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn  } from 'typeorm'

// @Entity()
export class User {
  // @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: number

  // @Column()
  fullName!: string

  // @Column({ unique: true })
  email!: string

  // @Column()
  birthDate!: Date

  // @Column({ select: false })
  password!: string

  // @CreateDateColumn()
  createdAt!: Date

  // @UpdateDateColumn()
  updatedAt!: Date

  // @DeleteDateColumn()
  deletedAt?: Date
}
