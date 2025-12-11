# Toolkit SaaS

A modern, full-stack SaaS application for PDF processing built with Next.js and FastAPI. Process PDFs with ease - compress, merge, convert, view, and extract text from PDF documents.

## 🚀 Features

### PDF Tools
- **Compress PDF** - Reduce PDF file size while maintaining quality
- **Merge PDFs** - Combine multiple PDF files into a single document
- **PDF to Image** - Convert PDF pages to PNG or JPG images
- **Image to PDF** - Convert multiple images into a single PDF document
- **View PDF** - View PDF files with browser's built-in controls (zoom, print, download)
- **Extract Text** - Extract text from PDFs and images with OCR support
- **Protect PDF** - Add password protection to secure your PDF files (AES encryption)
- **Unlock PDF** - Remove password protection from encrypted PDFs

### User Experience
- 🎨 Clean, modern SaaS-style interface
- 📤 Drag & drop file upload
- 📊 Real-time progress indicators
- 🔔 Toast notifications for feedback
- 👁️ Password visibility toggle
- ❌ Inline error validation
- 📱 Fully responsive design
- ⚡ Fast processing with async operations
- 🗑️ Automatic file cleanup (files deleted after 1 hour)

## 🛠️ Tech Stack

**Frontend:** Next.js 14, TypeScript, TailwindCSS, Axios  
**Backend:** FastAPI (Python), pypdf, pillow, pdf2image, reportlab, pytesseract

## 🚦 Quick Start with Docker

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running

### Run the Application

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/toolkit-saas.git
   cd toolkit-saas
   ```

2. **Start with Docker Compose**
   ```bash
   docker compose up --build
   ```

3. **Access the application**
   - **Frontend**: http://localhost:3000
   - **Backend API**: http://localhost:8005
   - **API Docs**: http://localhost:8005/docs

### Stop the Application

```bash
docker compose down
```

That's it! No manual dependency installation needed.

## 🎯 Usage

1. Open http://localhost:3000 in your browser
2. Select a tool from the sidebar:
   - **Compress PDF** - Reduce file size
   - **Merge PDFs** - Combine multiple PDFs
   - **PDF to Image** - Convert to PNG/JPG
   - **Image to PDF** - Convert images to PDF
   - **View PDF** - Preview PDF files
   - **Extract Text** - Extract text with OCR
   - **Protect PDF** - Add password protection
   - **Unlock PDF** - Remove password protection
3. Drag & drop files or click to browse
4. Configure settings (quality, format, password, etc.)
5. Click process and download the result

## 📥 System Dependencies (Optional - For Local Development)

**Note:** If using Docker, all dependencies are pre-installed in the containers. Only install these if running without Docker.

### Poppler (Required for PDF to Image)

**macOS:**
```bash
brew install poppler
```

**Ubuntu/Debian:**
```bash
sudo apt-get install poppler-utils
```

**Windows:**
Download from [Poppler for Windows](http://blog.alivate.com.au/poppler-windows/) and add to PATH

**Verify:**
```bash
which pdftoppm
```

### Tesseract OCR (Required for Image Text Extraction)

**macOS:**
```bash
brew install tesseract
```

**Ubuntu/Debian:**
```bash
sudo apt-get install tesseract-ocr
```

**Windows:**
Download from [Tesseract GitHub](https://github.com/UB-Mannheim/tesseract/wiki)

**Verify:**
```bash
which tesseract
```

### Ghostscript (Optional - Better PDF Compression)

**macOS:**
```bash
brew install ghostscript
```

**Ubuntu/Debian:**
```bash
sudo apt-get install ghostscript
```

**Windows:**
Download from [Ghostscript Downloads](https://www.ghostscript.com/download/gsdnld.html)

**Verify:**
```bash
which gs
```

## 🔧 Development Commands

### Docker Development
```bash
# Start in development mode
docker compose up

# Rebuild after code changes
docker compose up --build

# Run in background
docker compose up -d

# View logs
docker compose logs -f

# Stop containers
docker compose down

# Clean everything (containers, volumes, images)
docker compose down -v
docker system prune -a
```

### Backend Development (inside container)
```bash
# Access backend container
docker compose exec backend bash

# Format code
black app/

# Type checking
mypy app/
```

### Frontend Development (inside container)
```bash
# Access frontend container
docker compose exec frontend sh

# Lint code
npm run lint
```

## 🚀 Deployment

### Docker Hub
```bash
# Build and tag images
docker compose build
docker tag toolkit-saas-backend yourusername/toolkit-backend:latest
docker tag toolkit-saas-frontend yourusername/toolkit-frontend:latest

# Push to Docker Hub
docker push yourusername/toolkit-backend:latest
docker push yourusername/toolkit-frontend:latest
```

### Cloud Platforms

**Render / Railway / Fly.io:**
1. Push code to GitHub
2. Connect repository to platform
3. Platform will auto-detect Docker configuration
4. Deploy automatically

**Vercel (Frontend) + Render (Backend):**
1. Deploy frontend to Vercel
2. Deploy backend to Render using Docker
3. Update `NEXT_PUBLIC_API_URL` environment variable

## 🔒 Security Considerations

- ✅ File validation on upload
- ✅ Temporary file cleanup (auto-cleanup every 30 minutes)
- ✅ CORS configuration
- ⚠️ Add rate limiting in production
- ⚠️ Implement file size limits
- ⚠️ Use HTTPS in production
- ⚠️ Sanitize file names
- ⚠️ Add authentication for sensitive operations
- ⚠️ Set up environment variables properly
- ⚠️ Use secrets management for production

## 🐛 Troubleshooting

### Docker Issues

**Docker daemon not running:**
- Start Docker Desktop application
- Wait for Docker to fully start (check menu bar icon)

**Port already in use:**
- Stop other services on ports 3000 or 8005
- Or modify ports in `docker-compose.yml`:
  ```yaml
  ports:
    - "3001:3000"  # Frontend
    - "8006:8000"  # Backend
  ```

**Build errors:**
```bash
docker compose down
docker compose up --build
```

**Container keeps restarting:**
```bash
# Check logs
docker compose logs backend
docker compose logs frontend

# Common issues:
# - Missing dependencies (rebuild with --build)
# - Port conflicts (change ports)
# - File permission issues (check volumes)
```

**Out of disk space:**
```bash
# Clean up Docker
docker system prune -a
docker volume prune
```

### Application Issues

**API Connection Error:**
- Verify both containers are running: `docker compose ps`
- Check backend logs: `docker compose logs backend`
- Ensure CORS settings allow frontend URL

**File Upload Fails:**
- Check file size (default limit may apply)
- Verify file format is supported
- Check backend logs for errors

**PDF Processing Errors:**
- All dependencies (Poppler, Tesseract) are included in Docker image
- Check backend logs for specific error messages

## 🎨 Features Roadmap

- [x] PDF encryption/decryption ✅
- [ ] Batch file processing
- [ ] PDF splitting by page range
- [ ] Watermark addition
- [ ] Page rotation and reordering
- [ ] Cloud storage integration (S3, Google Drive)
- [ ] Email delivery of processed files
- [ ] User accounts and file history
- [ ] API rate limiting
- [ ] Payment integration (Stripe)
- [ ] PDF form filling
- [ ] Digital signatures
- [ ] Collaborative editing
- [ ] PDF metadata editing
- [ ] Advanced compression options

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test with Docker**
   ```bash
   docker compose up --build
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines
- Follow existing code style
- Add tests for new features
- Update documentation as needed
- Ensure Docker build works
- Keep commits atomic and descriptive

## 📄 License

MIT License - Free to use for personal and commercial projects.

## 📧 Support

For issues or questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Provide detailed error logs when reporting bugs

---

**Built with ❤️ using Next.js and FastAPI**
