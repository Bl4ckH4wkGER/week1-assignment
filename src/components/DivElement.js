// Import HTMLElement here
import HTMLElement from './HTMLElement';

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
    this.content = content;
    this.tag = 'div';
  }
}

// Export class here
export default DivElement;
