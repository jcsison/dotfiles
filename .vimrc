" Plugins {{{
set nocp

if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
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
Plug 'scrooloose/nerdtree'
Plug 'luochen1990/rainbow'
Plug 'godlygeek/tabular'
Plug 'majutsushi/tagbar'
Plug 'SirVer/ultisnips'
Plug 'bling/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'junegunn/vim-easy-align'
Plug 'tpope/vim-fugitive'
Plug 'airblade/vim-gitgutter'
Plug 'embear/vim-localvimrc'
Plug 'xolox/vim-misc'
Plug 'xolox/vim-session'
Plug 'honza/vim-snippets'
Plug 'tpope/vim-surround'
Plug 'wesQ3/vim-windowswap'
" }}}

" Language specific plugins {{{

" C#
Plug 'OmniSharp/omnisharp-vim'
Plug 'OrangeT/vim-csharp'

" JS
Plug 'myhere/vim-nodejs-complete'

" Web
Plug 'hail2u/vim-css3-syntax'
Plug 'othree/html5.vim'

" Markdown
Plug 'plasticboy/vim-markdown'
" }}}

call plug#end()
" }}}

" Settings {{{
set autoindent
set backspace=indent,eol,start
set breakindent
set breakindentopt=shift:4
set cindent
set cinoptions=g0
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
set re=1
set shiftwidth=4
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
let mapleader="\<Space>"

" Toggle NERDTree with F2
map <silent> <F2> :NERDTreeToggle \| :NERDTreeMirror<CR>

" Toggle Tagbar with F3
map <silent> <F3> :TagbarToggle<CR>

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
nnoremap <silent> <A-h> :wincmd h<CR>
nnoremap <silent> <A-j> :wincmd j<CR>
nnoremap <silent> <A-k> :wincmd k<CR>
nnoremap <silent> <A-l> :wincmd l<CR>

nnoremap <silent> <A-Left>  :wincmd h<CR>
nnoremap <silent> <A-Down>  :wincmd j<CR>
nnoremap <silent> <A-Up>    :wincmd k<CR>
nnoremap <silent> <A-Right> :wincmd l<CR>

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

noremap  <C-f>      :GrepBuffer<Space>
inoremap <C-f> <C-o>:GrepBuffer<Space>

" ;/, + return moves to the end of the current line and puts ;/,
inoremap ;<CR> <End>;
inoremap ,<CR> <End>,

" Space open/closes folds in normal mode
nnoremap <space> za

" Space creates folds in visual mode
vnoremap <space> zf

" Start interactive EasyAlign in visual mode (e.g. vipga)
xmap ga <Plug>(EasyAlign)

" Start interactive EasyAlign for a motion/text object (e.g. gaip)
nmap ga <Plug>(EasyAlign)

inoremap <expr><Tab>   pumvisible() ? "\<C-n>" : "\<Tab>"
inoremap <expr><Down>  pumvisible() ? "\<C-n>" : "\<Down>"
inoremap <expr><C-j>   pumvisible() ? "\<C-n>" : "\<C-j>"
imap     <expr><S-Tab> pumvisible() ? "\<C-p>" : "<Plug>delimitMateS-Tab"
inoremap <expr><Up>    pumvisible() ? "\<C-p>" : "\<Up>"
inoremap <expr><C-k>   pumvisible() ? "\<C-p>" : "\<C-k>"

imap     <expr><CR>    pumvisible() ? "<C-r>=CRCompleteFunc()<CR>" : "<Plug>delimitMateCR"
" }}}

" Language Specific {{{
autocmd FileType css setlocal tabstop=2 softtabstop=2 shiftwidth=2
autocmd FileType javascript setlocal tabstop=2 softtabstop=2 shiftwidth=2
autocmd FileType javascriptreact setlocal tabstop=2 softtabstop=2 shiftwidth=2

highlight ALEErrorSign ctermbg=NONE ctermfg=red
highlight ALEWarningSign ctermbg=NONE ctermfg=yellow

let g:ale_fix_on_save = 1
let g:ale_javascript_prettier_options = '--no-semi --single-quote --trailing-comma none'
let g:ale_lint_on_enter = 0
let g:ale_lint_on_save = 1
let g:ale_lint_on_text_changed = 'never'
let g:ale_linters_explicit = 1
let g:ale_sign_error = '✘'
let g:ale_sign_warning = '⚠'
let g:jsx_ext_required = 0

let g:ale_fixers = {
\   'javascript': ['prettier', 'eslint'],
\   '*': ['remove_trailing_lines', 'trim_whitespace'],
\}
let g:ale_linters = {
\   'javascript': ['standard'],
\}
" }}}

" Others {{{
map -a	:call SyntaxAttr()<CR>

if filereadable('/proc/cpuinfo')
    let &makeprg = 'make -j'.(system('grep -c ^processor /proc/cpuinfo')+1)
endif

let NERDTreeIgnore=[ '\.[ls]\?o$', '\~$' ]

let g:indentLine_char = '│'
let g:indentLine_bufNameExclude = [ 'NERD_tree.*' ]
let g:indentLine_setConceal = 0
let g:indentLine_color_gui = '#222222'
let g:indentLine_color_term = 236
let g:indentLine_color_tty = 236

let g:localvimrc_ask = 0

let g:UltiSnipsUsePythonVersion = 3
let g:UltiSnipsJumpForwardTrigger = '<CR>'
let g:UltiSnipsJumpBackwardTrigger = '<S-Tab>'
let g:UltiSnipsEditSplit = 'vertical'

let delimitMate_expand_cr = 2
let delimitMate_expand_space = 1

let g:rainbow_active = 1
let g:rainbow_conf = {
\   'guifgs': ['#94aad1', '#8ab4be', '#edc472', '#c98dad'],
\	'ctermfgs': ['12', '14', '11', '13'],
\	'operators': '_!\|=\|&\|\.\|:\|;\|,\|<\|>\|+\|-\|\/\@<!\*\|\/\(\/\|\*\)\@!_',
\	'parentheses': ['start=/(/ end=/)/ fold', 'start=/\[/ end=/\]/ fold', 'start=/{/ end=/}/ fold'],
\	'separately': {
\		'*': {},
\       'cpp': {
\           'parentheses': [
\               'start=/(/ end=/)/ fold',
\               'start=/\[/ end=/\]/ fold',
\               'start=/{/ end=/}/ fold',
\               'start=/\(\(\<operator\>\)\@<!<\)\&[a-zA-Z0-9_]\@<=<\ze[^<]/ end=/>/']
\       },
\	}
\}

let g:airline_theme = 'powerlineish'
let g:airline_powerline_fonts = 1
let g:airline#extensions#hunks#non_zero_only = 1

let g:licenses_authors_name = 'Jesser Sison'

set sessionoptions-=help
set sessionoptions-=options
set sessionoptions+=resize
set sessionoptions+=tabpages

let g:session_autosave = 'yes'
let g:session_autoload = 'yes'
let g:session_autosave_periodic = 5
let g:session_default_to_last = 1
let g:session_persist_globals = [ '&expandtab' ]

au CursorMovedI,InsertLeave * if pumvisible() == 0|silent! pclose|endif
" Trim trailing whitespace
au FileType c,cpp,coffee,java,ruby,python,sh au BufWritePre * :%s/\s\+$//e | :call histdel('/', -1)

au FileType gitcommit,markdown setl spell

au FileType cpp setl cindent cino=j1,(0,ws,Ws
au FileType coffee,html,lua,perl,python,ruby,sh,xml setl shiftwidth=2 softtabstop=2 tabstop=2
au FileType css set omnifunc=csscomplete#CompleteCSS | setlocal iskeyword+=-

let NERDTreeShowHidden=1

autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif

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
