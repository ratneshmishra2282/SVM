const WHATSAPP_NUMBER = "919999999999"; // replace
const EMAIL_TO = "contact@statvion.com"; // replace

function sendWhatsApp() {
  const name = document.getElementById("name")?.value || "";
  const email = document.getElementById("email")?.value || "";
  const message = document.getElementById("message")?.value || "";

  const text =
    `Hello Statvion Infotech,%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Message: ${message}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

function sendEmail() {
  const name = document.getElementById("name")?.value || "";
  const email = document.getElementById("email")?.value || "";
  const message = document.getElementById("message")?.value || "";

  const subject = encodeURIComponent("New Enquiry – Statvion Infotech");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
}
