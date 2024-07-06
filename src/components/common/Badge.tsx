import styled from 'styled-components'

interface BadgeProps {
  label: string
  color: string
}

const Badge = ({ label, color }: BadgeProps) => {
  return <StyledBadge color={color}>{label}</StyledBadge>
}

const StyledBadge = styled.span<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 50px;
  background-color: ${({ color }) => color};
  color: white;
  font-weight: bold;
  font-size: 0.9em;
`

export default Badge
