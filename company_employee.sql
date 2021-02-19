-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2021 at 09:23 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `company_employee`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `name` text NOT NULL,
  `age` int(3) NOT NULL,
  `sallary` int(100) NOT NULL,
  `phonenumber` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`name`, `age`, `sallary`, `phonenumber`) VALUES
('sneha', 24, 25000, 1234567890),
('onkar', 20, 30000, 1111111111),
('onkarr', 34, 7689, 87),
('snehaaa', 5, 67, 76),
('sneha', 24, 2897, 1234567890),
('sneha', 65, 6757, 876869),
('sneha', 65, 67678, 1234567890),
('sneha', 76, 768, 1234567890),
('sneha', 65, 67575, 1234567890),
('sneha', 56, 675797, 1234567890),
('ygj', 68, 8768769, 876789),
('sneha', 67, 876869, 678986),
('sneha', 67, 876869, 678986),
('sneha', 24, 6758576, 1234567890),
('sneha', 65, 675, 1234567890),
('sneha', 45, 5467, 1234567890),
('snehagfh', 6, 65758, 1234567890);

-- --------------------------------------------------------

--
-- Table structure for table `registraition`
--

CREATE TABLE `registraition` (
  `name` text NOT NULL,
  `email` text NOT NULL,
  `phone` int(10) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registraition`
--

INSERT INTO `registraition` (`name`, `email`, `phone`, `password`) VALUES
('sneha ', 'sneha@gmail.com', 1234567890, 'sneha'),
('onkar ', 'onkar@gmail.com', 1111111111, 'onkar'),
('s', 's@g', 111, '111'),
('o', 'o@g', 123, '123'),
('sneha', 'snehajyg@gmail.com', 1234567890, 'sneha');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
