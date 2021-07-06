# arch-storj

> Disclaimer: This project is in no way endorsed or officially support by Storj Labs and was created *as an experiment*.

## Usage

Add this to your `/etc/pacman.conf` file.

```
[storj]
Server = https://montyanderson.github.io/arch-storj/$arch
SigLevel = Never
```

```
sudo pacman -S storj-bin
```