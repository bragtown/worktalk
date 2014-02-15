module.exports = function(req, res, next) {


  if (req.query.employee_id) {
    return next();
  }


  return res.forbidden('You are not permitted to perform this action.');
};