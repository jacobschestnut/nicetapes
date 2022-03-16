import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

import "./Login.css"

export const Register = () => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    // If your json-server URL is different, please change it below!
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            username: registerUser.username,
                            quote: registerUser.quote,
                            imageLink: registerUser.imageLink,
                            profileLink: `http://localhost:3000/users/${registerUser.username}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                // The user id is saved under the key nutshell_user in session Storage. Change below if needed!
                                sessionStorage.setItem("niceTapes_user", createdUser.id)
                                navigate("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Welcome to Nice Tapes!</h1>
                <fieldset>
                    <label htmlFor="username"> Username: </label>
                    <input type="text" name="username" id="username" className="form-control" placeholder="username" required autoFocus value={registerUser.username} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email Address: </label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="email address" required value={registerUser.email} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputQuote"> Favorite Movie Quote: </label>
                    <input type="text" name="quote" id="quote" className="form-control" placeholder="quote" requried value={registerUser.quote} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputImageLink"> Profile Photo:  </label>
                    <input type="text" name="imageLink" id="imageLink" className="form-control" placeholder="link to image" requried value={registerUser.imageLink} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}