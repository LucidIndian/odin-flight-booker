import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ 'passengerForm', 'passDiv' ];

  static values = { passnum: Number }

  connect() {
    // this.element.textContent = "Hello Passenger Controller!"
    console.log("Hello Passenger Controller!");
    console.log(`passnum value is ${this.passnumValue}`)
    // Add the passenger fields the # of times as the params[:num_of_passengers] from the Booking page
    // Set as passnumValue as a different constant so I don't re-write it when I iterate it in the chained addPass() function
    const pnv = this.passnumValue;
    for (let i = 0; i < pnv; i++)  {  
      // Hack: decrement before incrementing again to offset only when connecting 
      this.passnumValue--
      this.addPass();
    }
  }

  addPass() {
    console.log("Hello addPass Controller!");    
    // random # to get unique index so as to make a uniquely indexed record
    let randomIndex = Math.floor(Math.random() * 1000);
    // console.log(`randomIndex is ${randomIndex}`);      
    const passengerForm = this.passengerFormTarget.innerHTML.replace(/PASSENGER_RECORD/g, randomIndex);
    // Grab the target
    const passDiv = this.passDivTarget;
    passDiv.insertAdjacentHTML('beforeend', passengerForm);
    // Iterated passnumValue to update total passengers in the HTML attribute on Booking#New
    this.passnumValue++ 
    console.log(`passnumValue is ${this.passnumValue}`);
  }

  removePass() {
    // Grab the target
    const lastpassDiv = this.passDivTarget;
    console.log (lastpassDiv.lastChild)
    lastpassDiv.lastElementChild.remove();
    console.log(`removePass ran!`);
    // Decrement passnumValue to update total passengers in the HTML attribute on Booking#New
    this.passnumValue--
    console.log(`passnumValue is ${this.passnumValue}`);
  }

}
