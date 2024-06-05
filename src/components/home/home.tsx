import { getMyDecks } from "@/api/storage";
import { Deck } from "@/types/deck";
import { theme } from "@/ui/theme";
import { Cell, List, Section } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react"
import { FaFlagUsa } from "react-icons/fa";
import { Link } from "../Link/Link";


export default function Home() {
    const [decs, setDecks] = useState<Deck[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getMyDecks()
            setDecks(result)
        }

        fetchData()
            .catch(console.error);;
    }, []);

    return (
        <Section header="My decks">
            <List>
                {decs.map((deck) => (
                    <Link key={deck.name} href={"/deck/" + deck.id}>
                        <Cell before={<FaFlagUsa />} after={"20"} style={{ background: theme.bgColor, borderRadius: theme.borderRadius }}>
                            {deck.name}
                        </Cell>
                    </Link>
                ))}
            </List>
        </Section>
    )
}