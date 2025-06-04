# GitHub-Graphite Navigator

A Chrome extension that lets you quickly navigate between GitHub and Graphite pull requests using Command+O (Mac) or Ctrl+O (Windows/Linux).

## Features

- Press **Command+O** (Mac) or **Ctrl+O** (Windows/Linux) to instantly switch between:
  - GitHub PR → Graphite PR view
  - Graphite PR → GitHub PR view
- Works on pull request pages only
- Lightweight and fast

## Installation

### Method 1: Load as Unpacked Extension (Developer Mode)

1. Clone or download this repository to your local machine
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** by toggling the switch in the top right corner
4. Click **Load unpacked** button
5. Select the folder containing this extension (the one with `manifest.json`)
6. The extension icon should appear in your extensions bar

### Method 2: Manual Installation

1. Download all files:
   - `manifest.json`
   - `content.js`
   - `icon.png`
2. Place them in a new folder on your computer
3. Follow steps 2-6 from Method 1 above

## Usage

1. Navigate to any GitHub pull request (e.g., `https://github.com/owner/repo/pull/123`)
2. Press **Command+O** (Mac) or **Ctrl+O** (Windows/Linux)
3. You'll be redirected to the same PR in Graphite (`https://app.graphite.dev/github/pr/owner/repo/123`)
4. Press the same shortcut again to go back to GitHub

## Permissions

This extension requires no special permissions. It only runs on:
- `github.com` pages
- `app.graphite.dev` pages

## Troubleshooting

- **Extension not working?** Make sure you're on a pull request page (not issues or other pages)
- **Shortcut conflict?** The Command+O / Ctrl+O shortcut might conflict with browser's "Open File" command. The extension will override it on GitHub and Graphite pages only
- **Can't see the extension?** Check that Developer mode is enabled in chrome://extensions/

## Development

To modify the extension:
1. Edit the files as needed
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card to reload changes

## License

This extension is provided as-is for personal use.