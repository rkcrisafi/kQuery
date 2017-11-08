const DOMNodeCollection = require("./dom_node_collection");

const $l = function (arg) {
  const elementsArray = [];
  if (typeof arg === "string") {
    const nodesArray = Array.prototype.slice.call(document.querySelectorAll(arg));
    return new DOMNodeCollection(nodesArray);
  } else if (arg instanceof HTMLElement) {
    elementsArray.push(arg);
    return new DOMNodeCollection(elementsArray);
  }
};


window.$l = $l;
