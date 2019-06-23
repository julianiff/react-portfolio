import React from "react";

export const portfolioData = {
  active: 1, // Pointer to the active foild id
  isInAutomatic: true, // If the carusell is automatically going to the next foil
  delay: 1500, // delay after each foil
  category: [
    {
      id: 1, // Id of the foil 1 - amount of foiles, need to be a number
      title: "Give a title,", // For the title tpane
      content: "Some Content, can also be jsx", // For the content pane
      focus: true //if this template is in focus or not
    },
    {id: 2,
    title: "more content",
    content: "more Focus",
    focus: false
    }
  ]
};
