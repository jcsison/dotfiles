#!/bin/bash

rm -ivrf .bashrc .profile

cp -vr ~/dotfiles/.[!.]* ~/
