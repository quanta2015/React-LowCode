import React from 'react'
import { observer, inject } from 'umi';
// import { Input,TextArea,Form } from 'antd-mobile';
import Draggable from 'react-draggable'; 
import { Input,Form,InputNumber,Radio,Space,Checkbox,Select,Rate,DatePicker,TimePicker  } from 'antd';
import moment from 'moment'
import './index.less';
import {comList} from '../lib/lib'
import dayjs from 'dayjs' 
import clone from '../util/clone'
import AttrInput  from './attr/AttrInput'
import AttrSelect from './attr/AttrSelect'
import AttrCheck  from './attr/AttrCheck'
import AttrRadio  from './attr/AttrRadio'
import AttrCheckbox   from './attr/AttrCheckbox'
import AttrSelectList from './attr/AttrSelectList'
import AttrRate      from './attr/AttrRate'
import AttrDatepick  from './attr/AttrDatepick'
import AttrDatepickR from './attr/AttrDatepickR'
import AttrTimepick  from './attr/AttrTimepick'
import AttrTimepickR from './attr/AttrTimepickR'




const TangePicker = TimePicker.RangePicker
const { RangePicker } = DatePicker
const { Option } = Select
const { TextArea } = Input



const CDN =(e)=>{return `https://mqcai.top/img/umi/${e}.svg` }

const ST_W100 = {width:'100%'}

const INPUT = <Input readOnly={true} placeholder="请输入..."></Input>
const TEXT  = <TextArea readOnly={true} placeholder="请输入..."></TextArea>
const NUMB  = <InputNumber readOnly={true} placeholder="请输入..." style={{...ST_W100}}></InputNumber>
const PWD   = <Input readOnly={true} type="password" placeholder="请输入..."></Input>
const RATE  =(e)=> <Rate disabled={true} /> 
const DATEPICK  = (e,t)=>  <DatePicker  disabled={true} picker={e.type}/>
const DATEPICKR = (e,t)=>  <RangePicker disabled={true} picker={e.type}/>
const TIMEPICK  = (e,t)=>  <TimePicker  format={e.type} disabled={true} />
const TIMEPICKR = (e,t)=>  <TangePicker format={e.type} disabled={true} />

const RADIO = (o,list=[])=>{
  o.attr.map((item,i)=>{
    if (item.type === 'attr-radio') list = item.list
  })
  return (
      <Space direction="vertical">
        {list.map((item,i)=>
          <Radio  key={i} value={item.k} checked={(1===item.v)?true:false} readonly={true}>{item.k}</Radio>
        )}
      </Space>
  )
}

const CHECKBOX = (o,list=[])=>{
  o.attr.map((item,i)=>{
    if (item.type === 'attr-checkbox') list = item.list
  })
  return (
      <Space direction="vertical">
        {list.map((item,i)=>
          <Checkbox key={i} value={item.k} checked={(1===item.v)?true:false} readonly={true}>{item.k}</Checkbox>
        )}
      </Space>
  )
}

const SELECT = (o,list=[],val=null)=>{
  o.attr.map((item,i)=>{
    if (item.type === 'attr-select-list') list = item.list
  })

  list.map((item,i)=>{
    if (item.v===1) val = item.k
  })

  return (
    <Space direction="vertical" style={{...ST_W100}}>
      <Select value={val} >
      {list.map((item,i)=>
        <Option key={i} value={item.k} >{item.k}</Option>
      )}
      </Select>
    </Space>
  )
}




@inject('index')
@observer
export default class Index extends React.Component {

  constructor(props) {
    super(props)
    this.store = this.props.index
    this.state = {
      loading: false,
      ret: [],
      sel: null,
      showProp: false,
    }
    this.formRef = React.createRef()
  }

  async componentDidMount() {
    // let r = await this.store.get('http://localhost:8080/umi',null)
  }

  doAddComp=(i)=>{
    let { ret } = this.state
    let item = clone(comList[i])
    let fieldname = `fieldname${Math.ceil(Math.random()*100)}`
    item.field = fieldname

    if ((item.code === 'fm-timepick')||(item.code === 'fm-datepick')) {
      item.val = moment()
    }else if ((item.code === 'fm-timepick-r')||(item.code === 'fm-datepick-r')) {
      item.val = [moment(),moment()]
    }
    
    ret.push(item)
    this.setState({ret})
  }


  doSelComp=(i)=>{
    this.setState({sel:i,showProp:true})
  }

  renderRet=(item, comp=null)=>{
    switch(item.code) {
      case 'fm-input':       comp = INPUT;break;
      case 'fm-text':        comp = TEXT ;break;
      case 'fm-number':      comp = NUMB ;break;
      case 'fm-password':    comp = PWD  ;break;
      case 'fm-radio':       comp = RADIO(item);break;
      case 'fm-checkbox':    comp = CHECKBOX(item);break;
      case 'fm-select-list': comp = SELECT(item);break;
      case 'fm-rate':        comp = RATE(item);break;
      case 'fm-datepick':    comp = DATEPICK(item);break;
      case 'fm-datepick-r':  comp = DATEPICKR(item);break;
      case 'fm-timepick':    comp = TIMEPICK(item);break;
      case 'fm-timepick-r':  comp = TIMEPICKR(item);break;



    }
    return comp
  }

  chgField=(e)=>{
    let v = e.currentTarget.value
    let {ret,sel} = this.state
    ret[sel].field = v
    this.setState({ret:ret})
  }

  setRet=(ret)=>{
    this.setState({ret:ret})
  }


  renderProp=(item, id, comp=null)=>{
    let {ret,sel} = this.state

    if (item.type === 'attr-input') {
      return <AttrInput item={item} id={id} ret={ret} sel={sel} formRef={this.formRef} setRet={this.setRet} />
    }

    if (item.type === 'attr-select') {
      return <AttrSelect item={item} id={id} ret={ret} sel={sel} setRet={this.setRet} />
    }

    if (item.type === 'attr-check') {
      return <AttrCheck item={item} id={id} ret={ret} sel={sel} setRet={this.setRet} />
    }


    if (item.type === 'attr-radio') {
      return <AttrRadio item={item} id={id} ret={ret} sel={sel} setRet={this.setRet} />
    }

    if (item.type === 'attr-checkbox') {
      return <AttrCheckbox item={item} id={id} ret={ret} sel={sel} setRet={this.setRet} />
    }

    if (item.type === 'attr-select-list') {
      return <AttrRadio item={item} id={id} ret={ret} sel={sel} setRet={this.setRet} />
    }

    if (item.type === 'attr-rate') {
      return <AttrRate item={item} id={id} ret={ret} sel={sel} formRef={this.formRef} setRet={this.setRet} />
    }

    if (item.type === 'attr-datepick') {
      return <AttrDatepick item={item} id={id} ret={ret} sel={sel} formRef={this.formRef} setRet={this.setRet} />
    }

    if (item.type === 'attr-datepick-r') {
      return <AttrDatepickR item={item} id={id} ret={ret} sel={sel} formRef={this.formRef} setRet={this.setRet} />
    }

    if (item.type === 'attr-timepick') {
      return <AttrTimepick item={item} id={id} ret={ret} sel={sel} formRef={this.formRef} setRet={this.setRet} />
    }

    if (item.type === 'attr-timepick-r') {
      return <AttrTimepickR item={item} id={id} ret={ret} sel={sel} formRef={this.formRef} setRet={this.setRet} />
    }

  }

  doDelRet =(id,e)=>{
    e.stopPropagation()
    let { ret } = this.state
    ret.splice(id,1)
    this.setState({ret:ret, sel:null, showProp:false})
  }


  doStart=(i,e)=>{
    let {ret} =this.state
    ret[i].y = e.pageY
    this.setState({ret:ret, showProp: false})
  }


  doStop=(i,e)=>{
    let {ret} =this.state

    // console.log('str:',ret[i].y)
    // console.log('end:',e.pageY)
    let pre,pos = i
    let h = ret[i].height

    if (e.pageY - ret[i].y>0) {
      let move = e.pageY - ret[i].y

      for(let k=i+1;k<ret.length;k++) {
        pre = h
        h += ret[k].height
        if ((move>pre)&&(move<h)) {
          pos = k
        }
      }
    }else{
      let move = ret[i].y - e.pageY

      for(let k=i-1;k>=0;k--) {
        pre = h
        h += ret[k].height
        if ((move>pre)&&(move<h)) {
          pos = k
        }
      }
    }
    // console.log(`from: ${i} to:${pos}`)

    if (i!==pos) {
      let el = ret[i]
      ret.splice(i,1)
      ret.splice(pos,0,el)
      this.setState({ret:ret, sel:null, showProp:false})
    }
  }

  doSaveHeight=(i,el)=>{
    let {ret} =this.state
    if (!el) return;
    ret[i].height = el.getBoundingClientRect().height
  }


  render() {

    let {ret,sel,showProp} = this.state

    let selItem = (sel!==null)?ret[sel]:null
    let attr = (sel!==null)?ret[sel].attr:[]
    let title = (sel!==null)?ret[sel].name:[]

    // let t = this.formRef?.current?.getFieldsValue(true)
    // console.log(t)
    
    return (
      <div className="g-le">
        <div className="g-tool">
          {comList.map((item,i)=>
            <div className="m-com" key={i} onClick={this.doAddComp.bind(this,i)}>
              <img src={CDN(item.code)} />
              {item.name}
            </div>
          )}

        </div>
        <div className="g-ret">
          <Form ref={this.formRef} layout='vertical'>
          {ret.map((item,i)=>
            <Draggable  key={i} axis="y" bounds=".g-ret" position={{x:0,y:0}}
                        onDrag={this.doDrag} 
                        onStart={this.doStart.bind(this,i)} 
                        onStop={this.doStop.bind(this,i)}>
              <div ref={this.doSaveHeight.bind(this,i)} key={i} 
                   className={(i!==sel)?"m-item":"m-item sel"} 
                   onClick={this.doSelComp.bind(this,i)} >
                <label>{i+1}</label>
                <div className="m-btn" onClick={this.doDelRet.bind(this,i)}><img src={CDN('icon-del')} /></div>
                <Form.Item name={item.field} label={item.title} initialValue={item.val} 
                    rules={[{ required: item.req, message: `请输入${item.title}!` }]} >
                  {this.renderRet(item)}
                </Form.Item>
              </div>
            </Draggable>
          )}
          </Form>


        </div>
        <div className="g-prop">
          {(showProp)&&
          <div className="m-wrap">
            <div className="m-tl"><img src={CDN(selItem?.code)} />{title}</div>
            <div className="m-attr">
              <label>字段</label>
              <Input value={selItem.field} onChange={this.chgField}></Input>
            </div>
            {attr.map((item,i)=>
              <div className="m-attr" key={i}>
                {this.renderProp(item,i)}
              </div>
            )}
          </div>}
        </div>
      </div>
    );
  }
}
