import { getDeck, getDecks } from "@/api/storage";
import { Deck } from "@/types/deck";
import { AppRoot, Button, Card, Cell, FixedLayout, List, Text } from "@telegram-apps/telegram-ui";
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React, { useEffect, useState } from "react";

interface DeckDetailsProps {
    deck: Deck;
}

const DeckDetails: NextPage<DeckDetailsProps> = ({ deck }) => {
    const router = useRouter()
    const [deckDetails, setDeck] = useState<Deck | undefined>(undefined);

    useEffect(() => {
        const deck = router.query['deck'] as string

        if (deck !== undefined) {
            const fetchData = async () => {
                const result = await getDeck(deck)
                setDeck(result)
            }

            fetchData()
                .catch(console.error);
        }
    })

    return <div>

        <Card style={{ width: '100%' }}>
            <React.Fragment key=".0">
                <Cell subtitle={deckDetails?.description} multiline={true}>
                    {deckDetails?.name}
                </Cell>
                <Cell>
                    Cards to review: 20 <br/>
                    Total cards: 20
                </Cell>
                {/* <CardCell
                    readOnly
                    subtitle={deckDetails?.description}
                >
                    {deckDetails?.name}
                </CardCell> */}
            </React.Fragment>
        </Card>
        <FixedLayout vertical="bottom">
            <Button style={{ width: '100%', borderRadius: 0, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>Start</Button>
        </FixedLayout>

    </div>

}

// interface DeckDetailsParams extends ParsedUrlQuery {
//     deck: string
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//     const decks = await getDecks()

//     const paths = decks.map((deck) => ({
//         params: {
//             deck: deck.id,
//         },
//     }));
//     return {
//         paths,
//         fallback: false,
//     };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//     const { deck } = context.params as DeckDetailsParams
//     const deckDetails = await getDeck(deck)

//     console.log('deck path')
//     console.log(deck)
//     console.log('deck details')
//     console.log(deckDetails)

//     return {
//         props: {
//             deck: deckDetails
//         },
//     };
// }

export default DeckDetails;