export function validationError(msg) {
  const error = new Error(msg);
  error.status = 400;
  return error;
}

export function runtimeError(msg) {
  const error = new Error(msg);
  error.status = 500;
  return error;
}

export function handle404(req, res, next) {
  const error = new Error('Not found');
  error.status = 404;

  throw error;
}

export function jsonError(err, req, res, next) {
  console.log(err);
  res.status(err.status).json(userFacingError(err));
}

function userFacingError(err) {
  return {
    message: err.message
  };
}