@echo off
setlocal enabledelayedexpansion

echo Starting Pet-Friendly Cities setup...

:: Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Node.js is not installed. Please install Node.js v14.0.0 or higher.
    exit /b 1
)

:: Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo npm is not installed. Please install npm v6.0.0 or higher.
    exit /b 1
)

:: Create necessary directories
echo Creating project directories...
if not exist "public\images" mkdir "public\images"
if not exist "src\components" mkdir "src\components"

:: Install dependencies
echo Installing dependencies...
call npm install

:: Create .env file if it doesn't exist
if not exist ".env" (
    echo Creating .env file...
    echo REACT_APP_API_URL=http://localhost:3000 > .env
)

:: Check for required images
echo Checking required images...
set "missing_images="
for %%i in (hero.jpg hero3.png) do (
    if not exist "public\images\%%i" (
        set "missing_images=!missing_images! %%i"
    )
)

if defined missing_images (
    echo Warning: The following images are missing from public\images\:
    for %%i in (!missing_images!) do (
        echo - %%i
    )
    echo Please add these images to continue.
)

echo.
echo Setup completed successfully!
echo.
echo To start the development server, run:
echo npm start

endlocal 