# MongoDB Mapping

mongoose ODM (Object Data Modeling)
JSON Schema => MongoDB

## layered architecture

routers => mapping (method, path)
controller => request handling

app.js -> routes -> controller -> service (business logic) -> repository

```config/database.js
module.exports = {
  db: "mongodb://admin:secret@localhost:27017/",
};
```

```models/schema.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NameSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Name", NameSchema);
```

```app.js
const mongoose = require("mongoose");
const { db } = require("./config/database");

var namesRouter = require("./routes/names");

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.use("/names", namesRouter);
```

```routes/names.js
var express = require("express");
var router = express.Router();
var todos = require("./../controllers/NameController");

router.get("/", todos.getAllTodos);

module.exports = router;
```

```controllers/NameController.js
const todoService = require("./../service/TodoService");

async function getAllTodos(req, res, next) {
  let todos = await todoService.getAllTodos();
  res.json(todos);
}

module.exports = {
  getAllTodos,
};

```

```service/NameService.js
async function getAllTodos() {
  return [
    {
      title: "Hello",
      completed: false,
    },
  ];
}

module.exports = {
  getAllTodos,
};

```
