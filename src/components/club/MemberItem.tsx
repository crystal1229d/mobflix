import styled from 'styled-components'

import { IMember } from '@models/member'
import { colors } from '@styles/colorPalette'
import Text from '@common/Text'
import ButtonDelete from '@common/ButtonDelete'
import Spacing from '@common/Spacing'

interface MemberItemProps {
  member: IMember
  removeMember: (id: string) => void
}

export default function MemberItem({ member, removeMember }: MemberItemProps) {
  const { id, name, age, address } = member

  return (
    <StyledItem>
      <div>
        {name.length > 10 ? (
          <TitleWrapper>
            <Title>
              <Text
                typography="t5"
                bold>
                {name}
              </Text>
            </Title>
          </TitleWrapper>
        ) : (
          <Text
            typography="t5"
            bold>
            {name}
          </Text>
        )}
        <Spacing size={5} />
        <Text
          typography="t6"
          bold>
          {age}
        </Text>
        <Text
          typography="t6"
          bold>
          {address}
        </Text>
      </div>
      <Spacing size={12} />
      <ButtonDelete onClick={() => removeMember(id)} />
    </StyledItem>
  )
}

const StyledItem = styled.li`
  width: 150px;
  height: 90px;
  padding: 10px;
  contentx-box: border-box;

  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  background-color: ${colors.gray50};
  border-radius: 5px;

  div {
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const TitleWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

const Title = styled.p`
  display: inline-block;
  white-space: nowrap;
  animation: marquee 7s linear infinite;
  margin: 0;
  padding: 1px;

  @keyframes marquee {
    0% {
      transform: translateX(10%);
    }
    10% {
      transform: translateX(10%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`
