import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Affirmation{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ nullable: false })
    text: string

    @Column({ default: false })
    favorite: boolean

    @Column({ default: new Date() })
    createdAt: string
}