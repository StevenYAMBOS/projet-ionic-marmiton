Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@StevenYAMBOS 
axelverglas
/
marmiton
Public
Fork your own copy of axelverglas/marmiton
Code
Issues
Pull requests
Actions
Projects
Security
Insights
marmiton/src/marmiton.sql
@axelverglas
axelverglas first commit
Latest commit 2de16b1 2 days ago
 History
 1 contributor
136 lines (110 sloc)  3.58 KB

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `categories` (`id`, `title`) VALUES
(2, 'Entrées'),
(4, 'Plat'),
(6, 'Dessert');

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `description` text,
  `cooktime` int(11) DEFAULT NULL,
  `preparetime` int(11) NOT NULL,
  `cost` int(11) NOT NULL,
  `nbportion` int(11) NOT NULL,
  `tools` text,
  `level` int(11) NOT NULL,
  `ingredients` text NOT NULL,
  `steps` text NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `product` (`id`, `title`, `picture`, `video_url`, `description`, `cooktime`, `preparetime`, `cost`, `nbportion`, `tools`, `level`, `ingredients`, `steps`, `category_id`) VALUES
(2, 'Poulet basquaise', 'https://assets.afcdn.com/recipe/20161116/7224_w1024h1024c1cx1972cy3850.webp', 'https://www.youtube.com/embed/IAfotyhK8Q8', 'Recette de poulet mijoté avec des poivrons, délicieux avec une purée maison', 80, 30, 1, 4, '-cocotte. -poele. -econome. -couteau.', 1, '-500g Poulet. - 300g Poivrons. -1 boite de concentré de tomate. -1 gros oignons. -sel. -poivres. -paprika', '-préparer les légumes. -faire revenir le poulet avec un peu d\'huile. -tout mettre dans une cocotte à feu doux.', 4),
(3, 'test', '', '', 'dsqdfsdf', 60, 89, 3, 5, 'dfsdf', 2, 'qsdfqdsfq', 'qsdfqdsfqsdf', 2);
