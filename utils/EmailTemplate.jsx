export function generateEmailTemplateForUser(mainContent, title) {
    const imageUrl = "https://mywebibeeworld.b-cdn.net/fluorokraft-email-logo.svg";
    return `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
          <div style="text-align: center; margin-bottom: 20px;">
                 <img src=${imageUrl} alt="Fluorokraft Logo" style="width: 150px; height: auto;">
              </div>
          ${mainContent}
           <p style="font-size: 16px; color: #555;">Greetings from Fluorokraft Team!</p>
           ${title !== "contact" ?
            `<p style="font-size: 16px; color: #555;">
                Thank you for your interest with Fluorokraft. Please check the attached work sample requested.
            </p>`
            :
            `<p style="font-size: 16px; color: #555;">
                Thank you for choosing Fluorokraft! We're thrilled to confirm we've received your submission and are excited to collaborate with you to bring your vision to life. Let's create something amazing together!
            </p>`
        }
           
            <p style="font-size: 16px;">
                Fluorokraft<br>
                <a href="mailto:support@webibee.com" style="color: #007bff; text-decoration: none;">support@webibee.com</a><br>
                Founder & C.E.O,
            </p>
            <div style="text-align: center; margin-top: 20px; font-size: 14px; color: #007bff;">
                <p style="margin: 0;">
                    © ${new Date().getFullYear()} 
                    <span style="margin-left: 1.5px; margin-right: 1.5px;">
                        <a href="https://fluorokraft.com/" style="color: #007bff; text-decoration: none;">Fluorokraft</a>
                    </span>
                    . All rights reserved.
                </p>
            </div>
        </div>
          `;
}

export function generateEmailTemplateForClient(mainContent) {
    const imageUrl = "https://mywebibeeworld.b-cdn.net/fluorokraft-email-logo.svg";
    return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
              <p style="font-size: 16px; color: #555;">Hi,</p>
              <p style="font-size: 16px; color: #555;">You have a new message from the Fluorokraft website:</p>
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
              ${mainContent}
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
              <p style="font-size: 16px;">
                Fluorokraft<br>
                <a href="mailto:support@webibee.com" style="color: #007bff; text-decoration: none;">support@webibee.com</a><br>
                Founder & C.E.O,
            </p>
              <div style="margin-bottom: 10px;">
                 <img src=${imageUrl} alt="Fluorokraft Logo" style="width: 90px; height: auto;">
              </div>
          </div>
            `;
}
