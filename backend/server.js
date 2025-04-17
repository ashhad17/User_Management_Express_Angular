const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/usersRoutes');

const app = express();
app.use(cors())
// Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server is running ✅');
  });

// Routes
app.use('/users', userRoutes);

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/crudApp').then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Start server
const PORT =3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
