-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: db.umea-ntig.se    Database: te19
-- ------------------------------------------------------
-- Server version	5.5.5-10.3.34-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fipann_meeps`
--

DROP TABLE IF EXISTS `fipann_meeps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fipann_meeps` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `body` varchar(140) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fipann_meeps`
--

LOCK TABLES `fipann_meeps` WRITE;
/*!40000 ALTER TABLE `fipann_meeps` DISABLE KEYS */;
INSERT INTO `fipann_meeps` VALUES (1,'this is a tweet','2022-04-06 10:59:16'),(7,'sdgdfgdgdxg','2022-04-06 10:58:24'),(8,'new tweet!!!!!','2022-04-06 11:04:17'),(9,'hello guys i am NOT posting from the interwebs haha that was a joke i am actually p','2022-04-06 11:20:32'),(10,'ethhsethsdbsdfb','2022-04-06 11:25:00'),(11,'hehe filip has bigger dong than marcus >:)','2022-04-06 11:29:28'),(12,'this is false','2022-04-06 11:34:08'),(13,'FUcka you bitacbsbhd','2022-04-06 11:30:48'),(14,', drop tables','2022-04-06 11:33:36'),(15,'drop table','2022-04-06 11:33:50');
/*!40000 ALTER TABLE `fipann_meeps` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 13:12:58
