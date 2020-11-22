import { h } from 'preact'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from '../../components/Button'

const Home = () => (
  <div>
    <PrimaryButton small>Hello world</PrimaryButton>
    <SecondaryButton>Hello world</SecondaryButton>
    <TertiaryButton>Hello world</TertiaryButton>
  </div>
)

export default Home
