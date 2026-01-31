const siswa = [
  "Abian Arshavin",
  "Ahmad Miladi",
  "Ahmad Nabil Astami (BIC)",
  "Andra Putra Zibran",
  "Annisa Rizki Faizal",
  "Azka Rizqi Heryansyah",
  "Bias Pelangi",
  "Fachreizy Ardiansyah",
  "Hadi Giafary",
  "Ikram Candra Borski",
  "Imam Maulana",
  "Juniar Arya Darmawan",
  "M Fajar Imsanyah",
  "Muhamad Irham Satya Hidayat",
  "Muhamad Ridho",
  "Muhammad Adnan Devara",
  "Muhammad Afry Kamsidansyah",
  "Muhammad Ilham",
  "Muhammad Nabil Fauzan",
  "Muhammad Wisnu Wistara Kurniawan",
  "Nasira Rahmatul Islam",
  "Raditya Gatan Sinanu",
  "Rasya Ahmadineja",
  "Raya Gunawan",
  "Raviano Barata Kusumo",
  "Reza Adi Pratama",
  "Rizki Aditia",
  "Satria Triyan Saputra",
  "Satya Adyatma Kusnadi",
  "Taufik Hidayat",
  "Tieri Andrian"
];

const table = document.getElementById("absenTable");

siswa.forEach((nama, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${nama}</td>
    <td>
      <select>
        <option value="Hadir">Hadir</option>
        <option value="Alfa">Alfa</option>
      </select>
    </td>
  `;
  table.appendChild(row);
});

function buatTXT() {
  let hadir = "DAFTAR SISWA HADIR\n\n";
  let alfa = "DAFTAR SISWA ALFA\n\n";

  const rows = table.querySelectorAll("tr");

  let noHadir = 1;
  let noAlfa = 1;

  rows.forEach(row => {
    const nama = row.children[1].innerText;
    const ket = row.children[2].querySelector("select").value;

    if (ket === "Hadir") {
      hadir += `${noHadir}. ${nama}\n`;
      noHadir++;
    } else if (ket === "Alfa") {
      alfa += `${noAlfa}. ${nama}\n`;
      noAlfa++;
    }
  });

  const isi =
    "ABSENSI SISWA\n\n" +
    hadir +
    "\n-------------------------\n\n" +
    alfa;

  const blob = new Blob([isi], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "absensi_siswa.txt";
  link.click();
}