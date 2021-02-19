CREATE DATABASE  IF NOT EXISTS `project_react`;
USE `project_react`;
--
--
DROP TABLE IF EXISTS `flashcard`;
CREATE TABLE `flashcard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(45) DEFAULT NULL, 
  `answer` varchar(45) DEFAULT NULL, 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `flashcard` VALUES 
(1,'is java a object oriented programming language', 'no')