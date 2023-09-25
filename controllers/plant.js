const router = require('express').Router()
const db = require('../models')
const axios = require('axios')

//GET All Plants
router.get('/', (req, res) => {
    db.Plant.find()
        .sort({ _id: -1 })
        .then((plants) => {
            res.render('plants/index', { plants, user: req.user })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

// Search for plants
router.get("/search", async (req, res) => {
    const plantName = req.query.query;
    try {
        const response = await axios.get(`https://trefle.io/api/v1/plants/search?token=RwDvoRFeKEv5omklz4Yz-pY_lgoCfT5KOJ2Zkh5f9-0&q=${plantName}&limit=20`);


        const plantData = response?.data?.data; // Assuming the API response contains plant information
        // console.log("plantData: ");
        // console.log(plantData);

        res.render("plants/search-result", { user: req.user, plantData, query: plantName });
    } catch (error) {
        console.error(error);
        res.status(500).render("error", { message: "Plant search failed" });
    }
});

// Search for plants
router.post("/search/add_plant_to_profile", async (req, res) => {
    const data = req.body;
    try {
        const plantExist = await db.Plant.findOne({ name: data.name }).then(plant => plant)
        if (!plantExist?.name) {
            await db.Plant.create(data)
                .then((e) => e)
                .catch(err => {
                    console.log('err', err)
                    return res.status(500).render("error", { message: "add_plant_to_profile failed", err });
                })
        }
        // return res.redirect(`/plants/search?query=${data.query}`);
        res.redirect('/plants')
    } catch (error) {
        console.error(error);
        res.status(500).render("error", { message: "add_plant_to_profile failed" });
    }
});

//GET New Plant Form
router.get('/new', (req, res) => {
    const plants = db.Plant.find()
    res.render('plants/new', { plants, user: req.user })
})

// GET Plant by Id
router.get('/:id', async (req, res) => {
    await db.Plant.findById(req.params.id)
        .then(plant => {
            res.render('plants/show', { plant, user: req.user })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})
// GET Edit Plant Form 
router.get('/:id/edit', (req, res) => {
    db.Plant.findById(req.params.id)
        .then(plant => {
            res.render('plants/edit', { plant })
        })
        .catch(err => {
            res.render('error404')
        })
})

// PUT update plants
router.put('/:id', async (req, res) => {
    const { id } = req.params
    if(req.body.isIndoor === 'on') {
        req.body.isIndoor = true
    } else {
        req.body.isIndoor = false
    }
    
    if(!req.body.image) req.body.image = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnetworkofnature.org%2Fspecies%2Fwoody-plants%2F&psig=AOvVaw0-c9AifmZYM9OTWrmVdbcu&ust=1695579414331000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDG-9erwYEDFQAAAAAdAAAAABAE'

    await db.Plant.findByIdAndUpdate(id, req.body)
    res.redirect(`/plants/${id}`)
 })

 // POST add comment
router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Plant.findById(req.params.id)
    .then(plant => {
        db.Comment.create(req.body)
        .then(comment => {
            plant.comments.push(comment.id)
            plant.save()
            .then(() => {
              console.log(["test"])
                res.redirect(`/plants/${req.params.id}`)
            })
            .catch(err => {
              console.log(err)
              res.render('error404')
              })
          
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
  })

// DELETE route 
router.delete('/:id', (req, res) => {
    db.Plant.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/plants')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})


// POST Create new Plant
router.post('/', async (req, res) => {
    // console.log("req.body: ");
    // console.log(req.body);
    const data = req.body
    await db.Plant.create(data)
        .then(() => {
            res.redirect('/plants/index')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

 //GET 404 page
 router.get('/*', (req, res) => {
    db.Plant.find()
    .then((plants) => {
        res.render('plants/index', { plants })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
      })
})


module.exports = router