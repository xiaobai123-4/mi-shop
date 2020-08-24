-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2020-03-22 09:12:55
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mi`
--

-- --------------------------------------------------------

--
-- 表的结构 `mi_class`
--

CREATE TABLE `mi_class` (
  `pid` int(11) NOT NULL,
  `p_class` varchar(32) DEFAULT NULL,
  `pic` varchar(32) DEFAULT NULL,
  `title` varchar(32) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `pj` int(11) DEFAULT NULL,
  `state` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `mi_class`
--

INSERT INTO `mi_class` (`pid`, `p_class`, `pic`, `title`, `price`, `pj`, `state`) VALUES
(2, '配件', 'image\\peijian2.jpg', '小米6 硅胶保护套', '600.00', 233, '新品'),
(3, '配件', 'image\\peijian3.jpg', '小米手机4c 小米4c 智能', '455.00', 342, NULL),
(4, '配件', 'image\\peijian4.jpg', '红米NOTE 4X 红米note4X', '699.00', 333, NULL),
(5, '配件', 'image\\peijian5.jpg', '小米支架式自拍杆', '89.00', 365, NULL),
(6, '配件', 'image\\peijian7.jpg', '小米指环支架', '19.00', 372, '享6折'),
(7, '配件', 'image\\peijian8.jpg', '米家随身风扇', '19.90', 372, NULL),
(8, '配件', 'image\\peijian9.jpg', '红米4X 高透软胶保护套', '59.00', 755, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `mi_class_title`
--

CREATE TABLE `mi_class_title` (
  `lid` int(11) NOT NULL,
  `title` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `mi_class_title`
--

INSERT INTO `mi_class_title` (`lid`, `title`) VALUES
(1, '手机'),
(2, '电话卡'),
(3, '笔记本'),
(4, '平板'),
(5, '电视'),
(6, '盒子'),
(7, '路由器'),
(8, '智能硬件'),
(9, '移动电源'),
(10, '电池'),
(11, '耳机'),
(12, '音箱'),
(13, '保护套'),
(14, '贴膜'),
(15, '线材'),
(16, '储存卡'),
(17, '箱包'),
(18, '服饰'),
(19, '米兔'),
(20, '生活周边');

-- --------------------------------------------------------

--
-- 表的结构 `mi_left_f1_title`
--

CREATE TABLE `mi_left_f1_title` (
  `lid` int(11) NOT NULL,
  `title` varchar(8) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `mi_left_f1_title`
--

INSERT INTO `mi_left_f1_title` (`lid`, `title`, `href`) VALUES
(1, '小米商城', 'index.html'),
(2, 'MIUI', ''),
(3, '米聊', ''),
(4, '游戏', ''),
(5, '多看阅读', ''),
(6, '云服务', ''),
(7, '金融', ''),
(8, '小米商城移动版', ''),
(9, '问题反馈', ''),
(10, 'Select R', '');

-- --------------------------------------------------------

--
-- 表的结构 `mi_list_title`
--

CREATE TABLE `mi_list_title` (
  `lid` int(11) NOT NULL,
  `title` varchar(8) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `mi_list_title`
--

INSERT INTO `mi_list_title` (`lid`, `title`, `href`) VALUES
(1, '红米', 'product_list.html'),
(2, 'MIUI', ''),
(3, '平板·笔记本', ''),
(4, '电视', ''),
(5, '盒子·影音', ''),
(6, '路由器', ''),
(7, '智能硬件', ''),
(8, '服务', ''),
(9, '社区', '');

-- --------------------------------------------------------

--
-- 表的结构 `mi_mclass`
--

CREATE TABLE `mi_mclass` (
  `cid` int(11) NOT NULL,
  `dname` varchar(32) DEFAULT NULL,
  `pic` varchar(32) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `mi_mclass`
--

INSERT INTO `mi_mclass` (`cid`, `dname`, `pic`, `href`) VALUES
(1, '小米6', 'image\\xm6_80.png', 'product_details.html'),
(2, '小米手机5c', 'image\\5c_80.png', ''),
(3, '小米Note 2', 'image\\xmNOTE2-80.jpg', ''),
(4, '小米MIX', 'image\\MIX-80.jpg', ''),
(5, '小米5s', 'image\\MIX-80.jpg', ''),
(6, '小米5s Plus', 'image\\xm5Splus.jpg', ''),
(7, '小米手机5', 'image\\xm5-80.jpg', ''),
(8, '红米Note 4X', 'image\\hmn4x80.png', ''),
(9, '红米Note-4', 'image\\hmnote4-80.jpg', ''),
(10, '红米4x', 'image\\hm4x_80.png', ''),
(11, '红米4', 'image\\hm4-80.jpg', ''),
(12, '红米4A', 'image\\hm4A-80.jpg', '');

-- --------------------------------------------------------

--
-- 表的结构 `mi_order`
--

CREATE TABLE `mi_order` (
  `oid` int(11) NOT NULL,
  `pic` varchar(32) DEFAULT NULL,
  `order_number` varchar(32) DEFAULT NULL,
  `statu` tinyint(1) DEFAULT '0',
  `price` decimal(10,2) DEFAULT NULL,
  `order_time` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `mi_product`
--

CREATE TABLE `mi_product` (
  `pid` int(11) NOT NULL,
  `title` varchar(32) DEFAULT NULL,
  `l_title` varchar(128) DEFAULT NULL,
  `pic` varchar(32) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `mi_product`
--

INSERT INTO `mi_product` (`pid`, `title`, `l_title`, `pic`, `price`, `href`) VALUES
(1, '小米6', '5.16早10点开售', 'image\\liebiao_xiaomi6.jpg', '2499.00', 'product_details.html'),
(2, '小米手机5c', '搭载澎湃S1 八核高性能处理器', 'image\\liebiao_xiaomi5c.jpg', '1499.00', ''),
(3, '小米Note 2', '5月9日-20日 小米Note 2 享花呗12期分期免息', 'image\\liebiao_xiaomint2.jpg', '2799.00', ''),
(4, '小米MIX', '5月9日-20日小米MIX 享花呗12期分期免息', 'image\\liebiao_xiaomimix.jpg', '3499.00', ''),
(5, '小米5s', '“暗夜之眼”超感光相机 / 无孔式超声波', 'image\\liebiao_xiaomi5s.jpg', '1999.00', ''),
(6, '小米手机5', '骁龙820处理器 / UFS 2.0 闪存', 'image\\liebiao_xiaomi5.jpg', '1799.00', ''),
(7, '红米Note 4', '十核旗舰处理器 / 全金属一体化机身', 'image\\liebiao_hongmin4.jpg', '1399.00', ''),
(8, '小米手机5 64GB', '5月9日-10日，下单立减100元', 'image\\pinpai3.png', '1799.00', ''),
(9, '红米4', '2.5D 玻璃，金属一体化机身', 'image\\liebiao_hongmin42.jpg', '999.00', ''),
(10, '红米Note 4X 全网通版', '多彩金属 / 4100mAh 超长续航', 'image\\liebiao_hongmin4x.jpg', '1299.00', '');

-- --------------------------------------------------------

--
-- 表的结构 `mi_product_details`
--

CREATE TABLE `mi_product_details` (
  `did` int(11) NOT NULL,
  `dname` varchar(32) DEFAULT NULL,
  `d_info` varchar(128) DEFAULT NULL,
  `versions` varchar(32) DEFAULT NULL,
  `color` varchar(32) DEFAULT NULL,
  `pic` varchar(32) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `mi_product_details`
--

INSERT INTO `mi_product_details` (`did`, `dname`, `d_info`, `versions`, `color`, `pic`, `price`, `href`) VALUES
(1, '小米6', '变焦双摄，4 轴防抖 / 骁龙835 旗舰处理器，6GB 大内存，最大可选128GB 闪存 / 5.15" 护眼屏 / 四曲面玻璃/陶瓷机身', '全网通版 6GB+64GB', '亮黑色', 'image\\liebiao_xiaomi6.jpg', '2499.00', NULL),
(2, '小米6', '变焦双摄，4 轴防抖 / 骁龙835 旗舰处理器，6GB 大内存，最大可选128GB 闪存 / 5.15" 护眼屏 / 四曲面玻璃/陶瓷机身', '全网通版 6GB+128GB', '亮黑色', 'image\\liebiao_xiaomi6.jpg', '2899.00', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `mi_star`
--

CREATE TABLE `mi_star` (
  `sid` int(11) NOT NULL,
  `dname` varchar(32) DEFAULT NULL,
  `pic` varchar(32) DEFAULT NULL,
  `title` varchar(32) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `mi_star`
--

INSERT INTO `mi_star` (`sid`, `dname`, `pic`, `title`, `price`, `href`) VALUES
(1, '小米MIX', 'image\\pinpai1.png', '5月9日-21日享花呗12期分期免息', '3499.00', ''),
(2, '小米5s', 'image\\pinpai2.png', '5月9日-10日，下单立减200元', '1999.00', ''),
(3, '小米手机5 64GB', 'image\\pinpai3.png', '5月9日-10日，下单立减100元', '3999.00', ''),
(4, '小米电视3s 55英寸', 'image\\pinpai4.png', '5月9日，下单立减200元', '3999.00', ''),
(5, '小米笔记本', 'image\\pinpai5.png', '更轻更薄，像杂志一样随身携带', '3599.00', '');

-- --------------------------------------------------------

--
-- 表的结构 `mi_user`
--

CREATE TABLE `mi_user` (
  `uid` int(11) NOT NULL,
  `uname` varchar(64) DEFAULT NULL,
  `upwd` varchar(64) DEFAULT NULL,
  `phone` varchar(12) NOT NULL,
  `qianming` varchar(128) NOT NULL,
  `hobby` varchar(128) NOT NULL,
  `addres` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `mi_user`
--

INSERT INTO `mi_user` (`uid`, `uname`, `upwd`, `phone`, `qianming`, `hobby`, `addres`) VALUES
(7, 'xiaobai', '123456', '15591441603', '一支穿云箭，千军万马来相见', '', ''),
(14, 'xiaowang', '123456', '13399845786', '敲代码', '游戏，音乐，旅游，健身', '浙江省杭州市江干区19号大街571号'),
(15, 'dingding', '123456', '13789762234', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mi_class`
--
ALTER TABLE `mi_class`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `mi_class_title`
--
ALTER TABLE `mi_class_title`
  ADD PRIMARY KEY (`lid`);

--
-- Indexes for table `mi_left_f1_title`
--
ALTER TABLE `mi_left_f1_title`
  ADD PRIMARY KEY (`lid`);

--
-- Indexes for table `mi_list_title`
--
ALTER TABLE `mi_list_title`
  ADD PRIMARY KEY (`lid`);

--
-- Indexes for table `mi_mclass`
--
ALTER TABLE `mi_mclass`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `mi_order`
--
ALTER TABLE `mi_order`
  ADD PRIMARY KEY (`oid`);

--
-- Indexes for table `mi_product`
--
ALTER TABLE `mi_product`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `mi_product_details`
--
ALTER TABLE `mi_product_details`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `mi_star`
--
ALTER TABLE `mi_star`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `mi_user`
--
ALTER TABLE `mi_user`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `mi_class`
--
ALTER TABLE `mi_class`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- 使用表AUTO_INCREMENT `mi_class_title`
--
ALTER TABLE `mi_class_title`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- 使用表AUTO_INCREMENT `mi_left_f1_title`
--
ALTER TABLE `mi_left_f1_title`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `mi_list_title`
--
ALTER TABLE `mi_list_title`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- 使用表AUTO_INCREMENT `mi_mclass`
--
ALTER TABLE `mi_mclass`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- 使用表AUTO_INCREMENT `mi_order`
--
ALTER TABLE `mi_order`
  MODIFY `oid` int(11) NOT NULL AUTO_INCREMENT;
--
-- 使用表AUTO_INCREMENT `mi_product`
--
ALTER TABLE `mi_product`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `mi_product_details`
--
ALTER TABLE `mi_product_details`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `mi_star`
--
ALTER TABLE `mi_star`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- 使用表AUTO_INCREMENT `mi_user`
--
ALTER TABLE `mi_user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
