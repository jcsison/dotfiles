#!/bin/bash

rm -ivrf ~/.bashrc ~/.profile ~/.zprofile

ln -s ~/dotfiles/osx/.[!.]* ~/
ln -s ~/dotfiles/shared/.[!.]* ~/

rm -irf ~/.git*

ln -s ~/dotfiles/shared/.git_template ~/
ln -s ~/dotfiles/shared/.gitconfig ~/
