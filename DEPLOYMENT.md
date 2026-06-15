# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed on your computer

## Option 1: Deploy as Personal/Organization Site (Recommended)

This option deploys your portfolio to `https://yourusername.github.io`

### Steps:

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it: `yourusername.github.io` (replace with your GitHub username)
   - Make it Public
   - Click "Create repository"

2. **Clone the repository locally**
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

3. **Copy portfolio files**
   - Copy `index.html`, `styles.css`, `script.js`, and `README.md` to the repository folder

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add portfolio website"
   git push origin main
   ```

5. **Done!** 
   - Visit `https://yourusername.github.io` in your browser
   - Your site will be live in 1-2 minutes

---

## Option 2: Deploy as Project Site

This option deploys to `https://yourusername.github.io/portfolio`

### Steps:

1. **Create a new repository**
   - Go to https://github.com/new
   - Name it: `portfolio`
   - Make it Public
   - Click "Create repository"

2. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

3. **Copy all files to the repository**

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

5. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "GitHub Pages" section
   - Source: Select `main` branch
   - Save

6. **Done!**
   - Visit `https://yourusername.github.io/portfolio`

---

## Custom Domain (Optional)

If you have a custom domain:

1. Go to repository settings → GitHub Pages
2. Under "Custom domain", enter your domain (e.g., `yourname.com`)
3. Click Save
4. Update your domain's DNS settings to point to GitHub Pages:
   ```
   A record: 185.199.108.153
   A record: 185.199.109.153
   A record: 185.199.110.153
   A record: 185.199.111.153
   ```
   Or add a CNAME record pointing to `yourusername.github.io`

---

## Updating Your Portfolio

After deployment, if you want to make changes:

1. Edit files locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. Changes will appear on your site within minutes

---

## Troubleshooting

**Site not showing?**
- Wait 1-2 minutes for GitHub Pages to build
- Check that the repository is public
- Verify files are in the root directory

**Page looks broken?**
- Check the browser console (F12) for errors
- Verify all file paths are correct
- Ensure CSS and JS files are in the same directory as index.html

**Custom domain not working?**
- DNS changes can take up to 48 hours
- Verify DNS records are correctly configured
- Check GitHub Pages settings for any error messages

---

## Next Steps

- Add a profile picture to your hero section
- Create a `/projects` folder for portfolio projects
- Add a blog section for articles
- Integrate a contact form (using services like Formspree or Netlify)
- Add dark mode toggle
