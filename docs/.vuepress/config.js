const dirTree = require('directory-tree');
const path = require('path');
const { generateExamples } = require('./generate-examples');

generateExamples(path.join(__dirname, '../../examples'), path.join(__dirname, '../examples'));
const examples = dirTree(path.join(__dirname, '../examples'), {extensions:/\.md/});

module.exports = {
  title: 'pywebview',
  description: 'Build GUI for your Python program with JavaScript, HTML, and CSS',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'pywebview',
      description: 'Build GUI for your Python program with JavaScript, HTML, and CSS',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'pywebview',
      description: '使用 JavaScript、HTML 和 CSS 为 Python 程序构建 GUI',
    }
  },
  port: 8082,
  themeConfig: {
    repo: 'r0x0r/pywebview',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    logo: '/logo-no-text.png',
    
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Contributing', link: '/contributing/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Changelog', link: '/CHANGELOG.md' },
      { text: '2.x', link: 'https://pywebview.flowrl.com/2.4' },
      { text: '3.x', link: 'https://pywebview.flowrl.com/3.7' },
    ],
    //sidebarDepth: 1,
    displayAllHeaders: true,
    sidebar: {
      '/guide/': [
          {
          title: 'Basics',
          collapsable: false,
          children: [
            '/guide/installation',
            '/guide/usage'
          ]
        },
        {
          title: 'Development',
          collapsable: false,
          children: [
            '/guide/api',
            '/guide/architecture',
            '/guide/debugging',
            '/guide/dom',
            '/guide/faq',
            '/guide/interdomain',
            '/guide/freezing',
            '/guide/security',
            '/guide/web_engine',
          ]
        }
      ],
      '/examples/': examples.children
        .filter(file => path.parse(file.name).name !== 'README')
        .map(file => path.parse(file.name).name),

      '/contributing/': [
        'development',
        'bug_reporting',
        'donating',
        'documentation'
      ]
    }
  }
}

