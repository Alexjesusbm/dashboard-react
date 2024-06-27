import styled from "styled-components";
import { Chart as ChartJS, defaults} from "chart.js/auto"
import { Bar, Chart, Doughnut, Line } from "react-chartjs-2";
import { CiGift } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { MdOutlineMonetizationOn } from "react-icons/md";
import sourceData from "../data/sourceData.json";
import revenueData from "../data/revenueData.json";

defaults.maintainAspectRatio = false;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";



const StyledDashboard = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 140vh;
    height: 85vh;
    margin-left: 100px;
    align-items: center; 
    justify-content: center;
`;

const StyledCard = styled.div`
    background-color: #161617;
    width: 50px; 
    height: 50px;
    margin: 4px;
    padding: 5px;
    border-radius: 10px;
    line-height: 15px;
    display: flex;

    &.card1 {
    border-top: 10px solid #4ee1b4;
    width: 150px; 
    height: 100px;

    }

     &.card2 {
    border-top: 10px solid #a178f1;
    width: 150px; 
    height: 100px;
    }

     &.card3 {
    border-top: 10px solid #2ec9ff;
    width: 150px; 
    height: 100px;
    }

    &.card4 {
    width: 380px;
    height: 110px;
    }

    &.card5 {
    width: 485px;
    height: 200px;
    }

    &.card6 {
    width: 380px;
    height: 200px;
    }

    &.card7 {
    width: 235px;
    height: 190px;
    }

    &.card8 {
    width: 375px;
    height: 190px;
    }
`;

const CardText = styled.div`
    text-align: center;
`;

const StyledIcon = styled.div`
    background-color: #242424;
    height: 40px;
    font-size: 40px;
    margin-left: auto;
    border-radius: 10px;
`;

const ChartContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

function Dashboard(){
    return (
    <div>
        <StyledDashboard>
        <StyledCard className="card1">
            <CardText><h4>Receita</h4>
            <p>vs. meta <br/> vs. ano anterior</p>
            </CardText>
            <StyledIcon>
            <MdOutlineMonetizationOn color="#4ee2b5" />
            </StyledIcon>
        </StyledCard>
        <StyledCard className="card2">
            <CardText><h4>Pedidos</h4></CardText>
            <StyledIcon>
            <IoCart color="#a178f1" />
            </StyledIcon>
        </StyledCard>
        <StyledCard className="card3">
            <CardText><h4>Itens Vendidos</h4></CardText>
            <StyledIcon>
            <CiGift color="#2ec9ff"/>
            </StyledIcon>
        </StyledCard>
        <StyledCard className="card4">
        </StyledCard>
        <StyledCard className="card5">
            <CardText><h4>Vendas ao longo do tempo
                <ChartContainer><Line
                data={{
                    labels: revenueData.map((data) => data.label),
                    datasets:[
                    {
                        label: revenueData.map((data) => data.revenue),
                        data: revenueData.map((data) => data.costs)
                    }
                ],
                }}/></ChartContainer></h4></CardText>
        </StyledCard>
        <StyledCard className="card6">
            <CardText><h4>Faça a analise do rank de vendas por:
                <ChartContainer><Bar 
                data={{
                    labels: sourceData.map((data) => data.label),
                    datasets: [
                        {
                            label: "Count",
                            data: sourceData.map((data) => data.value),
                        },
                    ],
                }}
                /></ChartContainer></h4>
            </CardText> 
        </StyledCard>
        <StyledCard className="card7">
            <CardText>
            <h4>Representatividade Vendas
                <ChartContainer><Doughnut 
                data={{
                    labels: sourceData.map((data) => data.label),
                    datasets: [
                        {
                            label: "Count",
                            data: sourceData.map((data) => data.value),
                        },
                    ],
                }}/></ChartContainer>   
            </h4>
            <p>Por categoria de produto</p>
            </CardText> 
        </StyledCard>
        <StyledCard className="card7">
            <CardText><h4>Atingimento de metas</h4></CardText>
        </StyledCard>
        <StyledCard className="card8">
            <CardText><h4>Localidades (UF e Região)</h4></CardText>
        </StyledCard>
        </StyledDashboard>
    </div>
    );
}

export default Dashboard;