/*
character 职业
level 等级
hp 血量
mp 蓝量
ack 攻击力
critPercent 暴击率
critLevel 暴击伤害
wDefence 物理防御
fDefence 法术防御

ackReduce 最终伤害减少百分比
ackIncrease 最终伤害增多百分比
*/

const demoData1 = {
  name: 'leemo',
  character: 'ws',
  level: 70,
  hp: 350000,
  mp: 12000,
  ack: 56000,
  critPercent: 20,
  critLevel: 240,

  wDefence: 4500,
  fDefence: 2300,

  ackReduce: 10,
  ackIncrease: 15,
};

const demoData2 = {
  name: 'kiko',
  character: 'fs',
  level: 70,
  hp: 190000,
  mp: 56000,
  ack: 73700,
  critPercent: 25,
  critLevel: 220,

  wDefence: 2000,
  fDefence: 1500,

  ackReduce: 7,
  ackIncrease: 20,
};

const qingjiaowoyao = {
  name: '请叫我妖丶',
  character: 'hs',
  level: 70,
  hp: 270000,
  mp: 46000,
  ack: 93700,
  critPercent: 40,
  critLevel: 270,

  wDefence: 3500,
  fDefence: 4500,

  ackReduce: 25,
  ackIncrease: 27,
};

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

  const ackFinally = Math.round(
    ackAfterCrit * ackIncreasePercent * ackReducePercent
  );
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

pk(demoData2, demoData1);
