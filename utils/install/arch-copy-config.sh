#!/bin/bash

rm -ivrf ~/.bashrc ~/.profile

ln -s ~/dotfiles/arch/.[!.]* ~/
ln -s ~/dotfiles/shared/.[!.]* ~/

rm -irf ~/.git*

ln -s ~/dotfiles/shared/.git_template ~/
ln -s ~/dotfiles/shared/.gitconfig ~/

rm -if /etc/mpd.conf
sudo ln -s ~/dotfiles/shared/.mpd/mpd.conf /etc/mpd.conf
