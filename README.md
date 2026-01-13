# Toolkit SaaS

A modern, full-stack SaaS application built with Next.js and FastAPI. A comprehensive toolkit featuring PDF processing, encoding/decoding utilities, JSON editing, text transformation, cryptographic hashing, and text generators - all in one place.

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

### Encoding & Decoding Tools
- **JWT** - Encode and decode JSON Web Tokens with custom secret keys and algorithms (HS256, HS384, HS512)
- **Base32** - Encode and decode Base32 strings
- **Base64** - Standard Base64 encoding and decoding
- **URL-safe Base64** - URL-safe Base64 encoding and decoding
- **MIME Base64** - MIME-compliant Base64 encoding and decoding
- **URL Encoding** - Encode and decode URL-encoded strings
- **HTML Encoding** - Encode and decode HTML entities
- **Unicode** - Escape and unescape Unicode characters

### Cryptography & Hashing
- **Hash Functions** - MD5, SHA1, SHA256, SHA512
- **HMAC** - HMAC-MD5, HMAC-SHA1, HMAC-SHA256, HMAC-SHA512 with secret keys
- **Secure Hashing** - Generate cryptographic hashes for data integrity

### JSON Tools
- **JSON Editor** - Advanced JSON editing with real-time validation
- **Format JSON** - Pretty-print JSON with proper indentation
- **Minify JSON** - Compress JSON by removing whitespace
- **JSON Query** - Query JSON data with JSONPath-like expressions
- **JSON Transform** - Transform and manipulate JSON structures
- **JSON Validation** - Validate JSON syntax and structure

### Text Transformation
- **Case Conversion** - Convert text to UPPERCASE, lowercase, or Title Case
- **Text Reversal** - Reverse text strings
- **Line Sorting** - Sort lines alphabetically

### Generators
- **UUID Generator** - Generate unique UUIDs (v4)
- **Lorem Ipsum** - Generate placeholder text (Lorem Ipsum or random text)
- **Random Text** - Generate random text with custom paragraph counts

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

**Frontend:** 
- Next.js 14, TypeScript, TailwindCSS
- Axios for API calls
- Zustand for state management
- React Hot Toast for notifications
- Lucide React for icons

**Backend:** 
- FastAPI (Python) with async support
- PDF Processing: pypdf, pillow, pdf2image, reportlab, pytesseract
- Authentication: PyJWT for token-based auth
- File handling: aiofiles for async file operations
- Environment: python-dotenv, pydantic-settings

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
2. Select a tool from the dashboard:
   
   **PDF Tools:**
   - Compress PDF, Merge PDFs, PDF to Image, Image to PDF
   - View PDF, Extract Text, Encrypt PDF, Decrypt PDF
   
   **Encoding/Decoding:**
   - JWT, Base32, Base64, URL-safe Base64, MIME Base64
   - URL Encoding, HTML Encoding, Unicode
   
   **Cryptography:**
   - Hash Functions (MD5, SHA1, SHA256, SHA512)
   - HMAC (MD5, SHA1, SHA256, SHA512)
   
   **JSON Tools:**
   - JSON Editor with formatting, minification, querying, and transformation
   
   **Text Tools:**
   - Case conversion, text reversal, line sorting
   
   **Generators:**
   - UUID Generator, Lorem Ipsum, Random Text

3. For file-based tools: Drag & drop files or click to browse
4. For text-based tools: Enter or paste your text/data
5. Configure settings (quality, format, password, secret keys, etc.)
6. Click process and get instant results or download files

## 🗄️ Database Setup (Optional - For Authentication)

The application includes a JWT-based authentication system that's ready to use. To enable it:

1. **Install PostgreSQL** (if not using Docker)
   ```bash
   # macOS
   brew install postgresql
   
   # Ubuntu/Debian
   sudo apt-get install postgresql
   ```

2. **Create Database**
   ```bash
   createdb toolkit_db
   ```

3. **Initialize Database**
   ```bash
   cd backend
   python init_db.py
   ```

4. **Update Environment Variables**
   ```bash
   # backend/.env
   DATABASE_URL=postgresql://user:password@localhost/toolkit_db
   SECRET_KEY=your-secret-key-here
   ACCESS_TOKEN_EXPIRE_MINUTES=30
   ```

**Note:** Authentication endpoints are implemented but not yet integrated into the frontend. The system is ready for user registration, login, and protected routes.

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

## 📡 API Endpoints

The backend provides a comprehensive REST API. Access the interactive API documentation at:
- **Swagger UI**: http://localhost:8005/docs
- **ReDoc**: http://localhost:8005/redoc

### Main Endpoint Categories

**PDF Operations** (`/pdf`)
- POST `/pdf/merge` - Merge multiple PDFs
- POST `/pdf/compress` - Compress PDF files
- POST `/pdf/pdf-to-image` - Convert PDF to images
- POST `/pdf/image-to-pdf` - Convert images to PDF
- POST `/pdf/extract-text` - Extract text from PDFs
- POST `/pdf/encrypt` - Encrypt PDF with password
- POST `/pdf/decrypt` - Decrypt password-protected PDF
- POST `/pdf/remove-password` - Remove PDF password

**Encoder/Decoder** (`/encoder`)
- JWT: `/jwt/encode`, `/jwt/decode`
- Base32: `/base32/encode`, `/base32/decode`
- Base64: `/base64/encode`, `/base64/decode`
- URL Base64: `/url-base64/encode`, `/url-base64/decode`
- MIME Base64: `/mime-base64/encode`, `/mime-base64/decode`
- URL: `/url/encode`, `/url/decode`
- HTML: `/html/encode`, `/html/decode`
- Unicode: `/unicode/escape`, `/unicode/unescape`
- Hash: `/hash/md5`, `/hash/sha1`, `/hash/sha256`, `/hash/sha512`
- HMAC: `/hmac/md5`, `/hmac/sha1`, `/hmac/sha256`, `/hmac/sha512`
- JSON: `/json/format`, `/json/minify`
- Text: `/text/upper`, `/text/lower`, `/text/title`, `/text/reverse`, `/text/sort`
- Generate: `/generate/uuid`, `/generate/lorem`

**JSON Editor** (`/json-editor`)
- POST `/json-editor/transform` - Transform, format, minify, query JSON
- POST `/json-editor/validate` - Validate JSON syntax

**Authentication** (`/auth`) - Ready for integration
- POST `/auth/register` - Register new user
- POST `/auth/login` - Login and get JWT token
- GET `/auth/me` - Get current user info

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

### Implemented ✅
- ✅ File validation on upload
- ✅ Temporary file cleanup (auto-cleanup every 30 minutes)
- ✅ CORS configuration
- ✅ JWT-based authentication system (ready for integration)
- ✅ Password hashing with bcrypt
- ✅ Secure token generation
- ✅ Environment variable configuration
- ✅ User tier system (Free/Premium)

### Production Recommendations ⚠️
- ⚠️ Enable authentication for all endpoints
- ⚠️ Add rate limiting in production
- ⚠️ Implement file size limits per user tier
- ⚠️ Use HTTPS in production
- ⚠️ Sanitize file names
- ⚠️ Use secrets management (AWS Secrets Manager, HashiCorp Vault)
- ⚠️ Set up database backups
- ⚠️ Implement request logging and monitoring
- ⚠️ Add CSRF protection
- ⚠️ Configure secure headers (HSTS, CSP, etc.)

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

### Completed ✅
- [x] PDF encryption/decryption
- [x] Encoding/Decoding tools (JWT, Base64, Base32, URL, HTML, Unicode)
- [x] Cryptographic hashing (MD5, SHA1, SHA256, SHA512, HMAC)
- [x] JSON Editor with advanced features
- [x] Text transformation tools
- [x] UUID and Lorem Ipsum generators
- [x] User authentication system (JWT-based)
- [x] Background file cleanup

### Planned 🚀
- [ ] User accounts and file history (authentication ready, needs integration)
- [ ] Batch file processing
- [ ] PDF splitting by page range
- [ ] Watermark addition
- [ ] Page rotation and reordering
- [ ] Cloud storage integration (S3, Google Drive)
- [ ] Email delivery of processed files
- [ ] API rate limiting
- [ ] Payment integration (Stripe) with tier system
- [ ] PDF form filling
- [ ] Digital signatures
- [ ] Collaborative editing
- [ ] PDF metadata editing
- [ ] Advanced compression options
- [ ] More encoding formats (Hex, Binary, ASCII85)
- [ ] Regular expressions tester
- [ ] Diff checker for text/JSON
- [ ] QR code generator
- [ ] Color converter (HEX, RGB, HSL)

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

## 📊 Project Statistics

- **8 PDF Tools** - Complete PDF processing suite
- **25+ Encoding/Decoding Tools** - Comprehensive text transformation
- **8 Cryptographic Functions** - Secure hashing and HMAC
- **5 JSON Operations** - Advanced JSON manipulation
- **6 Text Tools** - Text transformation utilities
- **3 Generators** - UUID and text generation
- **Authentication System** - JWT-based user management ready
- **Background Jobs** - Automatic file cleanup
- **Full Docker Support** - One-command deployment

---

**Built with ❤️ using Next.js 14 and FastAPI**

A comprehensive developer toolkit combining PDF processing, encoding utilities, cryptography, and text transformation - all in one modern SaaS application.
