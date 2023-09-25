const React = require('react')
const Def = require('../default')

function index (data) {
    let plantsFormatted = data.plants.map((plant) => {
      return (
        <div key={plant.id} className="col-md-4">
          <h2>
            <a href={`/plants/${plant.id}`}>{plant.name}</a>
          </h2>
          <img className="inGrid" src={plant.image} alt={plant.name}/>
        </div>  
      )
    })
    return (
      <Def user={data?.user}>
          <main>
            <form action='/plants/search' className="flex justify-center">
              <input type="search" name="query" id="query" className='outline-none px-2' />
              <button type="submit" className=''>search</button>
            </form>
              <h1>PLANTS INDEX PAGE</h1>
              <div className="row">{ plantsFormatted }</div>
          </main>
      </Def>
  )
  }
  

module.exports = index