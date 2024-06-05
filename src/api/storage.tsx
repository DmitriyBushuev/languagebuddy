import { Deck } from "@/types/deck";

const decks: Deck[] = [
    {id: "0", name: "Animals", description: "This is a test descriptionThis is a test descriptionThis is a test description"},
    {id: "1", name: "Phrasal verbs", description: "This is a test descriptionThis is a test descriptionThis is a test description"},
    {id: "2", name: "Adjectives", description: "This is a test descriptionThis is a test descriptionThis is a test description"}
]

export const getDecks = async () => {
    return decks;
}

export const getDeck = async (deckId: string) => {
    return decks.find((deck) => deck.id === deckId);
}


export const getMyDecks = async () => {
    return decks;
}

export const addDeck = async (name: string) => {

    return decks
}

export const removeDeck = async (id: string) => {
    const index = decks.findIndex((element) => element.id === id);
    if (index > -1) {
        decks.splice(index, 1);
    }

    return decks
}