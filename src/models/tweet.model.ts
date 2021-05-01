import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity({ name: "tweets" })
export class Tweet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ type: "text" })
  textContent: string;

  @Column()
  @CreateDateColumn({ type: "timestamptz" })
  timestamp: Date;
}
