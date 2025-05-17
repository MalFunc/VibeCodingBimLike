import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const isDev = !app.isPackaged;
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  if (isDev) {
    win.loadURL("http://localhost:5173");
  } else {
    // Menggunakan path file HTML hasil build Vite
    win.loadFile(path.join(__dirname, "dist", "index.html"));
  }
}

app.whenReady().then(createWindow);
