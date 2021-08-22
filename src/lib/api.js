function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function report(json) {
  let response = await fetch("")
}

async function asyncEval(command, id, context) {
  let response = await fetch("https://flatval.dsyang.repl.co", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code: command,
      contextId: context
    })
  })

  let sanitized;
  if (response.ok) {
    sanitized = await response.json()
  } else if (response.status == 500) {
    sanitized = {
      error: await response.text()
    }
  }

  results[id] = await constructResult(sanitized)
  console.log(results)
  return results;
}


const module = {
  report: function(render) {
    console.log("reporting")
    render()
  }
}
export default module;