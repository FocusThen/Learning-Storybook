import styled from 'styled-components'
import { Illustrations } from '../assets'
import { PrimaryButton } from './Button'
import { useSpring, animated, config } from 'react-spring'

const ModalWrapper = styled(animated.div)`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`

export const RemoteModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.slow,
  })
  return (
    <ModalWrapper style={animation}>
      <img src={Illustrations.Remote} alt="Remote" aria-hidden="true" />
      <PrimaryButton onClick={() => setShowModal(false)}>
        Remote Work
      </PrimaryButton>
    </ModalWrapper>
  )
}
