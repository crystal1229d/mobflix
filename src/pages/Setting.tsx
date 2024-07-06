import React, { useState } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { useRootStore } from '@contexts/StoreContext'
import Layout from '@common/Layout'
import ToggleSwitch from '@common/ToggleSwitch'
import Text from '@common/Text'
import Spacing from '@common/Spacing'

const SettingPage = observer(() => {
  const { uiStore } = useRootStore()
  const [darkMode, setDarkMode] = useState(uiStore.darkMode)
  const [language, setLanguage] = useState(uiStore.language)
  const [ratingStyle, setRatingStyle] = useState(uiStore.ratingStyle)

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode)
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'en' | 'ko')
  }

  const handleRatingStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRatingStyle(e.target.value as 'number' | 'star')
  }

  const handleSave = () => {
    uiStore.toggleDarkMode(darkMode)
    uiStore.setLanguage(language)
    uiStore.setRatingStyle(ratingStyle)
  }

  return (
    <Layout>
      <SettingsContainer>
        <Text
          typography="t2"
          color="white">
          Settings
        </Text>
        <Spacing size={15} />
        <SettingItem>
          <Label>Dark Mode</Label>
          <ToggleSwitch
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
        </SettingItem>
        <SettingItem>
          <Label>Language</Label>
          <Select
            value={language}
            onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="ko">Korean</option>
          </Select>
        </SettingItem>
        <SettingItem>
          <Label>Rating Style</Label>
          <Select
            value={ratingStyle}
            onChange={handleRatingStyleChange}>
            <option value="number">Number</option>
            <option value="star">Star</option>
          </Select>
        </SettingItem>
        <Spacing size={20} />

        <SubmitButton onClick={handleSave}>Submit</SubmitButton>
      </SettingsContainer>
    </Layout>
  )
})

export default SettingPage

const SettingsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const SettingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Label = styled.label`
  font-size: 1.2rem;
  color: #fff;
`

const Select = styled.select`
  padding: 5px;
  font-size: 1rem;
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
