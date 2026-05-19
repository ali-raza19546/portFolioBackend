export const WrapAsync = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next); // ye jo WrapAsync bna he ye async ke liay he ager koi async nahi he to error aaiey ga "can't read properties undefined reading catch" kun ke ap ne wrapAsync us pr lahaya jo async nahi he
  };
};
