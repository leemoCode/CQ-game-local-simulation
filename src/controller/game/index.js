import WS from '../../dataCenter/gameData/ws.js';
import LS from '../../dataCenter/gameData/ls.js';
import SS from '../../dataCenter/gameData/ss.js';
import CK from '../../dataCenter/gameData/ck.js';
import FS from '../../dataCenter/gameData/fs.js';
import JS from '../../dataCenter/gameData/js.js';
import HS from '../../dataCenter/gameData/hs.js';
import MZ from '../../dataCenter/gameData/mz.js';

import { caculateTargetGamer, caculateAll } from './gameCaculate.js';
import { pk } from './gamePK.js';

const allGamersList = [
  WS.zoubeiye,
  WS.duoduo,
  LS.woshikengkeng,
  FS.Emmanuel,
  FS.dengxian,
  JS.zhaizhai,
  JS.zhonghe,
  JS.woshisansan,
  SS.huashao,
  SS.ssdeyanlei,
  CK.momo,
  CK.piaopiao,
  HS.qingjiaowoyao,
  HS.hongrenyaxi,
  MZ.tianwuyan,
  MZ.yinqiangfeiwu,
]

// caculateAll(allGamersList);

pk(JS.zhonghe, FS.dengxian);


