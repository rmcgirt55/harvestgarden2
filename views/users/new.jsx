const React = require('react')
const Def = require('../default')

function new_user() {
    return (
        <Def>
            <main>
                <h1>Register</h1>
                <p className="">Aready has an account? <a href="/users/login" style={{ color: 'blue' }}>Login</a></p>
                <form method="POST" action='/users/register'>
                    <div>
                        <label htmlFor="first_name">First name</label>
                        <input id="first_name" name="first_name" required/>
                    </div>
                    <div>
                        <label htmlFor="last_name">Last name</label>
                        <input id="last_name" name="last_name" required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" required/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" required/>
                    </div>
                    <div>
                        <label htmlFor="confirm_password">Confirm password</label>
                        <input id="confirm_password" name="confirm_password" required/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_user