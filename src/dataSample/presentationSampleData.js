/**
 * Datstructure used is a double linked list, with previous, next and content properties
 * @type {{}}
 */
import React from "react";
import reactSVG from "./img/react.svg";

export const presentationSampleFlow = {
  intro: {
    previous: 'next', //String reference to the last component
    next: 'next', // string referencee to the next component
    content: {
      template: "Default", // Uses the default template
      title: "Add your Title here", // Here Add a title Optional
      subtitle: "Add your subtitle here", // Here ad a subtitle Optional
      img: {
        src: reactSVG, // Here add the source Optional
        label: "Built with react and react hooks!" // Here add a label to the image Optional
      }
    }
  },
  next: {
    previous: 'intro', //String reference to the last component
    next: 'intro', // string referencee to the next component
    content: {
      template: "Default", // Uses the default template
      title: "Add your next Title here", // Here Add a title Optional
      subtitle: "Add your next subtitle here", // Here ad a subtitle Optional
      img: {
        src: reactSVG, // Here add the source Optional
        label: "Built with react and react hooks!" // Here add a label to the image Optional
      }
    }
  }
};

export const presentationSampleState = {
  current: "intro" // The start state
};
