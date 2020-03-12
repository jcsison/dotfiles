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

- Copy config files

```bash
./copy-config.sh
```

- Manually install programs
    - Anki
    - Discord
    - Firefox Nightly
