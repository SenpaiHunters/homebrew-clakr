class Clakr < Formula
  desc "Description of Clakr"
  homepage "https://github.com/SenpaiHunters/Clakr"
  url "https://github.com/SenpaiHunters/Clakr/releases/latest/download/clakr.app.zip"
  sha256 "SHA256 of the tarball"

  def install
    # Install or smth
    bin.install "clakr"
  end

  test do
    system "#{bin}/clakr", "--version"
  end
end