import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dictionary {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    traditional: string

    @Column()
    simplified: string

    @Column()
    pinyin: string

    @Column("text", { array: true })
    definitions: string[]
}