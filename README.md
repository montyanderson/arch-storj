# arch-storj

[![build](https://github.com/montyanderson/arch-storj/actions/workflows/build.yml/badge.svg)](https://github.com/montyanderson/arch-storj/actions/workflows/build.yml)

> Disclaimer: This project is in no way endorsed or officially support by Storj Labs and was created *as an experiment*.

This repository uses Github Actions to create an automated software repository for Arch Linux providing the `uplink` binary.

Every day the official `storj/storj` repo is checked and a package built from the latest release.

## Usage

* Add this to your `/etc/pacman.conf` file.

```
[storj]
Server = https://montyanderson.github.io/arch-storj/$arch
SigLevel = Never
```

* Install the `storj` package

```
sudo pacman -S storj
```

* Run uplink ;)

```
uplink version
```
