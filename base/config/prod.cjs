/*
 * @Author: linqibin
 * @Date: 2022-09-07 08:53:46
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-07 10:36:57
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
const webpackMerge = require('webpack-merge')
/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
const config = {
  mode: 'production',
}

module.exports = webpackMerge.merge(require('./index.cjs'), config)
