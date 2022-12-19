import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class TestQuestion {
    @PrimaryGeneratedColumn({type: 'int'})
    public idTestQuestion: number;
    @Column({type: 'int'})
    public idTest: number;
    @Column({type: 'int'})
    public idQuestion: number;
}