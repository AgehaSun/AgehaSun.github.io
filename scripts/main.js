var item = document.querySelector('.wrapper')

window.addEventListener('wheel', function(e) {

  if (e.deltaY > 0) item.scrollLeft += 100;
  else item.scrollLeft -= 100;
});

const cursor = document.querySelector('.cursor')
document.addEventListener('mousemove',e => {
  cursor.setAttribute("style","top:" + (e.pageY - 20) +"px;left:" +(e.pageX - 20)+"px")
})