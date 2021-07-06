_pkgname=storj
pkgname=$_pkgname-bin
pkgver=1.33.1
pkgrel=1
pkgdesc=""
arch=("x86_64")
url=""
license=("")
depends=( )
optdepends=( )
conflicts=("$_pkgname")
provides=("$_pkgname")
source=("https://github.com/storj/storj/releases/download/v1.33.1/uplink_linux_amd64.zip")
noextract=( "uplink_linux_amd64.zip" )
sha256sums=("af160d353e3ad5054e876ba13d565fd7aaddeb344a49ddd0bee0097d23af6e29")

build() {
	cd "$srcdir/";

	gunzip uplink_linux_amd64.zip -c > uplink;
	chmod +x uplink;
}

package() {
	cd "$srcdir/";

	mkdir -p "$pkgdir/usr/bin/";
	mv uplink "$pkgdir/usr/bin/";
}
