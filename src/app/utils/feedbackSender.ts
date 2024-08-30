import { Resend } from 'resend';

const resend = new Resend('re_123456789');

export const emailSenderUtil = (async function () {
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['pennantt@icloud.com'],
        subject: 'Hello World',
        html: '<strong>It works!</strong>',
    });

    if (error) {
        return console.error({ error });
    }

    console.log({ data });
})();