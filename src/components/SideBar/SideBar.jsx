import styled from "styled-components";
import {SideBarHeader} from "./SideBarHeader/SideBarHeader";
import arrow from '../../assets/images/arrow-down.svg'
import avatar from '../../assets/images/user-avatar.png'
import {SideBarTools} from "./SideBarTools/SideBarTools";
import {UserAvatar} from "../UI/UserAvatar/UserAvatar";

export const SideBar = () => {

  const StylesWrapper = styled.section`
    width: 19.4vw;
    min-height: 100vh;
    display: flex;
  `

  const MainMenu = styled.div`
    width: 58%;
    background-color: #0F1D40;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `

  const UserWrapper = styled.div`
    width: 100%;
    background-color: #2D4071;
    padding: .3125rem 1rem;
    display: flex;
    gap: .5rem;
    align-items: center;
  `

  const Title = styled.p`
    color: #fff;
    font-size: .875rem;
  `

  const MenuChaptersContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
  `
  const MenuChapter = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .2s linear;
    :hover {
      opacity: 0.6;
    }
  `

  const Text = styled.p`
    font-size: .875rem;
    color: #8C939F;
    cursor: pointer;
    transition: .2s linear;
    :hover {
      opacity: 0.6;
    }
  `

  return (
    <StylesWrapper>
      <MainMenu>
        <SideBarHeader/>
        <UserWrapper>
          <UserAvatar width='1.375rem' height='1.375rem'/>
          <Title>My workspace</Title>
        </UserWrapper>

        <MenuChaptersContainer>
          <MenuChapter>
            <img src={arrow} alt='arrow'/>
            <Title>Favorites</Title>
          </MenuChapter>
          <Text>Marketing</Text>
          <Text>Mobile App</Text>

          <MenuChapter>
            <img src={arrow} alt='arrow'/>
            <Title>My projects</Title>
          </MenuChapter>

          <Text>Marketing</Text>
          <Text>Lending Pages</Text>
          <Text>Wedding</Text>
          <Text>Mobile App</Text>
          <Text>House Construction</Text>
        </MenuChaptersContainer>
      </MainMenu>

      <SideBarTools/>

    </StylesWrapper>
  )
}
