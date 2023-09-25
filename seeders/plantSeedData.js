const db = require('../models');
db.Place.deleteMany()
.then(() => {
    db.Plant.create([{
        name: 'Saguaro Cactus',
        isIndoor: false,
        needsLight: '9',
        needsWater: '2',
        image: 'https://assets.wfcdn.com/im/98531639/resize-h445%5Ecompr-r85/2413/241345336/Sonora+Desert+Saguaro+On+Plastic%2FAcrylic+by+Charles+Harker+Print.jpg'
    }, {
        name: 'Aloe Vera',
        isIndoor: false,
        needsLight: '6',
        needsWater: '5',
        image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjh7f2BvLWBAxX3JrMAHQFABVoYABABGgJ5bQ&ase=2&gclid=CjwKCAjw6p-oBhAYEiwAgg2Pgo0JdcSJ23_LUlED72hs8MVfFPG757KM1M7WFH3ZCe2GphFzs8woaxoCo8wQAvD_BwE&sig=AOD64_1diL9OFIqIyrMIa5cHwLc8NqViaQ&ctype=5&nis=6&adurl&ved=2ahUKEwiXx-2BvLWBAxXeJ2IAHdlgAVMQvhd6BAgBEH0'
    }, {
        name: 'Fern',
        isIndoor: false,
        needsLight: '4',
        needsWater: '10',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQofNzQ5NggTZ3v4oyTZmrDpfS9xgr2otUgl_poUCpv5nV2zg-0uwb0BEZttoeQPtMDqc0&usqp=CAU'
    }, {
        name: 'Carrot',
        isIndoor: false,
        needsLight: '8',
        needsWater: '4',
        image: 'https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1827&q=80'
    }, {
        name: 'Orchids',
        isIndoor: true,
        needsLight: '6',
        needsWater: '3',
        image: 'https://www.sunset.com/wp-content/uploads/orchids-pc-dmitriy-sidor-getty-1200x600.jpg',
    }, {
        name: 'Poison Ivy',
        isIndoor: false,
        needsLight: '8',
        needsWater: '6',
        image: 'https://en.wikipedia.org/wiki/Toxicodendron_radicans#/media/File:2014-10-29_13_43_39_Poison_Ivy_foliage_during_autumn_leaf_coloration_in_Ewing,_New_Jersey.JPG'
    }])
    .then(() => {
        console.log('Success!')
        process.exit()
    })
    .catch(err => {
        console.log('Failure!', err)
        process.exit()
    })
})