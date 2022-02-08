import { demoWS, zoubeiye } from './gameData/ws.js';
import { demoLS, woshikengkeng } from './gameData/ls.js';
import { demoSS } from './gameData/ss.js';
import { demoCK } from './gameData/ck.js';
import { demoFS, Emmanuel } from './gameData/fs.js';
import { demoJS, zhaizhai } from './gameData/js.js';
import { demoHS } from './gameData/hs.js';
import { demoMZ, tianwuyan } from './gameData/mz.js';

// base value 100000
const base = {
  level: 70, // 5000
  hp: 150000, // 19500
  ack: 7000, // 19500
  critPercent: 5, // 5000
  critLevel: 160, // 10000
  wDefence: 2000, // 13500
  fDefence: 1500, // 12000
  ackReduce: 3, // 7500
  ackIncrease: 3, // 6000
}

const caculate = (targetGamerData) => {
  console.log(`------------[${targetGamerData.name}] 战斗力数值组成-------------`);

  const caculateItem = (base, coefficient, name) => {
    const value = Math.round(base * coefficient);
    console.log(`[${name}] ${name === '暴击伤害' ? base + 150 : base} -> ${value} 点`);
    return value;
  }

  const levelV = caculateItem(targetGamerData.level, 5000 / 70, '等级');
  const hpV = caculateItem(targetGamerData.hp, 20000 / 150000, '生命');
  const ackV = caculateItem(targetGamerData.ack, 20000 / 7000, '攻击');
  const critPercentV = caculateItem(targetGamerData.critPercent, 5000 / 5, '暴击');
  const critLevelV = caculateItem(targetGamerData.critLevel - 150, 500, '暴击伤害');
  const wDefenceV = caculateItem(targetGamerData.wDefence, 14000 / 2000, '物理防御');
  const fDefenceV = caculateItem(targetGamerData.fDefence, 12500 / 1500, '法术防御');
  const ackReduceV = caculateItem(targetGamerData.ackReduce, 7500 / 3, '最终伤害减少');
  const ackIncreaseV = caculateItem(targetGamerData.ackIncrease, 6000 / 3, '最终伤害增强');

  const total = levelV + hpV + ackV + critPercentV + critLevelV + wDefenceV + fDefenceV + ackReduceV + ackIncreaseV;

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
// caculate(zhaizhai);



