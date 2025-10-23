# 贡献指南 / Contributing Guide

感谢你对本项目的关注！

## Pull Request 流程 / PR Process

### 重要说明 / Important Notice

**本项目的所有 Pull Request 应该提交到 `yknothing/today-news` 仓库，而不是上游的原始仓库。**

**All Pull Requests for this project should be submitted to the `yknothing/today-news` repository, not the upstream original repository.**

### 创建 PR 时的注意事项 / Notes When Creating PR

当你在 GitHub 上创建 Pull Request 时，请注意以下几点：

1. **检查目标仓库**：确保 base repository 选择的是 `yknothing/today-news`
2. **检查目标分支**：通常应该选择 `main` 分支作为目标分支
3. **填写 PR 模板**：请按照 PR 模板的要求填写相关信息

### 开发流程 / Development Workflow

1. Fork 本仓库（如果还没有 fork）
2. 克隆你的 fork 到本地：
   ```bash
   git clone https://github.com/your-username/today-news.git
   cd today-news
   ```

3. 创建新的功能分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. 进行开发和测试

5. 提交更改：
   ```bash
   git add .
   git commit -m "描述你的更改"
   git push origin feature/your-feature-name
   ```

6. 在 GitHub 上创建 Pull Request：
   - **重要**：选择 base repository 为 `yknothing/today-news`
   - 选择 base 分支为 `main`（或其他目标分支）
   - 选择 compare 分支为你的功能分支

### 代码规范 / Code Standards

- 遵循项目现有的代码风格
- 运行 `npm run lint` 检查代码规范
- 确保所有测试通过 `npm run test`

### 问题反馈 / Issue Reporting

如果你发现 bug 或有功能建议，请在 `yknothing/today-news` 仓库中创建 issue。

## 联系方式 / Contact

如有任何问题，欢迎通过 issue 或其他方式联系维护者。
