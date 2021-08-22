import React, { useState } from 'react';
import "./Report.css"

function Report(props) {
  return <button className="report" onClick={props.callback(props.actionName)}>{props.actionName}</button>
}

export default Report;