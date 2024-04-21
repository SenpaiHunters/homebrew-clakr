class Clakr < Formula
    desc "Description of Clakr"
    homepage "https://github.com/SenpaiHunters/Clakr"
    url "https://github.com/SenpaiHunters/Clakr/releases/latest/download/clakr.app.zip"
    version "1.1"
    sha256 "SHA256 of the tarball"
  
    def install
      bin.install "clakr"
    end
  
    test do
      system "#{bin}/clakr", "--version"
    end
  end