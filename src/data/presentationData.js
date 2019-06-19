/**
 * Defining the datastructure
 * Here we use a double linked list
 * there is an attribute next, and previous and a content object
 * @type {{}}
 */

export const presentationData = {
  intro: {
    previous: "you",
    next: "me",
    content: {
      template: "Intro",
      title: "Hey Guys",
      subtitle: "its me"
    }
  },
  me: {
    previous: "intro",
    next: "you",
    content: {
      template: "Intro",
      title: "Thats me",
      img: ""
    }
  },
  you: {
    previous: "me",
    next: "intro",
    content: {
      template: "Intro",
      title: "Thats you, yeah",
      img: ""
    }
  }
};

export const presentationState = {
  current: "intro"
};
