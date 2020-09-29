const mongoose = require('mongoose');

// ===== Error Handler (Uncaught Exception) =====
process.on('uncaughtException', err => {
  console.log('💥 [Uncaught Exception] Shutting down... 💥');
  console.log(`${err.name}: ${err.message}`);
  process.exit(1);
});

const app = require('./app');

// ===== Connect to DB =====
const DB = process.env.MONGODB_URL.replace(
  '<password>',
  process.env.MONGODB_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB connected successfully👍'));

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`🎉 Server running in ${process.env.NODE_ENV.toUpperCase()} mode on port ${PORT} 🎉`);
});

// ===== Error Handler (Unhandled Rejection) =====
process.on('unhandledRejection', err => {
  console.log('💥 [Unhandled Rejection] Shutting down... 💥');
  console.log(`${err.name}: ${err.message}`);

  // Close server & exit process
  server.close(() => process.exit(1));
});
