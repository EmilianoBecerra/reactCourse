import {
  DECREMENT_COUNTER,
  DECREMENT_COUNTER2,
  DECREMENT_COUNTER_ASYNC,
  INCREMENT_COUNTER,
  INCREMENT_COUNTER2,
  INCREMENT_COUNTER_ASYNC,
  SHOW_PRODUCT_VALUE,
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

export const accIncrementAsync = (param) => {
  return {
    type: INCREMENT_COUNTER_ASYNC,
    param,
  };
};

export const accDecrementAsync = (param) => {
  return {
    type: DECREMENT_COUNTER_ASYNC,
    param,
  };
};

export const seeProductValue = product => {
  return {
    type: SHOW_PRODUCT_VALUE,
    product
  };
};

/* export const middlewareIncrementAsync = (acc) => async (dispatch) => {
  try {
    await delay(3000);
    dispatch(accIncrement(acc));
  } catch (err) {
    console.log(err);
  }
};

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
  }); */

/* function mostrarDatosGenerador(datos){
  do{
    const {value: valor, done} = datos.next();
    if(done) break;
    console.log(valor)
    
  }while(true)
}

function* fggetPasos(){
  yield 'paso1'
  yield 'paso2'
  yield 'paso3'
  yield 'paso4'
}
const getPasos = fggetPasos(); */
/* 
console.log(getPasos.next())
console.log(getPasos.next())
console.log(getPasos.next())
console.log(getPasos.next())
console.log(getPasos.next()) */

//mostrarDatosGenerador(getPasos);

/* function* getRandom(){
  while(true){
    yield Math.random() * 100;
  }
}

const random = getRandom();

for(let i = 0; i< 10; i++) {
  console.log(random.next().value);
} */

// --- Then - Catch ---//

/* delay(3000)
  .then(() => {
    dispatch(accIncrement(acc));
  })
  .catch((error) => console.error(error))
  .finally(() => console.log('Finalizo promesa delay')); 
*/
