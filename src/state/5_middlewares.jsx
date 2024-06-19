export const logger = (store) => (next) => (action) => {
  console.log("MIDDLEWARE LOGGER");
  setTimeout(() => {
    next(action);
  }, 1000);
};

export const logger2 = (store) => (next) => (action) => {
  console.log("MIDDLEWARE LOGGER");

  next(action);
};
