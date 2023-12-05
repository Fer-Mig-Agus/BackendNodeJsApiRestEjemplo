const servidor=require("./src/server/index");
const BDD=require("./src/db/index");
require("dotenv").config();


const PORT = process.env.PORT || 3001;

BDD.sync({ force: false }).then(() => {
    servidor.listen(PORT, () => {
        console.log("server listening on PORT: ", PORT);
    })
})

