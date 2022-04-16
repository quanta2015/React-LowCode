import React, { Component } from "react";
import { Input, message,Radio } from "antd";
import './index.less'

const CDN =(e)=>{return `https://mqcai.top/img/umi/${e}.svg` }

export default class AttrRadio extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      sel: -1,
    }
  }


  handleChange(e,i) {
    const { item, id, ret, sel, formRef,setRet } = this.props;
    ret[sel].attr[id].list[i].k = e
    setRet(ret)
  }

  doAdd=()=>{
    const { id, sel, ret, setRet } = this.props;
    ret[sel].attr[id].list.push({k:`未命名${Math.ceil(Math.random()*100)}`,v:0})
    setRet(ret)
  }

  doDel=(e)=>{
    const { id, sel, ret, setRet } = this.props;
    ret[sel].attr[id].list.splice(e,1)
    setRet(ret)
  }

  doSel=(i,v,e)=>{
    const { id, sel, ret, setRet } = this.props;
    // ret[sel].val = v
    // this.setState({sel:i})
    // setRet(ret)

    console.log(e.target.checked)

    ret[sel].attr[id].list.map((item,j)=>{
      if (i===j) {
        item.v = (e.target.checked)?1:0
      }else{
        item.v = 0
      }
    })
 
    this.setState({sel:i})
    setRet(ret)
  }

  render() {
    const { item } = this.props;


    return (
      <div className="m-attr-radio">
        <div className="m-label">{item.name}</div>
        
          {item.list.map((o,i)=>
          <div className="m-attr-wrap" key={i}>
            <Radio checked={(o.v===1)?true:false} onClick={this.doSel.bind(this,i,o.k)}></Radio>
            <Input 
              placeholder={`请输入...`}
              value={o.k} 
              onChange={e => this.handleChange(e.currentTarget.value,i)}
            />
            <img src={CDN(`icon-remove`)} onClick={this.doDel.bind(this,i)}/>
          </div>
          )}
          <div className="m-btn" onClick={this.doAdd}> 添加选项</div>
      </div>
    );
  }
}
