const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];
let workItems = [];

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("list", {
        listTitle: getDate(),
        newListItem: items
    })
});


app.post("/", (req, res) => {
    let item = req.body.newItem;

    
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
        
    }
    else{
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        newListItem: workItems
    })
});

app.post("/work", (req, res) => {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000, function () {
    console.log("Server is on 3000")
})

let getDate = function() {

    let today = new Date();
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    console.log(today.toLocaleDateString("en-US", options));
    return today.toLocaleDateString("en-US", options);
    }