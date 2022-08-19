import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
  return (
    <Container>
    <Accordion>
      <Accordion.Item eventKey="0">

        <Accordion.Header>The Bastard of Istanbul</Accordion.Header>
        <Accordion.Body>
        From one of Turkey’s most acclaimed and outspoken writers, a novel about the tangled histories of two families.
        In her second novel written in English, Elif Shafak confronts her countrys
         violent past in a vivid and colorful tale set in both Turkey and the United States.
        At its center is the “bastard” of the title, Asya, a nineteen-year-old woman who loves Johnny Cash and the French Existentialists, 
        and the four sisters of the Kazanci family who all live together in an extended household in Istanbul: 
        Zehila, the zestful, headstrong youngest sister who runs a tattoo parlor and is Asya’s mother;
         Banu, who has newly discovered herself as a clairvoyant; Cevriye, a widowed high school teacher; 
         and Feride, a hypochondriac obsessed with impending disaster.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Anxious People</Accordion.Header>
        <Accordion.Body>
        From the #1 New York Times bestselling author of A Man Called Ove and “writer of astonishing depth” (The Washington Times) 
        comes a poignant comedy about a crime that never took place, a would-be bank robber who disappears into thin air, 
        and eight extremely anxious strangers who find they have more in common than they ever imagined.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Small Memories</Accordion.Header>
        <Accordion.Body>
        José Saramago was eighteen months old when he moved from the village of Azinhaga with his father and mother to live in Lisbon. 
        But he would return to the village throughout his childhood and adolescence to stay with his maternal grandparents, 
        illiterate peasants in the eyes of the outside world, but a fount of knowledge, affection, and authority to young José.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>A Long Petal Of The Sea</Accordion.Header>
        <Accordion.Body>
        NEW YORK TIMES BESTSELLER • From the author of The House of the Spirits, 
        this epic novel spanning decades and crossing continents follows two young people as they flee the
         aftermath of the Spanish Civil War in search of a place to call home.
        “One of the most richly imagined portrayals of the Spanish Civil War to date, 
        and one of the strongest and most affecting works in [Isabel Allende’s] long career.”—The New York Times Book Review
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Miss IceLand</Accordion.Header>
        <Accordion.Body>
        The extraordinary new novel from Nordic Council Literature Prize-winning Auður Ava Ólafsdóttir
        Iceland in the 1960s. Hekla always knew she wanted to be a writer. 
        In a nation of poets, where each household proudly displays leatherbound volumes of the Sagas, 
        and there are more writers per capita than anywhere else in the world, there is only one problem: she is a woman.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Purple Hibiscus</Accordion.Header>
        <Accordion.Body>
        “One of the most vital and original novelists of her generation.” —Larissa MacFarquhar, The New Yorker
        From the bestselling author of Americanah and We Should All Be Feminists
        Purple Hibiscus is an exquisite novel about the emotional turmoil of adolescence,
        the powerful bonds of family, and the bright promise of freedom.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  );
}

export default AllCollapseExample;