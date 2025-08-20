function generateQRCode() {  
document.getElementById("spinner").style.display = "block";
document.getElementById("qrcode").innerHTML = "";
document.getElementById("copyLink").addEventListener("click", () => {
  const input = document.getElementById("qrInput");
  const copyPopup = document.getElementById("copyPopup")
  if (input.value) {
    navigator.clipboard.writeText(input.value).then(() => {
        copyPopup.classList.add("show");
        setTimeout(() => {
            copyPopup.classList.remove("show");
        }, 2000);
    });
  }
});
const url = document.getElementById("qrInput").value
if (url.trim() === "") {
    document.getElementById("warning").textContent = "Please enter a valid URL.";
return;
} else {
    document.getElementById("warning").textContent = "";
}
setTimeout(() => {
    document.getElementById("spinner").style.display = "none";

new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 128,
    height: 128
});
console.log("generated QR for: " + url);
}, 2000);
}
document.getElementById("qrBtn").addEventListener("click", generateQRCode);

