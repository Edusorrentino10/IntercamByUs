import { mailOptions, transporter } from '@/lib/nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const data = req.body
    if (!data.name || !data.email || !data.telefone || !data.message) {
      return res.status(400).json({ message: 'Bad request' })
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Mensagem de ${data.name}`,
        text: 'this is as test string',
        html: `<div style="display: grid; justify-content: center; align-items: center; border: 4px solid #F3B229; background: #103F79; padding: 20px 50px; position: relative;">
        <h1 style="color: #F3B229; margin-bottom: 15px;">👋 Contato - IntercamByUs</h1>
        <h3 style="color: #F3B229;">Nome</h3>
        <p style="color: #EFEFEF;">${data.name}</p>
        <h3 style="color: #F3B229;">Email</h3>
        <p style="color: #EFEFEF;"><a href="mailto:${data.email}" style="text-decoration: none; color: #EFEFEF;">${data.email}</a></p>
        <h3 style="color: #F3B229;">Telefone</h3>
        <p style="color: #EFEFEF;">${data.telefone}</p>
        <h3 style="color: #F3B229;">Assunto</h3>
        <p style="color: #EFEFEF;">${data.message}</p>
      </div>
      `,
      })

      return res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error })
    }
  }

  return res.status(400).json({ message: 'Bad request' })
}
