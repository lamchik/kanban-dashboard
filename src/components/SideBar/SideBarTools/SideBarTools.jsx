import styled from "styled-components";

import files from '../../../assets/images/files-icon.svg'
import notes from '../../../assets/images/notes-icon.svg'
import roadmap from '../../../assets/images/roadmap-icon.svg'
import schedule from '../../../assets/images/schedule-icon.svg'
import tasks from '../../../assets/images/tasks-icon.svg'

export const SideBarTools = () => {

  const Tools = styled.div`
    width: 42%;
    background-color: #F5F8FA;
    min-height: 100vh;
    padding: 1.5rem 0;
  `

  const Header = styled.p`
    font-size: 1.125rem;
    line-height: 1.3125rem;
    color: #222222;
    margin: 0 0 1.625rem 1rem;
  `

  const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
  `
  const Highlighting = styled.div`
    height: 100%;
    width: .25rem;
    background-color: #0094FF;
    border-radius: 0 10px 10px 0;
    position: absolute;
    left: 0;
    
  `

  const MenuItemWrapper = styled.div`
    position: relative;
    width: 89%;
    display: flex;
    align-items: center;
    padding: .6875rem 0 .6875rem .875rem;
    box-sizing: border-box;
    cursor: pointer;
    transition: .2s linear;
    background-color: ${props => props.color};
    border-radius: 0 8px 8px 0;
    :hover {
      background-color: #ffffff;
    }
  `

  const MenuItemIcon = styled.img`
    margin-right: .9375rem;
  `

  const MenuItemText = styled.p`
    font-size: .875rem;
    line-height: 1rem;
    color: ${props => props.color};
    word-break: break-all;
  `

  return (
    <Tools>
      <Header>Tools</Header>
      <MenuContainer>
        <MenuItemWrapper>
          <MenuItemIcon src={roadmap} alt='roadmap-icon'/>
          <MenuItemText color='#222222'>Roadmap</MenuItemText>
        </MenuItemWrapper>

        <MenuItemWrapper color="#ffffff">
          <MenuItemIcon src={schedule} alt='schedule-icon'/>
          <MenuItemText color='#0094FF'>Schedule</MenuItemText>
          <Highlighting/>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <MenuItemIcon src={tasks} alt='tasks-icon'/>
          <MenuItemText color='#222222'>Tasks</MenuItemText>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <MenuItemIcon src={notes} alt='notes-icon'/>
          <MenuItemText color='#222222'>Notes</MenuItemText>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <MenuItemIcon src={files} alt='files-icon'/>
          <MenuItemText color='#222222'>Files</MenuItemText>
        </MenuItemWrapper>

      </MenuContainer>

    </Tools>
  )
}
