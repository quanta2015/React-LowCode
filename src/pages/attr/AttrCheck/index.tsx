import React, { Component } from "react";
import { Checkbox, message } from "antd";
import './index.less'

export default class AttrCheck extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      ret: this.props.ret
    }
  }


  handleChange(e,v) {
    const { item, ret, sel, setRet } = this.props;
    ret[sel][item.key] = (e.target.checked)?v:null
    setRet(ret)
  }

  render() {
    const { item,sel,ret } = this.props;
    const {list} = item

    return (
      <div className="m-attr-checkbox">
        <div className="m-label">{item.name}</div>
        <div className="m-checkbox" > 
          {list.map((item,i)=> 
            <Checkbox key={i} checked={(ret[sel].req==='required')?true:false} onChange={e=>this.handleChange(e,item.value)}>{item.name}</Checkbox>
          )}
        </div>
      </div>
    );
  }
}
