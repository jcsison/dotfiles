#!/bin/bash

# prereq: apt, git, sudo

sudo apt-get update

sudo apt-get install \
  alsa-oss \
  alsa-utils \
  arandr \
  bspwm \
  compton \
  ctags \
  curl \
  debian-goodies \
  deborphan \
  dict \
  dunst \
  feh \
  ffmpeg \
  fortunes \
  fzf \
  g++ \
  galculator \
  git-flow \
  gtk2-engines-murrine \
  gtk2-engines-pixbuf \
  htop \
  ibus-mozc \
  imagemagick \
  irssi \
  libfile-path-expand-perl \
  libnotify-bin \
  lxappearance \
  maim \
  make \
  man \
  mjpegtools \
  mpc \
  mpd \
  mpv \
  ncdu \
  ncmpcpp \
  neofetch \
  neovim \
  okular \
  pavucontrol \
  php \
  pulseaudio \
  qbittorrent \
  qt5ct \
  ranger \
  redshift \
  rofi \
  rxvt-unicode \
  scrot \
  software-properties-common \
  ssh \
  sxhkd \
  thunar \
  tidy \
  tint2 \
  tldr \
  unzip \
  vpx-tools \
  wmname \
  x11-utils \
  x11-xserver-utils \
  xcape \
  xdotool \
  xinput \
  xorg \

wget -qO - https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/master/pub.gpg | sudo apt-key add -

sudo apt-add-repository 'deb https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/repos/debs/ vscodium main'

sudo apt-get update

sudo apt-get install \
  codium \
