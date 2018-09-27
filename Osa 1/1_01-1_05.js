// Full stack open 2018, osa 1, tehtävät 1.1 - 1.5
// Jussi Ruuskanen, 25.9.2018

import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa name={props.osat[0].nimi} tehtavamaara={props.osat[0].tehtavia}/>
            <Osa name={props.osat[1].nimi} tehtavamaara={props.osat[1].tehtavia}/>
            <Osa name={props.osat[2].nimi} tehtavamaara={props.osat[2].tehtavia}/>
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.name} {props.tehtavamaara}</p>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
            <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
        </div>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }
  
    return (
      <div>
        <Otsikko name={kurssi.nimi}/>
        <Sisalto osat={kurssi.osat}/>
        <Yhteensa osat={kurssi.osat}/>
      </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
