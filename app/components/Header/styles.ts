import { CaretLeft } from 'phosphor-react-native'
import styled, { type DefaultTheme } from 'styled-components/native'

type ThemeProps = { theme: DefaultTheme }

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`
export const BackIcon = styled(CaretLeft).attrs(({ theme }: ThemeProps) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``
