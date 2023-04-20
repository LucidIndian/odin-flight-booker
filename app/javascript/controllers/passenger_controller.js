import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ 'passengerForm', 'passDiv' ];
  static values = {
    passnum: Number
  }

  connect() {
    // this.element.textContent = "Hello Passenger Controller!"
    console.log("Hello Passenger Controller!");
    console.log(`passnum value is ${this.passnumValue}`)
    // Add the passenger form the # of times as the params
    for (let i = 0; i < this.passnumValue; i++)  { 
      this.addPass();
    }
 
  }

  addPass() {
    console.log("Hello addPass Controller!");
    
      // random # to get unique index so as to make a uniquely indexed record
      const randomIndex = new Date().getTime();
      // create 4 random #s to get unique index so as to make a uniquely indexed record for each passenger.
      // const dynamicIndex = this.passengerCountValue;

      // const passengerForm = this.passengerFormTarget.innerHTML.replace(/PASSENGER_RECORD/g, dynamicIndex);
      
      const passengerForm = this.passengerFormTarget.innerHTML.replace(/PASSENGER_RECORD/g, randomIndex);
      // const passengerForm = this.passengerFormTarget.innerHTML;



      // Grab the target
      // OLD: const passdiv = document.querySelector(".passengers");
      const passDiv = this.passDivTarget;

      passDiv.insertAdjacentHTML('beforeend', passengerForm);

      // this.passengerCountValue++
      // console.log(this.passengerCountValue)

      // Old code:
      // const template = document.querySelector('#template');
      // // Clone the template div and insert it's child into the other div
      // // firstElementChild makes the clone a non-fragment
      // const clone = template.content.firstElementChild.cloneNode(true);
      // // div = clone.querySelectorAll("div");

      // passdiv.appendChild(clone);

  }

}
