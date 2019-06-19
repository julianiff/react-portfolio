/**
 * Defining the datastructure
 * Here we use a double linked list
 * there is an attribute next, and previous and a content object
 * @type {{}}
 */

export const presentationData = {
  intro: {
    previous: "intro",
    next: "me",
    content: {
      template: "Intro",
      title: "Hey Guys",
      subtitle: "its me"
    }
  },
  me: {
    previous: "intro",
    next: "me",
    content: {
      template: "Intro",
      title: "Thats me",
      img: ""
    }
  }
};

export const presentationState = {
  current: "intro"
};
