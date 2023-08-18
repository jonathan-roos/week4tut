module.exports = {
    route: (app, path) => {
       app.post('/login', function(req, res){
        let users = [{'email':'abc@com.au', 'upwd':'123'},{'email':'def@com.au', 'upwd':'123'},{'email':'ghi@com.au', 'upwd':'123'}];

        if (!req.body) {
            return res.sendStatus(400)
        }
        var customer = {};
        customer.email = req.body.email;
        customer.upwd = req.body.upwd;
        customer.valid = false;
        for (let i=0; i<users.length; i++){
            if (req.body.email == users[i].email && req.body.upwd == users[i].upwd){
                customer.valid = true;
            }
        }
        res.send(customer);
       });
    }
}