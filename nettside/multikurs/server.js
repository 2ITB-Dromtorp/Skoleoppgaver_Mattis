console.log("Node server started")

const http = require("http")
const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const mysql = require("mysql2");

const mySqlConnection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "Matt",
    password: "passord",
    database: "gamling_portal",
});

mySqlConnection.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Successfully connected to MySQL database.")
    }
});

const app = express();

app.use(express.json());
app.use(cookieParser());

const server = http.createServer(app);

server.listen( 69, '127.0.0.1', () => {
    console.log("HTTP server listening.");
});

function genAuthToken() {
    return crypto.randomBytes(256).toString('base64');
}





function authRequest(req) {
    return new Promise((resolve, reject) => {
        const authCookie = req.cookies.auth;
        if (authCookie === undefined || authCookie === null) {
            resolve();
            return;
        }
        if (typeof (authCookie) !== "string") {
            resolve();
            return;
        }
        mySqlConnection.query("SELECT * from users", (err, users) => {
            if (err) {
                console.error(err);
                res.status(500).send(err);
            } else {
                let foundUser;
                for (let i = 0; i < users.length; i++) {
                    const user = users[i];
                    for (let j = 0; j < user.sessions.length; j++) {
                        const session = user.sessions[j];
                        if (session.token === authCookie) {
                            foundUser = user;
                            break;
                        }
                    }
                    if (foundUser) {
                        break;
                    }
                }
                if (foundUser) {
                    req.user = foundUser;
                }
                resolve(foundUser);
            }
        });
    });
}






app.post("/api/signup", (req, res) => {
    const bod = req.body;
    const username = bod.username;
    const password = bod.password;
    if (username === undefined || username === null) {
        res.status(400).send("Username undefined or null");
        return;
    }
    if (typeof (username) !== "string") {
        res.status(400).send("Username is not string");
        return;
    }
    if (username === "") {
        res.status(400).send("Username empty");
        return;
    }
    if (password === undefined || password === null) {
        res.status(400).send("Password undefined or null");
        return;
    }
    if (typeof (password) !== "string") {
        res.status(400).send("Password is not string");
        return;
    }
    if (password === "") {
        res.status(400).send("Password empty");
        return;
    }
    bcrypt.hash(password, 15, (err, hash) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            mySqlConnection.query("INSERT INTO users (id, username, password, sessions, courses) VALUES (?, ?, ?, ?, ?)", [null, username, hash, JSON.stringify([]), JSON.stringify([])], (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send("Successfully created user.")
                }
            });
        }
    });
});

app.post("/api/login", (req, res) => {
    const bod = req.body;
    const username = bod.username;
    const password = bod.password;
    if (username === undefined || username === null) {
        res.status(400).send("Username undefined or null");
        return;
    }
    if (typeof (username) !== "string") {
        res.status(400).send("Username is not string");
        return;
    }
    if (username === "") {
        res.status(400).send("Username empty");
        return;
    }
    if (password === undefined || password === null) {
        res.status(400).send("Password undefined or null");
        return;
    }
    if (typeof (password) !== "string") {
        res.status(400).send("Password is not string");
        return;
    }
    if (password === "") {
        res.status(400).send("Password empty");
        return;
    }
    mySqlConnection.query("SELECT * from users WHERE username = ?", [username], (err, users) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            const user = users[0];
            bcrypt.compare(password, user.password).then((success) => {
                if (success === true) {
                    const token = genAuthToken();
                    user.sessions.push({
                        date: Date.now(),
                        token: token,
                    })
                    mySqlConnection.query("UPDATE users SET sessions = ? WHERE id = ?", [JSON.stringify(user.sessions), user.id], (err) => {
                        if (err) {
                            console.error(err);
                            res.status(500).send(err);
                        } else {
                            res.cookie("auth", token, {
                                secure: true,
                                httpOnly: true,
                            });
                            res.status(200).send("Successfully logged in");
                        }
                    });
                } else {
                    res.status(403).send("incorrect password");
                }
            });
        }
    });
});

app.post("/api/logout", (req, res) => {
    authRequest(req).then((user) => {
        if (user) {
            const authCookie = req.cookies.auth;
            for (let i = 0; i < user.sessions.length; i++) {
                const session = user.sessions[i];
                if (session.token === authCookie) {
                    user.sessions.splice(i, 1);
                    break;
                }
            }
            mySqlConnection.query("UPDATE users set sessions = ? WHERE id = ?", [JSON.stringify(user.sessions), user.id], (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send(err);
                } else {
                    res.clearCookie("auth");
                    res.status(200).send("Successfully logged out");
                }
            })
        } else {
            res.status(400).send("You are not logged in");
        }
    });
});

app.get("/api/userdata", (req, res) => {
    authRequest(req).then((user) => {
        if (user) {
            res.status(200).send({
                logged_in: true,
                courses: user.courses,
            });
        } else {
            res.status(200).send({
                logged_in: false,
            });
        }
    })
});










const COURSES = [
    "norsk",
    "kroppsoving",
    "datakunnskap",
    "heimkunnskap",
];

app.post("/api/joincourse", (req, res) => {
    const bod = req.body;
    const courseName = bod.course;
    if (courseName === undefined || courseName === null) {
        res.status(400).send("courseName undefined or null");
        return;
    }
    if (typeof (courseName) !== "string") {
        res.status(400).send("courseName is not string");
        return;
    }
    if (courseName === "") {
        res.status(400).send("courseName empty");
        return;
    }
    if (COURSES.includes(courseName) === false) {
        res.status(400).send("No course with that name");
        return;
    }
    authRequest(req).then((user) => {
        if (user) {
            user.courses.push(courseName);
            mySqlConnection.query("UPDATE users SET courses = ? WHERE id = ?", [JSON.stringify(user.courses), user.id], (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send(err);
                } else {
                    res.status(200).send("Successfully joined course");
                }
            })
        } else {
            res.status(400).send("Du er ikke logget inn");
        }
    });
});


app.post("/api/leavecourse", (req, res) => {
    const bod = req.body;
    const courseName = bod.course;
    if (courseName === undefined || courseName === null) {
        res.status(400).send("courseName undefined or null");
        return;
    }
    if (typeof (courseName) !== "string") {
        res.status(400).send("courseName is not string");
        return;
    }
    if (courseName === "") {
        res.status(400).send("courseName empty");
        return;
    }
    if (COURSES.includes(courseName) === false) {
        res.status(400).send("No course with that name");
        return;
    }
    authRequest(req).then((user) => {
        if (user) {
            const index = user.courses.indexOf(courseName);
            if (index === -1) {
                res.status(400).send("You are not in that course");
                return;
            } else {
                user.courses.splice(index, 1);
                mySqlConnection.query("UPDATE users SET courses = ? WHERE id = ?", [JSON.stringify(user.courses), user.id], (err) => {
                    if (err) {
                        console.error(err);
                        res.status(500).send(err);
                    } else {
                        res.status(200).send("Successfully left course");
                    }
                });
            }
        } else {
            res.status(400).send("Du er ikke logget inn");
        }
    });
});