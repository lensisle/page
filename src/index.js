import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";
import { StepFactory, StepNames } from "./steps";

const Trophy = props => (
  <div id="trophies" className="flex mb-10">
    <img
      className="h-8 mr-6"
      src={props.img}
      alt={props.description}
      aria-label={props.description}
    />
  </div>
);

const Trophies = ({ trophies }) => (
  <div className="flex mb-10">
    {trophies.map(trophy => (
      <Trophy
        key={trophy.id}
        description={trophy.description}
        img={trophy.img}
      />
    ))}
  </div>
);

const ActionButton = props => (
  <button className="block bg-black text-gray-200 inline-block px-5 py-3 rounded-sm text-sm uppercase tracking-wider font-semibold mb-6">
    {props.text}
  </button>
);

const Resources = props => (
  <div className="mt-10">
    <ul>
      <li>Connections {props.connections}</li>
    </ul>
  </div>
);

function App() {
  const [step, setStep] = useState(StepNames.Introduction);
  const [trophies = [], setTrophies] = useState();
  const [connections, setConnections] = useState(1);

  const { Message, Actions } = StepFactory(step);

  return (
    <div className="ml-10 mt-10 flex">
      <div className="mr-16 w-1/2">
        {trophies.length > 0 ? <Trophies trophies={trophies} /> : null}
        <Message
          setStep={setStep}
          trophies={trophies}
          setTrophies={setTrophies}
        />
        {step !== StepNames.Introduction && step !== StepNames.FastEnd ? (
          <Resources connections={connections} />
        ) : null}
      </div>
      <div className="bg-gray-200 h-screen">
        <div className=" max-w-lg flex flex-col">
          {Actions.map(action => (
            <ActionButton text={action.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
