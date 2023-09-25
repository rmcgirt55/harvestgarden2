const React = require('react')

function Def(html) {
  const user = html.user;

  return (
    <html>
      <head>
        <title>{html.title || 'HarvestGarden'}</title>
        <link rel="icon" type="image/png" href="../images/HGFavicon.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@1,800&family=Prompt:ital,wght@0,400;0,600;1,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/styles.css" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="banner" alt="banner image" />
        <nav>
          <label className="logo text-red-700">HarvestGarden</label>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/plants">Database</a>
            </li>
            <li>
              <a href="/plants/new">Contribute</a>
            </li>
            {!user ? <li>
              <a href="/users/register">Sign in / Register</a>
            </li> :
              <li className="relative">
                <a href="#"><span className="">Hello, {user.first_name}</span>{" "}</a>{" "} | {" "}
                <a href="/logout">Logout</a>
              </li>
            }
          </ul>
        </nav>
        <div id="root">{html.children}</div>
        <footer>
          <div className="container">
            <span className="my-info">
              ✦ HarvestGarden ✦
              <p className="copyright">
                Copyright HarvestGarden-
                {new Date().getFullYear()}
              </p>
              <p>
                <img src="../images/HGFavicon.png" alt="HarvestGarden Logo" />
              </p>
              <div id="subtitle">
                We love our plant community!
              </div>
            </span>
          </div>
        </footer>
      </body>
    </html>
  )
}

module.exports = Def
