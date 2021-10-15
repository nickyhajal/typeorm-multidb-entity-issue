import {Entity, Column, OneToMany} from 'typeorm'
import {Db2Base} from './Db2Base'

@Entity()
export class Chat extends Db2Base {
  @Column()
  title: string
}
