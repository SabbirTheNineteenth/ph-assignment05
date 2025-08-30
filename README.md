1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**? 
Answer: getElementById select an element with its unique id attribute,which is named by user.For its unique id name only one element could be selected.
getElementsByClassName Selects all elements with a specific class name.It can select multiple elements that share the same class.
querySelector selects the first element that matches a CSS selector.
querySelectorAll Selects all elements that match a CSS selector.

2.How do you **create and insert a new element into the DOM**?
Answer:To create and insert a new element into the DOM, I create the element with document.createElement(), after that I add content or attributes if needed,
and then I insert it into a parent element using methods like appendChild().

3.What is **Event Bubbling** and how does it work?
Answer: Event Bubbling is a concept in JavaScript where an event starts from the target element and then "bubbles up" through its ancestors in the DOM tree.
When an event is triggered on an element, the browser first runs the event handler on the element itself. Then, it moves to the parent element, then the parent’s parent,
and so on, until it reaches the top of the DOM .This allows parent elements to catch events from their child elements, which can be useful for things like handling events
on many elements without attaching individual listeners to each one.

4.What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Event Delegation is a technique in JavaScript where a single event listener is added to a parent element, and that listener is responsible for handling events on its child
elements. It relies on the principle of event bubbling, where events propagate from the target element up through its ancestors in the DOM.Event delegation is useful because
it reduces the number of event listeners, saving system resources. It allows handling events for dynamically added elements without needing extra code. Additionally, it
simplifies event management by centralizing it in one place, making the code easier to maintain

5.What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: preventDefault() prevents the default action associated with an event from happening. And
stopPropagation() stops the event from bubbling up or capturing down the DOM, so other event listeners don't get triggered.


