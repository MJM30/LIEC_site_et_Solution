import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, whatsapp, email, studyLevel, field, message } = data;

    if (!fullName || !whatsapp || !email) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    const recipientEmail = "contacts@liecconsulting.com";

    // Vérification de la présence d'identifiants SMTP (Google Workspace / Gmail / Host)
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `\"LIEC Web\" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `[LIEC] Demande de 1er entretien d'orientation — ${fullName}`,
        text: `
Nouvelle demande de premier entretien d'orientation :

• Nom & Prénom : ${fullName}
• WhatsApp : ${whatsapp}
• Email : ${email}
• Niveau d'études visé : ${studyLevel || "Non renseigné"}
• Domaine souhaité : ${field || "Non renseigné"}
• Précisions / Message :
${message || "Aucun message spécifique."}

Date : ${new Date().toLocaleString("fr-FR", { timeZone: "Africa/Kinshasa" })} (heure de Kinshasa)
        `.trim(),
        html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; rounded: 16px; background-color: #ffffff;">
  <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #002452;">
    <h2 style="color: #002452; margin: 0 0 6px 0;">LIEC — Lyon International Education Consulting</h2>
    <p style="color: #006a61; margin: 0; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
      Nouvelle demande d'orientation (Contact Étape 01)
    </p>
  </div>

  <div style="padding: 24px 0;">
    <p style="font-size: 15px; color: #1e293b; margin: 0 0 16px 0;">
      Une nouvelle demande de premier entretien d'orientation a été soumise sur le site internet :
    </p>

    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <tr>
        <td style="padding: 10px 12px; font-weight: bold; color: #002452; background: #f8fafc; border-bottom: 1px solid #e2e8f0; width: 35%;">Nom & Prénom :</td>
        <td style="padding: 10px 12px; color: #334155; border-bottom: 1px solid #e2e8f0;">${fullName}</td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; font-weight: bold; color: #002452; background: #f8fafc; border-bottom: 1px solid #e2e8f0;">Numéro WhatsApp :</td>
        <td style="padding: 10px 12px; color: #334155; border-bottom: 1px solid #e2e8f0;">
          <a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}" style="color: #006a61; font-weight: bold; text-decoration: none;">
            ${whatsapp} (Contacter sur WhatsApp)
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; font-weight: bold; color: #002452; background: #f8fafc; border-bottom: 1px solid #e2e8f0;">Adresse Email :</td>
        <td style="padding: 10px 12px; color: #334155; border-bottom: 1px solid #e2e8f0;">
          <a href="mailto:${email}" style="color: #002452; text-decoration: underline;">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; font-weight: bold; color: #002452; background: #f8fafc; border-bottom: 1px solid #e2e8f0;">Niveau d'études visé :</td>
        <td style="padding: 10px 12px; color: #334155; border-bottom: 1px solid #e2e8f0;">${studyLevel || "Non renseigné"}</td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; font-weight: bold; color: #002452; background: #f8fafc; border-bottom: 1px solid #e2e8f0;">Domaine souhaité :</td>
        <td style="padding: 10px 12px; color: #334155; border-bottom: 1px solid #e2e8f0;">${field || "Non renseigné"}</td>
      </tr>
    </table>

    <div style="margin-top: 20px; padding: 16px; background-color: #f1f5f9; border-radius: 8px;">
      <p style="margin: 0 0 8px 0; font-weight: bold; color: #002452; font-size: 13px; text-transform: uppercase;">
        Précisions sur le projet :
      </p>
      <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">
        ${message ? message : "<em>Aucun message spécifique renseigné.</em>"}
      </p>
    </div>
  </div>

  <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center; font-size: 12px; color: #64748b;">
    <p style="margin: 0;">Destiné au Bureau d'orientation LIEC (Lyon & Kinshasa) • <a href="mailto:${recipientEmail}" style="color: #002452;">${recipientEmail}</a></p>
  </div>
</div>
        `,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, method: "smtp" });
    }

    // Si aucun SMTP n'est configuré sur le serveur, on renvoie une réponse indiquant le fallback client
    return NextResponse.json({
      success: true,
      method: "fallback",
      recipient: recipientEmail,
    });
  } catch (error: any) {
    console.error("Erreur d'envoi du formulaire de contact:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors du traitement du message." },
      { status: 500 }
    );
  }
}
