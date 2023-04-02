import React from 'react'
import styled from 'styled-components'
import DemoImage from "../../../Images/AddProject.gif"

const Container = styled.div`
  width: 100%;
  height: 80vh;
  margin: 6px 14px;
  max-width: 1320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 0px 20px !important;
  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const TitleTag = styled.div`
  font-size: 58px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
  font-weight: 800;
  color: ${({ theme }) => theme.text};
`
const DescriptiveTag = styled.p`
  font-size: 17px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
  font-weight: 300;
  margin-bottom: 32px;
  line-height: 1.5;
  color: ${({ theme }) => theme.soft2};
`
const Button = styled.button`
  width: 40%;
  padding: 16px 20px;
  font-size: 20px;
  font-weight: 600;
  background: linear-gradient(76.35deg, #801AE6 15.89%, #A21AE6 89.75%);
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`

const Image = styled.img`
  height: 76%;
  flex: 0.8;
  display: flex;
  width: 100%;
  object-fit: scale-down;
  border-radius: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`

const Header = ({ setSignInOpen }) => {
  return (
    <Container id="home">
      <Left>
        <TitleTag><b>Power Your Projects with Our App.</b></TitleTag>
        <DescriptiveTag>Take control of your projects and stay on top of your goals with our intuitive project management app. Say goodbye to chaos and hello to streamlined efficiency. Try it now and experience the difference.</DescriptiveTag>
        <Button onClick={() => setSignInOpen(true)}>Manage a New Project</Button>
      </Left>

      <Image src={DemoImage} />
    </Container>
  )
}

export default Header