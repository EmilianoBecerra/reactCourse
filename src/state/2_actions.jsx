import {
  DECREMENT_COUNTER,
  DECREMENT_COUNTER2,
  INCREMENT_COUNTER,
  INCREMENT_COUNTER2,
} from "./3_types";

export const accIncrement = (param) => {
  return {
    type: INCREMENT_COUNTER,
    param,
  };
};

export const accDecrement = (param) => {
  return {
    type: DECREMENT_COUNTER,
    param,
  };
};

export const accIncrement2 = (param) => {
  return {
    type: INCREMENT_COUNTER2,
    param,
  };
};

export const accDecrement2 = (param) => {
  return {
    type: DECREMENT_COUNTER2,
    param,
  };
};

export const middlewareIncrementAsync = (acc) => async (dispatch) => {
  try {
    await delay(3000);
    dispatch(accIncrement(acc));
  } catch (err) {
    console.log(err);
  }
};

// --- Then - Catch ---//

/* delay(3000)
  .then(() => {
    dispatch(accIncrement(acc));
  })
  .catch((error) => console.error(error))
  .finally(() => console.log('Finalizo promesa delay')); 
*/

const delay = (ms) =>
  new Promise((resolve, reject) => {
    const type = typeof ms;
    if (type === "number") {
      setTimeout(() => {
        resolve();
      }, ms);
    } else {
      const error = {
        description: "Error en tipo de datos ms recibido",
        ms,
        type,
      };
      reject(error);
    }
  });
