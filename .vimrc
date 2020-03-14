" Plugins {{{
set nocp

if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  au VimEnter * PlugInstall --sync | source $MYVIMRC
endif

call plug#begin('~/.vim/plugged')

" General plugins {{{
Plug 'dense-analysis/ale'
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'Raimondi/delimitMate'
Plug 'junegunn/fzf'
Plug 'junegunn/fzf.vim'
Plug 'yegappan/grep'
Plug 'Yggdroot/indentLine'
Plug 'scrooloose/nerdcommenter'
Plug 'scrooloose/nerdtree'
Plug 'Xuyuanp/nerdtree-git-plugin'
Plug 'luochen1990/rainbow'
Plug 'majutsushi/tagbar'
Plug 'bling/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'junegunn/vim-easy-align'
Plug 'tpope/vim-fugitive'
Plug 'airblade/vim-gitgutter'
Plug 'etdev/vim-hexcolor'
Plug 'xolox/vim-misc'
Plug 'sheerun/vim-polyglot'
Plug 'tpope/vim-repeat'
Plug 'mhinz/vim-startify'
Plug 'tpope/vim-surround'
Plug 'wellle/targets.vim'
Plug 'wesQ3/vim-windowswap'
" }}}

" Language specific plugins {{{
" C#
Plug 'OrangeT/vim-csharp'

" JS
Plug 'myhere/vim-nodejs-complete'

" TS
Plug 'leafgarland/typescript-vim'
Plug 'peitalin/vim-jsx-typescript'

" Web
" Plug 'othree/html5.vim'
Plug 'StanAngeloff/php.vim'
Plug 'phpactor/phpactor'
Plug 'hail2u/vim-css3-syntax'

" Markdown
Plug 'iamcco/markdown-preview.nvim', { 'do': { -> mkdp#util#install() } }
Plug 'plasticboy/vim-markdown'
" }}}

call plug#end()
" }}}

" Settings {{{
set autoindent
set backspace=indent,eol,start
set breakindent
set breakindentopt=shift:2
set cindent
set cinoptions=g0
set clipboard=unnamedplus
set cmdheight=1
set completeopt=menuone
set concealcursor=c
set conceallevel=2
set confirm
set cursorline
set encoding=utf-8
set expandtab
set ff=unix
set fileencodings=ucs-bom,utf-8,euc-jp,sjis,default,latin1
set fillchars=vert:█,fold:█
set foldcolumn=1
set foldmethod=marker
set foldtext=FoldText()
set formatoptions=croqlt
set hidden
set history=1000
set hlsearch
set ignorecase
set incsearch
set laststatus=2
set lazyredraw
set linebreak
set list
set listchars=eol:↵,trail:·,tab:»·,nbsp:␣
set mouse=a
set noerrorbells
set noshowmode
set nostartofline
set notimeout
set number
set nuw=6
set shiftwidth=2
set showbreak=↪\
set showmatch
set smartcase
set softtabstop=4
set spelllang=en_us
set splitbelow
set switchbuf+=usetab,newtab
set t_Co=256
set t_vb=
set tabstop=4
set tags^=./.git/tags;
set textwidth=80
set timeoutlen=1000
set title
set ttimeout
set ttimeoutlen=0
set updatetime=500
set visualbell
set wrap
" }}}

" Functions {{{
" Alt Key helper for urxvt
if !has('gui_running')
  set ttimeoutlen=10
  augroup FastEscape
    autocmd!
    autocmd InsertEnter * set timeoutlen=0
    autocmd InsertLeave * set timeoutlen=2000
  augroup END
endif

function! Altmap(char)
  if has('gui_running') | return ' <A-'.a:char.'> ' | else | return ' <Esc>'.a:char.' '|endif
endfunction

" Text folding
function! FoldText()
  let line = getline(v:foldstart)
  let line = substitute(line, '^\s*\(#\|//\|/\*\|"\)\?\s*\|\s*\(#\|//\|/\*\|"\)\?\s*{{' . '{\d*\s*\(\*/\)\?', '', 'g')
  let line = ' ' . line . ' '
  let lines_count = v:foldend - v:foldstart + 1
  let lines_count_text = ' ' . lines_count . ' lines '
  let foldchar = matchstr(&fillchars, 'fold:\zs.')
  let foldtextstart = strpart(repeat(foldchar, max([1, indent(v:foldstart)])) . line, 0, (winwidth(0)*2)/3)
  let foldtextend = lines_count_text . repeat(foldchar, 8)
  let foldtextlength = strlen(substitute(foldtextstart . foldtextend, '.', 'x', 'g')) + &foldcolumn + &nuw
  return foldtextstart . repeat(foldchar, winwidth(0)-foldtextlength) . foldtextend
endfunction
" }}}

" Mappings {{{
" Set leader key to Space
let mapleader="\<Space>"

" Toggle NERDTree with Ctrl + e
noremap <silent><C-e> :NERDTreeToggle \| :NERDTreeMirror<CR>

" Toggle Tagbar with Ctrl + t
noremap <silent><C-t> :TagbarToggle<CR>

" Scroll with shift + up/down
noremap <C-Down> <C-e>
noremap <C-Up>   <C-y>
noremap <S-j>    <C-e>
noremap <S-k>    <C-y>

" Move tabs with shift + h/l
nnoremap <silent><S-h> :tabmove -1<CR>
nnoremap <silent><S-l> :tabmove +1<CR>

" Switch tabs with ctrl + h/l
nnoremap <silent><C-h> :tabp<CR>
nnoremap <silent><C-l> :tabn<CR>

" Switch HSplits with ctrl + j/k
nnoremap <silent><C-j> :wincmd j<CR>
nnoremap <silent><C-k> :wincmd k<CR>

" Switch splits with alt + hjkl or alt + arrow keys
nnoremap <silent><A-h> :wincmd h<CR>
nnoremap <silent><A-j> :wincmd j<CR>
nnoremap <silent><A-k> :wincmd k<CR>
nnoremap <silent><A-l> :wincmd l<CR>

nnoremap <silent><A-Left>  :wincmd h<CR>
nnoremap <silent><A-Down>  :wincmd j<CR>
nnoremap <silent><A-Up>    :wincmd k<CR>
nnoremap <silent><A-Right> :wincmd l<CR>

" Resize splits with shift + alt + hjkl
nnoremap <silent><S-A-h> :vertical resize -5<CR>
nnoremap <silent><S-A-j> :resize -5<CR>
nnoremap <silent><S-A-k> :resize +5<CR>
nnoremap <silent><S-A-l> :vertical resize +5<CR>

" Remove search highlighting with ctrl + n
noremap  <silent><C-n> :nohl<CR>
inoremap <silent><C-n> <C-o>:nohl<CR>

" Map ctrl + s to save current buffer if it has been modified
noremap <silent><C-s> :update<CR>

" Map shift + s to write to all buffers
noremap <silent><S-s> :wa<CR>

" Grep buffer with ctrl + f
noremap  <C-f>      :GrepBuffer<Space>
inoremap <C-f><C-o> :GrepBuffer<Space>

" ;/, + return moves to the end of the current line and puts ;/,
inoremap ;<CR> <End>;
inoremap ,<CR> <End>,

" Map leader + x/d/D to black hole register
nnoremap <leader>x "_x
nnoremap <leader>d "_d
nnoremap <leader>D "_D
vnoremap <leader>d "_d

" Map leader + o/O to create a newline without switching modes
nnoremap <leader>o o<ESC>
nnoremap <leader>O O<ESC>

" Start interactive EasyAlign in visual mode (e.g. vipga)
xnoremap ga <Plug>(EasyAlign)

" Start interactive EasyAlign for a motion/text object (e.g. gaip)
nnoremap ga <Plug>(EasyAlign)

inoremap <expr><Tab>   pumvisible() ? "\<C-n>" : "\<Tab>"
inoremap <expr><Down>  pumvisible() ? "\<C-n>" : "\<Down>"
inoremap <expr><C-j>   pumvisible() ? "\<C-n>" : "\<C-j>"
imap     <expr><S-Tab> pumvisible() ? "\<C-p>" : "<Plug>delimitMateS-Tab"
inoremap <expr><Up>    pumvisible() ? "\<C-p>" : "\<Up>"
inoremap <expr><C-k>   pumvisible() ? "\<C-p>" : "\<C-k>"
" }}}

" Language Specific {{{
" Trim trailing whitespace
au FileType c,cpp,coffee,java,ruby,python,sh au BufWritePre * :%s/\s\+$//e | :call histdel('/', -1)

" Type settings
au FileType coffee,css,html,javascript,javascriptreact,json,lua,perl,php,python,ruby,sh,typescript,typescriptreact,xml setl shiftwidth=2 softtabstop=2 tabstop=2

au FileType gitcommit,markdown setl spell

" ALE
let g:ale_javascript_prettier_options = '--no-semi --single-quote --trailing-comma none'
let g:ale_fixers = {
\  'css': ['prettier', 'stylelint'],
\  'javascript': ['eslint', 'prettier'],
\  'typescript': ['eslint'],
\  '*': ['remove_trailing_lines', 'trim_whitespace'],
\}
let g:ale_linters = {
\  'css': ['stylelint'],
\  'javascript': ['eslint'],
\}
" }}}

" Others {{{
au CursorMovedI,InsertLeave * if pumvisible() == 0 | silent! pclose | endif
au StdinReadPre * let s:std_in=1
au VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | wincmd p | endif

if filereadable('/proc/cpuinfo')
  let &makeprg = 'make -j'.(system('grep -c ^processor /proc/cpuinfo')+1)
endif

let delimitMate_expand_cr = 2
let delimitMate_expand_space = 1

let NERDTreeDirArrows = 1
let NERDTreeIgnore=[ '\.[ls]\?o$', '\~$' ]
let NERDTreeMinimalUI = 1
let NERDTreeShowHidden=1

let g:airline_theme = 'base16'
let g:airline_powerline_fonts = 1
let g:airline#extensions#hunks#non_zero_only = 1

" let g:ale_fix_on_save = 1
let g:ale_fix_on_save = 0
let g:ale_lint_on_enter = 0
let g:ale_lint_on_save = 1
let g:ale_lint_on_text_changed = 'never'
let g:ale_linters_explicit = 1
let g:ale_sign_column_always = 1
let g:ale_sign_error = '✘'
let g:ale_sign_warning = '⚠'

let g:indentLine_char = '│'
let g:indentLine_bufNameExclude = [ 'NERD_tree.*' ]
let g:indentLine_setConceal = 0
let g:indentLine_color_gui = '#222222'
let g:indentLine_color_term = 236
let g:indentLine_color_tty = 236

let g:jsx_ext_required = 0

let g:licenses_authors_name = 'Jesser Sison'

let g:mkdp_markdown_css='~/dotfiles/.vim/etc/github-markdown.css'
let g:mkdp_refresh_slow = 1

let g:NERDTreeIndicatorMapCustom = {
\  "Modified"  : "~",
\  "Staged"    : "+",
\  "Untracked" : "^",
\  "Renamed"   : "➜",
\  "Unmerged"  : "=",
\  "Deleted"   : "-",
\  "Dirty"     : "%",
\  "Clean"     : "|",
\  "Ignored"   : ":",
\  "Unknown"   : "?"
\  }

let g:rainbow_active = 1
let g:rainbow_conf = {
\  'guifgs': ['#94aad1', '#8ab4be', '#edc472', '#c98dad'],
\  'ctermfgs': ['12', '14', '11', '13'],
\  'operators': '_!\|=\|&\|\.\|:\|;\|,\|<\|>\|+\|-\|\/\@<!\*\|\/\(\/\|\*\)\@!_',
\  'parentheses': ['start=/(/ end=/)/ fold', 'start=/\[/ end=/\]/ fold', 'start=/{/ end=/}/ fold'],
\  'separately': {
\    '*': {},
\    'cpp': {
\      'parentheses': [
\        'start=/(/ end=/)/ fold',
\        'start=/\[/ end=/\]/ fold',
\        'start=/{/ end=/}/ fold',
\        'start=/\(\(\<operator\>\)\@<!<\)\&[a-zA-Z0-9_]\@<=<\ze[^<]/ end=/>/']
\    },
\  }
\}

map -a :call SyntaxAttr()<CR>

syntax on
" }}}

" Theming {{{
highlight ALEErrorSign ctermbg=NONE ctermfg=red
highlight ALEWarningSign ctermbg=NONE ctermfg=yellow
highlight NonText ctermbg=8
highlight SpecialKey ctermbg=8

colorscheme ahoka
" }}}

" GVim {{{
set guioptions=+a
set guifont=tewi
set guicursor=n-v-c:block-Cursor
set guicursor+=i:block-Cursor
set guicursor+=n-v-c:blinkon0
set guicursor+=i:blinkon0
" }}}
