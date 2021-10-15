import 'reflect-metadata'
import {createConnections, createConnection} from 'typeorm'
import {User} from './entity/User'
import {Chat} from './entitydb2/Chat'

async function init() {
  const connection = await createConnection()

  await User.create({
    firstName: 'John',
    email: 'jimbo@aol.com',
  }).save()

  await Chat.create({
    title: 'Fun chat',
  }).save()
}

init()
