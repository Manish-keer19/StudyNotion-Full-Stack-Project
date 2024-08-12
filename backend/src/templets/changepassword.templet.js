export const changePasswordTemplet = (user)=> `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Updated</title>
    // <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
        <h1 class="text-2xl font-semibold text-gray-800">Password Updated Successfully</h1>
        <p class="mt-4 text-gray-600">Hello ${user},</p>
        <p class="mt-2 text-gray-600">We wanted to let you know that your password has been successfully updated. If you made this change, you can safely ignore this message. If you did not make this change, please contact our support team immediately.</p>
        <div class="mt-6">
            <p class="text-gray-600">Thank you for being a valued member of Study Notion.</p>
            <p class="text-gray-600 mt-2">Best regards,<br>The Study Notion Team</p>
        </div>
        <div class="mt-8 text-center text-sm text-gray-500">
            <p>Need help? <a href="mailto:support@studynotion.com" class="text-indigo-600 hover:underline">Contact support</a></p>
            <p>Follow us on <a href="#" class="text-indigo-600 hover:underline">Facebook</a>, <a href="#" class="text-indigo-600 hover:underline">Twitter</a>, and <a href="#" class="text-indigo-600 hover:underline">LinkedIn</a></p>
        </div>
    </div>
</body>
</html>`
