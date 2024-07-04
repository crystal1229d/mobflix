import { makeAutoObservable } from 'mobx'

class Member {
  id: number
  name: string
  age: number
  address: string

  constructor(id: number, name: string, age: number, address: string) {
    this.id = id
    this.name = name
    this.age = age
    this.address = address
    makeAutoObservable(this)
  }
}

class ClubStore {
  members: Member[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addMember(member: Member) {
    this.members.push(member)
  }

  removeMember(id: number) {
    this.members = this.members.filter(member => member.id !== id)
  }

  updateMember(updatedMember: Member) {
    const index = this.members.findIndex(
      member => member.id === updatedMember.id
    )
    if (index > -1) {
      this.members[index] = updatedMember
    }
  }

  get latestMembers() {
    return this.members.slice().sort((a, b) => b.id - a.id)
  }
}

export default ClubStore
