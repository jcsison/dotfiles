#!/bin/bash

rm -ivrf ~/.bashrc ~/.profile

ln -s ~/dotfiles/debian/.[!.]* ~/
ln -s ~/dotfiles/shared/.[!.]* ~/

rm -irf ~/.git*

ln -s ~/dotfiles/shared/.git_template ~/
ln -s ~/dotfiles/shared/.gitconfig ~/

rm -if /etc/mpd.conf
ared/.mpd/mpd.conf /etc/mpd.conf
