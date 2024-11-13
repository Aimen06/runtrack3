-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mer. 13 nov. 2024 à 15:27
-- Version du serveur : 8.0.35
-- Version de PHP : 8.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `utilisateurs`
--

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `nom`, `prenom`, `email`) VALUES
(37, 'Simon', 'Luc', 'luc.simon@free.fr'),
(38, 'Laurent', 'Claire', 'claire.laurent@bouyguestelecom.fr'),
(39, 'Garcia', 'David', 'david.garcia@orange.fr'),
(40, 'Bernard', 'Emma', 'emma.bernard@sfr.fr'),
(41, 'Roux', 'Hugo', 'hugo.roux@free.fr'),
(42, 'Fournier', 'Alice', 'alice.fournier@bouyguestelecom.fr'),
(43, 'Mercier', 'Leo', 'leo.mercier@orange.fr'),
(44, 'Dupuis', 'Chloe', 'chloe.dupuis@sfr.fr'),
(45, 'Meyer', 'Nathan', 'nathan.meyer@free.fr'),
(46, 'Lemoine', 'Laura', 'laura.lemoine@bouyguestelecom.fr'),
(47, 'Marechal', 'Lucas', 'lucas.marechal@orange.fr'),
(48, 'Lemoine', 'Camille', 'camille.lemoine@sfr.fr'),
(49, 'Lemoine', 'Alexandre', 'alexandre.lemoine@free.fr'),
(50, 'Marchand', 'Elise', 'elise.marchand@bouyguestelecom.fr'),
(51, 'Girard', 'Antonin', 'antonin.girard@orange.fr'),
(52, 'Renaud', 'Nina', 'nina.renaud@sfr.fr'),
(53, 'Gautier', 'Olivier', 'olivier.gautier@free.fr'),
(54, 'Collet', 'Anna', 'anna.collet@bouyguestelecom.fr'),
(55, 'Fontaine', 'Mia', 'mia.fontaine@orange.fr'),
(56, 'Chevalier', 'Lucas', 'lucas.chevalier@sfr.fr'),
(57, 'Guerin', 'Louise', 'louise.guerin@free.fr'),
(58, 'Perrot', 'Manon', 'manon.perrot@bouyguestelecom.fr'),
(59, 'Lemoine', 'Zoe', 'zoe.lemoine@orange.fr'),
(60, 'Millet', 'Arthur', 'arthur.millet@sfr.fr');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
