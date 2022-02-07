import { demoWS, zoubeiye } from './gameData/ws.js';
import { demoLS, woshikengkeng } from './gameData/ls.js';
import { demoSS } from './gameData/ss.js';
import { demoFS, Emmanuel } from './gameData/fs.js';
import { demoMZ, tianwuyan } from './gameData/mz.js';

// 1物理系 0法术系
const characterList = {
  ws: 1,
  ls: 1,

  ss: 1,
  ck: 1,

  fs: 0,
  js: 0,

  mz: 1,
  hs: 0,
};

const createIsCritThisRound = (critLevel) => {
  const random = Math.round(Math.random() * 100);

  // 暴击率百分数与生成的0-100的随机数比对 如果在0-random范围内视为暴击
  return random < critLevel ? true : false;
};

const createAckThisRound = (data1, data2) => {
  const isCrit = createIsCritThisRound(data1.critPercent); //是否暴击
  const isWl = characterList[data1.character]; //是否是物理系伤害

  const ackDefault = data1.ack - (isWl ? data2.wDefence : data2.fDefence); // 不产生暴击情况下的默认伤害

  const ackAfterCrit = ackDefault * (isCrit ? data1.critLevel / 100 : 1);

  const ackIncreasePercent = (data1.ackIncrease + 100) / 100;
  const ackReducePercent = (100 - data2.ackReduce) / 100;

  let ackFinally = Math.round(
    ackAfterCrit * ackIncreasePercent * ackReducePercent
  );

  ackFinally = ackFinally > 0 ? ackFinally : 0;

  console.log(
    `[${data1.name}]${isCrit ? ' 暴击' : ''} 造成${ackFinally}点伤害`
  );

  return ackFinally;
};

const pk = (data1, data2) => {
  let curHp1 = data1.hp;
  let curHp2 = data2.hp;

  let curRound = 1;

  while (curHp1 > 0 && curHp2 > 0) {
    console.log(`------------第 ${curRound} 轮战斗开始-------------`);
    console.log(
      `[${data1.name}] 剩余血量：${curHp1}  |  [${data2.name}] 剩余血量：${curHp2}`
    );

    const ack1ThisRound = createAckThisRound(data1, data2);
    const ack2ThisRound = createAckThisRound(data2, data1);

    curHp1 = curHp1 - ack2ThisRound;
    curHp2 = curHp2 - ack1ThisRound;

    curRound += 1;
  }

  console.log(
    `战斗结束：[${
      curHp1 > curHp2 ? data1.name : data2.name
    }] 获胜，剩余血量 ${Math.max(curHp1, curHp2)}`
  );
};

pk(woshikengkeng, tianwuyan);
