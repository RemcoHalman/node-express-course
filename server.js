const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;

app.use(bodyParser.json());

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];

app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData,
  });
});

// integer or string can be entered
app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id,
  });
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  // No encryption since its a intro.
  const password = req.body.password;

  const mockUsername = "billyTheKid";
  const mockPassword = "superSecret";

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: "password and username match!",
      token: "encrypted token goes here",
    });
  } else {
    res.json({
      success: false,
      message: "password and username do not match",
    });
  }
});

app.listen(port, function () {
  console.log(`server running at http://localhost:${port}`);
});
