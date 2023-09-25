const React = require('react')
const Def = require('../default')

function login_user() {
    return (
        <Def>
            <main>
                <h1 className='text-2xl'>Login</h1>
                <form method="POST" action='/users/login'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" required />
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </main>
        </Def>
    )
}

module.exports = login_user