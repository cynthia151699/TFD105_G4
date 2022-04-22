/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 8.0.28 : Database - G4
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`G4` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `G4`;

/*Table structure for table `DISCOUNT` */

DROP TABLE IF EXISTS `DISCOUNT`;

CREATE TABLE `DISCOUNT` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) NOT NULL,
  `CONTENT` varchar(45) NOT NULL,
  `CODE` varchar(45) NOT NULL,
  `STATUS` int NOT NULL,
  `DATE` date NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

/*Data for the table `DISCOUNT` */

insert  into `DISCOUNT`(`ID`,`NAME`,`CONTENT`,`CODE`,`STATUS`,`DATE`) values 
(1,'coupon','discount','ABCDEF',1,'2022-04-19'),
(2,'coupon','discount','GHIJKL',0,'2022-04-19'),
(3,'coupon','discount','MNOPQR',1,'2022-04-19'),
(4,'coupon','discount','STUVWX',1,'2022-04-19');

/*Table structure for table `EXHIBITION` */

DROP TABLE IF EXISTS `EXHIBITION`;

CREATE TABLE `EXHIBITION` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `EXHIBITION_STYLE_ID` varchar(45) NOT NULL,
  `EXHIBITION_STYLE` varchar(45) NOT NULL,
  `EXHIBITION_PIC` varchar(45) NOT NULL,
  `EXHIBITION_DATE` date NOT NULL,
  `EVENT_NAME` varchar(100) NOT NULL,
  `EVENT_BEGIN` date NOT NULL,
  `EVENT_END` date NOT NULL,
  `EXHIBITION_CONTENT` varchar(500) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;

/*Data for the table `EXHIBITION` */

insert  into `EXHIBITION`(`ID`,`EXHIBITION_STYLE_ID`,`EXHIBITION_STYLE`,`EXHIBITION_PIC`,`EXHIBITION_DATE`,`EVENT_NAME`,`EVENT_BEGIN`,`EVENT_END`,`EXHIBITION_CONTENT`) values 
(1,'1','當期展覽','./img/exhibition/exhibition_pic1.png','2022-04-21','Break the Classic-TAKIKAW RISA Solo Exhibition','2022-02-05','2022-03-05','American-Japanese artist Takikaw Risa brings a series of composite sculptures,showing the conflict between classical art and modern\nsociety.\nIt brings childishness and a sense of trend to the solemn atmosphere of the statue and hopes to bring the audience\'s imagination to break through the classics.'),
(2,'2','未來展覽','./img/exhibition/exhibition_pic2.png','2022-04-21','True Color - KAYLA GILL Solo Exhibition','2022-03-15','2022-08-17','What is your true color?\nEmerging artist KAYLA GILL will show her work that is using photography and digital techniques. The display of hundreds of works and live interactive installations will bring you to find your true color.'),
(3,'3','過往展覽','./img/exhibition/exhibition_pic4-1.png','2022-04-21','INTERWEAVE - LORIN DROGO Solo Exhibition','2021-04-10','2021-09-15','LORIN DROGO will have his first solo exhibition after returning home at the Anno Museum,The interweaving of lines presents life, dreams, and memories in different times\nand spaces.                                           The exhibition room is only presented in black and white so that the audience can think and experience without all interference.'),
(4,'3','過往展覽','./img/exhibition/exhibition_pic5-1.png','2022-04-21','ABSTRACT - SHELDON PAUL Solo Exhibition','2021-01-06','2021-04-02','LORIN DROGO will have his first solo exhibition after returning home at the Anno Museum,The interweaving of lines presents life, dreams, and memories in different times\nand spaces.\nThe exhibition room is only presented in black and white so that the audience can think and experience without all interference.'),
(5,'3','過往展覽','./img/exhibition/exhibition_pic6-1.png','2022-04-21','FOOD ART - CARSON HARRIS Solo Exhibition','2021-10-13','2021-12-31','LORIN DROGO will have his first solo exhibition after returning home at the Anno Museum,The interweaving of lines presents life, dreams, and memories in different times\nand spaces.\nThe exhibition room is only presented in black and white so that the audience can think and experience without all interference.'),
(6,'3','過往展覽','./img/exhibition/exhibition_pic7-1.png','2022-04-21','MODERN TATTOO','2020-01-21','2020-03-15','LORIN DROGO will have his first solo exhibition after returning home at the Anno\nMuseum,The interweaving of lines presents life, dreams, and memories in different times\nand spaces.                                            The exhibition room is only presented in black and white so that the audience can think and experience without all interference.'),
(7,'3','過往展覽','./img/exhibition/exhibition_pic8-1.png','2022-04-21','Refiguring ','2020-03-14','2020-06-24','LORIN DROGO will have his first solo exhibition after returning home at the Anno\nMuseum,The interweaving of lines presents life, dreams, and memories in different times\nand spaces.                                            The exhibition room is only presented in black and white so that the audience can think and experience without all interference.'),
(8,'3','過往展覽','./img/exhibition/exhibition_pic9-1.png','2022-04-21','Mémoire','2020-05-12','2020-09-01','LORIN DROGO will have his first solo exhibition after returning home at the Anno Museum,The interweaving of lines presents life, dreams, and memories in different times\nand spaces.                                            The exhibition room is only presented in black and white so that the audience can think and experience without all interference.'),
(9,'3','過往展覽','./img/exhibition/exhibition_pic10-1.png','2022-04-21','Renaissance','2020-05-21','2020-11-10','LORIN DROGO will have his first solo exhibition after returning home at the Anno\nMuseum,The interweaving of lines presents life, dreams, and memories in different times\nand spaces.\nThe exhibition room is only presented in black and white so that the audience can think and experience without all interference.'),
(10,'3','過往展覽','./img/exhibition/exhibition_pic11-1.png','2022-04-21','Eye Contact','2020-06-08','2020-11-10','LORIN DROGO will have his first solo exhibition after returning home at the Anno\nMuseum,The interweaving of lines presents life, dreams, and memories in different times\nand spaces.                                        The exhibition room is only presented in black and white so that the audience can think and experience without all interference.');

/*Table structure for table `MEMBER` */

DROP TABLE IF EXISTS `MEMBER`;

CREATE TABLE `MEMBER` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `mail` varchar(45) NOT NULL,
  `PASSWORD` varchar(45) NOT NULL,
  `NAME` varchar(45) NOT NULL,
  `PHONE` char(10) NOT NULL,
  `DATE` date NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb3;

/*Data for the table `MEMBER` */

insert  into `MEMBER`(`ID`,`mail`,`PASSWORD`,`NAME`,`PHONE`,`DATE`) values 
(1,'A1@gmail.com','123','王大明','0987654321','2022-04-18'),
(2,'A2@gmail.com','321','陳曉東','0912431231','2022-04-19'),
(3,'A3@gmail.com','234','汪大溪','0999912344','2022-04-20'),
(4,'A4@gmail.com','235','胡東西','0912434523','2022-04-20'),
(33,'robinsonps999@gmail.com','123','Robinson','0967567456','2022-04-21');

/*Table structure for table `NEWS` */

DROP TABLE IF EXISTS `NEWS`;

CREATE TABLE `NEWS` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NEWS_NAME` varchar(45) NOT NULL,
  `NEWS_PIC` varchar(45) NOT NULL,
  `NEWS_CONTENT` varchar(999) NOT NULL,
  `NEWS_STATUS` varchar(45) NOT NULL,
  `NEWS_DATE` date NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

/*Data for the table `NEWS` */

insert  into `NEWS`(`ID`,`NEWS_NAME`,`NEWS_PIC`,`NEWS_CONTENT`,`NEWS_STATUS`,`NEWS_DATE`) values 
(1,'North Building','./img/index/index_pic2.jpeg','The construction of the North Building of Anno Museum has been completed, and the opening ceremony will be on 2022-05-05. Calls or emails are now open to make reservations for tours and guided tours of the North and South venues. For group purchases, please call two months in advance.','開放','2022-04-21'),
(2,'Opening Hours','./img/index/index_pic6.jpeg','From now on, the museum will be open all year round. For details on the opening time, please refer to the visiting guide. You are welcome to book guided tours for consecutive holidays in advance.','開放','2022-04-21'),
(3,'Extension of the Exhibition','./img/index/index_pic5.jpeg','Flowing Beauty - DARIAN ROSARIO Solo Exhibition, will be extended to 2022.08.10, and will be exhibited at the National Taichung Museum of Art after the end. Group tours are welcome to book.','開放','2022-04-21'),
(4,'Award Information','./img/index/index_pic4.jpeg','Special artist of the Anno museum - JAYDEN WHITLEY Win the Venice Biennale Grand Prix. It is our great honor to participate in this exhibition. JAYDEN WHITLEY\'s new work Exhibition will come back in 2023.','開放','2022-04-21');

/*Table structure for table `PAYMENT` */

DROP TABLE IF EXISTS `PAYMENT`;

CREATE TABLE `PAYMENT` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `INVOICE` varchar(45) NOT NULL,
  `ACCOUNT` varchar(45) NOT NULL,
  `ORDER_STATUS` varchar(45) NOT NULL,
  `ORDER_DATE` date NOT NULL,
  `DISCOUNT_CODE` varchar(45) NOT NULL,
  `DISCOUNT_TOTAL` varchar(45) NOT NULL,
  `MEMBER_ID` int NOT NULL,
  `PAY_STATUS` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_ORDER_MEMBER_ID_idx` (`MEMBER_ID`),
  CONSTRAINT `FK_ORDER_MEMBER_ID` FOREIGN KEY (`MEMBER_ID`) REFERENCES `MEMBER` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

/*Data for the table `PAYMENT` */

insert  into `PAYMENT`(`ID`,`INVOICE`,`ACCOUNT`,`ORDER_STATUS`,`ORDER_DATE`,`DISCOUNT_CODE`,`DISCOUNT_TOTAL`,`MEMBER_ID`,`PAY_STATUS`) values 
(1,'404','zxcvb@qq.com','已完成','2022-04-10','AWDQSE','100',1,'已付款'),
(2,'502','qwert@yahoo.com.tw','處理中','2022-04-11','AWDQS','200',2,'未付款'),
(3,'501','asdfg@gmail.com','已完成','2022-04-20','1234asdf','100',3,'已付款'),
(4,'401','zxcvb@qq.com','已完成','2022-04-19','5678qwert','200',1,'已付款'),
(5,'402','hjkl@gmail.com','處理中','2022-02-10','AWDQS','100',2,'未付款');

/*Table structure for table `TICKET` */

DROP TABLE IF EXISTS `TICKET`;

CREATE TABLE `TICKET` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `TICKET_NAME` varchar(45) DEFAULT NULL,
  `TICKET_TYPE` varchar(45) NOT NULL,
  `TICKET_PRICE` varchar(45) NOT NULL,
  `TICKET_STATUS` varchar(45) NOT NULL,
  `TICKET_DATE` date NOT NULL,
  `TICKET_CREATE` date NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

/*Data for the table `TICKET` */

insert  into `TICKET`(`ID`,`TICKET_NAME`,`TICKET_TYPE`,`TICKET_PRICE`,`TICKET_STATUS`,`TICKET_DATE`,`TICKET_CREATE`) values 
(1,'展覽A','1','100','1','2022-04-19','2022-04-19'),
(2,'展覽B','2','200','2','2022-04-20','2022-04-20');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
