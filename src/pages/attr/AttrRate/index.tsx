import React, { Component } from "react";
import { Rate, message } from "antd";
import './index.less'

export default class AttrRate extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      ret: this.props.ret
    }
  }


  handleChange(e) {
    const { item, ret, sel, setRet, id,formRef } = this.props;
    ret[sel].val = e
    ret[sel].attr[id].val = e

    if (item.key==='val') {
      formRef.current.setFieldsValue({ [ret[sel].field]: e})
    }


    setRet(ret)
  }

  render() {
    const { item,sel,ret } = this.props;

    return (
      <div className="m-attr-checkbox">
        <div className="m-label">{item.name}</div>
        <div className="m-rate" > 
          <Rate onChange={this.handleChange} value={ret[sel].val}/>
        </div>
      </div>
    );
  }
}
