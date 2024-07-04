import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import { useRootStore } from '@contexts/StoreContext'

import Spacing from '@common/Spacing'
import Text from '@common/Text'
import MemberItem from '@components/club/MemberItem'

const MemberList = observer(() => {
  const { clubStore } = useRootStore()

  const members = clubStore.latestMembers

  return (
    <Container>
      <StyledText
        typography="t2"
        color="white">
        Members of Mobflix Film-Club
      </StyledText>

      <Spacing size={15} />

      {members.length > 0 ? (
        <StyledList>
          {members.map(member => (
            <MemberItem
              key={member.id}
              member={member}
              removeMember={clubStore.removeMember}
            />
          ))}
        </StyledList>
      ) : (
        <Text
          typography="t5"
          color="white">
          No films available. Please add films.
        </Text>
      )}
    </Container>
  )
})

export default MemberList

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`

const StyledList = styled.ul`
  display: flex;
  gap: 7px;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch; /* iOS */

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`

const StyledText = styled(Text)`
  text-transform: capitalize;
`
