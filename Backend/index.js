// import d'express
const express = require('express');
const mongoose = require ('mongoose')
const schema  = require ('./models/schema');



mongoose.connect('mongodb+srv://mboloUser:Mbolo-32@expressapi.pn1wg8y.mongodb.net/?retryWrites=true&w=majority',
  
    )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  const app = express();



// la politique CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  // Equivalant du bordyParser
  app.use(express.json());

  app.post('/api/articlex', (req, res, next) => {
    const Schemat = new schema({
      ...req.body
    });
    Schemat.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
      .catch(error => {
        console.error('Erreur lors de l\'enregistrement de l\'objet :', error);
        res.status(400).json({ error: 'Erreur lors de l\'enregistrement de l\'objet' });
      });
  });
  
  

  app.get('/api/articlex/:id', (req, res, next) => {
    schema.findOne({ _id: req.params.id })
      .then(Schemas => res.status(200).json(Schemas))
      .catch(error => res.status(404).json({ error }));
  });


  app.get('/api/articlex', (req, res, next) => {
    schema.find()
      .then(Schemas => res.status(200).json(Schemas))
      .catch(error => res.status(400).json({ error }));
  });

 

// export de app
module.exports = app; 