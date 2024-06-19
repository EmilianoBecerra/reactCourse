import { createContext, useState } from "react";
import "./Context.css";
import { Component1 as NCComponent1 } from "./noContext/Component1";
import { Component1 as WCComponent1 } from "./withContext/Component1";

export const CounterContext = createContext();

export default function Context() {
  const [counterNC, setCounterNC] = useState(0);
  const [counterWC, setCounterWC] = useState(0);

  return (
    <div className="Context">
      <div className="jumbotron">
        <h2>
          <u> SIN CONTEXTO - {counterNC} </u>
        </h2>
        <hr />
        <NCComponent1 counter={counterNC} setCounter={setCounterNC} />

        <hr />

        <h2>
          <u> CON CONTEXTO - {counterWC} </u>
        </h2>
        <hr />

        <CounterContext.Provider value={[counterWC, setCounterWC]}>
          <WCComponent1 />
        </CounterContext.Provider>
      </div>
    </div>
  );
}
