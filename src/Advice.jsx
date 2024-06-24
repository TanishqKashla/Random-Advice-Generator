import axios from 'axios';
import { useState } from 'react';
import "./Advice.css"
import diceIcon from '../src/assets/dice.png';

export default function Advice(){



    const [advice, getAdvice] = useState("Start Generating Advices")
    const [adviceNumber, getAdviceNumber] = useState(0)

    const fetchAdvice = async () => {
        const response = await axios.get('https://api.adviceslip.com/advice');
        // advice =  response.data.slip.advice
        getAdvice(response.data.slip.advice)
        getAdviceNumber(response.data.slip.id)
       
    }



    return(
        <div className='container'>
            <div className='adviceNumber'>
                ADVICE #{adviceNumber}
            </div>
            <div className='advice'>
                "{advice}"
            </div>
            <div className='generateButton' onClick={fetchAdvice}>
                <img src={diceIcon} alt="dice icon" />
            </div>
        </div>
    )

}
