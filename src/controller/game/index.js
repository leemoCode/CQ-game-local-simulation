import { demoWS, zoubeiye, duoduo } from '../../dataCenter/gameData/ws.js';
import { demoLS, woshikengkeng } from '../../dataCenter/gameData/ls.js';

import { demoSS, huashao, ssdeyanlei } from '../../dataCenter/gameData/ss.js';
import { demoCK, momo, piaopiao } from '../../dataCenter/gameData/ck.js';

import { demoFS, Emmanuel } from '../../dataCenter/gameData/fs.js';
import { demoJS, zhaizhai, woshisansan, zhonghe } from '../../dataCenter/gameData/js.js';

import { demoHS, qingjiaowoyao, hongrenyaxi } from '../../dataCenter/gameData/hs.js';
import { demoMZ, tianwuyan, yinqiangfeiwu } from '../../dataCenter/gameData/mz.js';


import { caculateTargetGamer, caculateAll } from './gameCaculate.js';
import { pk } from './gamePK.js';

const allGamersList = [
  // ws
  zoubeiye,
  duoduo,

  // ls
  woshikengkeng,

  // fs
  Emmanuel,

  //js
  zhaizhai,
  zhonghe,
  woshisansan,

  // ss
  huashao,
  ssdeyanlei,

  // ck
  momo,
  piaopiao,

  // hs
  qingjiaowoyao,
  hongrenyaxi,

  // mz
  tianwuyan,
  yinqiangfeiwu,
]

caculateAll(allGamersList);

// pk(woshikengkeng, zhonghe);

