(async () => {

	const [ release ] = await (await fetch("https://api.github.com/repos/storj/storj/releases")).json();

	const { name } = release;
	const { browser_download_url } = release.assets.find(asset => asset.name === "uplink_linux_amd64.zip");

	if(await Deno.readTextFile("./version").trim() === name.slice(1).trim()) {
		throw new Error("No new binary version");
	}

	await Deno.writeTextFile("./version", name.slice(1).trim());

	const output = `
_pkgname=storj
pkgname=$_pkgname
pkgver=${name.slice(1)}
pkgrel=1
pkgdesc=""
arch=("x86_64")
url=""
license=("")
depends=( )
optdepends=( )
conflicts=("$_pkgname")
provides=("$_pkgname")
source=( ${JSON.stringify(browser_download_url)} )
noextract=( "uplink_linux_amd64.zip" )
sha256sums=( "" )

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
	`.trim();

	console.log(output);
		
})();
