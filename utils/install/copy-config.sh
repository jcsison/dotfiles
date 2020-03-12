#!/bin/bash

rm -ivrf .bashrc .profile

ln -s ~/dotfiles/.[!.]* ~/

rm -ir ~/.git*
