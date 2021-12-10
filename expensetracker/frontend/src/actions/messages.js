export const errorMessage = (type, msg, status=null) => ({
  type,
  payload: {msg, status}
});