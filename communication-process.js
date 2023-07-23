var fork = require("child_process").fork;
var cp = fork("./communication-subprocess.js");
cp.on("message", function (msobj) {
  console.log("Process recived message : ", msobj.text);
});

cp.send({
  text: "Sending to you",
});
