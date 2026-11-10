# SkinNote｜保養知識筆記

一個適合保養初學者閱讀的繁體中文知識網站，以原生 HTML、CSS 與 JavaScript 製作，支援分類、搜尋與文章閱讀。

## 專案檔案

- `index.html`：網站首頁
- `style.css`：共用樣式與響應式設計
- `script.js`：分類、搜尋與文章閱讀功能
- `articles.js`：文章資料（目前 5 篇）
- `AGENTS.md`：AI 協作與新增文章規範

## 如何新增文章

先閱讀 `AGENTS.md`，接著在 `articles.js` 的 `window.SKINNOTE_ARTICLES` 陣列中加入符合格式的物件。新文章會自動顯示於首頁，並可透過分類與搜尋找到，不必修改 HTML。

## 本機預覽

直接開啟 `index.html` 即可瀏覽，或使用 VS Code Live Server。

## GitHub Pages 部署

將所有檔案推送到 GitHub repository，進入 Settings → Pages，在 Build and deployment 選擇 Deploy from a branch，設定 `main` / `(root)`，儲存後等待網站發布。

## 注意

網站內容僅供一般保養知識參考，不構成醫療建議。
