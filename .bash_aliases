alias ..='cd ..'
alias ...='cd ../..'

alias awoo='ssh horo@awoo'
alias aws='aws2'
alias checkip='curl -s checkip.dyndns.org | grep -Eo "[0-9\.]+"'
alias cmatrix='cmatrix -b'
alias cp='cp -iv'
alias deb='sudo dpkg -R --install .'
alias debclean='sudo deborphan --guess-all | sudo xargs apt-get -y remove --purge'
alias detach='sudo udisks --detach'
alias dict='dict -d wn'
alias dirstat='sudo ncdu -rx'
alias emacs='emacs -nw'
alias find='sudo find'
alias finda='sudo find / -name'
alias fm='ranger'
alias font='sudo fc-cache -f -v'
alias fzfl='fzf | ls'
alias git-add='git add -A'
alias git-clean='git repack -a -d --depth=250 --window=250'
alias git-commit='git cz'
alias git-exclude='git rm --cached `git ls-files -i --exclude-from=.gitignore`'
alias git-pull='git pull'
alias git-push='git push'
alias git-rm='git rm --cached'
alias git-undo='git reset --soft HEAD~1'
alias github-undo='git push -f origin HEAD^:master'
alias gz='tar -zxvf'
alias hdmi='xrandr --output HDMI2 --mode 1920x1080'
alias horo='sudo mount -o remount,exec /media/removable/horo'
alias install='sudo apt-get install'
alias largest="find . -printf '%s %p\n' | sort -nr | head"
alias lg3d='wmname LG3D'
alias logout='pkill -KILL -u $(whoami)'
alias ls='ls --color=auto -a'
alias lsize='du -sh .[!.]* ./* | sort -h | tail'
alias lsl='ls --color=auto -al'
alias mogi='sudo mount -o remount,exec /media/removable/mogi'
alias mv='mv -iv'
alias notes='nano ~/Desktop/notes.txt'
alias nowi='sudo mount -o remount,exec /media/removable/nowi'
alias np='notify-send "$(mpc)"'
alias octave='octave --no-gui'
alias openelec='sshpass -p 'openelec' ssh root@openelec'
alias packages='dpigs'
alias permit='sudo chmod 755'
alias pipes='pipes -r 0 -f 50 -s 15 -t 2'
alias pipesx='pipesx -r 0 -f 100'
alias python='python3'
alias r='R'
alias reloadt='xrdb -merge ~/.config/urxvt/Xresources && source ~/.bashrc'
alias retropie='ssh pi@retropie'
alias rm='rm -Iv --one-file-system'
alias screenfetch='neofetch'
alias status='notify-send -t 30000 "$(fortune)"'
alias sudo='sudo '
alias tar='tar -v'
alias texpack='tlmgr install'
alias uninstall='sudo apt-get purge'
alias update='sudo apt-get update ; sudo apt-get dist-upgrade'
alias vim='nvim'
alias vimf='nvim $(ls | fzf)'
alias winclass='xprop | grep WM_CLASS'
alias winpid='xprop _NET_WM_PID'

# alias backup='sudo tar -cf "/media/removable/horo/chieri.tar" --exclude-tag-all=exclude "~"'
# alias hdmi='xrandr --output HDMI-1 --mode 1280x720 --right-of eDP-1 --scale 1x1 --set audio force-dvi'
# alias matl='/media/removable/horo/bin/MATLAB/bin/matlab -nosoftwareopengl'
# alias matlabc='matlab -nojvmq'
# alias r-a-dio='nohup mpv --no-ytdl https://stream.r-a-d.io/main.mp3 &>/dev/null &'

function audio() { streamlink --player "mpv --no-video" "$@" worst; }
function html2pdf() { wkhtmltopdf --zoom 1.25 -s Letter "$@".html "$@.pdf"; }
function stream() { streamlink --player mpv "$@" best; }
function twitch() { streamlink --player mpv twitch.tv/"$@" best & irssi --connect=twitch; }
function twitchaudio() { streamlink --player "mpv --no-video" twitch.tv/"$@" audio_only; }

# function git-commit() { git commit -m "[$(date +"%D %H:%M")] $*"; }
