const isConsoleEveryValue = false;

const rankList = [];

const sort = () => {
  rankList.sort((a, b) => {
    return b.value - a.value;
  });

  console.log('----------排行榜----------');
  for (let i = 0; i < rankList.length; i++) {
    console.log(`${i + 1}. ${rankList[i].value}  ${rankList[i].character.toUpperCase()}  [${rankList[i].name}]`);
  }
}

export const caculateTargetGamer = (targetGamerData) => {
  if (isConsoleEveryValue) {
    console.log(`------------[${targetGamerData.name}] 战斗力数值组成-------------`);
  }

  const caculateItem = (base, coefficient, name) => {
    const value = Math.round(base * coefficient);

    if (isConsoleEveryValue) {
      console.log(`[${name}] ${name === '暴击伤害' ? base + 150 : base} -> ${value} 点`);
    }
    return value;
  }

  const levelV = caculateItem(targetGamerData.level, 72, '等级');
  const hpV = caculateItem(targetGamerData.hp, 2000 / 10000, '生命');
  const ackV = caculateItem(targetGamerData.ack, 2.57, '攻击');
  const critPercentV = caculateItem(targetGamerData.critPercent, 1800, '暴击');
  const critLevelV = caculateItem(targetGamerData.critLevel - 150, 800, '暴击伤害');
  const wDefenceV = caculateItem(targetGamerData.wDefence, 3.5, '物理防御');
  const fDefenceV = caculateItem(targetGamerData.fDefence, 5.7, '法术防御');
  const ackReduceV = caculateItem(targetGamerData.ackReduce, 3000, '最终伤害减少');
  const ackIncreaseV = caculateItem(targetGamerData.ackIncrease, 2500, '最终伤害增强');

  const total = levelV + hpV + ackV + critPercentV + critLevelV + wDefenceV + fDefenceV + ackReduceV + ackIncreaseV;

  if (isConsoleEveryValue) {
    console.log(`玩家：[${targetGamerData.name}] 战斗力为：${total}`);
  }

  rankList.push({ name: targetGamerData.name, value: total, character: targetGamerData.character });

  return total;
}

export const caculateAll = (list) => {
  for (const item of list) {
    caculateTargetGamer(item);
  }

  sort();
}
