import React, { useState } from "react"
import "./Calc.css"

export default function Calc () {

    const [num, setNum] = useState(0)
    const [oldNum, setOldNum] = useState(0)
    const [operador, setOperador] = useState(0)

    function digitar(e) {
        var input = e.target.value;
        if(num === 0){
            setNum(input)
        } else {
            setNum(num + input)
        }
    }

    function limpar() {
        setNum(0)
    }

    function mudarSinal() {
        if(num > 0) {
            setNum(-num)
        } else {
            setNum( Math.abs(num));
        }
    }

    function porcentagem() {
        setNum(num / 100)
    }

    function operacoes(e) {
        let sinal = e.target.value;
        setOperador(sinal);
        setOldNum(num);
        setNum(0);
    }

    function calculo() {
        if(operador === "/") {
            setNum(parseFloat(oldNum) / parseFloat(num))
        } else if(operador === "x") {
            setNum(parseFloat(oldNum) * parseFloat(num))
        } else if(operador === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num))
        } else {
            setNum(parseFloat(oldNum) - parseFloat(num))
        }
    }

    return (
        <div className="calc">
            <div className="res">
                { num }
            </div>

            <div className="digitos">
                <button onClick={limpar} className="branco"> AC </button>
                <button onClick={mudarSinal} className="branco"> +/- </button>
                <button onClick={porcentagem} className="branco"> % </button>
                <button onClick={operacoes} value={"/"} className="laranja"> ÷ </button>
                <button onClick={digitar} value={7} className="cinza"> 7 </button>
                <button onClick={digitar} value={8} className="cinza"> 8 </button>
                <button onClick={digitar} value={9} className="cinza"> 9 </button>
                <button onClick={operacoes} value={"x"} className="laranja">  x </button>
                <button onClick={digitar} value={4} className="cinza"> 4 </button>
                <button onClick={digitar} value={5}  className="cinza"> 5 </button>
                <button onClick={digitar} value={6} className="cinza"> 6 </button>
                <button onClick={operacoes} value={"-"} className="laranja"> - </button>
                <button onClick={digitar} value={1} className="cinza"> 1 </button>
                <button onClick={digitar} value={2} className="cinza"> 2 </button>
                <button onClick={digitar} value={3} className="cinza"> 3 </button>
                <button onClick={operacoes} value={"+"} className="laranja"> + </button>
                <button onClick={digitar} value={0} className="cinza"> 0 </button>
                <button onClick={digitar} value={"."} className="cinza"> . </button>
                <button id="oculto" className="cinza"> . </button>
                <button onClick={calculo} className="laranja"> = </button>
            </div>
        </div>
    )
}