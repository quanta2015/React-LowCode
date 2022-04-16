import moment from 'moment'

export  const comList = [
  {
    "name": "单行文本",
    "code": "fm-input",
    "group": "基础控件",
    "title": "单行文本",
    "field": "",
    "cls":"",
    "req": "",
    "val": " ",
    "format": null,
    "attr": [{
        "name": "标题",
        "type": "attr-input",
        "val": "单行文本",
        "key": "title",
      },{
        "name": "类名",
        "type": "attr-input",
        "val": "m-ipt",
        "key": "cls",
      },{
        "name": "默认值",
        "type": "attr-input",
        "val": "",
        "key": "val",
      },{
        "name": "校验",
        "type": "attr-check",
        "val": null,
        "key": "req",
        "list": [{
            "name": "必填",
            "value": "required",
        }],
      },{
        "name": "格式值",
        "type": "attr-select",
        "value": "无",
        "key": "format",
        "list": [{
            "name": "无",
            "value": null,
          },
          {
            "name": "手机号",
            "value": "phone",
          },
          {
            "name": "身份证",
            "value": "idcard",
          }
        ],
      },
    ]
  },
  {
    "name": "多行文本",
    "code": "fm-text",
    "group": "基础控件",
    "title": "多行文本",
    "field": "",
    "req": "",
    "val": null,
    "format": null,
    "attr": [
      {
        "name": "标题",
        "type": "attr-input",
        "val": "多行文本",
        "key": "title",
      },{
        "name": "类名",
        "type": "attr-input",
        "val": "m-txt",
        "key": "cls",
      },{
        "name": "默认值",
        "type": "attr-input",
        "val": null,
        "key": "val",
      },{
        "name": "校验",
        "type": "attr-check",
        "val": null,
        "key": "req",
        "list": [{
            "name": "必填",
            "value": "required",
        }],
      },{
        "name": "格式值",
        "type": "attr-select",
        "value": "无",
        "key": "format",
        "list": [{
            "name": "无",
            "value": null,
          },
          {
            "name": "手机号",
            "value": "phone",
          },
          {
            "name": "身份证",
            "value": "idcard",
          }
        ],
      },
    ]
  },
  {
    "name": "数字输入框",
    "code": "fm-number",
    "group": "基础控件",
    "title": "数字输入框",
    "field": "",
    "req": "",
    "val": null,
    "format": null,
    "attr": [
      {
        "name": "标题",
        "type": "attr-input",
        "val": "数字输入框",
        "key": "title",
      },{
        "name": "类名",
        "type": "attr-input",
        "val": "m-num",
        "key": "cls",
      },{
        "name": "默认值",
        "type": "attr-input",
        "val": null,
        "key": "val",
      },{
        "name": "校验",
        "type": "attr-check",
        "val": null,
        "key": "req",
        "list": [{
            "name": "必填",
            "value": "required",
        }],
      },{
        "name": "格式值",
        "type": "attr-select",
        "value": "无",
        "key": "format",
        "list": [{
            "name": "无",
            "value": null,
          },
          {
            "name": "手机号",
            "value": "phone",
          },
          {
            "name": "身份证",
            "value": "idcard",
          }
        ],
      },
    ]
  },
  {
    "name": "密码输入框",
    "code": "fm-password",
    "group": "基础控件",
    "title": "密码输入框",
    "field": "",
    "req": "",
    "val": null,
    "format": null,
    "attr": [
      {
        "name": "标题",
        "type": "attr-input",
        "val": "多行文本",
        "key": "title",
      },{
        "name": "类名",
        "type": "attr-input",
        "val": "m-pwd",
        "key": "cls",
      },{
        "name": "默认值",
        "type": "attr-input",
        "val": null,
        "key": "val",
      },{
        "name": "校验",
        "type": "attr-check",
        "val": null,
        "key": "req",
        "list": [{
            "name": "必填",
            "value": "required",
        }],
      },{
        "name": "格式值",
        "type": "attr-select",
        "value": "无",
        "key": "format",
        "list": [{
            "name": "无",
            "value": null,
          },
          {
            "name": "手机号",
            "value": "phone",
          },
          {
            "name": "身份证",
            "value": "idcard",
          }
        ],
      },
    ]
  },
  {
    "name": "单选按钮组",
    "code": "fm-radio",
    "group": "基础控件",
    "title": "单选按钮组",
    "field": "",
    "req": "",
    "val": null,
    "format": null,
    "attr": [
      {
        "name": "标题",
        "type": "attr-input",
        "val": "多行文本",
        "key": "title",
      },{
        "name": "类名",
        "type": "attr-input",
        "val": "m-radio",
        "key": "cls",
      },{
        "name": "校验",
        "type": "attr-check",
        "val": null,
        "key": "req",
        "list": [{
            "name": "必填",
            "value": "required",
        }],
      },{
        "name": "格式值",
        "type": "attr-select",
        "value": "无",
        "key": "format",
        "list": [{
            "name": "无",
            "value": null,
          },
          {
            "name": "手机号",
            "value": "phone",
          },
          {
            "name": "身份证",
            "value": "idcard",
          }
        ],
      },{
        "name": "选项",
        "type": "attr-radio",
        "value": "无",
        "key": "val",
        "list": [{k:"男",v:0},{k:"女",v:0}],
      },
    ]
  },
  {
    "name": "复选框组",
    "code": "fm-checkbox",
    "group": "基础控件",
    "title": "复选框组",
    "field": "",
    "req": "",
    "val": null,
    "format": null,
    "attr": [
      {
        "name": "标题",
        "type": "attr-input",
        "val": "多行文本",
        "key": "title",
      },{
        "name": "类名",
        "type": "attr-input",
        "val": "m-checkbox",
        "key": "cls",
      },{
        "name": "校验",
        "type": "attr-check",
        "val": null,
        "key": "req",
        "list": [{
            "name": "必填",
            "value": "required",
        }],
      },{
        "name": "格式值",
        "type": "attr-select",
        "value": "无",
        "key": "format",
        "list": [{
            "name": "无",
            "value": null,
          },
          {
            "name": "手机号",
            "value": "phone",
          },
          {
            "name": "身份证",
            "value": "idcard",
          }
        ],
      },{
        "name": "选项",
        "type": "attr-checkbox",
        "value": "无",
        "key": "val",
        "list": [{k:"面包",v:0},{k:"牛奶",v:0},{k:"饮料",v:0}],
      },
    ]
  },
  {
    "name": "下拉框",
    "code": "fm-select-list",
    "group": "基础控件",
    "title": "下拉框",
    "field": "",
    "req": "",
    "val": null,
    "format": null,
    "attr": [
      {
        "name": "标题",
        "type": "attr-input",
        "val": "多行文本",
        "key": "title",
      },{
        "name": "类名",
        "type": "attr-input",
        "val": "m-select",
        "key": "cls",
      },{
        "name": "校验",
        "type": "attr-check",
        "val": null,
        "key": "req",
        "list": [{
            "name": "必填",
            "value": "required",
        }],
      },
      {
        "name": "格式值",
        "type": "attr-select",
        "value": "无",
        "key": "format",
        "list": [{
            "name": "无",
            "value": null,
          },
          {
            "name": "手机号",
            "value": "phone",
          },
          {
            "name": "身份证",
            "value": "idcard",
          }
        ],
      },
      {
        "name": "选项",
        "type": "attr-select-list",
        "value": "无",
        "key": "val",
        "list": [{k:"面包",v:0},{k:"牛奶",v:0},{k:"饮料",v:0}],
      },
    ]
  },
  {
    "name": "评分",
    "code": "fm-rate",
    "group": "基础控件",
    "title": "评分",
    "field": "",
    "req": "",
    "val": null,
    "format": null,
    "attr": [
      {
        "name": "标题",
        "type": "attr-input",
        "val": "多行文本",
        "key": "title",
      },{
        "name": "类名",
        "type": "attr-input",
        "val": "m-rate",
        "key": "cls",
      },{
        "name": "默认值",
        "type": "attr-rate",
        "val": 0,
        "key": "val",
      },
      {
        "name": "校验",
        "type": "attr-check",
        "val": null,
        "key": "req",
        "list": [{
            "name": "必填",
            "value": "required",
        }],
      },
    ]
  },
  {
    "name": "日期选择",
    "code": "fm-datepick",
    "group": "基础控件",
    "title": "日期选择",
    "field": "",
    "req": "",
    "val": null,
    "type": "day",
    "attr": [
      {
        "name": "标题",
        "type": "attr-input",
        "val": "日期选择",
        "key": "title",
      },{
        "name": "类名",
        "type": "attr-input",
        "val": "m-datepick",
        "key": "cls",
      },{
        "name": "默认值",
        "type": "attr-datepick",
        "val": null,
        "key": "val",
      },
      {
        "name": "校验",
        "type": "attr-check",
        "val": null,
        "key": "req",
        "list": [{
            "name": "必填",
            "value": "required",
        }],
      },
      {
        "name": "类型",
        "type": "attr-select",
        "value": "day",
        "key": "type",
        "list": [{name:"日期",value:"day"},
                 {name:"星期",value:"week"},
                 {name:"月份",value:"month"},
                 {name:"年份",value:"year"}],
      },
    ]
  },
  {
    "name": "日期范围选择",
    "code": "fm-datepick-r",
    "group": "基础控件",
    "title": "日期范围选择",
    "field": "",
    "req": "",
    "val": null,
    "type": "day",
    "attr": [
      {
        "name": "标题",
        "type": "attr-input",
        "val": "日期范围选择",
        "key": "title",
      },{
        "name": "类名",
        "type": "attr-input",
        "val": "m-datepickr",
        "key": "cls",
      },{
        "name": "默认值",
        "type": "attr-datepick-r",
        "val": null,
        "key": "val",
      },
      {
        "name": "校验",
        "type": "attr-check",
        "val": null,
        "key": "req",
        "list": [{
            "name": "必填",
            "value": "required",
        }],
      },
      {
        "name": "类型",
        "type": "attr-select",
        "value": "day",
        "key": "type",
        "list": [{name:"日期",value:"day"},
                 {name:"星期",value:"week"},
                 {name:"月份",value:"month"},
                 {name:"年份",value:"year"}],
      },
    ]
  },
  {
    "name": "时间选择",
    "code": "fm-timepick",
    "group": "基础控件",
    "title": "时间选择",
    "field": "",
    "req": "",
    "val": null,
    "type": "HH:mm",
    "attr": [
      {
        "name": "标题",
        "type": "attr-input",
        "val": "时间选择",
        "key": "title",
      },{
        "name": "类名",
        "type": "attr-input",
        "val": "m-timepick",
        "key": "cls",
      },{
        "name": "默认值",
        "type": "attr-timepick",
        "val": null,
        "key": "val",
      },{
        "name": "校验",
        "type": "attr-check",
        "val": null,
        "key": "req",
        "list": [{
            "name": "必填",
            "value": "required",
        }],
      },{
        "name": "类型",
        "type": "attr-select",
        "value": "day",
        "key": "type",
        "list": [{name:"HH:mm:ss",value:"HH:mm:ss"},
                 {name:"HH:mm",value:"HH:mm"},
                 {name:"HH",value:"HH"}]
      },
    ]
  },
  {
    "name": "时间范围选择",
    "code": "fm-timepick-r",
    "group": "基础控件",
    "title": "时间范围选择",
    "field": "",
    "req": "",
    "val": null,
    "type": "HH:mm",
    "attr": [
      {
        "name": "标题",
        "type": "attr-input",
        "val": "时间范围选择",
        "key": "title",
      },{
        "name": "类名",
        "type": "attr-input",
        "val": "m-timepickr",
        "key": "cls",
      },{
        "name": "默认值",
        "type": "attr-timepick-r",
        "val": null,
        "key": "val",
      },{
        "name": "校验",
        "type": "attr-check",
        "val": null,
        "key": "req",
        "list": [{
            "name": "必填",
            "value": "required",
        }],
      },{
        "name": "类型",
        "type": "attr-select",
        "value": "day",
        "key": "type",
        "list": [{name:"HH:mm:ss",value:"HH:mm:ss"},
                 {name:"HH:mm",value:"HH:mm"},
                 {name:"HH",value:"HH"}]
      },
    ]
  },
]