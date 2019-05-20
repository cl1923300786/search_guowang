基于 [Create React App](https://github.com/facebook/create-react-app).

## 调试 `npm start`

## 生产环境编译 `npm build`

## 编辑器插件列表

* [TSLint (deprecated)](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode#review-details)
* [autoprefixer](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-autoprefixer#review-details)
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense#review-details)
* [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#review-details)
* [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag#review-details)
* [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag#review-details)
* [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer#review-details)
* [Color Info](https://marketplace.visualstudio.com/items?itemName=bierner.color-info#review-details)
* [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek#review-details)
* [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis#review-details)
* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig#review-details)
* [Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame#review-details)
* [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory#review-details)
* [gitignore](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore#review-details)
* [Guides](https://marketplace.visualstudio.com/items?itemName=spywhere.guides#review-details)
* [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion#review-details)
* [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur#review-details)

## 编辑器配置

```json
// 将设置放入此文件中以覆盖默认设置
{
    "editor.fontSize": 14,
    "workbench.statusBar.visible": true,
    "workbench.activityBar.visible": false,
    "editor.renderWhitespace": "boundary",
    "window.zoomLevel": 0,
    "editor.wordWrap": "bounded",
    "editor.insertSpaces": true,
    "editor.rulers": [
        120
    ],
    "editor.scrollBeyondLastLine": true,
    "editor.detectIndentation": false,
    "editor.tabSize": 2,
    "editor.wordWrapColumn": 120,
    "editor.minimap.enabled": true,
    "search.exclude": {
        "**/dist": true
    },
    "editor.snippetSuggestions": "top",
    "window.openFilesInNewWindow": "off",
    "eslint.autoFixOnSave": true,
    "html.format.indentInnerHtml": true,
    "docthis.includeDescriptionTag": true,
    "autoprefixer.findExternalAutoprefixer": true,
    "path-intellisense.extensionOnImport": true,
    "editor.renderIndentGuides": false,
    "docthis.enableHungarianNotationEvaluation": true,
    "docthis.inferTypesFromNames": true,
    "files.associations": {
      "*.vue": "vue",
      "*.wpy": "vue",
      "*.tsx": "typescriptreact"
    },
    "typescript.check.npmIsInstalled": false,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue",
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "javascript",
            "autoFix": true
        }
    ],
    "auto-rename-tag.activationOnLanguage": [
        "*",
        ".vue"
    ],
    "vetur.format.styleInitialIndent": true,
    "vetur.validation.template": true,
    "html.format.endWithNewline": true,
    "html.format.indentHandlebars": true,
    "javascript.format.insertSpaceAfterConstructor": true,
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "typescript.format.insertSpaceAfterConstructor": true,
    "editor.acceptSuggestionOnCommitCharacter": false,
    "editor.minimap.showSlider": "always",
    "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
    "vetur.format.defaultFormatter.ts": "vscode-typescript",
    "vetur.format.scriptInitialIndent": false,
    "javascript.implicitProjectConfig.checkJs": true,
    "javascript.validate.enable": false,
    "gitlens.advanced.messages": {
        "suppressCommitHasNoPreviousCommitWarning": false,
        "suppressCommitNotFoundWarning": false,
        "suppressFileNotUnderSourceControlWarning": false,
        "suppressGitVersionWarning": false,
        "suppressLineUncommittedWarning": false,
        "suppressNoRepositoryWarning": false,
        "suppressResultsExplorerNotice": true,
        "suppressShowKeyBindingsNotice": true
    },
    "gitlens.keymap": "alternate",
    "dart.flutterSdkPath": "/Users/keyangyang/projects/flutter",
    "breadcrumbs.enabled": true,
    "scm.alwaysShowProviders": true,
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_attributes": "force-aligned"
        }
    },
    "extensions.autoUpdate": true,
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "search.collapseResults": "alwaysCollapse",
    "gitlens.views.repositories.files.layout": "auto",
    "gitlens.views.fileHistory.enabled": true,
    "gitlens.views.lineHistory.enabled": true,
    "eslint.alwaysShowStatus": true,
    "[typescriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": false,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "editor.suggestSelection": "first",
    "prettier.semi": false,
    "prettier.tslintIntegration": true,
    "bookmarks.useWorkaroundForFormatters": true,
    "[scss]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[css]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[less]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "workbench.iconTheme": "vscode-icons",
    "prettier.singleQuote": true,
    "prettier.jsxBracketSameLine": true,
    "[jsonc]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "typescript.reportStyleChecksAsWarnings": false,
    "tslint.nodePath": "./node_modules/tslint",
    "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```
