# Tasfi Fairoz Nidhi — Portfolio

A personal portfolio site built with React + Vite, deployable to Vercel.

## 🚀 Deploy to Vercel

### Option 1: Via GitHub (Recommended)
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** — done!

### Option 2: Vercel CLI
```bash
npm install -g vercel
cd portfolio
npm install
vercel
```

## 🛠 Local Development
```bash
npm install
npm run dev
```

## 📝 How to Add a New Blog Post

Open `src/data/blogs.js` and add a new object to the `blogs` array:

```js
{
  id: "my-new-post",          // URL slug: /blog/my-new-post
  title: "My Post Title",
  subtitle: "A short description shown in the list",
  date: "2025-05-01",
  readTime: "5 min read",
  tags: ["Tag1", "Tag2"],
  content: `
## Introduction

Your markdown content goes here. You can use:
- **bold text**
- \`inline code\`
- Code blocks with triple backticks
- ## Headings
  `
}
```

## 📂 How to Update Your Info

All your personal data is in `src/data/portfolio.js`:
- `personalInfo` — name, bio, links, education
- `experiences` — work history
- `projects` — your projects
- `skills` — skill categories
- `competitive` — CP profiles
- `achievements` — contest results

## 📄 Resume / CV

Place your resume PDF at `public/resume.pdf` to enable the Download CV button.

## 🎨 Customization

Colors and fonts are in `src/index.css` under `:root` CSS variables.
