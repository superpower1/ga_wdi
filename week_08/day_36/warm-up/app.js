const rotate = (ele, deg) => {
  ele.setAttribute('transform', 'rotate('+ deg +' 100 100)')
}

setInterval(function() {
  const d = new Date()
  rotate(secondHand, 6*d.getSeconds())
  rotate(minuteHand, 6*d.getMinutes())
  rotate(hourHand, 30*(d.getHours()%12) + d.getMinutes()/2)
}, 1000);
