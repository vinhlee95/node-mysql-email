# Join me
A full-stack web app allows users to register for a new service as well as view other participants.

## Installation
* Create a local MySQL database
* Change `user` and `database` value in `db/index.js`
```bash
	npm install
	npm run dev
```

## Tech stack
### Back end
* MySQL
* Express
### Front end
* React

## Troubleshooting
### Error: ER_ACCESS_DENIED_ERROR: Access denied for user 'root'@'localhost' (using password: NO)
* Create a new user:
```sql
	mysql> CREATE USER ‘vinh’@‘localhost' IDENTIFIED BY 'password';
```
* Grant user access
```sql
	mysql> GRANT ALL PRIVILEGES ON *.* TO ‘vinh’@‘localhost' WITH GRANT OPTION;
 	mysql> ALTER USER 'vinh'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
```

### MySQL 8.0 - Client does not support authentication protocol requested by server; consider upgrading MySQL client
```sql
	mysql> ALTER USER 'vinh'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
```
