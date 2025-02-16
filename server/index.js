const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
const contactFormFile = path.join(dataDir, 'contact-forms.json');
const queryFormFile = path.join(dataDir, 'query-forms.json');

async function ensureDataDir() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
    
    // Initialize JSON files if they don't exist
    for (const file of [contactFormFile, queryFormFile]) {
      try {
        await fs.access(file);
      } catch {
        await fs.writeFile(file, '[]');
      }
    }
  } catch (error) {
    console.error('Error initializing data directory:', error);
  }
}

ensureDataDir();

// Helper function to save form data
async function saveFormData(file, data) {
  try {
    const existingData = JSON.parse(await fs.readFile(file, 'utf8'));
    existingData.push({
      ...data,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    });
    await fs.writeFile(file, JSON.stringify(existingData, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving form data:', error);
    return false;
  }
}

// Contact Form API
app.post('/api/contact', async (req, res) => {
  /* 
    TODO: Database Integration
    Replace JSON file storage with database operations:
    1. Create 'contacts' table with fields:
       - id (primary key)
       - name
       - email
       - phone
       - message
       - submitted_at (timestamp)
    2. Replace saveFormData with database insert
    3. Add proper error handling and validation
  */
  
  const success = await saveFormData(contactFormFile, req.body);
  if (success) {
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } else {
    res.status(500).json({ error: 'Failed to save contact form' });
  }
});

// Query Form API
app.post('/api/query', async (req, res) => {
  /* 
    TODO: Database Integration
    Replace JSON file storage with database operations:
    1. Create 'vehicle_queries' table with fields:
       - id (primary key)
       - first_name
       - last_name
       - email
       - phone
       - vehicle_type
       - rental_duration
       - pickup_date
       - return_date
       - special_requests
       - submitted_at (timestamp)
    2. Replace saveFormData with database insert
    3. Add proper error handling and validation
  */
  
  const success = await saveFormData(queryFormFile, req.body);
  if (success) {
    res.status(201).json({ message: 'Query form submitted successfully' });
  } else {
    res.status(500).json({ error: 'Failed to save query form' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});