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
  fortunes \
  ffmpeg \
  fzf \
  galculator \
  irssi \
  libnotify-bin \
  lxappearance \
  man \
  mpc \
  mpd \
  mpv \
  ncmpcpp \
  neovim \
  pulseaudio \
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
  wmname \
  x11-xserver-utils \
  x11-utils \
  xorg \
  xinput \

wget -qO - https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/master/pub.gpg | sudo apt-key add -

sudo apt-add-repository 'deb https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/repos/debs/ vscodium main'

sudo apt-get update

sudo apt-get install \
  codium \
