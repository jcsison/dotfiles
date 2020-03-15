#!/bin/bash

rm -ivrf .bashrc .profile

ln -s ~/dotfiles/.[!.]* ~/

rm -ir ~/.git*

ln -s ~/dotfiles/.git_template
ln -s ~/dotfiles/.gitconfig
