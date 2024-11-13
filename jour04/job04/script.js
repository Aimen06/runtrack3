window.addEventListener('load', (displayTable));
document.querySelector('#update').addEventListener('click', displayTable);
function displayTable() {
    fetch('users.php')
        .then(response => response.json())
        .then(data => {
            let tbody = document.querySelector('#usersTable tbody');
            tbody.innerHTML = '';
            data.forEach((user, index) => {
                let row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index+1}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Erreur:', error));
}