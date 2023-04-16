import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // this.element.textContent = "Hello Passenger Controller!"
    console.log("Hello Passenger Controller!");
  }

}
