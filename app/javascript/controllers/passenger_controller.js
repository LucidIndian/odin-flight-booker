import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // this.element.textContent = "Hello Passenger Controller!"
    console.log("Hello Passenger Controller!");
  }

  addpass() {
    // Test to see if the browser supports the HTML template element by checking
    // for the presence of the template element's content attribute.
    if ('content' in document.createElement('template')) {
      // Instantiate the div with the existing div
      // and the pass div with the template
      console.log("Template detected!");
      const passdiv = document.querySelector(".passengers");
      const template = document.querySelector('#template');
      // Clone the template div and insert it's child into the other div
      // firstElementChild makes the clone a non-fragment
      const clone = template.content.firstElementChild.cloneNode(true);
      // div = clone.querySelectorAll("div");

      passdiv.appendChild(clone);

    } else {
      // Find another way to add the rows to the table because
      // the HTML template element is not supported.
    }


  }

}
