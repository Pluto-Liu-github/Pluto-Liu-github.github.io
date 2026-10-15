# Pluto · 个人网站

清新文艺风格的 GitHub Pages 网站。米白底、鼠尾草绿与浅陶土色小行星；包含首页、项目展示、手记搜索、文章页面和个人介绍。

## 在本地查看

解压后直接用浏览器打开 `index.html`。站点没有构建步骤、包依赖或外部字体请求。

## 发布到 GitHub Pages

1. 登录 `Pluto-Liu-github`，创建公开仓库 `Pluto-Liu-github.github.io`。如果已经有这个仓库，请先保留旧内容，再按需要合并本站文件。
2. 打开仓库，选择 **Add file → Upload files**，上传解压后的全部文件和 `assets` 文件夹。`index.html` 必须直接位于仓库根目录，不要上传 ZIP 或最外层文件夹。提交到 `main`。
3. 打开 **Settings → Pages**。
4. 在 **Source** 选择 **Deploy from a branch**，分支选 `main`，目录选 **/(root)**，点击 **Save**。
5. 等待部署完成，访问 `https://pluto-liu-github.github.io/`。GitHub 提示发布可能需要最多 10 分钟。

`.nojekyll` 用于明确这是静态网站；若文件选择器未展示它，本项目普通文件名仍可通过默认 Pages 流程发布。

官方说明：
- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 文件对应关系

| 文件 | 内容 |
| --- | --- |
| index.html | 首页 |
| projects.html | 项目目录 |
| project-pluto.html | 本站的项目介绍 |
| notes.html | 手记目录与搜索 |
| note-first-page.html | 开篇文案草稿 |
| note-design.html | 本站设计记录 |
| about.html | 个人介绍与 GitHub 联系入口 |
| 404.html | 未找到页面的提示 |
| style.css | 全站样式与手机布局 |
| app.js | 手机菜单与手记搜索 |
| assets/ | SVG 插画与站点图标 |

## 如何更新内容

- 更改个人介绍：编辑 `about.html` 和 `index.html` 对应文字。
- 增加真实项目：复制 `project-pluto.html` 为一个新文件，修改标题、正文和页面描述，再在 `projects.html` 中增加项目入口。不要将计划或练习写成未经验证的项目成果。
- 新增文章：复制一个 `note-*.html` 文件，修改标题、正文和页面描述。在 `notes.html` 中复制一条带有 `data-note` 的文章链接并修改。搜索会自动包含新增条目，记得更新初始篇数；可将精选文章同步到首页。
- 求职信息：在 `about.html` 中补充真实经历、目标岗位、愿意公开的邮箱以及简历链接。当前版本没有提供这些资料，因此未编造，也没有空的“下载简历”按钮。
- `note-first-page.html` 是根据本次风格要求拟写的开篇文案，可按个人表达修改；不是对你既往经历的记录。
- 调色：修改 `style.css` 开头的颜色变量。
- `404.html` 使用根路径，适用于本次的用户名个人站；迁移到仓库子路径站点时需相应调整。

## 检查范围

交付前检查了站内链接、资源引用、SVG 结构、JavaScript 语法与菜单/搜索逻辑。当前环境不支持浏览器视觉验收，尚未验证实际手机与桌面浏览器的最终显示；上线后可重点检查导航、文章跳转和窄屏排版。

当前交付为网站源文件，未代为创建 GitHub 仓库或开启 Pages。
