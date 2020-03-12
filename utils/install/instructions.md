- install wpa_supplicant

- set-up network in `/etc/network/interfaces`

- gain root access

```bash
su
```

- Install sudo

```bash
apt-get install git
apt-get install sudo
```

- Add user to sudo group, then relog

```bash
usermod -aG sudo [username]
exit
exit
```

- Clone dotfiles repo to home directory

```bash
git clone https://github.com/jcsison/dotfiles
```

- Run `install-packages.sh`

```bash
cd dotfiles/utils/install
./install-packages.sh
```

- Copy config files, then relog

```bash
./copy-config.sh
exit
```

- Fix font rendering
```bash
sudo dpkg-reconfigure fontconfig-config
# native > slight > automatic > yes
```

- Manually install programs
    - [Firefox Nightly](wget https://download.mozilla.org/?product=firefox-nightly-latest-ssl&os=linux64&lang=en-US)

    - [Anki](https://apps.ankiweb.net/#linux)
    - [Discord](https://discordapp.com/api/download?platform=linux&format=deb)
    - [VSCodium](https://github.com/VSCodium/vscodium/releases)
