const express = require('express');
const models = require('./models');
const auth = require('./cmd/auth');
const passport = require('passport');

const app = express();
const router = express.Router();

app.use(auth.init_session_store);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  done(null, id);
});

app.use('/', auth.index_handler);

app.listen(3000, () => {
  console.log("🚀 Server Running on http://localhost:3000/");
  models.sequelize
  .sync()
  .then(() => {
    console.log("✅ [DONE] Successfully Connected");
  })
  .catch((err) => {
    console.error(err);
    console.log("❌ [ERROR] Failed to Connect DB");
    process.exit();
  });
});