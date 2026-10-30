@echo off
rem Optional: serve the game on http://localhost:8080 (only if double-clicking index.html does not work)
cd /d "%~dp0"
start "" http://localhost:8080
py -m http.server 8080 || python -m http.server 8080
