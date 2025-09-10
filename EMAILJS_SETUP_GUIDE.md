# EmailJS Setup Guide for LunaraTech Contact Form

## 🚀 Quick Setup Steps

### 1. Create Gmail Service
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Follow Gmail authentication steps
5. **Copy the Service ID** (starts with `service_`)

### 2. Create Email Template
1. Go to **"Email Templates"** in EmailJS dashboard
2. Click **"Create New Template"**
3. Use this template:

**Template Name:** `LunaraTech Contact Form`

**Subject:** `New Contact Form Submission from {{from_name}}`

**Content:**
```
New contact form submission from LunaraTech website:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Website: {{website}}

Message:
{{message}}

---
Reply directly to: {{from_email}}
```

4. **Save and copy the Template ID** (starts with `template_`)

### 3. Get Public Key
1. Go to **"Account"** → **"General"**
2. **Copy your Public Key** (starts with letters/numbers)

### 4. Update Your Code
Replace these values in `src/App.jsx` around line 360:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual public key
```

### 5. Test the Form
1. Save your changes
2. Build and deploy: `npm run build && git add . && git commit -m "Add EmailJS integration" && git push origin main`
3. Test the contact form on your live site
4. Check your Gmail inbox for test emails

## 🔧 Troubleshooting

**If emails don't arrive:**
- Check Gmail spam folder
- Verify all IDs are correct (no extra spaces)
- Check EmailJS dashboard for error logs
- Make sure Gmail service is properly connected

**If form shows error:**
- Check browser console for specific error messages
- Verify EmailJS service is active
- Ensure template variables match exactly

## 📧 Expected Result

When someone fills out your contact form, you'll receive an email at `malkazevka@gmail.com` with:
- Their name, email, company, website
- Their message
- Ability to reply directly to them

## 🎯 Next Steps

1. Complete the EmailJS setup above
2. Update the three placeholder values in your code
3. Test thoroughly
4. Your contact form will be fully functional!

---

**Need help?** Check EmailJS documentation or contact their support.
