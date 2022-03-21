CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   'id' ,
--   message varchar(255),
-- );

/* Create other tables and define schemas for them here! */

CREATE TABLE `Users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `message` MEDIUMTEXT NULL DEFAULT NULL,
  `roomname` MEDIUMTEXT NULL DEFAULT NULL,
  `id_Users` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- what's this ALTER TABLE
ALTER TABLE `Messages` ADD FOREIGN KEY (id_Users) REFERENCES `Users` (`id`);

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- INSERT INTO `Users` (`id`,`username`) VALUES
-- ('','');
-- INSERT INTO `Messages` (`id`,`Message`,`Timestamp`,`Room Name`,`id_Users`) VALUES
-- ('','','','','');


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

