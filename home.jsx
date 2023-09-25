const React = require('react')
const Def = require('./default')

function home({ user }) {
  return (
    <Def user={user} title="HarvestGarden">
      <main>
        <div>
          <img src="https://images.unsplash.com/photo-1584479898061-15742e14f50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="landing" alt="Photo of a sprouting plant" />
          <div id="subtitle">
            Photo by <a href="https://unsplash.com/@jeremybishop">Jeremy Bishop</a> on <a href="https://unsplash.com/photos/vGjGvtSfys4">Unsplash</a>
          </div>
        </div>
        <div className="philosophy-container">
          <div className="philosophy">
            <h2><i>HarvestGarden</i></h2>
            <p>Growing for a new tomorrow.</p>
            <p>HarvestGarden is your home for finding out how to grow and cultivate plants in your collection and the great outdoors.</p>
            <a href="/plants">
              <button className="btn btn-danger btn-lg">Learn Now!</button>
            </a>
          </div>
        </div>

        <div className="articles">
          <div className="articleOne">
            <img className="articleImage" src="https://plus.unsplash.com/premium_photo-1687987358293-13b376873356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Article One" />
            <div className="container">
              <h4>Our Mission</h4>
              <p>This page started on the foundation that we wanted to educate, encourage, and progress plant cultivation from where it currently stands. We believe that gardening and agriculture are the key to providing for a better future and want to help support farmers, gardeners, and others who share in that same vision. </p>
            </div>
          </div>

          <div className="articleTwo">
            <img className="articleImage" src="https://images.unsplash.com/photo-1624668430039-0175a0fbf006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Article Two" />
            <div className="container">
              <h4>Services</h4>
              <p>This site includes plant species and subspecies, water and light specifications of plants, and whether these plants are best suited for indoors and outdoors. Viewers can comment and submit queries about their specific methods of growing these plants, which are moderated by the site team.</p>
            </div>
          </div>
        </div>
      </main>
    </Def>
  )
}

module.exports = home