cask "clakr" do
    version "1.1"
    sha256 "a2c6d8622e520ee0b1c0a2b97b2eb1a5b850031cd43da41fb01bc34e10d0fde5"
  
    url "https://github.com/SenpaiHunters/Clakr/releases/latest/download/clakr.app.zip"
    name "Clakr"
    desc "Description of Clakr"
    homepage "https://github.com/SenpaiHunters/Clakr"
  
    depends_on macos: ">= :monterey"
  
    app "Clakr.app"
  
    zap trash: [
      "~/Library/Application Support/Clakr",
      "~/Library/Preferences/com.senpaihunters.clakr.plist",
      "~/Library/Application Scripts/kami.dev.clakr",
      "~/Library/Containers/kami.dev.clakr",
      "~/Library/Logs/Homebrew/clakr",
      "~/Library/Preferences/kami.dev.clakr.plist",
      "~/Library/Saved Application State/kami.dev.clakr.savedState",
      # Add any other paths here if necessary
    ]
  
    caveats <<~EOS
      Thank you for installing Clakr! If you have any questions, please visit our homepage.
    EOS
  end