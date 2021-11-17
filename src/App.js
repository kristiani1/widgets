/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import Accordion from './Components/Accordion'
import Search from './Components/Search'
import Dropdown from './Components/Dropdown'
import Translate from './Components/Translate'
import Route  from './Components/Route'
import Header from './Components/Header'

const items = [
    {
        title: 'what is react?',
        content: 'react is a front end javascript framework'
    },
    {
        title:'Why use react?',
        content:'react is favorite js library among engineers'
    },
    {
        title: 'how do you use react?',
        content: 'you use react by creating components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0])

    return(
        <div>
            <Header />
            
            <Route path="/">
                <Accordion items={items} />
            </Route>

            <Route path="/list">
                <Search />
            </Route>
            
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}/>   
            </Route>

            <Route path="/translate">
                <Translate />
            </Route>

        </div>
    )
}