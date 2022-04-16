import React, { Component } from "react";
import { Input, message,DatePicker } from "antd";
import moment from 'moment'



const { RangePicker } = DatePicker;



export default class AttrDatepick extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e,s) {
    const { item, id, ret, sel, formRef, setRet } = this.props;
    ret[sel][item.key] = moment(s, 'YYYY-MM-DD')
    ret[sel].attr[id].val = moment(s, 'YYYY-MM-DD')
    if (item.key==='val') {
      formRef.current.setFieldsValue({ [ret[sel].field]: moment(s, 'YYYY-MM-DD')})
    }
    setRet(ret)
  }

  render() {
    const { type, item, id, ret, sel, formRef, setRet } = this.props;


    return (
      <div>
        <div className="m-label">{item.name}</div>

        <DatePicker 
          picker={ret[sel].type}
          value={item.val} 
          onChange={(e,s) => this.handleChange(e,s)}
        />
      </div>
    );
  }
}
