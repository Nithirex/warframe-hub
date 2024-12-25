import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    var userObject = ""

    const client_id = "71284219954-50i30r7kspmc2p1tqiv2o5nhcs04d4fb.apps.googleusercontent.com"
    function handleCallbackResponse(response) {
        userObject = jwtDecode(response.credential)
        //console.log(userObject)
        if (userObject.aud === client_id) {
            setLoggedIn(true)
        }
    }

    function logout() {
        userObject = ""
        setLoggedIn(false)
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: client_id,
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )
    }, [])

    return (
        <div className="login">
            <h2>Log In</h2>
            {!loggedIn &&
                <div id="signInDiv"></div>}
            {loggedIn &&
                <div className="signOutDiv">
                    <button onclick={logout}>Log Out</button><br /><br />
                    <p>Logged In</p>
                </div>}
        </div >
    )
}

export default Login;