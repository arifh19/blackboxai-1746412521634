document.addEventListener('DOMContentLoaded', function() {
    // Load data from API
    async function fetchData() {
        const response = await fetch('/api/documents');
        const documents = await response.json();
        renderTable(documents);
    }

    // Render table function
    function renderTable(data) {
        const dataTable = document.getElementById('dataTable');
        dataTable.innerHTML = data.map(item => `
            <tr>
                <td>${item.nomor}</td>
                <td>${item.judul}</td>
                <td>${item.bidang}</td>
                <td>${item.kategori}</td>
                <td>${item.golongan}</td>
                <td>${item.instansi}</td>
                <td>${item.status}</td>
                <td>${item.jumlahUnit}</td>
                <td><a href="${item.fileUrl}" target="_blank">Lihat Dokumen</a></td>
            </tr>
        `).join('');
    }

    // Initial fetch
    fetchData();

    // Add data function
    window.addData = async function() {
        const nomor = document.getElementById('add-nomor').value.trim();
        const judul = document.getElementById('add-judul').value.trim();
        const bidang = document.getElementById('add-bidang').value.trim();
        const kategori = document.getElementById('add-kategori').value.trim();
        const golongan = document.getElementById('add-golongan').value.trim();
        const instansi = document.getElementById('add-instansi').value.trim();
        const status = document.getElementById('add-status').value.trim();
        const jumlahUnit = document.getElementById('add-jumlah-unit').value.trim();
        const fileInput = document.getElementById('add-file');
        const file = fileInput.files[0];

        if (nomor && judul && bidang && kategori && golongan && instansi && status && jumlahUnit && file) {
            const formData = new FormData();
            formData.append('title', judul);
            formData.append('description', `Nomor: ${nomor}, Bidang: ${bidang}, Kategori: ${kategori}, Golongan: ${golongan}, Instansi: ${instansi}, Status: ${status}, Jumlah Unit: ${jumlahUnit}`);
            formData.append('file', file);

            const response = await fetch('/api/documents/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const newDocument = await response.json();
                fetchData(); // Refresh data
                closeModal('modal-add-data');
                document.getElementById('add-data-form').reset();
            } else {
                alert('Gagal mengunggah dokumen');
            }
        } else {
            alert('Semua field harus diisi!');
        }
    };

    // Modal functions
    window.openModal = function(modalId) {
        document.getElementById(modalId).style.display = 'flex';
    };

    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = 'none';
    };

    // Form validation
    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Pendaftaran berhasil!');
        closeModal('modal-register');
    });

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Login berhasil!');
        closeModal('modal-login');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropbtn");

    dropdown.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah reload
        let dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Menutup dropdown jika klik di luar menu
    window.addEventListener("click", function (event) {
        if (!event.target.matches('.dropbtn')) {
            let dropdowns = document.querySelectorAll(".dropdown-content");
            dropdowns.forEach(menu => {
                menu.style.display = "none";
            });
        }
    });
});

function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

function addData() {
    let nomor = document.getElementById("new-nomor").value;
    let judul = document.getElementById("new-judul").value;
    let bidang = document.getElementById("new-bidang").value;
    let kategori = document.getElementById("new-kategori").value;

    if (nomor && judul && bidang && kategori) {
        let table = document.getElementById("data-table");
        let row = table.insertRow();
        row.innerHTML = `<td>${nomor}</td><td>${judul}</td><td>${bidang}</td><td>${kategori}</td>
                         <td><button onclick="editData(this)">Edit</button>
                         <button onclick="deleteData(this)">Hapus</button></td>`;
        closeModal('modal-add-data');
    } else {
        alert("Harap isi semua data!");
    }
}

let slideIndex = 0;
showSlides();

// Fungsi untuk menampilkan slide otomatis
function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }  

    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}

// Fungsi untuk tombol prev dan next
function plusSlides(n) {
    let slides = document.getElementsByClassName("slide");
    slideIndex += n;

    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

document.getElementById("showMoreNews").addEventListener("click", function() {
    // Menampilkan berita tambahan
    document.querySelectorAll(".news-item.hidden").forEach(item => {
        item.style.display = "block";
    });

    // Sembunyikan tombol setelah diklik
    this.style.display = "none";
});

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<div class="modal-content">
            <img src="${img.src}" alt="Preview">
        </div>`;
        modal.addEventListener('click', () => modal.remove());
        document.body.appendChild(modal);
    });
});

document.getElementById("addDataBtn").addEventListener("click", function() {
    document.getElementById("dataForm").style.display = "block"; // Menampilkan form input
});


    


document.addEventListener("DOMContentLoaded", function () {
    // Event listener untuk tombol "Tambah Data"
    document.getElementById("addDataBtn").addEventListener("click", function () {
        document.getElementById("dataForm").style.display = "block"; // Menampilkan form input
    });

    

       

    // Fungsi untuk menutup modal
    window.closeModal = function (id) {
        document.getElementById(id).style.display = "none";
    };
});
