-- phpMyAdmin SQL Dump
-- version 4.3.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 08, 2017 at 10:31 AM
-- Server version: 5.5.51-38.2
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `arvore_genealogica_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `arvore_genealogica`
--

CREATE TABLE IF NOT EXISTS `arvore_genealogica` (
  `id` int(11) NOT NULL,
  `nome` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `sexo` enum('Macho','Fêmea') COLLATE utf8_unicode_ci NOT NULL,
  `pai` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mae` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `vivo_morto` enum('Vivo','Morto') COLLATE utf8_unicode_ci NOT NULL,
  `numero_anel` int(11) DEFAULT NULL,
  `origem` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `interno_externo` enum('interno','externo') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'externo'
) ENGINE=MyISAM AUTO_INCREMENT=231 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `arvore_genealogica`
--
ALTER TABLE `arvore_genealogica`
  ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `nome` (`nome`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `arvore_genealogica`
--
ALTER TABLE `arvore_genealogica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=0;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
