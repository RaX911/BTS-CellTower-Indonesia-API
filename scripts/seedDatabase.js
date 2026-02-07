const mongoose = require('mongoose');
const BTS = require('./models/BTS'); // Assuming you have a BTS model defined

// Sample BTS Data
const btsData = [
    { siteName: 'Tower A', location: { type: 'Point', coordinates: [106.8272, -6.1751] }, capacity: 1200 },
    { siteName: 'Tower B', location: { type: 'Point', coordinates: [106.8372, -6.1851] }, capacity: 1000 },
    { siteName: 'Tower C', location: { type: 'Point', coordinates: [106.8472, -6.1951] }, capacity: 1500 },
];

async function seedDatabase() {
    await mongoose.connect('mongodb://localhost:27017/BTS_DB', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the database');

    await BTS.deleteMany({}); // Clear the existing records

    await BTS.insertMany(btsData);
    console.log('Seeded database with sample BTS data');

    mongoose.connection.close();
}

seedDatabase();
