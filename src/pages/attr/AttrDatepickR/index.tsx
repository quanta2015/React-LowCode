import React, { Component } from "react";
import { Input, message,DatePicker } from "antd";
import moment from 'moment'
const { RangePicker } = DatePicker;

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
          picker={ret[sel].type}
          value={item.val} 
          onChange={e => this.handleChange(e)}
        />

      </div>
    );
  }
}
