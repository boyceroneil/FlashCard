CREATE DATABASE  IF NOT EXISTS `project_react`;
USE `project_react`;
--
--
DROP TABLE IF EXISTS `logIn`;
CREATE TABLE `logIn` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL, 
  `password` varchar(45) DEFAULT NULL, 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `logIn` VALUES 
(1,'ronny98', '2021')