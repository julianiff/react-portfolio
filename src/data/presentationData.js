/**
 * Defining the datastructure
 * Here we use a double linked list
 * there is an attribute next, and previous and a content object
 * @type {{}}
 */
import React from "react";
import julian1 from "../img/julian1.jpeg";
import julian2 from "../img/julian2.jpg";
import { GlobalStyles } from "../styles/global";

export const presentationData = {
  intro: {
    previous: false,
    next: "me",
    content: {
      template: "Intro",
      title: <>Hey, <span style={{ color: "#00559d" }}>Digitec</span></>,
      subtitle: "Ich bin Julian",
      img: {
        src: julian1,
        label: "Someone looking for their keys"
      }
    }
  },
  me: {
    previous: "intro",
    next: "you",
    content: {
      template: "Intro",
      title: "",
      subtitle: <>Ich möchte in einem <b style={{ color: "#00559d" }}>hammer</b> Team den besten <b
        style={{ color: "#00559d" }}>Online Shop</b> weiterentwickeln und <b
        style={{ color: "#00559d" }}>zusammen</b> hilfreiche Tools kreieren.</>,
      img: {
        src: "https://static.digitecgalaxus.ch/Files/2/2/0/2/6/8/5/6/Engineering_Team_1024x683.jpg?fit=inside|696:473&output-format=progressive-jpeg",
        label: "When the Boss tells funny jokes."
      }
    }
  },
  you: {
    previous: "me",
    next: "cvintro",
    content: {
      template: "Intro",
      title: "",
      subtitle: <>Deshalb möchte ich <b style={{ color: "#00559d" }}>euch</b> dabei helfen Digitec und Galaxus zu
        entwickeln und täglich <b style={{ color: "#00559d" }}>Javascript</b> zu schreiben <span
          style={{ "fontSize": GlobalStyles.font.small }}> C# find ich auch super!</span></>,
      img: {
        src: julian2,
        label: "Definitly a helping face"
      }
    }
  },
  cvintro: {
    previous: "you",
    next: "portfolio",
    content: {
      template: "Intro",
      title: "",
      subtitle: <>Ich habe auch kreative Ideen, beispielsweise</>
    }
  },
  portfolio: {
    previous: "cvintro",
    next: "intro",
    content: {
      template: "Portfolio"
    }
  }

};

export const presentationState = {
  current: "portfolio"
};
