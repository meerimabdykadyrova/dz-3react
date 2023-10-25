import logo from './logo.svg';
import { useState } from 'react';
import './Form.css';
import {Button} from "./component/button";
import {Input} from "./component/input";
import { Card } from './component/card';

const cards = [
    {id: 1,name:"Rose"},
    {id: 2,name:"Peony"},
    {id: 3,name:"Lily"},
    {id: 4,name:"Tulip"},
    {id: 5,name:"Violet"},
    {id: 6,name:"Chamomile"},
]

function App() {

    const [list, setList] = useState (cards)
    const [query, setQuery] = useState('')


    const handelFilterOnclick = () => {
        const Cards = cards.filter(i => i.id === query)
        if (Cards.length === 0) {
            const id = list.length
            const item = {id: id, name: query}
            setList([...list, item])
        }else{
            setList(Cards)
        }
        setQuery('')
    }


    return (
        <div className="App">
            <Input value={query} setValue={setQuery}/>
            <button onClick={handelFilterOnclick}>ADD</button>


            {list.map((card) => {
                return <Card key={card.id} name={card.name}/>
            })}

        </div>
    );
}

export default App;