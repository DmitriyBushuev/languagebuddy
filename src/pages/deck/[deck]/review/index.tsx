import { getCards } from "@/api/storage";
import { Card } from "@/types/card";
import { Deck } from "@/types/deck";
import { theme } from "@/ui/theme";
import { Button, Cell, FixedLayout, Card as TGCard, Text } from "@telegram-apps/telegram-ui";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { MouseEventHandler, useCallback, useEffect, useState } from "react";

interface DeckDetailsProps {
    deck: Deck;
}

function TextWithLineBreaks({ text }: { text: string }) {
    const textWithBreaks = text.split('\n').map((text: string, index: number) => (
        <React.Fragment key={index}>
            {text}
            <br />
        </React.Fragment>
    ));

    return <div>{textWithBreaks}</div>;
}

const DeckReview: NextPage<DeckDetailsProps> = ({ deck }) => {
    const router = useRouter()
    const [cards, setCards] = useState<Card[]>([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0)
    const [cardFront, setCardFront] = useState(true)

    useEffect(() => {
        const deck = router.query['deck'] as string

        if (deck !== undefined) {
            const fetchData = async () => {
                const result = await getCards(deck)
                setCards(result)
            }

            fetchData()
                .catch(console.error);
        }
    })

    const onClick = useCallback<MouseEventHandler<HTMLAnchorElement>>((e) => {
        setCardFront(false)
    }, []);

    const onClickLeft = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
        setCardFront(true)
        setCurrentCardIndex(currentCardIndex + 1)
    }, [currentCardIndex, cardFront]);

    const onClickRight = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
        setCardFront(true)
        setCurrentCardIndex(currentCardIndex + 1)
    }, [currentCardIndex, cardFront]);

    return <div style={{ height: '100vh', alignContent: 'center' }}>
        {cards.length > 0 ?
            <TGCard onClick={onClick} style={{ width: '100%', background: theme.bgColor, minHeight: 200, alignContent: 'center', marginBottom: 20 }}>
                <center>
                    <TextWithLineBreaks text={cardFront ? cards[currentCardIndex].front : cards[currentCardIndex].back} />
                </center>
            </TGCard> : <></>
        }
        <div style={{ width: '100%' }}>
            <center>
                <Button onClick={onClickLeft} style={{ marginRight: 20 }}>Need to repeat</Button>
                <Button onClick={onClickRight}>Got it right</Button>
            </center>
        </div>
    </div>

}

export default DeckReview;