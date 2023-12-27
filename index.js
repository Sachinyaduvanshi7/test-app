const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello World.")
})
app.get("/wish",(req,res)=>{
    res.send("Good Morning !")
})
app.get("/profile",(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>User Profile</title>
        <style>
            /* Some basic styling */
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
                background-color: #f4f4f4;
            }
            .profile-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            .profile-picture {
                max-width: 200px;
                border-radius: 50%;
                margin-bottom: 20px;
            }
            .profile-info {
                font-size: 18px;
            }
        </style>
    </head>
    <body>
        <div class="profile-container">
            <img src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg" alt="Profile Picture" class="profile-picture">
            <h1>Sachin</h1>
            <p class="profile-info"><strong>Email:</strong> sachinyrao777.com</p>
            <p class="profile-info"><strong>Location:</strong> Gurugram, Haryana</p>
            <p class="profile-info"><strong>About:</strong> Learning new things.</p>
        </div>
    </body>
    </html>
    `)
})

app.listen(8080,()=>{
    console.log("App running on port 8080");
})