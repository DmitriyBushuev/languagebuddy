export enum CardType {
    Remember,
    Quiz
}

export type Card = {
    id: string
    type: CardType
    front: string
    back: string
}