/*
 * @Author: linqibin
 * @Date: 2022-09-09 08:48:08
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-09 17:11:38
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import { Link } from 'umi';
import styles from './index.less';

const IndexPage: React.FC = ({ children }) => {
  return (
    <div className={styles.page}>
      <img src={require('../assets/umi.png')} alt="" />
      <div>
        <Link to="/home">首页</Link> |<Link to="/about">关于</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default IndexPage;
