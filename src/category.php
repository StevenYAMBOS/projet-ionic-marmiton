<?php

// Appelle de la BDD
require_once 'init.php';

if ($_GET['action'] == 'add') {
  $data = json_decode(file_get_contents('php://input'), true);


  $query = $pdo->prepare("INSERT INTO category (title, picture, video_url, description, cooktime, preparetime, cost, nbportion, tools, level, ingredients, steps) VALUES (:title, :picture, :video_url, :description, :cooktime, :preparetime, :cost, :nbportion, :tools, :level, :ingredients, :steps)");

  $query->execute($data);

  echo json_encode($data);


}

if ($_GET['action'] == 'edit') {
  $data = json_decode(file_get_contents('php://input'), true);


  $query = $pdo->prepare("REPLACE INTO category (id,title, picture, video_url, description, cooktime, preparetime, cost, nbportion, tools, level, ingredients, steps) VALUES (:id,:title, :picture, :video_url, :description, :cooktime, :preparetime, :cost, :nbportion, :tools, :level, :ingredients, :steps)");

  $query->execute($data);

  echo json_encode($data);


}


if ($_GET['action'] == 'getall') {
  $query = $pdo->prepare("SELECT * FROM category");
  $query->execute();
  $products = $query->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($products);
}

if ($_GET['action'] == 'getone') {
  $data= json_decode(file_get_contents('php://input'), true);
  $query = $pdo->prepare("SELECT * FROM category WHERE id=:id");
  $query->execute($data);
  $product = $query->fetch(PDO::FETCH_ASSOC);

  echo json_encode($product);
}


if ($_GET['action']=='delete')
{
  $data= json_decode(file_get_contents('php://input'), true);

  $result=$pdo->prepare("DELETE FROM category WHERE id=:id");
  $test=$result->execute($data);

  echo json_decode($test);
}



?>