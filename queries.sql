-- create databse
CREATE DATABASE bakery

-- create a new user for application
-- creating a user named `admin` with password `admin_pass`
CREATE USER 'admin'@'%' IDENTIFIED WITH mysql_native_password BY "admin_pass";
GRANT ALL PRIVILEGES on *.* to 'admin'@'%';

-- flush privileges cache for changes to take place
FLUSH PRIVILEGES;

-- Insert products into 'products' table
INSERT INTO products (name, description, price) VALUES
 ("Strawberry Shortcake", "Fluffy vanilla cake with whipped cream and juicy strawberries.", 400),
 ("German Chocolate Cake", "Chocolate cake layered with chocolate buttercream, coconut and pecan fillings.", 430),
 ("Tres Leches Cake", "Soft vanilla sponge soaked in a three milk syrup and topped with whipped cream.", 410)

 