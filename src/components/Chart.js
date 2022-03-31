import ChartCard from "./ChartCard"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS,CategoryScale,LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { COLOR, FONT_SIZE } from "../constants"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
    },
    scales: {
        x: {
            // ticks: { 
            //     display: false
            // },
            grid: {
                display: true,
                drawBorder: false,
                drawOnChartArea: false,
                lineWidth: 0
            }
        },
        y: {
            // display: false,
            // ticks: { display: false },
            grid: {
                // display: false,
                drawBorder: false,
                // borderWidth: 0,
                // drawOnChartArea: false,
                // lineWidth: 0
            },
        }
    }
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

export default function Chart({ chartBorder, chartTitle, cardTitle1, cardTitle2, cardTime1, cardTime2, priority }) {
    return(
        <div style={{border: `1px solid ${COLOR.border}`, height: '314px', borderRadius: '10px', marginBottom: '1rem', display: 'flex'}}>
            <div style={{width: '100%', padding: '1.5rem 1rem'}}>
                <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h4 style={{fontSize: FONT_SIZE.px18, marginRight: '.5rem'}}>{chartTitle}</h4>
                        <div style={{backgroundColor: COLOR.light_green, color: COLOR.green, width: 'max-content', fontSize: FONT_SIZE.px12, padding: '.2rem .4rem', borderRadius: '4px'}}>+4.14%</div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{width: '10px', height: '10px', borderRadius: '2px', backgroundColor: priority, marginRight: '.4rem'}}></div>
                        <p style={{marginRight: '1rem', fontSize: FONT_SIZE.px14, fontFamily: 'Gelion Medium'}}>High Priority</p>
                        <div style={{height: '24px', marginRight: '1rem', backgroundColor: COLOR.border, width: '1px'}}></div>
                        <div style={{border: `1px solid ${COLOR.border}`, padding: '.4rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center'}}>
                            <div style={{marginRight: '1rem', fontFamily: 'Gelion Medium'}}>This Month</div>
                            <div style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}>
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3334 1.66655V0.999942C11.3334 0.631752 11.6319 0.333275 12.0001 0.333275C12.3683 0.333275 12.6668 0.631752 12.6668 0.999942V1.66655H13.3334C14.438 1.66655 15.3334 2.56198 15.3334 3.66655V5.66655V6.99988V10.3332C15.3334 12.5424 13.5425 14.3332 11.3334 14.3332H4.66672C2.45758 14.3332 0.666718 12.5424 0.666718 10.3332V6.99988V5.66655V3.66655C0.666718 2.56198 1.56215 1.66655 2.66672 1.66655H3.99999V0.999942C3.99999 0.631752 4.29847 0.333275 4.66666 0.333275C5.03485 0.333275 5.33333 0.631752 5.33333 0.999942V1.66655H11.3334ZM1.99999 6.99988V10.3332C1.99999 11.8059 3.1939 12.9998 4.66666 12.9998H11.3333C12.8061 12.9998 14 11.8059 14 10.3332V6.99988H1.99999ZM2.66666 2.99982H3.99999V2.99994C3.99999 3.36813 4.29847 3.66661 4.66666 3.66661C5.03485 3.66661 5.33333 3.36813 5.33333 2.99994V2.99982H11.3334V2.99994C11.3334 3.36813 11.6319 3.66661 12.0001 3.66661C12.3683 3.66661 12.6668 3.36813 12.6668 2.99994V2.99982H13.3333C13.7015 2.99982 14 3.2983 14 3.66649V5.66649H1.99999V3.66649C1.99999 3.2983 2.29847 2.99982 2.66666 2.99982Z" fill="#060213"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Line 
                        height={204}
                        options={options}
                        data={{
                            labels,
                            datasets: [
                                {
                                    data: [12, 18, 38, 48, 32, 18, 30, 42, 32],
                                    borderColor: chartBorder,
                                    pointRadius: 6,
                                    pointBackgroundColor: '#ffffff'
                                }
                            ]
                        }} 
                    />
                </div>
            </div>
            <div style={{width: '100%', maxWidth: '235px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeft: `1px solid ${COLOR.border}`}}>
                <ChartCard
                    cardTitle={cardTitle1}
                    cardTime={cardTime1}
                    mgBottom='1.125rem'
                />
                <ChartCard
                    cardTitle={cardTitle2}
                    cardTime={cardTime2}
                />
            </div>
        </div>
    )
}