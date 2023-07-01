// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  CardContainer,
  CardHeading,
  CardImageContainer,
  InputContainer,
  PaymentContainer,
  Heading,
  InputElement,
  PaymentHeading,
  InputValue,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const onChangeNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeName = event => {
    setCardHolderName(event.target.value)
  }

  return (
    <AppContainer>
      <CardContainer>
        <CardHeading>CREDIT CARD</CardHeading>
        <CardImageContainer data-testid="creditCard">
          <InputValue>{cardNumber}</InputValue>
          <Heading>CARDHOLDER NAME</Heading>
          <InputValue>{cardHolderName.toUpperCase()}</InputValue>
        </CardImageContainer>
      </CardContainer>
      <InputContainer>
        <PaymentContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <InputElement
            value={cardNumber}
            placeholder="Card Number"
            onChange={onChangeNumber}
          />
          <InputElement
            value={cardHolderName}
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </PaymentContainer>
      </InputContainer>
    </AppContainer>
  )
}

export default CreditCard
