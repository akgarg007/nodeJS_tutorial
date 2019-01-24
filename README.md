
# nodeJS_tutorial

## Author: Ashwani Garg

## Ref: Udemy - Max

## Node MySQL 2

Ref: ClickHere<https://www.npmjs.com/package/mysql2>

## Sequelize

Ref: ClickHere<http://docs.sequelizejs.com/>
Needs mysql2 package also
npm install --save sequelize

### Database synchronization

Ref: ClickHere<http://docs.sequelizejs.com/manual/tutorial/models-definition.html#database-synchronization>
When starting a new project you won't have a database structure and using Sequelize you won't need to. Just specify your model structures and let the library do the rest. Currently supported is the creation and deletion of tables:

// to create the tables in the database using models via sequelize
// it syncs your models with the database tables
// if the model name is product
// then it will create table "products"
// with timestamps as in Laravel Database Migrations
sequelize.sync()
    .then(result => {
        // console.log(result);
        app.listen(3000);
    })
    .catch(err => {
        console.log(err)
    });