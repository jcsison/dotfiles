#!/bin/bash

rm -ivrf ~/.bashrc ~/.profile

ln -s ~/dotfiles/arch/.[!.]* ~/
ln -s ~/dotfiles/shared/.[!.]* ~/

rm -ir ~/.git*

ln -s ~/dotfiles/shared/.git_template ~/
ln -s ~/dotfiles/shared/.gitconfig ~/

sudo ln -s ~/dotfiles/shared/.mpd/mpd.conf /etc/mpd.conf
