// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  height: 100vh;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3b4b69;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 50%;
`

export const CardHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: bold;
  padding: 5px;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3.1px;
  border-color: #ffd773;
`

export const InputValue = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;

  margin-top: 40px;
`

export const CardImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 100%;
  height: 60%;
  border: none;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 30px;
  padding: 20px;
`
export const InputContainer = styled.div`
  background-color: #ffffff;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
  width: 100%;
  border: none;
  background-color: #ffffff;
  box-shadow: 5px 10px 8px 10px #d3d9e0;
  height: 60%;
`
export const PaymentHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 26px;
  color: #475569;
`

export const InputElement = styled.input`
  width: 80%;
  color: #c3cad9;
  padding: 10px;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 300;
`
export const Heading = styled.p`
  font-weight: 300;
  font-size: 16px;
  font-family: 'Roboto';
  color: #ffffff;
`
