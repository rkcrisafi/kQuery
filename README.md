# kQuery

kQuery is a lightweight library featuring DOM manipulation, DOM traversal, event handling, and AJAX requests.

## Demo

 Take a look at this [Live Demo](http://rkcrisafi.github.io/kQuery/) of the kQuery library.

## API

### DOM Manipulation

##### .addClass(className)
Adds the specified class(es) to each element in the set of matched elements.

##### .removeClass(className)
Removes a single class, multiple classes, or all classes from each element in the set of matched elements.

##### .append(content)
Inserts content, specified by the parameter, to the end of each element in the set of matched elements.

##### .attr(attribute, value)
Gets the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.

##### .empty()
Removes all child nodes of the set of matched elements from the DOM.

##### .html(string)
Gets the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched elements.

##### .remove()
Removes the set of matched elements from the DOM.

### DOM Traversal

##### .children()
Gets the children of each element in the set of matched elements, optionally filtered by a selector.

##### .parent()
Gets the parent of each element in the current set of matched elements, optionally filtered by a selector.

##### .find(selector)
Gets the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.

### Event Handling

##### .on(event, callback)
Attaches an event handler function for one or more events to the selected elements.

### AJAX
Sends an HTTP request specified by passed hash options argument. The argument can take a method, url, success callback, and error callback.
