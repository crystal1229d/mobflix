import { makeAutoObservable } from 'mobx'

import { CLUB_MEMBERS } from '@/mock'
import { IMember } from '@models/member'

class Member implements IMember {
  id: string
  name: string
  age: number
  address: string
  register_datetime: string

  constructor(
    id: string,
    name: string,
    age: number,
    address: string,
    register_datetime: string
  ) {
    this.id = id
    this.name = name
    this.age = age
    this.address = address
    this.register_datetime = register_datetime
    makeAutoObservable(this)
  }
}

class ClubStore {
  members: Member[] = CLUB_MEMBERS // []

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  addMember(member: Omit<Member, 'register_datetime'>) {
    const newMember = new Member(
      member.id,
      member.name,
      member.age,
      member.address,
      new Date() + ''
    )
    this.members.push(newMember)
  }

  removeMember(id: string) {
    this.members = this.members.filter(member => member.id !== id)
  }

  get latestMembers() {
    return this.members
      .slice()
      .sort(
        (a, b) =>
          new Date(b.register_datetime).getTime() -
          new Date(a.register_datetime).getTime()
      )
  }
}

export default ClubStore
