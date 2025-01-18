import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message,phone } = req.body;

    try {
      // Configure Nodemailer
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Or your email provider
        auth: {
          user: process.env.EMAIL_USER, // Your email
          pass:  process.env.EMAIL_PASS, // Your email password (use app-specific password if using Gmail)
        },
      });

      // Email Options
      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Replace with your email
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n Phone:${phone}\nMessage: ${message}`,
      };

      // Send Email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error sending email', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
