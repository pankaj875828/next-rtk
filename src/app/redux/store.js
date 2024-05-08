const { configureStore } = require("@reduxjs/toolkit");
const reducer = require("./slice");

export const store = configureStore({
  reducer,
});
