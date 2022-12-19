import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class TestUser {
    @PrimaryGeneratedColumn({type: 'int'})
    public idTestUser: number;
    @Column({type: 'int'})
    public idTest: number;
    @Column({type: 'int'})
    public idUser: number;
    @Column({type: 'int'})
    public pointTest: number;
}