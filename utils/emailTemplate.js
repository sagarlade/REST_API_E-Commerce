function emailTemplate(subject, body) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${subject}</title>
        </head>
        <body>
            <h1>${subject}</h1>
            <p>${body}</p>
        </body>
        </html>
    `;
}

module.exports = emailTemplate;