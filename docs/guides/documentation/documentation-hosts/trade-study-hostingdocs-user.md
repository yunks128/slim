---
title: Docs Hosting Trade Study
sidebar_label: Docs Hosting Trade Study
---

| Tool Name                                       | Licensing                                                                                     | Render Time | VCS Stored Content                                    | Self-Hosting | Managed Hosting                                                                                                     | API Actions                                                                          | Generate API Docs                                                                      | WYSIWYG Editing     | Markdown Support                                                                                             | Embedded Content                                                                          | Hierarchial Structure                                             | Templating Support                                                                                | Roles                                                         | Comment Support                                                                 | Search                                                                     | Import From Other Formats                                                              | Export Other Formats                                                                            | Anchor Links                                             | Draft Content                                                                        | Version Control                                                                   | Internationalization                                                                                                                         | File Uploads                                   | Diagram Editing                                                                                                           | Usage Analytics                                                                | Extension Support                                                                                                  |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| [GitBook](https://www.gitbook.com)              | [Free for OSS](https://www.gitbook.com/pricing) / $$$                                         | Fast        | [Yes](https://docs.gitbook.com/integrations/git-sync) | No           | [Yes](https://docs.gitbook.com/hosting/custom-domains)                                                              | [Yes](https://developer.gitbook.com)                                                 | [Yes](https://docs.gitbook.com/features/openapi)                                       | Yes                 | [Yes](https://docs.gitbook.com/editing-content/markdown)                                                     | [Yes](https://docs.gitbook.com/editing-content/embeds)                                    | [Yes](https://docs.gitbook.com/editing-content/content-structure) | [Yes](https://docs.gitbook.com/getting-started/start-exploring#starter-templates)                 | [Yes](https://docs.gitbook.com/collaboration/team-management) | [Yes](https://docs.gitbook.com/collaboration/comments)                          | [Yes](https://docs.gitbook.com/features/multiple-space-search)             | [Yes](https://docs.gitbook.com/features/import)                                        | [Yes](https://docs.gitbook.com/features/pdf-export)                                             | [Yes](https://docs.gitbook.com/features/shareable-links) | [Yes](https://docs.gitbook.com/collaboration/team-management/setting-up-permissions) | Yes                                                                               | [Yes](https://docs.gitbook.com/features/internationalization)                                                                                | [Yes](https://docs.gitbook.com/features/files) | No                                                                                                                        | [Yes](https://docs.gitbook.com/features/insights#data-sampling)                | No                                                                                                                 |
| [Confluence](https://confluence.atlassian.com/) | [Free for OSS](https://www.atlassian.com/software/views/open-source-license-request) / $$     | Slow        | No                                                    | No           | Yes                                                                                                                 | [Yes](https://developer.atlassian.com/server/confluence/confluence-server-rest-api/) | No (only non-free plugins)                                                             | Yes                 | [Partial](https://confluence.atlassian.com/doc/confluence-wiki-markup-251003035.html) (for embedded content) | Yes                                                                                       | Yes                                                               | [Yes](https://confluence.atlassian.com/doc/create-a-template-296093779.html)                      | Yes                                                           | Yes                                                                             | Yes                                                                        | [Yes](https://confluence.atlassian.com/doc/import-content-into-confluence-191141.html) | [Yes](https://confluence.atlassian.com/doc/export-content-to-word-pdf-html-and-xml-139475.html) | Yes                                                      | Yes                                                                                  | Yes                                                                               | [No](https://confluence.atlassian.com/confeval/confluence-evaluator-resources/confluence-managing-content-in-multiple-language-translations) | Yes                                            | No (only non-free plugins)                                                                                                | No (non-free plans only)                                                       | [Yes](https://developer.atlassian.com/server/confluence/writing-confluence-plugins/)                               |
| [ReadTheDocs](https://readthedocs.org)          | [Free (with ads)](https://docs.readthedocs.io/en/stable/advertising/advertising-details.html) | Slow        | Yes                                                   | No           | Yes                                                                                                                 | [Yes](https://docs.readthedocs.io/en/stable/api/)                                    | [No](https://docs.readthedocs.io/en/stable/gsoc.html#integration-with-openapi-swagger) | No                  | Yes                                                                                                          | [Yes](https://docutils.sourceforge.io/docs/ref/rst/directives.html#raw-data-pass-through) | Yes                                                               | [Yes](https://www.sphinx-doc.org/en/master/templating.html)                                       | Yes                                                           | [No](https://docs.readthedocs.io/en/stable/faq.html#i-want-comments-in-my-docs) | Yes                                                                        | [Limited](https://docs.readthedocs.io/en/stable/intro/import-guide.html)               | [Yes](https://www.sphinx-doc.org/en/master/man/sphinx-build.html)                               | Yes                                                      | No                                                                                   | Yes [including doc packages](https://docs.readthedocs.io/en/stable/versions.html) | [Yes](https://www.sphinx-doc.org/en/master/usage/advanced/intl.html)                                                                         | No (embed/links only)                          | Yes [(with plugins)](https://chiplicity.readthedocs.io/en/latest/Using_Sphinx/UsingGraphicsAndDiagramsInSphinx.html#id15) | [Yes](https://docs.readthedocs.io/en/stable/analytics.html)                    | [Yes](https://www.sphinx-doc.org/en/master/extdev/index.html)                                                      |
| [mdBook](https://rust-lang.github.io/mdBook/)   | [Free (Mozilla Public License 2.0)](https://github.com/rust-lang/mdBook/blob/master/LICENSE)  | Fast        | Yes                                                   | Yes          | No [(static hosts only)](https://rust-lang.github.io/mdBook/continuous-integration.html?highlight=deploy#deploying) | No                                                                                   | No                                                                                     | No                  | Yes                                                                                                          | No                                                                                        | Yes                                                               | [Yes](https://rust-lang.github.io/mdBook/format/theme/index-hbs.html?highlight=template#indexhbs) | No                                                            | No                                                                              | Yes                                                                        | No                                                                                     | No                                                                                              | Yes                                                      | No                                                                                   | Yes                                                                               | [No](https://github.com/rust-lang/mdBook/issues/5)                                                                                           | No (embed/links only)                          | [Yes](https://github.com/badboy/mdbook-mermaid) (as a preprocessor)                                                       | No (third-party only)                                                          | [Yes](https://rust-lang.github.io/mdBook/for_developers/preprocessors.html?highlight=preproce#hooking-into-mdbook) |
| [Docusaurus](https://docusaurus.io/)            | [Free MIT License](https://github.com/facebook/docusaurus/blob/main/LICENSE)                  | Fast        | Yes                                                   | Yes          | Yes (with static site hosts like Vercel, Netlify)                                                                   | No                                                                                   | [Yes (with plugins)](https://docusaurus.io/docs/api-docs)                              | No                  | [Yes](https://docusaurus.io/docs/markdown-features)                                                          | [Yes](https://docusaurus.io/docs/markdown-features/react)                                 | [Yes](https://docusaurus.io/docs/sidebar)                         | [Yes](https://docusaurus.io/docs/using-themes)                                                    | No                                                            | No                                                                              | [Yes](https://docusaurus.io/docs/search)                                   | No                                                                                     | No (but can be done with external tools)                                                        | Yes                                                      | No                                                                                   | No                                                                                | [Yes](https://docusaurus.io/docs/i18n/introduction)                                                                                          | No (embed/links only)                          | [Yes (with plugins)](https://docusaurus.io/blog/releases/2.2#mermaid-diagrams)                                            | [No](https://docusaurus.io/docs/analytics) (third-party only)                  | Yes                                                                                                                |
| [Docsify](https://docsify.js.org/)              | [Free MIT License](https://github.com/docsifyjs/docsify/blob/develop/LICENSE)                 | Fast        | Yes                                                   | Yes          | Yes (with static site hosts like GitHub Pages, Netlify)                                                             | No                                                                                   | No                                                                                     | No (Markdown-based) | [Yes](https://docsify.js.org/#/quickstart)                                                                   | [Yes](https://docsify.js.org/#/embed-files)                                               | [Yes](https://docsify.js.org/#/more-pages)                        | No                                                                                                | No                                                            | No                                                                              | [Yes (with plugins)](https://docsify.js.org/#/plugins?id=full-text-search) | No                                                                                     | No                                                                                              | Yes                                                      | No                                                                                   | No                                                                                | No                                                                                                                                           | No (embed/links only)                          | [Partial (with plugins)](https://docsify.js.org/#/plugins?id=diagrams)                                                    | [No](https://docsify.js.org/#/awesome?id=analytics-plugins) (third-party only) | [Yes](https://docsify.js.org/#/plugins)                                                                            |