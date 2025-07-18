import nodemailer from 'nodemailer';

// Gmail configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oyelekefrancis1505@gmail.com',
    pass: 'driu ptpt dhtg inpk' // Your Gmail app password
  }
});

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(contactData: ContactMessage): Promise<boolean> {
  try {
    const mailOptions = {
      from: 'oyelekefrancis1505@gmail.com',
      to: 'reachoyelekefrancis@gmail.com',
      subject: `Portfolio Contact: ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">Contact Details:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${contactData.name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${contactData.email}</p>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${contactData.subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${contactData.message}</p>
            </div>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #e9ecef; border-radius: 4px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This message was sent from your portfolio website contact form on ${new Date().toLocaleString()}.
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact email:', error);
    return false;
  }
}