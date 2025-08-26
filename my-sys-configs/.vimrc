" === Basic Vim Config ===

" Plugin Manager (https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim)
call plug#begin('~/.vim/plugged')

" Use Everforest (Forest Night)
Plug 'sainnhe/everforest'

call plug#end()

" Keymap leader
let mapleader=" "

" Filetype + syntax
syntax on
filetype plugin indent on

" UI
set number relativenumber
set ruler
set cursorline
set laststatus=2
set showmode showcmd
set background=dark
set termguicolors
set clipboard=unnamedplus

" === Theme ===
colorscheme everforest

" Optional Everforest tweaks
let g:everforest_background = 'medium'   " 'soft' | 'medium' | 'hard'
let g:everforest_enable_italic = 0
let g:everforest_transparent_background = 1

" Whitespace & formatting
set expandtab
set tabstop=2 shiftwidth=2 softtabstop=2
set smartindent
set noshiftround
set wrap
set scrolloff=3

" Encoding
set encoding=utf-8

" Undo persistence
set undofile
set undodir=~/.vim/undo

" Searching
set ignorecase smartcase
set incsearch hlsearch showmatch
nnoremap / /\v
vnoremap / /\v
nnoremap <leader><space> :noh<CR>

" Cursor movement
nnoremap j gj
nnoremap k gk
set backspace=indent,eol,start
set matchpairs+=<:>
runtime! macros/matchit.vim

" Easier split navigation
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

" Buffers
set hidden

" Visualize whitespace
set listchars=tab:▸\ ,eol:¬
nnoremap <leader>l :set list!<CR>

" Formatting shortcut
nnoremap <leader>q gqip
