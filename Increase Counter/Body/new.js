let counters =document.querySelectorAll('#counter')

counters.forEach(counter => {
   counter.innerHTML ='0';

   function displayCounter() {
      let targer = +counter.getAttribute("data-target")
      let count = +counter.innerHTML;

      let incresement = targer / 200;

      if(count < targer) {
         counter.innerHTML = `${Math.ceil(count + incresement)}`
         setTimeout(displayCounter, 1)
      }else {
         counter.innerHTML =targer
      }
   }
   displayCounter()
});
