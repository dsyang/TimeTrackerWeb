import React, {useRef} from 'react';
import './App.css';
import Report from "./Report";

function App(props) {

  let notesRef = useRef(null);
  
  return (
    <main>
      <form>
      <Report actionName="Work Important" callback={callback(props.reportAction, notesRef)} />
      <Report actionName="Work Meeting" callback={callback(props.reportAction, notesRef)} />
      <Report actionName="Work Lo-pri" callback={callback(props.reportAction, notesRef)} />
      <Report actionName="Break" callback={callback(props.reportAction, notesRef)} />
      <Report actionName="Non-Work" callback={callback(props.reportAction, notesRef)} />
      <textarea placeholder="Notes..." ref={notesRef}>
      </textarea>
      </form>
    </main>
  );
}

function callback(api, notesRef) {
  return (name) => {
    return (e) => {
      e.preventDefault()
      console.log(name)
      api(name, notesRef.current.value)
      notesRef.current.value = ""
    }
  }
}

export default App;