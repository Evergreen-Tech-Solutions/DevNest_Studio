import emailjs from "emailjs-com";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const result = await emailjs.send(
        "service_kqj97nd",
        "template_dnixpat",
        { name, email, message },
        "ZuAY0cJ381FVYv2Oz"
      );
      res.status(200).json({ success: true, text: result.text });
    } catch (error) {
      res.status(500).json({ success: false, text: error.text });
    }
  } else {
    res.status(405).json({ success: false, text: "Method not allowed" });
  }
};
