var user = {
    username: "Su Su",
    password: "ss1977"
};

var database = [
    user,
    {
        username: "Kyaw Zaw",
        password: "kz2001"
    },
    {
        username: "Shine Htet",
        password: "sh2006"
    },
    {
        username: "Kaung Myat",
        password: "km1978"
    },
];

var newsFeed = [
    {
        username: "Zaw",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Htet",
        timeline: "Scratch is so cool!",
    },
    {
        username: "Su Su",
        timeline: "JavaScript is pretty cool!",
    },
    {
        username: "Myat",
        timeline: "Head is a little difficult.",
    }
];

var userNamePrompt = prompt("What's your user name?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }    
    }
    return false;
}

function signIn(username, password) {
    // console.log(isUserValid(username, password));
    if (isUserValid(username, password)) {
            console.log(newsFeed);
        for (i=0; i<newsFeed.length; i++) {
            document.write(`<h2>${newsFeed[i].username}</h2>`);
            document.write(`<p>${newsFeed[i].timeline}</p>`);
        }
        
        } else {
            // alert("Sorry, wrong username and password!");
            document.write("Sorry, wrong username and password!");
        }
}

signIn(userNamePrompt, passwordPrompt);