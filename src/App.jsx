import React from 'react';
import './App.css';
import Report from "./Report";

function App(props) {
  return (
    <main>
      <Report actionName="Work Important" callback={callback(props.reportAction)} />
      <Report actionName="Work Meeting" callback={callback(props.reportAction)} />
      <Report actionName="Work Lo-pri" callback={callback(props.reportAction)} />
      <Report actionName="Break" callback={callback(props.reportAction)} />
      <Report actionName="Non-Work" callback={callback(props.reportAction)} />
    </main>
  );
}

function callback(api) {
  return (name) => {
    return (e) => {
      console.log(name)
      api(name)
    }
  }
}

export default App;