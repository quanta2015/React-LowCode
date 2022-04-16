import React, { Component } from "react";
import {  message,TimePicker } from "antd";
import moment from 'moment'
const { RangePicker } = TimePicker;

const dateNow= (e)=>{ return [moment(),moment()] }

export default class AttrDatepick extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e,s) {
    const { item, id, ret, sel, formRef, setRet } = this.props;
    ret[sel][item.key] = e
    ret[sel].attr[id].val = e
    if (item.key==='val') {
      formRef.current.setFieldsValue({ [ret[sel].field]: e})
    }
    setRet(ret)
  }

  render() {
    const { type, item, id, ret, sel, formRef, setRet } = this.props;

    item.val = (item.val===null)?dateNow():item.val

    return (
      <div>
        <div className="m-label">{item.name}</div>

        <RangePicker 
          format={ret[sel].type}
          value={item.val} 
          onChange={(e,s) => this.handleChange(e,s)}
        />
      </div>
    );
  }
}
