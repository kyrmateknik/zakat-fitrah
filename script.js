function hitungZakat() {
  const harga = document.getElementById("harga").value;
  const hasil = document.getElementById("hasil");

  if (!harga || harga <= 0) {
    hasil.innerText = "Masukkan harga yang valid.";
    return;
  }

  const jumlahLiter = 2.5;
  const totalZakat = harga * jumlahLiter;

  hasil.innerText = `Zakat Fitrah Anda: Rp ${totalZakat.toLocaleString()}`;
}

function kirimSaran() {
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;
  const notif = document.getElementById("notif-saran");

  if (nama && pesan) {
    notif.innerText = "Terima kasih atas saran Anda!";
    // Reset form (simulasi saja, tidak kirim ke server)
    document.getElementById("nama").value = "";
    document.getElementById("pesan").value = "";
  } else {
    notif.innerText = "Harap isi semua kolom.";
  }
}
