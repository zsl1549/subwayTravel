import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
  {
    title: '用户管理',
    icon: 'home',
    key: '/home'
  },
  {
    title: '站点信息管理',
    icon: 'laptop',
    key: '/home/general',
  },
  {
    title: '数据模型管理',
    icon: 'bars',
    key: '/home/navigation',
    // subs: [
    //   {key: '/home/navigation/dropdown', title: '下拉菜单', icon: ''},
    //   {key: '/home/navigation/menu', title: '导航菜单', icon: ''},
    //   {key: '/home/navigation/steps', title: '步骤条', icon: ''},
    // ]
  },
  {
    title: '用户查询记录',
    icon: 'edit',
    key: '/home/entry',
    // subs: [
    //   {
    //     key: '/home/entry/form',
    //     title: '表单',
    //     icon: '',
    //     subs: [
    //       {key: '/home/entry/form/basic-form', title: '基础表单', icon: ''},
    //       {key: '/home/entry/form/step-form', title: '分步表单', icon: ''}
    //     ]
    //   },
    //   {key: '/home/entry/upload', title: '上传', icon: ''},
    // ]
  },
]


class SiderNav extends React.Component {
  render() {

    return (
      <div style={{height: '100vh',overflowY:'scroll'}}>
        <div style={styles.logo}></div>
        <CustomMenu menus={menus}/>
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav