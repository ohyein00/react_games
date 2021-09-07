import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
//숫자랜덤 생성
//공 생성
//setInterval마다 하나씩 보여주기

const getRandomNumbers = () => {
    let candidate = new Array(45).fill().map((v, i) => i + 1)
    const numbers = []
    while (numbers.length < 7) {
        numbers.push(candidate.splice((Math.floor(Math.random() * candidate.length)), 1)[0])
    }
    numberSort(numbers)
}
const numberSort = (numbers) => {
    const bonusNum = numbers[numbers.length - 1]
    const lotto = numbers.splice(0, 6).sort((a, b) => a - b)
    console.log( [lotto,bonusNum])
    return [lotto,bonusNum]
}

class Lotto extends Component {
    state = {}
}

function App() {
    return (
        <>
            {getRandomNumbers()}
            <h1>000회 로또 당첨 번호</h1>
            <ul className="ball_container">
                <li className="ball">2</li>
            </ul>
        </>
    );
}

export default App;

