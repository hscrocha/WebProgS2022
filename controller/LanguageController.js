exports.changeLanguage = function(req,res){
    let lang1 = req.body.txt_language; //sent by a form
    let lang2 = req.params.lang; //sent in the URL

    req.session.lang = lang2;

    res.redirect('../index.html');
}

exports.getLanguage = function(req,res){
    res.status(200);
    res.send(req.session.lang);
    res.end();
}