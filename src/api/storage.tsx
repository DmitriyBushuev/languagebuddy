import { Card, CardType } from "@/types/card";
import { Deck } from "@/types/deck";

const decks: Deck[] = [
    {id: "0", name: "Animals", description: "This is a test descriptionThis is a test descriptionThis is a test description"},
    {id: "1", name: "Phrasal verbs", description: "This is a test descriptionThis is a test descriptionThis is a test description"},
    {id: "2", name: "Adjectives", description: "This is a test descriptionThis is a test descriptionThis is a test description"}
]

const cards: Card[] = [
    { 
        id: "1", 
        type: CardType.Remember, 
        front: "Benevolent", 
        back: "Well-meaning and kindly.\n Example: She was a benevolent woman, volunteering all her free time to charitable causes." 
    },
    { 
        id: "2", 
        type: CardType.Remember, 
        front: "Aloof", 
        back: "Not friendly or forthcoming; cool and distant.\nExample: His aloof demeanor made it hard to get to know him." 
    },
    { 
        id: "3", 
        type: CardType.Remember, 
        front: "Elaborate", 
        back: "Involving many carefully arranged parts or details; detailed and complicated.\nExample: The artist’s work was so elaborate that it took years to complete." 
    },
    { 
        id: "4", 
        type: CardType.Remember, 
        front: "Ambiguous", 
        back: "Open to more than one interpretation; not having one obvious meaning.\nExample: The instructions were ambiguous and caused a lot of confusion." 
    },
    { 
        id: "5", 
        type: CardType.Remember, 
        front: "Diligent", 
        back: "Having or showing care and conscientiousness in one's work or duties.\nExample: She was diligent in her studies and always submitted her assignments on time." 
    },
    { 
        id: "6", 
        type: CardType.Remember, 
        front: "Eccentric", 
        back: "Unconventional and slightly strange.\nExample: The inventor was known for his eccentric habits and unique inventions." 
    },
    { 
        id: "7", 
        type: CardType.Remember, 
        front: "Futile", 
        back: "Incapable of producing any useful result; pointless.\nExample: Their efforts to save the company were futile and it eventually went bankrupt." 
    },
    { 
        id: "8", 
        type: CardType.Remember, 
        front: "Gratuitous", 
        back: "Uncalled for; lacking good reason; unwarranted.\nExample: The movie was criticized for its gratuitous violence." 
    },
    { 
        id: "9", 
        type: CardType.Remember, 
        front: "Inquisitive", 
        back: "Having or showing an interest in learning things; curious.\nExample: The inquisitive child asked a lot of questions about how the world works." 
    },
    { 
        id: "10", 
        type: CardType.Remember, 
        front: "Jovial", 
        back: "Cheerful and friendly.\nExample: He was in a jovial mood after hearing the good news." 
    },
    { 
        id: "11", 
        type: CardType.Remember, 
        front: "Keen", 
        back: "Having or showing eagerness or enthusiasm.\nExample: She was keen to start her new job and make a good impression." 
    },
    { 
        id: "12", 
        type: CardType.Remember, 
        front: "Lethargic", 
        back: "Affected by lethargy; sluggish and apathetic.\nExample: After the long flight, he felt lethargic and just wanted to rest." 
    },
    { 
        id: "13", 
        type: CardType.Remember, 
        front: "Meticulous", 
        back: "Showing great attention to detail; very careful and precise.\nExample: She was meticulous in her research, ensuring all facts were correct." 
    },
    { 
        id: "14", 
        type: CardType.Remember, 
        front: "Nostalgic", 
        back: "Characterized by or exhibiting feelings of nostalgia.\nExample: He felt nostalgic when he looked at old photographs of his childhood." 
    },
    { 
        id: "15", 
        type: CardType.Remember, 
        front: "Oblivious", 
        back: "Not aware of or not concerned about what is happening around one.\nExample: She was oblivious to the fact that everyone was staring at her." 
    },
    { 
        id: "16", 
        type: CardType.Remember, 
        front: "Pragmatic", 
        back: "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.\nExample: He took a pragmatic approach to problem-solving, focusing on what would work best in practice." 
    },
    { 
        id: "17", 
        type: CardType.Remember, 
        front: "Quintessential", 
        back: "Representing the most perfect or typical example of a quality or class.\nExample: The quintessential dessert of the region is a delicious fruit tart." 
    },
    { 
        id: "18", 
        type: CardType.Remember, 
        front: "Resilient", 
        back: "Able to withstand or recover quickly from difficult conditions.\nExample: Despite the setbacks, she remained resilient and continued to pursue her goals." 
    },
    { 
        id: "19", 
        type: CardType.Remember, 
        front: "Scrutinize", 
        back: "Examine or inspect closely and thoroughly.\nExample: The detective scrutinized the evidence to find any clues that might solve the case." 
    },
    { 
        id: "20", 
        type: CardType.Remember, 
        front: "Tenacious", 
        back: "Tending to keep a firm hold of something; clinging or adhering closely.\nExample: Her tenacious spirit helped her overcome many obstacles in life." 
    }
];


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

export const getCards = async (deck: string) => {
    return cards;
}