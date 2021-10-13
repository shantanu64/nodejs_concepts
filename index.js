const express = require("express");

// initializing
const shantanu = express();

shantanu.use(express.json());

shantanu.get("/", (request, response) => {
    return response.json({ hello: "Hi Node" });
});

shantanu.get("/b1/:userid", (request, response) => {
    const users = [
        {
            id: 1,
            name: "Shantanu",
        },
        {
            id: 2,
            name: "Isha"
        }
    ];

    const userID = request.params.userid;
    const getUser = users.filter((user) => user.id === parseInt(userID));

    if(getUser.length === 0){
        return response.json({error: "NO USER FOUND"});
    }

    return response.json({ user: getUser[0] });
});

shantanu.listen(3000, () => console.log("Its Running"));