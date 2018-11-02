const handleResponse = (result, nextCb, response, statusCode = 200) => {
  if (result instanceof Error) {
    nextCb(result);
  } else {
    response.status(statusCode).json({ status: true, message: result });
  }
};

export default handleResponse;