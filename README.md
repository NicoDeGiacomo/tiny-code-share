# Tiny Code Share

<div align="center">

![Tiny Code Share Logo](https://github.com/NicoDeGiacomo/tiny-code-share/raw/main/src/app/favicon.ico)

**Share code snippets instantly with privacy in mind.**

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-black)](https://nextjs.org/)

</div>

## 🚀 About

**Tiny Code Share** is a lightweight, privacy-focused code sharing tool that lets you instantly share code snippets without any server storage. Your code is never logged or stored on any backend - everything happens client-side in your browser.

### ✨ Key Features

- **🔒 Private By Design**: Code snippets are never stored on servers
- **⚡ Fast & Straightforward**: No sign-ups, no accounts, just share and go
- **🌐 URL Fragment Sharing**: Uses the URL fragment (# part) to store and share code
- **🎨 Syntax Highlighting**: Automatic language detection for proper syntax highlighting
- **📱 Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

- Next.js 15
- React 18
- Monaco Editor for code editing
- highlight.js for syntax highlighting
- LZ-String for code compression

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NicoDeGiacomo/tiny-code-share.git
   cd tiny-code-share
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🔍 How It Works

1. **Write or Paste Code**: Enter your code in the editor
2. **Optional Language Selection**: Choose a language or let the app detect it automatically
3. **Generate Link**: Click "Generate Code Link" and share the URL with others
4. **Privacy Preserved**: The code is compressed and stored in the URL fragment (after the #), never sent to our servers

## 🌎 Deployment

Deploy on Vercel for the best experience:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNicoDeGiacomo%2Ftiny-code-share)

You can also deploy to any static hosting service like GitHub Pages, Netlify, or Cloudflare Pages.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [highlight.js](https://highlightjs.org/)
- [LZ-String](https://github.com/pieroxy/lz-string)

