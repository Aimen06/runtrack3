<?php
try {
    $bdd = new PDO('mysql:host=localhost:8889;dbname=utilisateurs', 'root', 'root');
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    echo "Échec de la connexion : " . $e->getMessage();
}

$sql = "SELECT nom, prenom, email FROM utilisateurs";
$stmt = $bdd->prepare($sql);
$stmt->execute();

echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
?>