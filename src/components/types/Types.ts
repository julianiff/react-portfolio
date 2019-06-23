

export type Category = {
  id: number,
  title: string,
  content: object,
  focus: boolean
}

export interface PortfolioState {
  active: any,
  isInAutomatic: boolean,
  category: Category[],
}
