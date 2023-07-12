import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

import {mediaQueries} from 'styles/shared';

const linkColor = '#337ab7';

export const wrapper = styled.div`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1007%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(247%2c 247%2c 247%2c 1)'%3e%3c/rect%3e%3cpath d='M1178 504L1177 874' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1407 424L1406 78' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M935 526L934 743' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1179 401L1178 141' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1071 398L1070 128' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M742 54L741 363' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1247 372L1246 93' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M849 44L848 -311' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1223 163L1222 -174' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M417 63L416 -163' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1214 247L1213 584' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1123 316L1122 140' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1407 391L1406 561' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M950 224L949 -164' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M712 119L711 -87' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1264 22L1263 -239' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1183 378L1182 761' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M849 363L848 126' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1414 17L1413 -216' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1305 73L1304 -208' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1368 423L1367 248' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1379 491L1378 900' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1339 217L1338 598' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M721 203L720 620' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M519 462L518 826' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M457 87L456 420' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M557 99L556 -216' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M149 408L148 189' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M839 520L838 907' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M742 324L741 87' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M57 551L56 869' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M258 212L257 70' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1031 134L1030 481' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1249 539L1248 245' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M439 505L438 728' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1289 432L1288 698' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1009%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1007'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1008'%3e%3cstop stop-color='rgba(191%2c 194%2c 225%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(191%2c 194%2c 225%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='0%25' x2='0%25' y2='100%25' id='SvgjsLinearGradient1009'%3e%3cstop stop-color='rgba(191%2c 194%2c 225%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(191%2c 194%2c 225%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  min-height: 100vh; 
`;

export const container = styled.div`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M931.2545488554573 48.209312132951794L905.1203865018814 139.34996740249574 996.2610417714253 165.48412975607164 1022.3952041250012 74.3434744865277z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1413.7816056560366 195.6209634001601L1343.3751753598574 279.52807964736564 1497.6887219032421 266.0273936963394z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M749.7772903740819 293.2559410683849L845.3192681613593 267.6555452770117 819.718872369986 172.11356748973424 724.1768945827087 197.71396328110748z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M869.018%2c245.759C915.015%2c243.679%2c953.714%2c213.916%2c975.711%2c173.466C996.683%2c134.9%2c998.146%2c87.985%2c975.149%2c50.592C953.143%2c14.81%2c911.004%2c-1.337%2c869.018%2c-0.015C829.42%2c1.231%2c796.107%2c24.145%2c773.861%2c56.928C747.696%2c95.486%2c723.224%2c142.323%2c744.193%2c183.935C766.588%2c228.377%2c819.303%2c248.007%2c869.018%2c245.759' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1291.8999681111952 557.5097358827923L1250.1728140773744 453.9473545148514 1188.7498804992492 529.7983605365196z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1212.4390339434392 207.7588672802318L1069.518162097015 283.57661697206936 1188.128322079354 360.60295549497175z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");


  @media ${mediaQueries.tablet} {
    padding: 10px 20px;
  }
`;

export const noMovies = styled.div`
  margin-top: 30px;
`;

export const movieRow = styled.div`
  font-size: 15px;
  padding: 10px;
  margin-left: 0;
  margin-right: 0;
  border-bottom: 1px solid #cacaca;
  position: relative;
  display: flex;
  width: 100%;

  @media ${mediaQueries.tablet} {
    padding: 10px 0;
  }
`;

export const imageContainer = styled.div`
  height: 100%;
  background-color: #eee;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const content = styled.div`
  font-size: 12px;
  margin-left: 10px;
  text-align: left;
  font-family: Verdana, Arial, sans-serif;
  color: #F6F1F0
  ;
  width: 100%;

  p span::before {
    content: ' | ';
    color: #ddd;
  }
`;

export const header = styled.h3`
  font-size: 17px;
  margin: 0;
`;

export const actionLink = styled(Button)`
  color: ${linkColor};
  text-decoration: none;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: left;

  @media ${mediaQueries.tablet} {
    width: auto;
  }
`;

export const actionButton = styled(Button)`
  float: right;
  margin-left: 5px;
  color: black;
`;

export const info = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const actors = styled.p`
  margin-top: 8px;
  color: ${linkColor};
`;

export const plot = styled.p`
  overflow: hidden;
  position: relative;
  line-height: 1.4em;
  text-align: justify;
  padding-right: 1.2em;
  font-size: 14px;
  margin-bottom: 0;
`;



