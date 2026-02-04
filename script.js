const WHATSAPP_NUMBER = "919999999999"; // replace with your WhatsApp number
const EMAIL_TO = "contact@statvion.com"; // replace with your email

function getFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  return { name, email, message };
}

function sendWhatsApp() {
  const { name, email, message } = getFormData();

  const text = `Hello Statvion Infotech,%0A
Name: ${name}%0A
Email: ${email}%0A
Message: ${message}`;

  const url = `https://wa.me/${+916388205751}?text=${text}`;
  window.open(url, "_blank");
}

function sendEmail() {
  const { name, email, message } = getFormData();

  const subject = encodeURIComponent("New Enquiry from Website");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${statvioninfotech@gmail.com}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
}
