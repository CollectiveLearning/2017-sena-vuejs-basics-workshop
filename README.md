# Vue.js 2.0 Basics Workshop

_A Series to Learn Vue.js from the beginning. Covering basics and moving on up to larger projects. Concluding with a
large scale that ties into a backend service.

At the begining we are following the Official Vue Guetting Started Guide
---

### List of directories

- Part 01: Minimal template to start
  Basic HTML 5 template
  Add Bootstrap CSS only
  Add Vue.js library

- Part 02: Hello World!
  Add a Vue instance
  Add a #app component in body
  Display message vue variable using string interpolation (mustache braces)
  Assign a Vue instance to 'app' variable
  Set el, and data.message properties

  #### Prerequisites:
  Basic concepts of HTML, and JS


  Do you know what is a JS Object?
  Inspect DOM with Chrome dev tools. What?

- Part 03: Vue Directives
  Directives are like mini-functions that we add to html elements to “boost” them with extra functionality.
  These are common functions that we tend to find ourselves re-writing every time we make a new website. For example
  binding values of inputs to variables, tying events to html elements, hiding elements until they load and much more.

  We can replicate this functionality using easy directives. All directives are prefixed with a “v-“ and are attached
  directly to HTML elements.

  In this section we cover the basic directives, while saving the more commonly used directives to the next course
  parts.

    v-text: inserting text into the element
    v-html: inserting html into the element
    v-show: conditionally show the element when statement evaluates to true. If it evaluates to false then display:none
            is added to hide the element: tained in the DOM)
    v-if:   conditionally insert element into the DOM when statement evaluates to true
    v-else: alternative statement if a v-if evaluates to false
    v-pre:  preformatted text in the element. Will prevent rendering.
    v-once: render element one time (does not update when model changes)

    What is the main difference between v-if and v-show? (tip: look at changes in the DOM)

- Part 04: V-Bind Directive
- Part 05: Looping
- Part 06: 2-Way Binding
- Part 07: Event Handling
- Part 08: Computed Properties

- Part 09: Challenge
- Part 10: AJAX to External API
