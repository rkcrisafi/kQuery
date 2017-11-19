const DOMNodeCollection = require("./dom_node_collection");


let functions = [];
let documentReady = false;

const $l = function (arg) {
  const elementsArray = [];
  if (typeof arg === "string") {
    const nodesArray = Array.prototype.slice.call(document.querySelectorAll(arg));
    return new DOMNodeCollection(nodesArray);
  } else if (arg instanceof HTMLElement) {
    elementsArray.push(arg);
    return new DOMNodeCollection(elementsArray);
  } else if (typeof arg === 'function') {
    functions.push(org);
  }
};

$l.extend = (...args) => {
  let firstArg = args[0];
  args.forEach(obj => {
    Object.keys(obj).slice(1).forEach(key => {
      firstArg[key] = obj[key];
    });
  });
  return firstArg;
};

$l.ajax = (options) => {
  const defaults = {
    method: "GET",
    url: "",
    success: () => {},
    error: () => {},
    data: {}
  };
  options = $l.extend(defaults, options);

  options.method = options.method.toUpperCase();
  // if (options.method === "GET") {
  //   options.url += `?${toQueryString(options.data)}`;
  // }

  const req = new XMLHttpRequest();
  req.open(options.method, options.url, true);
  req.onload = e => {
    if (req.status === 200) {
      options.success(JSON.parse(req.response));
    } else {
      options.error(req.response);
    }
  };
  req.send(JSON.stringify(options.data));
};

const toQueryString = obj => {
  let result = "";
  for (const props in obj) {
    if (obj.hasOwnProperty(prop)) {
      result += `${prop}=${obj[prop]}&`;
    }
  }
  return result.slice(0, result.length-1);
};


window.$l = $l;

document.addEventListener('DOMContentLoaded', () => {
  documentReady = true;
  functions.forEach(func => func());
});
