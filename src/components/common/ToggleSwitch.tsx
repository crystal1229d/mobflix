import React from 'react'
import styled from 'styled-components'

interface ToggleSwitchProps {
  checked: boolean
  onChange: () => void
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <Switch>
      <Input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <Slider />
    </Switch>
  )
}

export default ToggleSwitch

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + div {
    background-color: #2196f3;
  }
  &:checked + div:before {
    transform: translateX(25px);
  }
`

const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 25px;
  &:before {
    position: absolute;
    content: '';
    height: 21px;
    width: 21px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`
