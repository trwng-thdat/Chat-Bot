import app from './src/routes/index.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5123;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
