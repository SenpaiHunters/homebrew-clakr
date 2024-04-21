class Clakr < Formula
    desc "Description of Clakr"
    homepage "https://github.com/SenpaiHunters/Clakr"
    url "https://github.com/SenpaiHunters/Clakr/releases/latest/download/clakr.app.zip"
    version "1.1"
    sha256 "a2c6d8622e520ee0b1c0a2b97b2eb1a5b850031cd43da41fb01bc34e10d0fde5"
  
    def install
      bin.install "clakr"
    end
  
    test do
      system "#{bin}/clakr", "--version"
    end
  end