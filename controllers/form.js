exports.postContactus = (req, res, next) => {
    console.log(req.body);
    res.redirect('/sucess');
};

exports.getContactus = (req,res,next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'submit.html'));
};

exports.getContactus1 = (req,res,next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contactus.html'));
};