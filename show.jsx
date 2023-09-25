const React = require('react')
const Def = require('../default')

function show (data) {
    return ( 
        <Def user={data?.user}>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src= {data.plant.image} alt= {data.plant.name} />
                        <h3> 
                            {data.plant.name} 
                        </h3>

                    </div>
                    <div className="col-sm-6">
                    <h1>{data.plant.name}</h1>
                        <h2>Water Amount: </h2>
                        {data.plant.needsWaterParagraph()}
                        <br />
                        <h2>Light Amount: </h2>
                        {data.plant.needsLightParagraph()}
                        <br />
                        <h2>Description: </h2>
                        <h3>
                        {data.plant.description}
                        </h3>
                        <a href={`/plants/${data.plant.id}/edit`}>
                            <button aria-label="Edit Button">Edit</button>
                        </a>
                        <form action={`/plants/${data.plant.id}?_method=DELETE`} method='POST'>
                            <input type='submit' value='DELETE' aria-label="Delete Button"/>
                        </form>
                    </div>
                </div>
                
                    
                              </main>
        </Def>
    )
} 

module.exports = show