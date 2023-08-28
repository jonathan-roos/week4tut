module.exports = {
    route: (app, path) => {

       app.post('/api/auth', function(req, res){
        let users = [
            {'email':'abc@com.au', 'upwd':'123', 'username': 'user1', 'age': 21, 'valid': false, 'birthdate':'2000-03-19'},
            {'email':'def@com.au', 'upwd':'123', 'username': 'user2', 'age': 22, 'valid': false, 'birthdate':'2001-03-19'},
            {'email':'ghi@com.au', 'upwd':'123', 'username': 'user3', 'age': 23, 'valid': false, 'birthdate':'2002-03-19'}
        ];

        if (!req.body) {
            return res.sendStatus(400)
        }

        var customer = {};
        customer.email = '';
        customer.upwd = '';
        customer.valid = false;
        customer.birthdate = '';
        customer.age = 18;
        customer.username = '';

        for (let i=0; i<users.length; i++){
            if (req.body.email == users[i].email && req.body.upwd == users[i].upwd){
                customer.valid = true;
                customer.email = users[i].email;
                customer.birthdate = users[i].birthdate;
                customer.age = users[i].age;
                customer.username = users[i].username;
            }
        }
        res.send(customer);
       });
    }
}