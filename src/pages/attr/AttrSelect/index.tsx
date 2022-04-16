import React, { Component } from "react";
import { Select, message } from "antd";


export default class AttrSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      ret: this.props.ret
    }
  }


  handleChange(e) {
    const { item, ret, sel, setRet, id } = this.props;
    ret[sel][item.key] = e
    ret[sel].attr[id].value = e
    setRet(ret)
  }

  render() {
    const { item,sel,ret } = this.props;
    const {list} = item

    return (
      <div>
       <div className="m-label">{item.name}</div>
       <Select style={{width:'100%'}} value={ret[sel][item.key]} onChange={e=>this.handleChange(e)}> 
         {list.map((item,i)=> 
           <Select.Option key={i} value={item.value} >
             {item.name}
           </Select.Option>  
         )}
       </Select>
      </div>
    );
  }
}
