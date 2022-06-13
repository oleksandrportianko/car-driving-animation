const nightOpasity = {
   '00': '0.9',
   '01': '0.9',
   '02': '0.8',
   '03': '0.7',
   '04': '0.6',
   '05': '0.5',
   '06': '0.3',
   '07': '0.2',
   '08': '0.1',
   '09': '0.0',
   '10': '0.0',
   '11': '0.0',
   '12': '0.0',
   '13': '0.0',
   '14': '0.0',
   '15': '0.0',
   '16': '0.0',
   '17': '0.0',
   '18': '0.0',
   '19': '0.1',
   '20': '0.2',
   '21': '0.4',
   '22': '0.6',
   '23': '0.8',
} 

function currentTime() {
  let clockTimer = document.getElementById('clock-timer');
  let nightBlock = document.getElementById('night-block')

  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh = hh < 10 ? '0' + hh : hh;
  mm = mm < 10 ? '0' + mm : mm;
  ss = ss < 10 ? '0' + ss : ss;

  let time = hh + ':' + mm + ':' + ss;

  clockTimer.innerHTML = time;
  nightBlock.style.opacity = nightOpasity[hh]

  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();
