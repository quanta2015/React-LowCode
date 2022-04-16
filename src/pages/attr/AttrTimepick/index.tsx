import React, { Component } from "react";
import {  message,TimePicker } from "antd";
import moment from 'moment'




export default class AttrDatepick extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e,s) {
    const { item, id, ret, sel, formRef, setRet } = this.props;
    const f = ret[sel].type
    ret[sel][item.key] = moment(s, f)
    ret[sel].attr[id].val = moment(s, f)
    if (item.key==='val') {
      formRef.current.setFieldsValue({ [ret[sel].field]: moment(s, f)})
    }
    setRet(ret)
  }

  render() {
    const { type, item, id, ret, sel, formRef, setRet } = this.props;

    ret[sel].val = (ret[sel].val===null)?moment():ret[sel].val

    

    return (
      <div>
        <div className="m-label">{item.name}</div>

        <TimePicker 
          format={ret[sel].type}
          value={ret[sel].val} 
          onChange={(e,s) => this.handleChange(e,s)}
        />
      </div>
    );
  }
}
