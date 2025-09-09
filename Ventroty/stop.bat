@echo off
echo ⏹ Stopping container "ventrory"...

docker stop ventrory >nul 2>&1
docker rm ventrory >nul 2>&1

echo ✅ Container stopped and removed.
pause
