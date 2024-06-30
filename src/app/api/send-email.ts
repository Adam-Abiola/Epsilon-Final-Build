import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests are allowed' });
    }

    const { name, business_name, email, phone, software_solution } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'adamabiola.a@gmail.com',
            pass: 'lioneladam_10',
        },
    });

    const mailOptions = {
        from: email,
        to: 'a.adamabiola@icloud.com',
        subject: `Message from ${name} - ${business_name}`,
        text: `Name: ${name}\nBusiness Name: ${business_name}\nEmail: ${email}\nPhone: ${phone}\n\nSoftware Solution: ${software_solution}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending email' });
    }
};

export default handler;
