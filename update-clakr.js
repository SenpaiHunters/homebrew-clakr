/**
 * Clakr Homebrew Cask Updater
 * 
 * This script automates the process of updating the Homebrew cask for the Clakr application,
 * an open-source macOS auto-clicker. It fetches the latest release tag from GitHub, computes
 * the SHA256 checksum of the release's .app.zip file, and updates the Clakr cask file accordingly.
 * 
 * Created by: Kami
 * Main Repository: https://github.com/SenpaiHunters/Clakr
 * Current Repository: https://github.com/SenpaiHunters/homebrew-clakr
 * 
 * Quickstart Guide:
 * 1. Ensure Bun is installed on your system.
 * 2. Run the script: `bun update-clakr.js`.
 * If this fails, ensure all necessary dependencies are installed.
 * 
 * This script requires Bun but can work with Node.js and uses the node-fetch module to make HTTP requests.
 * It is designed to be run in environments where Bun is available.
 */

import { readFile, writeFile } from 'fs/promises';
import { createHash } from 'crypto';
import { pipeline } from 'stream/promises';
import fetch from 'node-fetch'; // fallback for Node if you're not using Bun

const CASK_FILE_PATH = './casks/clakr.rb';
const GITHUB_RELEASES_URL = 'https://github.com/SenpaiHunters/Clakr/releases/latest';

async function fetchLatestReleaseTag() {
  const response = await fetch(GITHUB_RELEASES_URL);
  if (!response.ok) throw new Error(`Failed to fetch GitHub releases page: ${response.statusText}`);
  const html = await response.text();
  const match = html.match(/href="\/SenpaiHunters\/Clakr\/releases\/tag\/([^"]+)"/);
  if (!match || !match[1]) throw new Error('Could not find the latest release tag on the GitHub releases page.');
  return match[1];
}

async function computeSha256FromUrl(url) {
  const response = await fetch(url);
  if (!response.body) throw new Error('Failed to get response body');
  const hash = createHash('sha256');
  await pipeline(response.body, hash);
  return hash.digest('hex');
}

async function updateClakrCask(latestVersion, sha256) {
  const caskContent = await readFile(CASK_FILE_PATH, 'utf8');
  const updatedContent = caskContent
    .replace(/version ".*"/, `version "${latestVersion}"`)
    .replace(/sha256 ".*"/, `sha256 "${sha256}"`);
  await writeFile(CASK_FILE_PATH, updatedContent, 'utf8');
}

async function main() {
  try {
    const latestTag = await fetchLatestReleaseTag();
    console.log(`Latest release tag: ${latestTag}`);

    const downloadUrl = `https://github.com/SenpaiHunters/Clakr/releases/download/${latestTag}/clakr.app.zip`;
    const caskContent = await readFile(CASK_FILE_PATH, 'utf8');
    const currentVersionMatch = caskContent.match(/version "(.*)"/);
    const currentVersion = currentVersionMatch ? currentVersionMatch[1] : null;

    if (currentVersion === latestTag) {
      console.log('Clakr is up to date. No update necessary.');
      return;
    }

    const sha256 = await computeSha256FromUrl(downloadUrl);
    await updateClakrCask(latestTag, sha256);
    console.log(`Clakr updated to version ${latestTag}. Please review and commit the changes.`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

main();