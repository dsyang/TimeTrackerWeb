function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function report(data) {
  let response = await fetch("https://TimeTrackerAPI.dsyang.repl.co/report", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response.json();
}

async function seeAll() {
  let response = await fetch(
    "https://TimeTrackerAPI.dsyang.repl.co/getall"
  )

  return response.json();
}

const module = {
  report: function(actionName, notes) {
    console.log("reporting")
    report({
      timestamp_seconds: `${parseInt(new Date().getTime() / 1000)}`,
      activity: actionName,
      device_agent: navigator.userAgent,
      notes: notes
    })
    .then((val) => console.log(val))
    .catch((err) => console.error(err))
  },

  getAll: function(render) {
    seeAll()
      .then(render)
      .catch((err) => console.error(err))

  }
}
export default module;