import styled from "styled-components"
import { CiHome, CiSettings } from "react-icons/ci";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { BsBoxArrowInRight } from "react-icons/bs";
import { FcBiohazard } from "react-icons/fc";


const StyledBarraLateral = styled.div`
  background-color: #161717;
  width: 100px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
`;

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 24px;
  margin-bottom: 20px;

  :hover {
    background-color: #000000;
    border-color: #000;
    border: 1px solid black;
    border-right: 5px solid #000;
    border-radius: 5px 0 0 5px;
`;

const StyledMarca = styled.div`
  width: 50px;
  height: 50px;
  color: white;
  margin-bottom: 20px;
`;

function BarraLateral() {
  return (
    <div>
      <StyledBarraLateral>
        <StyledMarca>
        <FcBiohazard size={40} />
        </StyledMarca>
        <StyledButton>
          <CiHome />
        </StyledButton>
        <StyledButton>
          <LuLayoutPanelLeft />
        </StyledButton>
        <StyledButton>
        <GiCardboardBoxClosed />
        </StyledButton>
        <StyledButton>
        <FaArrowTrendUp />
        </StyledButton>
        <StyledButton>
        <IoPersonOutline />
        </StyledButton>
        <StyledButton>
        <CiSettings />
        </StyledButton>
        <StyledButton>
        <BsBoxArrowInRight />
        </StyledButton>
      </StyledBarraLateral>
    </div>
    );
  }

export default BarraLateral