import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "《重构2》中文版",
  description: "重构：改善既有代码的设计（第二版）",
  lang: 'zh-CN',
  base: '/Refactoring-2ed-zh/',

  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '章节正文', link: '/ch1' }
    ],

    sidebar: [
      {
        text: '章节',
        items: [
          { text: "第 1 章 重构，第一个示例", link: "/ch1" },
          { text: "第 2 章 重构的原则", link: "/ch2" },
          { text: "第 3 章 代码的坏味道", link: "/ch3" },
          { text: "第 4 章 构筑测试体系", link: "/ch4" },
          { text: "第 5 章 介绍重构名录", link: "/ch5" },
          { text: "第 6 章 第一组重构", link: "/ch6" },
          { text: "第 7 章 封装", link: "/ch7" },
          { text: "第 8 章 搬移特性", link: "/ch8" },
          { text: "第 9 章 重新组织数据", link: "/ch9" },
          { text: "第 10 章 简化条件逻辑", link: "/ch10" },
          { text: "第 11 章 重构 API", link: "/ch11" },
          { text: "第 12 章 处理继承关系", link: "/ch12" }
        ]
      }
    ],

    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cactus-proj/Refactoring-2ed-zh' }
    ],

    editLink: {
      pattern: 'https://github.com/Cactus-proj/Refactoring-2ed-zh/edit/main/docs/:path'
    },
  }
})
