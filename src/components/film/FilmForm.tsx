import React, { useId, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import { useRootStore } from '@/contexts/StoreContext'

const FilmForm = observer(() => {
  const { filmStore } = useRootStore()

  const [formData, setFormData] = useState({
    title: '',
    rating: ''
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

    const { title, rating } = formData

    if (!title || !rating) {
      alert('Please fill out both fields.')
      return
    }

    if (parseInt(rating) < 0 || parseInt(rating) > 5) {
      alert('Please rate the movies between 0 and 5.')
      return
    }

    filmStore.addFilm({ id: uniqueId, title, rating: parseInt(rating) })

    setFormData({ title: '', rating: '' })
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="title">Title:</Label>
        <Input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </FormField>
      <FormField>
        <Label htmlFor="rating">Rating:</Label>
        <Input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />
      </FormField>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  )
})

export default FilmForm

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
