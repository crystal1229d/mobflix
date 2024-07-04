import { css } from 'styled-components'

export const typographyMap = {
  t1: css`
    font-size: 35px;
    line-height: 35px;
  `,
  t2: css`
    font-size: 27px;
    line-height: 27px;
  `,
  t3: css`
    font-size: 20px;
    line-height: 20px;
  `,
  t4: css`
    font-size: 18px;
    line-height: 18px;
  `,
  t5: css`
    font-size: 16px;
    line-height: 16px;
  `,
  t6: css`
    font-size: 12px;
    line-height: 12px;
  `
}

export type Typography = keyof typeof typographyMap
