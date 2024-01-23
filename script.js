function generateList() {
    // Mengambil nilai dari input nama item dan jumlah item
    var itemNameInput = document.getElementById('itemName');
    var itemCountInput = document.getElementById('itemCount');
    
    var itemName = itemNameInput.value;
    var itemCount = parseInt(itemCountInput.value);

    // Memastikan jumlah item positif
    if (itemCount > 0 && itemName) {
        // Menghasilkan elemen daftar HTML
        var listContainer = document.getElementById('listContainer');
        listContainer.innerHTML = ''; // Mengosongkan kontainer sebelum menghasilkan list baru

        var ul = document.createElement('ul');

        for (var i = 1; i <= itemCount; i++) {
            var li = document.createElement('li');
            li.textContent = itemName + ' ' + i;
            ul.appendChild(li);
        }

        listContainer.appendChild(ul);
    }
}

// Menambahkan event listener untuk memanggil generateList() setiap kali ada perubahan pada input
document.getElementById('itemName').addEventListener('input', generateList);
document.getElementById('itemCount').addEventListener('input', generateList);