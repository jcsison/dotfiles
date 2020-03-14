#!/bin/bash

# prereq: apt, git, sudo

sudo apt-get update

sudo apt-get install \
  alsa-oss \
  alsa-utils \
  bspwm \
  compton \
  curl \
  debian-goodies \
  deborphan \
  dict \
  feh \
  ffmpeg \
  fortunes \
  fzf \
  g++ \
  galculator \
  htop \
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
