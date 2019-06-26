import { Category, PortfolioShape } from "./Types";

export interface IntroTemplate {
  content: {
    title: string,
    subtitle: string,
    img: {
      src: string,
      label: string
    }
  }
}

export interface NavigationElements {
  dispatch: Function;
  previous: String;
  next: String;
  updateEl: Function;
  children: any;
}

export interface PortfolioData {
  content: {
    template: string
    data: PortfolioShape
  }
}

export interface ListObject {
  previous: String,
  next: String,
  content: any,
  dispatch: Function
}

export interface PortfolioState {
  active: any,
  isInAutomatic: boolean,
  category: Category[],
  delay: number
}
