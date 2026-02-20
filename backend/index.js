require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./connection');
const scanRoutes = require('./routes/scanRoutes');

const app = express();

// Connect to Database
connectDB();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());

// Routes
app.use('/api/scan', scanRoutes);

// Base Route
app.get('/', (req, res) => {
  res.send('OWASP Vulnerability Scanner API requires /api/scan endpoint.');
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!', details: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
