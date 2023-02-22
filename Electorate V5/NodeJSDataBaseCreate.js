/*
To access a MySQL database with Node.js, you need a MySQL driver.
This tutorial will use the "mysql" module, downloaded from NPM.
And the MySQL database is version 5.x.
*/

// Node.js can use this module to manipulate the MySQL database
const mysql = require("mysql")

class MySQLDB {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
  #connection

  constructor() {
    this.#connection = null
  }

  // setter method
  set connection(value) {
    this.#connection = value
  }

  // get method 
  get connection() {
    return this.#connection
  }

  createConnection(config) {
    this.#connection = mysql.createConnection(config)
  }

  connect() {
    this.#connection.connect((err) => {
      if (err)
        throw err
    })

    return "Connected to a MySQL server!"
  }

  disconnect() {
    this.#connection.end((err) => {
      if (err)
        throw err
    })

    return "Disconnected from the MySQL server!"
  }

  executepartiesQuery(partiesQuery) {
    this.#connection.query(partiesQuery, (err) => {
      if (err)
        throw err
    })

    return `Query "${partiesQuery}" executed!`
  }

  createDB(dbName) {
    this.executepartiesQuery(`CREATE DATABASE IF NOT EXISTS ${dbName}`)
    return `Database ${dbName} created!`
  }

  insertRecords(partiesQuery, records) {
    this.#connection.query(partiesQuery, [records], (err) => {
      if (err)
        throw err
      // console.log(result.affectedRows)
    })
  }

  getAllRecords(partiesQuery) {
    this.#connection.query(partiesQuery, (err, results) => {
      if (err)
        throw err
      console.log(results)
    })
  }

  dropDB(dbName) {
    this.executepartiesQuery(`DROP DATABASE ${dbName}`)
    return `Database ${dbName} dropped!`
  }
}

function demonstrateConnection() {
  console.log("Demonstrate connection ...")

  // create the connection   
  const config = {
    host: "localhost",
    user: "root",
    password: ""
  }


  try {
    let mysqlDB = new MySQLDB()
    mysqlDB.createConnection(config)
    let result = mysqlDB.connect()
    console.log(result)

    // create a database    
    result = mysqlDB.createDB('mydb')
    console.log(result)

    // query a database
    let partiesQuery = "USE mydb"
    result = mysqlDB.executepartiesQuery(partiesQuery)
    console.log(result)

    partiesQuery = "CREATE TABLE IF NOT EXISTS parties (name VARCHAR(255), votes VARCHAR(255))"
    result = mysqlDB.executepartiesQuery(partiesQuery)
    console.log(result)

    const values = [
      ['ACT New Zealand', '0'],
      ['Aotearoa legalise Cannabis Party', '0'],
      ['New Conservative', '0'],
      ['Democrats for Social Credit', '0'],
      ['Green Party', '0'],
      ['Labour Party', '0'],
      ['MANA', '0'],
      ['Maori Party', '0'],
      ['National Party', '0'],
      ['New Zealand First Party', '0'],
      ['NZ Outdoors Party', '0'],
      ['The opportunities Party', '0'],
      ['Sustainable NZ', '0'],
      ['Vision NZ', '0'],
	  ['ONE', '0']
    ]
    partiesQuery = "INSERT INTO parties (name, votes) VALUES ?"
    mysqlDB.insertRecords(partiesQuery, values)


    partiesQuery = "SELECT * from parties"
    mysqlDB.getAllRecords(partiesQuery)
	
    // delete a database
    result = mysqlDB.dropDB('mydb')
    console.log(result)

    // end the connection
    result = mysqlDB.disconnect()
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}


demonstrateConnection()