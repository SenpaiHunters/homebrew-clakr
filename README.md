# Clakr Homebrew Cask Updater

This repository hosts the automation script and configuration necessary for updating the Homebrew cask of Clakr, an open-source macOS auto-clicker. The purpose of this repository is to streamline the process of keeping the Clakr cask up-to-date with the latest releases, ensuring that Homebrew users can easily install or update Clakr on their macOS devices.

## Overview

Clakr simplifies repetitive clicking tasks on macOS, and this repository ensures that its distribution through Homebrew remains seamless and efficient. By automating updates, we reduce the delay between a new Clakr release and its availability to users, enhancing the overall user experience.

## Key Components

- **`update-clakr.js`:** A script written for Bun, designed to automate the update workflow. It fetches the latest Clakr release tag from GitHub, computes the SHA256 checksum of the release's `.app.zip` file, and updates the Clakr cask file accordingly.
- **`casks/clakr.rb`:** The Homebrew cask file for Clakr, containing essential metadata like the version, SHA256 checksum, and the download URL, which Homebrew uses to install or update Clakr.

## Workflow

1. **Fetch the Latest Release:** Initiates a query to GitHub's API to retrieve the most recent release tag for Clakr.
2. **Compute SHA256 Checksum:** Downloads the latest `.app.zip` file and calculates its SHA256 checksum to ensure integrity.
3. **Update the Cask File:** Modifies `casks/clakr.rb` with the new version number and checksum.
4. **Manual Review and Commit:** Requires a manual review and commit post-execution to ensure accuracy and prevent unintended changes.

## Getting Started

### Prerequisites

- Bun installed on your macOS system. Bun offers a more efficient runtime for JavaScript and TypeScript, making it ideal for this script.

### Running the Script

Execute the following command in your terminal:

```bash
bun update-clakr.js
```

> [!NOTE]
>
> While Bun is recommended for its performance benefits, the script includes compatibility for Node.js as a fallback. If you prefer or only have Node.js, you can run the script with `node update-clakr.js`.

### Expected Outcome

If the Clakr cask is already up-to-date, the script will exit without making any changes. Otherwise, it will update the cask file with the latest release information, ready for manual review and commit.

## How to Contribute

Your contributions are welcome! If you have suggestions for improving the script or the update process, please:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
