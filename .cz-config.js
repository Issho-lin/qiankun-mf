/*
 * @Author: linqibin
 * @Date: 2022-03-01 09:31:08
 * @LastEditors: linqibin
 * @LastEditTime: 2022-03-03 15:51:29
 * @Description: commit规范配置
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
"use strict";
module.exports = {
  types: [
    { value: "✨新增", name: "新增:    添加新的功能开发" },
    { value: "🐛修复", name: "修复:    修复一个Bug" },
    { value: "📝文档", name: "文档:    变更的只有文档" },
    { value: "💄样式", name: "样式:    仅添加或更新UI和样式文件" },
    { value: "💡注释", name: "注释:    添加或更新注释" },
    { value: "♻️重构", name: "重构:    代码重构" },
    { value: "⚡️性能", name: "性能:    提升性能" },
    { value: "✅测试", name: "测试:    添加一个测试" },
    { value: "🔧配置", name: "配置:    添加或更新配置文件" },
    { value: "⏪回滚", name: "回滚:    代码回退" },
    { value: "🎉开始", name: "开始:    开始新项目" },
    { value: "🔨脚本", name: "脚本:    添加或更新开发脚本" },
    { value: "💩待优", name: "待优:    提交了有待优化的代码" },
    { value: "🔥删除", name: "删除:    仅删除代码或文件" },
    { value: "🔖版本", name: "版本:    版本/标签" },
    { value: "➕装包", name: "装包:    安装依赖" },
    { value: "➖删包", name: "删包:    删除依赖" },
    { value: "⬆️升包", name: "升包:    升级依赖" },
    { value: "⬇️降包", name: "降包:    降级依赖" },
    { value: "🏷️类型", name: "类型:    仅添加或更新ts类型" },
  ],
  scopes: [
    { name: "pages" },
    { name: "components" },
    { name: "style" },
    { name: "utils" },
    { name: "config" },
    { name: "api" },
    { name: "assets" },
    { name: "hooks" },
  ],
  messages: {
    type: "选择一种你的提交类型:",
    scope: "选择一个scope (可选):",
    customScope: "Denote the SCOPE of this change:",
    subject: "短说明:\n",
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: "非兼容性说明 (可选):\n",
    footer: "关联关闭的issue，例如：#31, #34(可选):\n",
    confirmCommit: "确定提交说明?(yes/no)",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["特性", "修复"],
  subjectLimit: 100,
};
