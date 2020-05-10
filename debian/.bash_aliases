alias ..='cd ..'
alias ...='cd ../..'

alias brightness="sudo ~/dotfiles/utils/bin/brightness"
alias cd..='cd ..'
alias checkip='curl -s checkip.dyndns.org | grep -Eo "[0-9\.]+"'
alias cmatrix='cmatrix -b'
alias cp='cp -iv'
alias cwall='feh --bg-fill'
alias deb='sudo dpkg -R --install .'
alias debclean='sudo deborphan --guess-all | sudo xargs apt-get -y remove --purge'
alias detach='sudo udisks --detach'
alias dict='dict -d wn'
alias dirstat='sudo ncdu -rx'
alias find='sudo find'
alias finda='sudo find / -name'
alias fm='ranger'
alias font='sudo fc-cache -f -v'
alias fzfl='fzf | ls'
alias ga='git add'
alias ga.='git add .'
alias gb='git branch'
alias gc='git commit -v'
alias gch='git checkout'
alias gchb='git checkout -b'
alias gcm='git commit --amend'
alias gcz='git cz'
alias gd='git diff -M'
alias gdc='git diff -M --cached'
alias gex='git rm --cached `git ls-files -i --exclude-from=.gitignore`'
alias gf='git fetch'
alias gfa='git fetch --all'
alias gl='git log --graph --pretty="format:%C(yellow)%h%C(auto)%d%Creset %s %C(white) %C(cyan)%an, %C(magenta)%ar%Creset"'
alias gla='gl --all'
alias gm='git merge --no-ff'
alias gmf='git merge --ff-only'
alias gp='git push'
alias gpu='git pull'
alias gr='git reset'
alias grb='git rebase'
alias grh='git reset --hard'
alias grs='git reset --soft'
alias gs='git status -sb'
alias gsh='git show'
alias gst='git stash'
alias gstp='git stash pop'
alias hdmi='arandr'
alias install='sudo apt-get install'
alias l='ls --color=auto -al'
alias largest="find . -printf '%s %p\n' | sort -nr | head"
alias lg3d='wmname LG3D'
alias logout='pkill -KILL -u $(whoami)'
alias ls='ls --color=auto -a'
alias lsize='du -sh .[!.]* ./* | sort -h | tail'
alias lsl='l'
alias mogi='sudo mount -o remount,exec /media/removable/mogi'
alias mv='mv -iv'
alias notes='vim ~/Desktop/notes.txt'
alias nowi='sudo mount -o remount,exec /media/removable/nowi'
alias np='notify-send "$(mpc)"'
alias octave='octave --no-gui'
alias packages='dpigs'
alias permit='sudo chmod 755'
alias pip='pip3'
alias pipes='pipes -r 0 -f 50 -s 15 -t 2'
alias pipesx='pipesx -r 0 -f 100'
alias python='python3'
alias reloadt='xrdb -merge ~/.config/urxvt/Xresources && source ~/.bashrc'
alias rm='rm -Iv --one-file-system'
alias screenfetch='neofetch'
alias scrot='scrot ~/^o^/screenshots/%Y-%m-%d-%H%M%S_scrot.png'
alias suspend='systemctl suspend'
alias status='notify-send -t 30000 "$(fortune)"'
alias sudo='sudo '
alias tar='tar -v'
alias uninstall='sudo apt-get purge'
alias update='sudo apt-get update ; sudo apt-get dist-upgrade'
alias vim='nvim'
alias vimf='nvim $(ls | fzf)'
alias winclass='xprop | grep WM_CLASS'
alias winpid='xprop _NET_WM_PID'
alias xbz2='tar -xvjf'
alias xgz='tar -zxvf'

function audio() { streamlink --player "mpv --no-video" "$@" worst; }
function html2pdf() { wkhtmltopdf --zoom 1.25 -s Letter "$@".html "$@.pdf"; }
function stream() { streamlink --player mpv "$@" best; }
function twitch() { streamlink --player mpv twitch.tv/"$@" best & irssi --connect=twitch; }
function twitchaudio() { streamlink --player "mpv --no-video" twitch.tv/"$@" audio_only; }

# Enable Git completions for aliases
if [ -f "/usr/share/bash-completion/completions/git" ]; then
  . /usr/share/bash-completion/completions/git
  for a in $(alias | sed -n 's/^alias \(g[^=]*\)=.git .*/\1/p'); do
    c=$(alias $a | sed 's/^[^=]*=.git \([a-z0-9\-]\+\).*/\1/' | tr '-' '_')
    if set | grep -q "^_git_$c *()"; then
      eval "__git_complete $a _git_$c"
    fi
  done
fi