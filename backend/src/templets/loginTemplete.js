export const generateLoginTemplate = (userName) => {
  return `
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Notification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header h1 {
            color: #333333;
        }
        .content {
            padding: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 10px 0;
            font-size: 14px;
            color: #888888;
        }
        .footer a {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Study Notion</h1>
        </div>
        <div class="content">
            <p>Dear ${userName},</p>
            <p>You have successfully logged into your Study Notion account.</p>
            <p>If you did not perform this action, please contact our support team immediately at <a href="mailto:support@studynotion.com">support@studynotion.com</a>.</p>
        </div>
        <div class="footer">
            <p>Thank you for choosing Study Notion!</p>
            <p>Best regards,<br>The Study Notion Team</p>
            <p>Follow Us: <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">LinkedIn</a></p>
            <p>Study Notion<br>[Company Address]<br>[Contact Number]</p>
            <p><em>Note: This is an automated message. Please do not reply to this email.</em></p>
        </div>
    </div>
</body>
</html>
`;
};
