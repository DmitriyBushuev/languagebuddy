import { getDecks } from "@/api/storage";
import { Deck } from "@/types/deck";
import { theme } from "@/ui/theme";
import { Cell, List, Section } from "@telegram-apps/telegram-ui";
import { after } from "node:test";
import { useEffect, useState } from "react"
import { FaFlagUsa } from "react-icons/fa";
import { Link } from "../Link/Link";


export default function Library() {
    const [decs, setDecks] = useState<Deck[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDecks()
            setDecks(result)
        }

        fetchData()
            .catch(console.error);;
    }, []);

    return (
        <Section header="My decks">
            <List>
                {decs.map((deck) => (
                    <Link href={"/deck/" + deck.id}>
                        <Cell key={deck.name} before={<FaFlagUsa />} after={"20"} description={deck.description} style={{ background: theme.bgColor, borderRadius: theme.borderRadius }} >
                            {deck.name}
                        </Cell>
                    </Link>
                ))}
            </List>
        </Section>
    )
}