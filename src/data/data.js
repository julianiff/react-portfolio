/**
 * Defining the datastructure
 * Here we use a double linked list
 * there is an attribute next, and previous and a content object
 * @type {{}}
 */

const data = {
  intro: {
    previous: "intro",
    next: "me",
    content: {
      template: "1",
      title: "Hey Digitec",
      subtitle: "Im Julian"
    }
  },
  me: {
    previous: "generic",
    next: "",
    content: {
      template: "2",
      title: "Thats me",
      img: ""
    }
  }
};
