local null_ls = require('null-ls')

null_ls.setup({
  sources = {
    null_ls.builtins.diagnostics.tslint,
    null_ls.builtins.code_actions.tslint,
    null_ls.builtins.formatting.prettier
  },
  on_attach = on_attach
})
