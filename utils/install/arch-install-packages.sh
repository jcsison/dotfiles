#!/bin/bash

# prereq: apt, git, sudo

sudo pacman -Syu

sudo pacman -S \
  alsa-oss \
  alsa-utils \
  arandr \
  base-devel \
  bspwm \
  cowfortune \
  ctags \
  curl \
  dictd \
  dunst \
  feh \
  ffmpeg \
  fzf \
  galculator \
  gcc \
  gtk2-engine-murrine \
  gtk2-engines \
  htop \
  imagemagick \
  irssi \
  libnotify \
  lxappearance \
  maim \
  man-pages \
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
  perl-file-path-expand \
  php \
  picom \
  pulseaudio \
  qbittorrent \
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
  wmname \
  xcape \
  xdotool \
  xorg-server \
  xorg-xinput \

sudo yay -S \
  ibus-mozc \
  vscodium-bin \
