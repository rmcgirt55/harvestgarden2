const React = require('react')
const Def = require('../default')

function new_plant({user}) {
    return (
        <Def user={user}>
            <main>
                <h1>Add a New Plant</h1>
                <form method="POST" action='/plants'>
                    <div>
                        <label htmlFor="name">Plant Name</label>
                        <input id="name" name="name" required/>
                    </div>
                    <div>
                        <label htmlFor="needsLight">Light Exposure Needed</label>
                        <input id="needsLight" name="needsLight" required/>
                    </div>
                    <div>
                        <label htmlFor="needsWater">Water Amount Needed</label>
                        <input id="needsWater" name="needsWater" required/>
                    </div>
                    <div>
                        <label htmlFor="image">Plant Picture</label>
                        <input type="url" id="image" name="image" />
                    </div>
                    <div>
                        <label htmlFor="isIndoor">Is it an indoor plant?</label>
                        <input id="isIndoor" name="isIndoor" required/>
                    </div>
                    <input type="submit" value="Add Plant" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_plant