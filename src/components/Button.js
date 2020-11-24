import styled, { css } from 'styled-components'
import { defaultTheme, typeScale } from '../utils'

// styled-components-modifiers giving error so i made my own
const modifier = (mod) => (...args) => (props) => props[mod] && css(...args)

const BUTTON_MODIFIERS = (props) => {
  if (props.small) {
    return modifier('small')`
        font-size:${typeScale.helperText};
        padding:8px;
      `
  }
  if (props.large) {
    return modifier('large')`
        font-size:${typeScale.header5};
        padding:16px 24px;
      `
  }
  if (props.warning) {
    return modifier('warning')`
        background-color:${defaultTheme.status.warningColor};
        color:${defaultTheme.textColorInverted};

        &:hover, &:focus {
          backgroud-color: ${defaultTheme.status.warningColorHover};
          outline: 3px solid ${defaultTheme.status.war}
        }
      `
  }
}

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }

  ${(props) => BUTTON_MODIFIERS(props)}
`
export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    border-color: ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }

  ${(props) => BUTTON_MODIFIERS(props)}
`
export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }

  ${(props) => BUTTON_MODIFIERS(props)}
`
