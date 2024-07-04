import React, { useId, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import { useRootStore } from '@contexts/StoreContext'

const ClubForm = observer(() => {
  const { clubStore } = useRootStore()

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: ''
  })

  const uniqueId = useId()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, age, address } = formData

    if (!name || !age || !address) {
      alert('Please fill out both fields.')
      return
    }

    if (parseInt(age) <= 0) {
      alert('Please enter age over 0')
      return
    }

    clubStore.addMember({ id: uniqueId, name, age: parseInt(age), address })

    setFormData({ name: '', age: '', address: '' })
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormField>
      <FormField>
        <Label htmlFor="age">Age:</Label>
        <Input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </FormField>
      <FormField>
        <Label htmlFor="address">Address:</Label>
        <Input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </FormField>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  )
})

export default ClubForm

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
`

const FormField = styled.div`
  margin-bottom: 15px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`
