-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: taiji_web
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `idcomments` int(11) NOT NULL AUTO_INCREMENT,
  `fbxid` int(11) DEFAULT NULL,
  `commentid` int(11) DEFAULT NULL,
  `user` varchar(45) DEFAULT NULL,
  `user_name` varchar(45) DEFAULT NULL,
  `text` text,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`idcomments`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,-1,'1094178787@qq.com','朱铭凡','评论测试','2021-03-30 20:35:52'),(2,1,1,'1094178787@qq.com','朱铭凡','回复测试','2021-03-30 20:36:16'),(3,1,1,'1094178787@qq.com','朱铭凡','回复测试','2021-03-30 20:36:19'),(4,1,1,'1094178787@qq.com','朱铭凡','回复测试','2021-03-30 20:46:59'),(5,2,-1,'1094178787@qq.com','朱铭凡','评论测试','2021-03-30 21:20:35'),(6,2,-1,'1094178787@qq.com','朱铭凡','自增id测试','2021-03-30 21:30:20'),(7,2,-1,'1094178787@qq.com','朱铭凡','自增id测试','2021-03-30 21:34:07'),(8,2,-1,'1094178787@qq.com','朱铭凡','自增id测试','2021-03-30 21:36:03'),(9,2,-1,'1094178787@qq.com','朱铭凡','自增id测试','2021-03-30 21:38:02'),(10,2,-1,'1094178787@qq.com','朱铭凡','自增id测试','2021-03-30 22:00:09'),(11,2,-1,'1094178787@qq.com','朱铭凡','自增id测试','2021-03-30 22:01:34'),(12,2,-1,'1094178787@qq.com','朱铭凡','自增id测试','2021-03-30 22:02:22'),(13,2,-1,'1094178787@qq.com','朱铭凡','自增id测试','2021-03-30 22:03:03'),(14,1,-1,'1094178787@qq.com','朱铭凡','自增id测试','2021-03-30 22:03:49'),(15,1,-1,'1094178787@qq.com','朱铭凡','自增id测试','2021-03-30 22:04:35'),(16,1,15,'1094178787@qq.com','朱铭凡','回复测试','2021-03-30 22:04:47'),(17,1,-1,'1094178787@qq.com','朱铭凡','自增id测试','2021-03-30 22:05:05'),(18,1,-1,'1094178787@qq.com','朱铭凡','自增id测试','2021-03-30 22:12:10'),(19,1,18,'1094178787@qq.com','朱铭凡','自回复测试','2021-03-30 22:12:26'),(20,1,-1,'1094178787@qq.com','朱铭凡','11111','2021-03-31 16:53:03'),(21,1,20,'1094178787@qq.com','朱铭凡','222222','2021-03-31 16:53:11');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fbxs`
--

DROP TABLE IF EXISTS `fbxs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fbxs` (
  `idfbxs` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(45) DEFAULT NULL,
  `file_name` varchar(45) DEFAULT NULL,
  `img_src` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idfbxs`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fbxs`
--

LOCK TABLES `fbxs` WRITE;
/*!40000 ALTER TABLE `fbxs` DISABLE KEYS */;
INSERT INTO `fbxs` VALUES (1,'taiji','1预备势.FBX','1预备势.png'),(2,'taiji','2金刚出庙.FBX','2金刚出庙.png'),(3,'taiji','3懒扎衣.FBX','3懒扎衣.png'),(4,'taiji','4上步斜行.FBX','4上步斜行.png'),(5,'taiji','5上三步.FBX','5上三步.png'),(6,'taiji','纹理.FBX','纹理.png'),(7,'taiji','19.FBX','19.png');
/*!40000 ALTER TABLE `fbxs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` tinyblob,
  `username` varchar(20) DEFAULT NULL,
  `code` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'1094178787@qq.com',_binary '��Jg��ϸ\0\�.���','朱铭凡',NULL),(2,'2540348394@qq.com',_binary '��Y�uz\�%�\��I','test',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-05 10:50:48
