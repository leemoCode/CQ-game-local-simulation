document.getElementById('list').addEventListener('click', function (e) {
  const event = e || window.event;
  const target = event.target;

  if (target.nodeName.toLocaleLowerCase() === 'li') {
    console.log('the content is: ', target.innerHTML);
  }
})
