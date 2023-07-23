process.on("message", function (msobj) {
  console.log("subprocess received message : ", msobj.text);
  process.send({
    text: msobj.text + "subprocess received it too",
  });
});
