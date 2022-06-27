
const dom = document.getElementById('djdl_qsstock2')
let curHeight = dom.clientHeight;
setInterval(() => {
  if (dom.clientHeight !== curHeight) {
    alert('call');
    curHeight = dom.clientHeight;

    console.log('ddddd');

    if (!document.getElementById('alert-sound')) {
      dom.insertAdjacentHTML('afterend', '<audio id="alert-sound" src="http://data.huiyi8.com/2017/gha/03/17/1702.mp3" loop></audio>')
    }

    document.getElementById('alert-sound').play();
  }
}, 3000);





let height = 0;
setInterval(() => {
  const dom = document.getElementById('results');
  let curHeight = document.getElementById('results').clientHeight || 0;
  if (curHeight > height) {
    console.log(6666)
  }

}, 50)


window.interval = setInterval(() => {
  const dom = document.getElementById('results');
  if ((dom && dom.clientHeight) > 0) {
    console.log(666);
    clearInterval(window.interval);
  }
}, 50);
