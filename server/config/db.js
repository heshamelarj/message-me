const mongoose = require('mongoose');
if(process.env.NODE_ENV !== "production") require('dotenv').load();
const host = process.env.HOST;
const db_name = process.env.DB_NAME;
class Database {
  constructor(){
    mongoose.Promise = global.Promise;
    //!to fix the collection.ensureIndex is deprecated: Use createIndexes instead warning
    mongoose.set('useCreateIndex',true);
      this._connect();
     
    }
    _connect(){
      mongoose.connect(
        `mongodb://${host}/${db_name}`,
        {
          useNewUrlParser: true
        },(err) => {
          switch (mongoose.connection.readyState) {
            case 0:
              console.log('disconnected:0');
              break;
            case 1:
              console.log('connected:1');
              break;
            case 2:
              console.log('connecting:2');
              break;
            default:
              break;
          }
          console.log(err !== null ? err : 'all is good no errors');
          
        }
      ).then( () => console.log('Connected to DB'))
      .catch(err => console.log(err));
    }
    
  }
  module.exports = new Database();