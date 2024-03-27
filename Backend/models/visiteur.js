const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

require('dotenv').config();

const visiteurSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  tel: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  date_embauche: { type: Date, required: true },
  visite : { type: mongoose.Schema.Types.ObjectId, ref: 'Visite', required: false },
  
});



module.exports = mongoose.model('Visiteur', visiteurSchema);