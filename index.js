const sql = require('mssql')

sql.on('error', err => {
    // ... error handler
    console.log('on error');
});

const config = {
    user: 'rearguarddating',
    password: 'rearguarddating@123',
    server: '184.168.194.51', // You can use 'localhost\\instance' to connect to named instance
    database: 'rearguarddating',
}

sql.connect(config).then(pool => {
    // Query
    
    return pool.request()
        .input('input_parameter', sql.NVarChar, 'dev@gmail.com')
        .query('select * from customers where email = @input_parameter');
}).then(result => {
    console.log('result', result);
}).catch(err => {
  // ... error checks
  console.log('err', err);
});
