import {Entity, Column, OneToMany} from 'typeorm'
import {Base} from './Base'

@Entity()
export class User extends Base {
  @Column({nullable: true})
  firstName: string

  @Column({nullable: true})
  email: string
}
