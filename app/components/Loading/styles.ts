import styled, { type DefaultTheme } from 'styled-components/native'

type ThemeProps = { theme: DefaultTheme }

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_600};
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(
  ({ theme }: ThemeProps) => ({
    color: theme.COLORS.GREEN_700,
  })
)``
