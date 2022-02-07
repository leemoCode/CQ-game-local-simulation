import { demoWS, zoubeiye } from './gameData/ws.js';
import { demoLS, woshikengkeng } from './gameData/ls.js';
import { demoSS } from './gameData/ss.js';
import { demoCK } from './gameData/ck.js';
import { demoFS, Emmanuel } from './gameData/fs.js';
import { demoJS } from './gameData/js.js';
import { demoHS } from './gameData/hs.js';
import { demoMZ, tianwuyan } from './gameData/mz.js';

// base value 100000
const base = {
  level: 70, // 5000
  hp: 150000, // 15000
  ack: 7000, // 15000
  critPercent: 5, // 7500
  critLevel: 160, // 7500
  wDefence: 2000, // 10000
  fDefence: 1500, // 10000
  ackReduce: 3, // 15000
  ackIncrease: 3, // 15000
}

const caculate = (targetGamerData) => {
  const levelV = (targetGamerData.level / base.level) * 5000;
  const hpV = (targetGamerData.hp / base.hp) * 5000;
  const ackV = (targetGamerData.ack / base.ack) * 5000;
  const critPercentV = (targetGamerData.critPercent / base.critPercent) * 5000;
  const critLevelV = (targetGamerData.critLevel / base.critLevel) * 5000;
  const wDefenceV = (targetGamerData.wDefence / base.wDefence) * 4000;
  const fDefenceV = (targetGamerData.fDefence / base.fDefence) * 4000;
  const ackReduceV = (targetGamerData.ackReduce / base.ackReduce) * 5000;
  const ackIncreaseV = (targetGamerData.ackIncrease / base.ackIncrease) * 5000;

  const total = Math.round(levelV + hpV + ackV + critPercentV + critLevelV + wDefenceV + fDefenceV + ackReduceV + ackIncreaseV);

  console.log(`玩家：[${targetGamerData.name}] 战斗力为：${total}`);

  return total;
}


caculate(demoWS);
caculate(demoLS);

caculate(demoFS);
caculate(demoJS);

caculate(demoMZ);
caculate(demoHS);

caculate(demoCK);
caculate(demoSS);

// caculate(zoubeiye);
// caculate(woshikengkeng);
// caculate(Emmanuel);
// caculate(tianwuyan);

