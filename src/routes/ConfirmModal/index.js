import React, {PureComponent} from 'react';
import {Button, Icon, Modal} from 'antd';
import styles from './index.less';

class Index extends PureComponent {
  render() {
    const {title, onOk, onCancel, desc, subDesc} = this.props
    return (
      <Modal
        title={title}
        visible={true}
        onOk={onOk}
        onCancel={onCancel}
        footer={
            <div>
            < Button onClick = {onCancel} > 取消 </Button>
             <Button type="primary" disabled={this.props.disabled} onClick={onOk}>确定</Button >
            </div>
        }
        >
        <div className={styles.content}>
          <div className={styles.inner}>
            <span className={styles.icon}>
              <Icon type="exclamation-circle-o"/>
            </span>
            <div className={styles.desc}>
              <p>{desc}</p>
              <p>{subDesc}</p>
            </div>
          </div>

        </div>
      </Modal>
    )
  }
}

export default Index