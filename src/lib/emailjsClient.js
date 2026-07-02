import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export async function sendAdminEmail({ from_name, from_email, subject, message, submission_id }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "Missing EmailJS configuration. Check VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY in .env.local"
    );
  }

  const templateParams = {
    title: subject || "New contact form message",
    name: from_name,
    message,
    email: from_email,
    submission_id,
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return response;
  } catch (error) {
    const reason = error?.text || error?.message || "Unknown EmailJS error";
    throw new Error(`EmailJS failed: ${reason}`);
  }
}

