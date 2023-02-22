# https://www.db4free.net/
# https://repl.it/repls/SuddenUnluckyCertification#main.py
from mysql.connector import (connection)


class MySQLDB:
    def __init__(self):
        self.__connection = None
        self.__cursor = None

    @property
    def connection(self):
        return self.__connection

    @connection.setter
    def connection(self, connection):
        self.__connection = connection

    def create_connection(self, db_config):
        self.__connection = connection.MySQLConnection(**db_config)
        return "Connected to a MySQL server!"

    def create_cursor(self):
        self.__cursor = self.__connection.cursor()
        return f"Create a new cursor object {self.__cursor} using the " \
               f"connection {self.__connection}! "

    def create_db(self, db_name):
        self.__cursor.execute(f"CREATE DATABASE IF NOT EXISTS {db_name}")
        return f"Database {db_name} created!"

    def drop_db(self, db_name):
        self.__cursor.execute(f"DROP DATABASE {db_name}")
        return f"Database {db_name} dropped!"

    def process_query(self, query):
        self.__cursor.execute(query)
        return f'Query "{query}" processed!'

    def insert_records(self, query, data):
        return self.__cursor.executemany(query, data)

    def fetch_all_records(self, query):
        self.process_query(query)
        return self.__cursor.fetchall()

    def close_cursor(self):
        self.__cursor.close()
        return f"Close the cursor {self.__cursor}!"

    def end_connection(self):
        self.__connection.close()
        return "Disconnected from the MySQL server!"


def demonstrate_connection():
    db_config = {
        "host": "db4free.net",
        "user": "root99999",
        "port": "3306",
        "password": "root99999",
        "database": "localhostlocal"
    }

    try:
        mysql_db = MySQLDB()

        # create a connection
        msg = mysql_db.create_connection(db_config)
        print(msg)

        # create a cursor
        msg = mysql_db.create_cursor()
        print(msg)

        # create a database
        # msg = mysql_db.create_db('mydb')
        # print(msg)

        # query a database
        # mysql_db.connection.select_db('mydb')
        # query = 'USE mydb'
        # msg = mysql_db.process_query(query)
        # print(msg)

        query = 'CREATE TABLE IF NOT EXISTS parties (name VARCHAR(255), ' \
                'votes VARCHAR(255)) '
        msg = mysql_db.process_query(query)
        print(msg)

        sql_query = "INSERT INTO parties (name, votes) VALUES ('Company " \
                    "Inc', 'Highway 37') "
        msg = mysql_db.process_query(sql_query)
        print(msg)

        # Prepared statement
        data = [
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
        sql_query = "INSERT INTO parties (name, votes) VALUES (%s, %s)"
        mysql_db.insert_records(sql_query, data)

        sql_query = "SELECT * from parties"
        result = mysql_db.fetch_all_records(sql_query)
        print(result)

        # delete a database
        # msg = mysql_db.drop_db('mydb')
        # print(msg)

        mysql_db.connection.commit()

        # close the cursor
        msg = mysql_db.close_cursor()
        print(msg)

        # end the connection
        msg = mysql_db.end_connection()
        print(msg)
    except Exception as err:
        print(err)


demonstrate_connection()
