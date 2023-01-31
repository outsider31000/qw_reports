-- Credits:
-- UI build process (vite, rollup): https://github.com/JustLazzy
-- initial idea for svelte boilerplate: https://github.com/project-error
fx_version "adamant"

rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'
games { 'rdr3' }
author 'qw-scripts'
version '0.2.0'
description 'standalone reporting system '

lua54 'yes'

shared_scripts {
    'shared/config.lua',
}

client_scripts { 'client/*.lua' }

server_scripts { 'server/*.lua' }

ui_page 'html/index.html'

files { 'html/index.html', 'html/js/index.js', 'html/assets/index.css' }
