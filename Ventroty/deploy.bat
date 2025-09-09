@echo off
set IMAGE=ventrory
set PORT=8080

echo 🚀 Building Docker image...
docker build -t %IMAGE%:latest .

echo 🛑 Stopping existing container (if any)...
docker stop %IMAGE% >nul 2>&1
docker rm %IMAGE% >nul 2>&1

echo ▶️ Running new container...
docker run -d -p %PORT%:80 --name %IMAGE% %IMAGE%:latest

echo ✅ Done! Open http://localhost:%PORT%
pause
