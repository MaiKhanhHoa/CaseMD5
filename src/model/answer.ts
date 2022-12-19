import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn({type: 'int'})
    public idAnswer: number;
    @Column({type: 'varchar'})
    public nameAnswer: string;
    @Column({type: 'int'})
    public idQuestion: number;
    @Column({type: 'boolean'})
    public status: boolean;
}