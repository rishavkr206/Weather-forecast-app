# Weather Forecast App

A minimal client-side weather forecast app that fetches current weather for a city using the OpenWeatherMap API. The app is plain HTML/CSS/JavaScript and runs in the browser.

## What this repo contains

- `index.html` – Simple UI with a text input and a search button.
- `style.css` – Styles for the app UI.
- `script.js` – Fetches weather data from OpenWeatherMap and renders results.

## Features

- Search weather by city name
- Shows temperature (°C), condition, humidity, and an icon
- Press Enter to submit the search

## Prerequisites

- A web browser (Chrome, Edge, Firefox, etc.)
- (Optional) `git` and PowerShell installed to push to GitHub
- An OpenWeatherMap API key (https://openweathermap.org/)

## Local usage

1. Open `index.html` in your browser (double-click the file or right-click -> Open with).

2. Replace the demo API key in `script.js` with your own key before publishing:

	- Open `script.js` and set the `apiKey` constant to your key:

```
// script.js (edit this value)
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
```

3. Enter a city name in the input and click Search (or press Enter).

Optional: Run a simple local server (helps with some browser fetch/security rules). In PowerShell you can run:

```powershell
# from the project folder
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

## How to push this project to GitHub (PowerShell)

Below are exact commands you can run from PowerShell in the project folder (`C:\Users\risha\OneDrive\Desktop\Weather Forecast app (Vibe)`). They include steps to handle the common "fatal: refusing to merge unrelated histories" error.

1. Check git status and remote:

```powershell
git status
git remote -v
```

2. If the `origin` remote is not set to your repository, add it (your repo URL shown here):

```powershell
git remote add origin https://github.com/rishavkr206/Weather-forecast-app.git
```

3. Stage and commit your local changes (change the commit message as desired):

```powershell
git add .
git commit -m "Initial local commit: add weather app files"
```

4. Pull remote changes and allow merging unrelated histories (this is safe when the remote has an initial commit or different history):

```powershell
git pull origin main --allow-unrelated-histories
```

Notes:
- If there are merge conflicts, Git will pause and show conflicting files. Open the files, resolve conflicts, then run:

```powershell
# after resolving conflicts in the files
git add .
git commit -m "Resolve merge conflicts"
```

5. Push your commits to the remote `main` branch:

```powershell
git push origin main
```

Important: If the remote contains work you intentionally want to overwrite (not recommended), you can force push, but be careful — this will replace remote history:

```powershell
# use only if you're sure and willing to overwrite remote history
git push origin main --force
```

## Troubleshooting

- "Updates were rejected because the remote contains work that you do not have locally": run step 4 (`git pull ... --allow-unrelated-histories`) and resolve any conflicts.
- Authentication failures: make sure your Git is configured to authenticate with GitHub. On Windows you can use Git Credential Manager, SSH keys, or a personal access token (PAT) with HTTPS.
- Browser CORS/fetch problems when opening `index.html` directly: run the simple local server in the Optional section above.

## Security note

- Do not commit your private API key to a public repository. For this simple demo the key is kept in `script.js`. If you publish this repo and want to keep the key private, remove it from the file and use a server-side proxy or environment variables.

## License

Add your preferred license or leave it unlicensed. Example: MIT.

---

If you want, I can now:

- run the exact push commands for you in PowerShell (I can do the pull+merge step — say yes to proceed), or
- just leave the `README.md` and you can run the commands yourself.

Which would you prefer?
# Weather-forecast-app

