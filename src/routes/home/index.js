import { h } from 'preact'
import { useState } from 'preact/hooks'
import { ThemeProvider } from 'styled-components'
import { RemoteModal } from '../../components/'
import { darkTheme, defaultTheme } from '../../utils'

const Home = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => {
          setUseDarkTheme(!useDarkTheme)
        }}
      >
        Change Theme
      </button>
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => {
          setShowModal(!showModal)
        }}
      >
        ToggleModal
      </button>

      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <RemoteModal showModal={showModal} setShowModal={setShowModal} />
        {/* <PrimaryButton>Hello world</PrimaryButton>
        <SecondaryButton>Hello world</SecondaryButton>
        <TertiaryButton>Hello world</TertiaryButton> */}
      </div>
    </ThemeProvider>
  )
}

export default Home
