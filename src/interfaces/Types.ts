export type Category = {
  id: number,
  title: string,
  content: object,
  focus: boolean
}

export type PortfolioShape = {
  active: number, // Pointer to the active foil id
  isInAutomatic: boolean, // If the carusell is automatically going to the next foil
  delay: number, // delay after each foil
  category: Category[],
}

export type Active = {
  active: any
}

export type Shape = {
  ratio: number,
  color: string
}
