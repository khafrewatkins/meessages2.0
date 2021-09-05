module.exports = (req,res,next) => {
    if(req.user.credits < 1){
        // status codes like 400 - 499 indicate some error to the user.
        // status codes can be found https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
        return res.status(403).send({ error: 'Add more credits to continue!'});
      }
      next();
};
