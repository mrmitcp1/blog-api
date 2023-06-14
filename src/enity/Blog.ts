import {

    Column,

    Entity,

    PrimaryGeneratedColumn,

} from "typeorm";




@Entity()

export class Blog {


    @PrimaryGeneratedColumn()

    public readonly id: number | undefined;


    @Column({ type: "varchar" })

    public title: string | undefined;



    @Column({ type: "varchar" })

    public content: string | undefined;


}