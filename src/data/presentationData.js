/**
 * Defining the datastructure
 * Here we use a double linked list
 * there is an attribute next, and previous and a content object
 * @type {{}}
 */

export const presentationData = {
  intro: {
    previous: false,
    next: "me",
    content: {
      template: "Intro",
      title: "Hey Digitec",
      subtitle: "My Name is Julian"
    }
  },
  me: {
    previous: "intro",
    next: "you",
    content: {
      template: "Portfolio",
      title: "Thats me",
      subtitle: "ohh yeeeee"
    }
  },
  you: {
    previous: "me",
    next: "intro",
    content: {
      template: "Intro",
      title: "Thats you, yeah",
      subtitle: "Fuck yeee"
    }
  }
};

export const presentationState = {
  current: "intro"
};
