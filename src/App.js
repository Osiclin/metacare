import Chart from './components/Chart';
import PageNav from './components/PageNav';
import ProfileNav from './components/ProfileNav';
import Search from './components/Search';
import Sidebar from './components/Sidebar';

import { COLOR } from './constants';

export default function App() {
  return (
    <div style={{background: COLOR.background, display: 'flex'}}>
      <Sidebar/>
      <div style={{flex: 1, marginLeft: '262px'}}>
        <div style={{position: 'sticky', top: 0, backgroundColor: COLOR.background}}>
          <ProfileNav/>
          <PageNav/>
          <Search
            title='Efficiency Analytics'
          />
        </div>
        
        <div style={{padding: '0rem 2.5rem'}}>
          <Chart
            chartTitle='Average response Time'
            cardTitle1='Average Response Time'
            cardTime1='30 Mins'
            cardTitle2='Response Time'
            cardTime2='1 Hour 30 Mins'
            priority={COLOR.orange}
            chartBorder={COLOR.orange}
          />
          <Chart
            chartTitle='Replies per resolution'
            cardTitle1='Average Replies '
            cardTime1='30 Mins'
            cardTitle2='Response Time'
            cardTime2='1 Hour 30 Mins'
            priority={COLOR.purple}
            chartBorder={COLOR.purple}
          />
          <Chart
            chartTitle='Average resolution time'
            cardTitle1='Average Resolution Rate'
            cardTime1='30 Mins'
            cardTitle2='Response Time'
            cardTime2='1 Hour 30 Mins'
            priority={COLOR.pink}
            chartBorder={COLOR.pink}
          />
          <Chart
            chartTitle='First contact resolution rate'
            cardTitle1='Average Contact Rate'
            cardTime1='30 Mins'
            cardTitle2='Response Time'
            cardTime2='1 Hour 30 Mins'
            priority={COLOR.sky_blue}
            chartBorder={COLOR.sky_blue}
          />
        </div>
      </div>
    </div>
  );
}