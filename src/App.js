import styled from "styled-components";
import {SideBar} from "./components/SideBar/SideBar";
import {Header} from "./components/Header/Header";

function App() {
  const Container = styled.div`
    display: flex;
  `

  const MainPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 80.6vw;
  `
  return (
    <Container>

      <SideBar/>

      <MainPage>
        <Header/>
      </MainPage>

    </Container>
  );
}

export default App;