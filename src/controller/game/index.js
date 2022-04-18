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
  WS.wangchou,
  LS.woshikengkeng,
  LS.jinshen,
  LS.luweilou,
  FS.Emmanuel,
  FS.dengxian,
  JS.zhaizhai,
  JS.zhonghe,
  JS.woshisansan,
  JS.treasure,
  SS.huashao,
  SS.ssdeyanlei,
  SS.jingyu,
  CK.momo,
  CK.piaopiao,
  HS.qingjiaowoyao,
  HS.hongrenyaxi,
  MZ.tianwuyan,
  MZ.yinqiangfeiwu,
]

caculateAll(allGamersList);
const A = HS.hongrenyaxi;
const B = LS.jinshen;
const D = MZ.tianwuyan;
const E = WS.duoduo;
const zoubeiye = WS.zoubeiye;
const wangchou = WS.wangchou;
const zhonghe = JS.zhonghe;
const jingyu = SS.jingyu;
const jinshen = LS.jinshen;
const dengxian = FS.dengxian;
const zhaizhai = JS.zhaizhai;

const luweilou = LS.luweilou;

pk(luweilou, zoubeiye);



