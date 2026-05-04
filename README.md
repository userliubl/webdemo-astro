# demo-astro

内蒙古大学时空智能研究中心主题的单页宣传站演示，基于 [Astro](https://astro.build/) 静态构建。

## 技术栈

- **Astro 4** — 静态站点（`output: "static"`），URL 带尾部斜杠（`trailingSlash: "always"`）
- **Tailwind CSS**（`@astrojs/tailwind`，关闭集成默认 base，样式在自建全局 CSS）
- **字体**：Noto Sans SC（可变）、JetBrains Mono

## 快速开始

```bash
npm install
npm run dev
```

浏览器打开：<http://localhost:4321/>

```bash
npm run build    # 构建到 dist/
npm run preview # 本地预览构建结果
```

## 目录结构（摘要）

| 路径 | 说明 |
|------|------|
| `src/pages/index.astro` | 首页：Hero、简介、研究方向、团队、论文、页脚等区块 |
| `src/layouts/Base.astro` | 全局布局（元信息、字体等） |
| `src/components/` | 各区块与导航、背景等 UI 组件 |
| `src/data/site.ts` | **站点文案与列表数据源**（改这里即可更新大部分展示内容） |
| `src/styles/global.css` | 全局样式 |
| `public/` | 静态资源（如 logo 放在 `public/logos/`） |

路径别名：`@/` 指向 `src/`（见 `tsconfig.json`）。

## 内容维护说明

`src/data/site.ts` 顶部注释已说明：`people`、`papers`、`footer` 联系方式等仍为示例占位，待官方信息后替换；客观描述可参考百度百科「内蒙古大学时空智能研究中心」词条。

Logo 路径在 `siteMeta.logoSrc`，默认 `/logos/image.png`。

## 要求

建议使用 **Node.js** 当前 LTS，包管理可用 npm（项目含 `package-lock.json`）。
