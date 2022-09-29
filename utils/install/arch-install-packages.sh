#!/bin/bash

# prereq: apt, git, sudo

sudo pacman -Syu

sudo pacman -S \
  alacritty \
  alsa-oss \
  alsa-utils \
  arandr \
  base-devel \
  blueman \
  bspwm \
  cowfortune \
  ctags \
  curl \
  dictd \
  dunst \
  feh \
  ffmpeg \
  fuse \
  fzf \
  galculator \
  gcc \
  gtk-engine-murrine \
  gtk-engines \
  gtop \
  htop \
  imagemagick \
  irssi \
  libnotify \
  lxappearance \
  maim \
  man \
  mjpegtools \
  mpc \
  mpd \
  mpv \
  ncdu \
  ncmpcpp \
  neofetch \
  neovim \
  nodejs-lts-erbium \
  npm \
  ntfs-3g \
  okular \
  pavucontrol \
  perl-file-path-expand \
  php \
  picom \
  pulseaudio \
  python-pillow \
  qbittorrent \
 	qt5-styleplugins \
  qt5ct \
  ranger \
  redshift \
  rofi \
  rxvt-unicode \
  scrot \
  sxhkd \
  thunar \
  tidy \
  tint2 \
  tldr \
  unzip \
  usbutils \
  wmname \
  xcape \
  xdotool \
  xorg-server \
  xorg-xinit \
  xorg-xinput \
  xorg-xsetroot \
  xorg-xwininfo \
  xsel \
  zathura \
 	zathura-pdf-mupdf \
  zip \

git clone https://aur.archlinux.org/yay-git.git

cd yay-git

makepkg -si

cd ..

rm -rf yay-git

yay -S \
  archlinux-keyring \
  discord \
  kernel-modules-hook \
  firefox-nightly \
  ibus-mozc \
  postman \
  slack-desktop \
  trackma-git \
  vscodium-bin \
