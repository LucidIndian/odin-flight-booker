import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ 'passengerForm', 'passDiv', 'removeButton' ];

  static values = { passnum: Number }

  static classes = [ "concealed" ] 

  connect() {
    // this.element.textContent = "Hello Passenger Controller!"
    // console.log("Hello Passenger Controller!");
    // console.log(`passnumValue is ${this.passnumValue} on connect`)
    // Add the passenger fields the # of times as the params[:num_of_passengers] from the Booking page
    // Set as passnumValue as a different constant so I don't re-write it when I iterate it in the chained addPass() function
    const pnv = this.passnumValue;
    for (let i = 0; i < pnv; i++)  {  
      // Hack: decrement before incrementing again in addPass() below
      this.passnumValue--
      this.addPass();
    }
  }

  addPass() {
    // random # to get unique index so as to make a uniquely indexed record
    let randomIndex = Math.floor(Math.random() * 1000);
    // console.log(`randomIndex is ${randomIndex}`);      
    const passengerForm = this.passengerFormTarget.innerHTML.replace(/PASSENGER_RECORD/g, randomIndex);
    // Grab the target
    const passDiv = this.passDivTarget;
    passDiv.insertAdjacentHTML('beforeend', passengerForm);
    // Iterated passnumValue to update total passengers in the HTML attribute on Booking#New
    this.passnumValue++ 
    this.buttonShow();
  }

  removePass() {
    // Grab the target
    const passDiv = this.passDivTarget;
    passDiv.lastElementChild.remove();
    // Decrement passnumValue to update total passengers in the HTML attribute on Booking#New
    this.passnumValue--
    this.buttonShow()
  }

  buttonShow() {
    if ( this.passnumValue > 1 ) {
      // show the "remove" button!
      this.element.classList.remove(this.concealedClass);
    } else if ( this.passnumValue < 2 ) {
      // conceal the "remove" button!
      this.element.classList.add(this.concealedClass);
    } else {
      console.log(`REMOVE BUTTON ERROR`);
    }
  }

}
