///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require('./connection')
const Product = require('./product')
const theAdmin = require('./user')

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////
// save the connection in a variable
const db = mongoose.connection;

db.on('open', () => {
	// array of starter products
	const startProducts = [
		{
		  name: 'Beans',
		  description: 'A small pile of beans. Buy more beans for a big pile of beans.',
		  img: 'https://imgur.com/LEHS8h3.png',
		  price: 5,
		  qty: 99
		}, {
		  name: 'Bones',
		  description: 'It\'s just a bag of bones.',
		  img: 'https://imgur.com/dalOqwk.png',
		  price: 25,
		  qty: 0
		}, {
		  name: 'Bins',
		  description: 'A stack of colorful bins for your beans and bones.',
		  img: 'https://imgur.com/ptWDPO1.png',
		  price: 7000,
		  qty: 1
		}
	  ]
	  const startAdmins = [
		  {username: 'Admin',
			password: 'Admin'
	  }]
	// when we seed data, there are a few steps involved
	// delete all the data that already exists(will only happen if data exists)
	Product.remove({})
        .then(deletedProducts => {
		    console.log('this is what remove returns', deletedProducts)
		    // then we create with our seed data
            Product.create(startProducts)
                .then((data) => {
                    console.log('Here are the new seed products', data)
                    db.close()
                })
                .catch(error => {
                    console.log(error)
                    db.close()
                })
	    })
        .catch(error => {
            console.log(error)
            db.close()
        })

	theAdmin.remove({})
        .then(deletedAdmins => {
		    console.log('this is what remove returns', deletedAdmins)
		    // then we create with our seed data
            theAdmin.create(startAdmins)
                .then((data) => {
                    console.log('Here are the new seed products', data)
                    db.close()
                })
                .catch(error => {
                    console.log(error)
                    db.close()
                })
	    })
        .catch(error => {
            console.log(error)
            db.close()
        })
	// then we can send if we want to see that data
})