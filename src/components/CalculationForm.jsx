import { useState } from "react";
import mathAPI from '../services/mathAPI';
import './CalculationForm.css';

export default function CalculationForm() {
  
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [x1, setX1] = useState('');
  const [x2, setX2] = useState('');
  const [equation, setEquation] = useState('');

  function showEquation(a, b, c) {
    const bval = b;
    const cval = c;

    if (a === 1) {
      a = "";
    }

    if (b < 0) {
      b = "- " + Math.abs(b);
    } else {
      b = "+ " + b;
    }

    if (c < 0) {
      c = "- " + Math.abs(c); 
    } else {
      c = "+ " + c;
    }

    if (bval === 0 && cval === 0) {
      return a + "x²";
    }

    if (bval === 0) {
      return a + "x² " + c;
    }

    if (cval === 0) {
      return a + "x² " + b + "x";
    }

    return a + "x² " + b + "x " + c;
  }

  async function calculteBhaskara(event) {
    event.preventDefault();
  
    const aval = parseInt(a);
    const bval = parseInt(b);
    const cval = parseInt(c);
  
    setEquation(showEquation(aval, bval, cval));
  
    setX1("Calculando...");
    setX2("Calculando...");
    
    const roots = await mathAPI.bhaskara(aval, bval, cval);
  
    setX1(roots.x1);
    setX2(roots.x2);
  
    setA('');
    setB('');
    setC('');
  }

  return (
    <div id="calculation-form">
      <form onSubmit={calculteBhaskara}>
        <p>Raízes (x1 e x2) da equação: ax² + bx + c</p>
        <p>Insira o valor de a (a ≠ 0):</p>
        <input type="number" value={a} onChange={event => setA(event.target.value)} />
        <p>Insira o valor de b:</p>
        <input type="number" value={b} onChange={event => setB(event.target.value)} />
        <p>Insira o valor de c:</p>
        <input type="number" value={c} onChange={event => setC(event.target.value)} />
        <button type="submit">Calcular</button>
        <p>Equação: { equation }</p>
        <p>Raízes:</p>
        <p>x1 = { x1 }</p>
        <p>x2 = { x2 }</p>
      </form>
    </div>
  );
}