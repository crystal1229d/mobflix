import { useState } from 'react'
import styled from 'styled-components'

import { IFilm } from '@models/film'
import { colors } from '@styles/colorPalette'
import Rating from '@common/Rating'
import Text from '@common/Text'
import Spacing from '@common/Spacing'
import Flex from '@common/Flex'
import ButtonEdit from '@common/ButtonEdit'
import ButtonDelete from '@common/ButtonDelete'

interface FilmItemProps {
  film: IFilm
  removeFilm: (id: string) => void
  updateFilm: (id: string, updatedFields: Partial<Omit<IFilm, 'id'>>) => void
}

export default function FilmItem({
  film,
  removeFilm,
  updateFilm
}: FilmItemProps) {
  const { id, title, rating } = film
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)
  const [editedRating, setEditedRating] = useState(rating)

  const handleSave = () => {
    updateFilm(id, { title: editedTitle, rating: editedRating })
    setIsEditing(false)
  }

  return (
    <StyledItem>
      <div>
        {isEditing ? (
          <Flex dir="column">
            <input
              type="text"
              value={editedTitle}
              onChange={e => setEditedTitle(e.target.value)}
            />
            <input
              type="number"
              value={editedRating}
              onChange={e => setEditedRating(Number(e.target.value))}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </Flex>
        ) : (
          <>
            {title.length > 10 ? (
              <TitleWrapper>
                <Title>
                  <Text
                    typography="t5"
                    bold>
                    {title}
                  </Text>
                </Title>
              </TitleWrapper>
            ) : (
              <Text
                typography="t5"
                bold>
                {title}
              </Text>
            )}
            <Spacing size={10} />
            <Rating rating={rating} />
          </>
        )}
      </div>
      <Spacing size={12} />

      <Flex>
        {!isEditing && <ButtonEdit onClick={() => setIsEditing(true)} />}
        <ButtonDelete onClick={() => removeFilm(id)} />
      </Flex>
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

  & > div:nth-child(0) {
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
