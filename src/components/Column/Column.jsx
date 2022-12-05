import {useRef} from "react";
import {useDrop} from "react-dnd";
import styled from "styled-components";


const StyledColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #F3F3F3;
  padding: 2.4375rem .625rem .625rem;
  box-sizing: border-box;
  border-top: 1px solid #F3F3F3;

`
export const Column = ({children, changeTaskStatus, status}) => {

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "CARD",
    drop(item) {
      changeTaskStatus(item.id, status);
    }
  });

  drop(ref);

  return (
    <StyledColumn ref={ref}>
      {children}
    </StyledColumn>
  )
}
