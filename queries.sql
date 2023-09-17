-- create databse
CREATE DATABASE bakery

-- create a new user for application
-- creating a user named `foo` with password `bar`
CREATE USER 'foo'@'%' IDENTIFIED WITH mysql_native_password BY "bar";
GRANT ALL PRIVILEGES on *.* to 'foo'@'%';

-- flush privileges cache for changes to take place
FLUSH PRIVILEGES;