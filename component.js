class Copyright extends HTMLElement {
  constructor() {
    super();
    let d = new Date();
    this.currentYear = d.getFullYear();
  }

  connectedCallback() {
    this.innerHTML = "<span>" + this.currentYear + "</span>";
  }
}
customElements.define("my-copy", Copyright);
