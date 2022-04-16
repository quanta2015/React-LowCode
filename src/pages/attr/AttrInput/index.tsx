import React, { Component } from "react";
import { Input, message } from "antd";


export default class AttrInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    const { item, id, ret, sel, formRef, setRet } = this.props;

    console.log(e)

    ret[sel][item.key] = e
    ret[sel].attr[id].val = e

    if (item.key==='val') {
      formRef.current.setFieldsValue({ [ret[sel].field]: e})
    }
    
    setRet(ret)
  }

  render() {
    const { item } = this.props;


    return (
      <div>
        <div className="m-label">{item.name}</div>
        <Input 
          placeholder={`请输入${item.name}`}
          value={item.val} 
          onChange={e => this.handleChange(e.currentTarget.value)}
        />
      </div>
    );
  }
}
