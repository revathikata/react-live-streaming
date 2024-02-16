import React, { useContext } from 'react'
import { CalcContext } from './calContext';

const Calculator = () => {
  const {calc} = useContext(CalcContext);
  return (
    // <div>cal</div>
    <div>{calc.num ? calc.num :calc.res}</div>
  )
}

export default Calculator