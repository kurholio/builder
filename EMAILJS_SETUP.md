# EmailJS Setup Guide

## Overview
The contact form is now integrated with EmailJS to send emails to malkazevka@gmail.com. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (since you're using Gmail)
4. Connect your Gmail account (malkazevka@gmail.com)
5. Note down the Service ID (e.g., "service_xxxxx")

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Website: {{website}}

Message:
{{message}}

---
This message was sent from your LunaraTech website contact form.
```

4. Save the template and note down the Template ID (e.g., "template_xxxxx")

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your Public Key

## Step 5: Update the Code
Replace these values in `src/App.jsx` (lines 289-291):

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual public key
```

## Step 6: Test the Form
1. Deploy your changes
2. Test the contact form on your live site
3. Check malkazevka@gmail.com for the test email

## Alternative: Simple Fallback
If you prefer not to use EmailJS, you can replace the onSubmit function with a simple mailto link:

```javascript
const onSubmit = (e) => {
  e.preventDefault();
  const subject = `Contact Form from ${formData.name}`;
  const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nWebsite: ${formData.website}\n\nMessage:\n${formData.message}`;
  window.open(`mailto:malkazevka@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  setSent(true);
};
```

## Troubleshooting
- Make sure all EmailJS IDs are correct
- Check browser console for any errors
- Verify Gmail account permissions in EmailJS
- Test with a simple message first

## Security Note
The EmailJS public key is safe to expose in client-side code. EmailJS handles the actual email sending securely on their servers.
