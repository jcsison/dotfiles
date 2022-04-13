require('plugins.install')

local packer = require('packer')
local util = require('packer.util')

packer.startup({
  function()
    use {
      'neovim/nvim-lspconfig',
      config = [[require('plugins.config.lspconfig')]],
    }
    use {
      'jose-elias-alvarez/null-ls.nvim',
      config = [[require('plugins.config.null-ls')]],
    }
    use 'jose-elias-alvarez/nvim-lsp-ts-utils'
  end,
  config = {
    max_jobs = 16,
    compile_path = util.join_paths('.', 'packer_compiled.lua'),
    git = {
      default_url_format = plug_url_format,
    },
  }
})

local status, _ = pcall(require, 'packer_compiled')

if not status then
  vim.notify("error requiring packer_compiled.lua: run packersync to fix!")
end
