

class DOMNodeCollection {
  constructor (elements) {


    this.elements = elements;
  }

  html (str = null) {
    if (str) {
      this.elements.forEach(element => {
        element.innerHTML = str;
      });
    } else {
      return this.elements[0].innerHTML;
    }
  }


  empty () {
    this.elements.forEach(element => {
      element.innerHTML = "";
    });
  }

  append (content) {
    this.elements.forEach(element => {
      element.innerHTML += content;
    });
  }


  attr (attribute, value = null) {
    if (typeof value === "string") {
      this.elements.forEach(element => {
        element.setAttribute(attribute, value);
      });
      return this.elements;
    } else {
      return this.elements[0].getAttribute(attribute);
    }
  }

  addClass (name) {
    this.elements.forEach(element => {
      element.classList.add("class", name);
    });
    return this.elements;
  }

  removeClass (name) {
    this.elements.forEach(element => {
      element.classList.remove(name);
    });
    return this.elements;
  }

  children () {
    let allChildren = [];
    this.elements.forEach(element => {
      allChildren = allChildren.concat(Array.from(element.children));
    });
    return new DOMNodeCollection(allChildren);
  }

  parent () {
    let parents = [];
    this.elements.forEach(element => {
      if (!parents.includes(element.parentNode)) {
        parents.push(element.parentNode);
      }
    });
    return new DOMNodeCollection(parents);
  }

  find (selector) {
    let result = [];
    this.elements.forEach(element => {
      result = result.concat(Array.from(element.querySelectorAll(selector)));
    });
    return new DOMNodeCollection(result);
  }

  remove () {
    this.elements.forEach(element => {
      element.parentNode.removeChild(element);
    });
    return this.elements;
  }

}


module.exports = DOMNodeCollection;
