import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt'

@Entity()
export class Account{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    username: string

    @Column()
    password: string

    @Column({ default: new Date() })
    createdAt : string

    @BeforeInsert()
    async hashPassword(){
        return this.password = await bcrypt.hash(this.password, 10)
    }
}