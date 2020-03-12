# Instructions

From a freshly installed Debian system, install `wpa_supplicant`:

Set-up network in `/etc/network/interfaces`:

Gain root access:

```bash
su
```

Install `sudo`:

```bash
apt-get install git
apt-get install sudo
```

Add user to sudo group, then relog:

```bash
usermod -aG sudo [username]
exit
logout
```

Clone dotfiles repo to home directory:

```bash
git clone https://github.com/jcsison/dotfiles
```

Run `install-packages.sh`:

```bash
cd dotfiles/utils/install
./install-packages.sh
```

Copy config files, then relog:

```bash
./copy-config.sh
logout
```

Start X server:

```bash
startx
```

Fix font rendering:
```bash
sudo dpkg-reconfigure fontconfig-config
# native > none > automatic > yes
```

Install Firefox Nightly:

```bash
# note: change 76 for current version
wget https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central/firefox-76.0a1.en-US.linux-x86_64.tar.bz2
tar -xvf firefox-76.0a1.en-US.linux-x86_64.tar.bz2
sudo mkdir -p /opt/firefox
sudo chown -R $USER /opt/firefox
mv firefox/* /opt/firefox
sudo ln -s /opt/firefox/firefox /usr/local/bin/firefox
rm -r firefox*
```

Manually install programs:
- [Anki](https://apps.ankiweb.net/#linux)
- [Discord](https://discordapp.com/api/download?platform=linux&format=deb)
- [VSCodium](https://github.com/VSCodium/vscodium/releases)

Mount ntfs with `fstab`:

```bash
# find uuid, uid, and gid
sudo blkid
id -u
id -g
sudo vim /etc/fstab
UUID=[uuid] ntfs-3g defaults,nls=utf8,umask=000,dmask=027,fmask=137,uid=[uid],gid=[gid] 0 0
```

- Optional:
    - install `wine`
