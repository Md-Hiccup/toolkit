# Development Commands

## Running Frontend & Backend Separately

### Backend (FastAPI)

**Option 1: Using Uvicorn directly**
```bash
cd /Users/mohammadhussain/CascadeProjects/toolkit-saas/backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8005
```

**Option 2: Using Python module**
```bash
cd /Users/mohammadhussain/CascadeProjects/toolkit-saas/backend
python3 -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8005
```

**With Virtual Environment:**
```bash
cd /Users/mohammadhussain/CascadeProjects/toolkit-saas/backend
source venv/bin/activate  # Activate virtual environment
uvicorn app.main:app --reload --host 0.0.0.0 --port 8005
```

Backend will run on: `http://localhost:8005`
- `--reload` enables auto-reload on file changes
- API docs available at: `http://localhost:8005/docs`

---

### Frontend (Next.js)

```bash
cd /Users/mohammadhussain/CascadeProjects/toolkit-saas/frontend
npm run dev
```

Frontend will run on: `http://localhost:3000`
- Hot reload is enabled by default in Next.js dev mode
- Changes to `.tsx`, `.ts`, `.css` files will auto-reload

---

## Docker Commands

### Run with Docker Compose (Hot Reload Enabled)

**Start services:**
```bash
cd /Users/mohammadhussain/CascadeProjects/toolkit-saas
docker compose up
```

**Start with rebuild:**
```bash
docker compose up --build
```

**Run in background (detached mode):**
```bash
docker compose up -d
```

**Watch for changes and auto-reload (Docker Compose v2.22+):**
```bash
docker compose watch
```

**Stop services:**
```bash
docker compose down
```

**View logs:**
```bash
# All services
docker compose logs -f

# Backend only
docker compose logs -f backend

# Frontend only
docker compose logs -f frontend
```

**Restart specific service:**
```bash
# Restart backend
docker compose restart backend

# Restart frontend
docker compose restart frontend
```

---

## Development Workflow

### Option 1: Run Separately (Recommended for Development)

**Terminal 1 - Backend:**
```bash
cd /Users/mohammadhussain/CascadeProjects/toolkit-saas/backend
source venv/bin/activate
uvicorn app.main:app --reload --host 0.0.0.0 --port 8005
```

**Terminal 2 - Frontend:**
```bash
cd /Users/mohammadhussain/CascadeProjects/toolkit-saas/frontend
npm run dev
```

**Benefits:**
- ✅ Faster hot reload
- ✅ Better error messages
- ✅ Easier debugging
- ✅ No Docker overhead

---

### Option 2: Run with Docker

```bash
cd /Users/mohammadhussain/CascadeProjects/toolkit-saas
docker compose up
```

**Benefits:**
- ✅ Consistent environment
- ✅ Easy deployment simulation
- ✅ All services in one command

---

## Hot Reload Configuration

### Backend Hot Reload (Already Configured)
The `--reload` flag in uvicorn watches for file changes:
- Watches: `*.py` files
- Auto-restarts on changes
- Works in both Docker and local mode

### Frontend Hot Reload (Already Configured)
Next.js dev mode has built-in Fast Refresh:
- Watches: `*.tsx`, `*.ts`, `*.jsx`, `*.js`, `*.css`
- Instant updates without full reload
- Preserves component state

### Docker Hot Reload
Your `docker-compose.yml` already has volumes mounted for hot reload:

**Backend volumes:**
```yaml
volumes:
  - ./backend:/app
  - ./backend/uploads:/app/uploads
  - ./backend/temp:/app/temp
```

**Frontend volumes (if needed, add to docker-compose.yml):**
```yaml
volumes:
  - ./frontend:/app
  - /app/node_modules
  - /app/.next
```

---

## Quick Reference

| Task | Command |
|------|---------|
| Start Backend | `cd backend && uvicorn app.main:app --reload --host 0.0.0.0 --port 8005` |
| Start Frontend | `cd frontend && npm run dev` |
| Start Both (Docker) | `docker compose up` |
| Rebuild Docker | `docker compose up --build` |
| Stop Docker | `docker compose down` |
| View Logs | `docker compose logs -f` |
| Restart Backend | `docker compose restart backend` |
| Backend URL | http://localhost:8005 |
| Frontend URL | http://localhost:3000 |
| API Docs | http://localhost:8005/docs |

---

## Troubleshooting

### Backend won't start
```bash
# Check if port 8005 is in use
lsof -i :8005

# Kill process on port 8005
kill -9 $(lsof -t -i:8005)

# Or use different port
uvicorn app.main:app --reload --host 0.0.0.0 --port 8006
```

### Frontend won't start
```bash
# Check if port 3000 is in use
lsof -i :3000

# Kill process on port 3000
kill -9 $(lsof -t -i:3000)

# Or use different port
PORT=3001 npm run dev
```

### Docker issues
```bash
# Remove all containers and rebuild
docker compose down -v
docker compose up --build

# Clear Docker cache
docker system prune -a
```

### Module not found errors
```bash
# Backend
cd backend
source venv/bin/activate
pip install -r requirements.txt

# Frontend
cd frontend
npm install
```
