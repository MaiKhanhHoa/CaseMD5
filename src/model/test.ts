import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Test {
    @PrimaryGeneratedColumn({type: 'int'})
    public idTest: number;
    @Column({type: 'varchar'})
    public nameTest: string;
    @Column({type: 'int'})
    public idUserCreate: number;
    @Column({type: 'int'})
    public idCategory: number
}