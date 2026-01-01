# Trevor Jerideau's Personal Website

A lightweight, modern personal website built with **Astro** and **Markdown**, designed for easy content management and free hosting on GitHub Pages.

## 🚀 Features

- **Markdown-based content** - Write pages in simple Markdown
- **Fast & lightweight** - Built with Astro for optimal performance
- **Responsive design** - Looks great on all devices
- **Free hosting** - Deployed automatically to GitHub Pages
- **Easy to customize** - Clean, simple codebase

## 📁 Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── public/                  # Static assets (favicon, images, etc.)
├── src/
│   ├── layouts/
│   │   ├── Layout.astro           # Base HTML layout
│   │   └── MarkdownLayout.astro   # Layout for Markdown pages
│   └── pages/
│       ├── index.astro      # Homepage
│       └── about.md         # About page (Markdown example)
├── astro.config.mjs         # Astro configuration
└── package.json
```

## 🛠️ Setup Instructions

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `trevorjerideau.com` (or any name you prefer)
3. **Do NOT** initialize with README, .gitignore, or license

### 2. Push Code to GitHub

From your local project directory, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/trevorjerideau.com.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy your site

### 4. Access Your Website

Your site will be available at:
- `https://YOUR_USERNAME.github.io/trevorjerideau.com/` (if repo name is trevorjerideau.com)
- Or `https://YOUR_USERNAME.github.io/` (if repo name is YOUR_USERNAME.github.io)

## 🌐 Custom Domain Setup (Optional)

### Using Cloudflare (Free)

1. **Buy your domain** (trevorjerideau.com) from any registrar
2. **Add domain to Cloudflare**:
   - Sign up at [Cloudflare](https://cloudflare.com)
   - Add your domain
   - Update nameservers at your registrar

3. **Configure DNS in Cloudflare**:
   - Add these DNS records:
     ```
     Type: CNAME
     Name: @
     Target: YOUR_USERNAME.github.io
     Proxy: Enabled (orange cloud)

     Type: CNAME
     Name: www
     Target: YOUR_USERNAME.github.io
     Proxy: Enabled (orange cloud)
     ```

4. **Configure GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Under **Custom domain**, enter `trevorjerideau.com`
   - Check **Enforce HTTPS**

5. **Update Astro config**:
   Edit `astro.config.mjs`:
   ```javascript
   export default defineConfig({
     site: 'https://trevorjerideau.com',
   });
   ```

6. **Create CNAME file**:
   Add a file `public/CNAME` with content:
   ```
   trevorjerideau.com
   ```

7. **Push changes and wait** for DNS propagation (can take 24-48 hours)

## 📝 Adding Content

### Create a New Markdown Page

1. Create a new `.md` file in `src/pages/`:
   ```bash
   src/pages/blog.md
   ```

2. Add frontmatter and content:
   ```markdown
   ---
   layout: ../layouts/MarkdownLayout.astro
   title: Blog
   ---

   # My Blog

   This is my blog page content in **Markdown**.
   ```

3. The page will be automatically available at `/blog`

### Edit Existing Pages

- **Homepage**: Edit `src/pages/index.astro`
- **About page**: Edit `src/pages/about.md`
- **Styling**: Modify the `<style>` sections in layout files

## 🧞 Commands

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |

## 💡 Tips

- **Local development**: Run `pnpm dev` to see changes in real-time
- **Markdown files** automatically become pages at their file path
- **Images**: Place in `public/` folder and reference as `/image.png`
- **Styling**: Use the global styles in `Layout.astro` or component-specific styles

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Cloudflare DNS Setup](https://developers.cloudflare.com/dns/)

## 🎨 Customization Ideas

- Add a blog with Markdown posts
- Create a portfolio section
- Add contact form (using Formspree or similar)
- Integrate analytics (Google Analytics, Plausible)
- Add dark mode toggle
- Include social media links

---

Built with ❤️ using [Astro](https://astro.build)
