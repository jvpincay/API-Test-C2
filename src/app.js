// src/app.js
const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();

// Body parsing if needed later
app.use(express.json());

/**
 * Load station data from JSON at startup.
 * The candidate does NOT need to change this part to pass the test,
 * unless they want to.
 */
const stationsPath = path.join(__dirname, '..', 'data', 'stations.json');
let stations = [];

try {
  const raw = fs.readFileSync(stationsPath, 'utf8');
  stations = JSON.parse(raw);
} catch (err) {
  console.error('Error loading stations.json:', err.message);
  stations = [];
}

/**
 * TODO (for candidate in the test):
 * - Implement XML loading and enrichment (e.g. using extraInfoLoader.js).
 * - Implement GET /stations/:id.
 */

// Basic health-check endpoint  
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Existing endpoint: return all stations
app.get('/stations', (req, res) => {
  // NOTE to candidate: currently stations are returned as stored in stations.json.
  // In the test you will extend this with data from LOADINGTERMINAL_Status_d_f_i_.xml.
  res.json(stations);
});

/**
 * TODO (candidate):
 * app.get('/stations/:id', (req, res) => {
 *   // Implement GET by ID
 * });
 */

module.exports = app;