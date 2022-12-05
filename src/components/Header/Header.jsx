import styled from "styled-components";

import {Button} from "../UI/Button/Button";
import {DropDown} from "../UI/DropDown/DropDown";
import {Search} from "../UI/Search/Search";
import adding from '../../assets/images/plus-sign.svg'
import {ReactComponent as Bell} from "../../assets/images/bell.svg";
import {UserAvatar} from "../UI/UserAvatar/UserAvatar";
import {Notifications} from "../UI/Notifications/Notifications";


const Container = styled.div`
  min-height: 2rem;
  width: 100%;
  padding: 1.25rem;
  box-sizing: border-box;
  box-shadow: 0 2px 4px #F0F1F2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledText = styled.p`
  font-size: .875rem;
  line-height: 1rem;
  color: #FFFFFF;
`

const FiltersHeader = styled.div`
  display: flex;
  gap: 1rem;
`

const DropDownItems = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  background: #fff;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 8.25rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: .5rem;
  padding: .375rem;
  box-sizing: border-box;
`

const DropDownItem = styled.p`
  padding: .75rem .5rem;
  font-size: .875rem;
  line-height: 1rem;
  border-radius: 4px;
  color: #000000;
  transition: .2s linear;
  &:hover {
    background-color: #F5F8FA;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4375rem;
`

const NotificationButton = styled.button`
  position: relative;
  display: flex;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`
export const Header = () => {

  return (
    <Container>

      <FiltersHeader>
        <Button>
          <img src={adding} alt='plus icon'/>
          <StyledText>Add new</StyledText>
        </Button>

        <DropDown summary='Kanban'>
          <DropDownItems>
            <DropDownItem>Board view</DropDownItem>
            <DropDownItem>Table view</DropDownItem>
            <DropDownItem>Kanban</DropDownItem>
          </DropDownItems>
        </DropDown>

        <DropDown summary='Filter'>
          <DropDownItems>
            <DropDownItem>Filter 1</DropDownItem>
            <DropDownItem>Filter 2</DropDownItem>
            <DropDownItem>Filter 3</DropDownItem>
            <DropDownItem>Filter 4</DropDownItem>
          </DropDownItems>
        </DropDown>
      </FiltersHeader>

      <InfoWrapper>
        <Search border='50px' width='11.25rem' color='#F5F8FA' offset='.702rem 1rem'/>
        <NotificationButton>
          <Bell />
          <Notifications notifications='100'/>
        </NotificationButton>
        <UserAvatar width='2.5rem' height='2.5rem'/>
      </InfoWrapper>

    </Container>

  )
}
