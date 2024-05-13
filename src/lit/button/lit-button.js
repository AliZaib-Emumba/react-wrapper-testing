import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

export class TestButton extends LitElement {
  static styles = css`
    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `;

  render() {
    return html` <button id="button" role="button" @click=${this.handleClick}>Click me</button> `;
  }

  handleClick() {
    console.log('Button clicked!');
  }
}

customElements.define('lit-button', TestButton);
