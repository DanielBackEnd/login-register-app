const notFound = (req, res, next) => {
  const error = new Error(
    `Sorry, we can't find anything at this url - ${req.originalUrl}`
  );
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let errorMessage = err.message;

  /* I will be use mongoose, there we've a specific type of error called a cast error, I don't want get default message
     from this error, so code below will check if this will be a cast error, it will change this default error to my status code and error message */

  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404;
    errorMessage = 'Sorry, I can not found resource';
  }

  res.status(statusCode).json({
    errorMessage,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
