#!/bin/bash

# prereq: apt, git, sudo

sudo apt-get update

sudo apt-get install \
  alsa-oss \
  alsa-utils \
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
  gtk2-engines-murrine \
  gtk2-engines-pixbuf \
  htop \
  ibus-mozc \
  irssi \
  libnotify-bin \
  lxappearance \
  make \
  man \
  mpc \
  mpd \
  mpv \
  ncdu \
  ncmpcpp \
  neofetch \
  neovim \
  okular \
  pulseaudio \
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
  tint2 \
  tldr \
  unzip \
  wmname \
  x11-utils \
  x11-xserver-utils \
  xdotool \
  xinput \
  xorg \

wget -qO - https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/master/pub.gpg | sudo apt-key add -

sudo apt-add-repository 'deb https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/repos/debs/ vscodium main'

sudo apt-get update

sudo apt-get install \
  codium \
