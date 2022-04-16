{
  "success": true,
  "code": 0,
  "msg": "",
  "data": {
    "programId": 350,
    "formId": 277,
    "flowId": 0,
    "name": "未命名表单",
    "imgLogo": "https://zj-education.oss-cn-hangzhou.aliyuncs.com/work-flow-img/home_bg.svg",
    "status": 0,
    "statusDesc": "草稿",
    "programVersion": "V1",
    "formType": 2,
    "appId": null,
    "shareOff": null,
    "titleOff": null,
    "titleExpression": null,
    "descOff": null,
    "descExpression": null,
    "hiddenHandlerOff": null,
    "timeoutSwitch": 0,
    "timeoutDays": 0,
    "timeoutHours": 0,
    "timeoutConfigs": [],
    "organization": 1,
    "templates": [
      {
        "id": 8,
        "name": "单行文本",
        "code": "mobile-input",
        "group": "基础控件",
        "image": "https://s.xiaoyuanhao.com/workflow/img/edit_text_n.svg",
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "单行文本",
            "attribute": "title",
            "conditionTemplateId": 5,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 6,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "格式值",
            "type": "attr-select",
            "value": "无",
            "attribute": "format",
            "conditionTemplateId": 7,
            "verifiable": 1,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "",
                "name": "无",
                "value": null,
                "defaulted": 1,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "phone",
                "name": "手机号",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "card",
                "name": "身份证",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "默认值",
            "type": "attr-default-select",
            "value": null,
            "attribute": "defaultValue",
            "conditionTemplateId": 8,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "attr-input",
                "name": "自定义",
                "value": null,
                "defaulted": 1,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "attr-dict",
                "name": "数据字典",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 9,
            "verifiable": 1,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "required",
                "name": "必填",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "repeat",
                "name": "不允许重复值",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 58,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "更新字典",
            "type": "attr-dict",
            "value": null,
            "attribute": "dictUpdate",
            "conditionTemplateId": 108,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 117,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "单行文本",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 9,
        "name": "多行文本",
        "code": "mobile-text-area",
        "group": "基础控件",
        "image": "https://zj-education.oss-cn-hangzhou.aliyuncs.com/work-flow-img/edit_text2_n.svg",
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "多行文本",
            "attribute": "title",
            "conditionTemplateId": 10,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 11,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "默认值",
            "type": "attr-default-select",
            "value": null,
            "attribute": "defaultValue",
            "conditionTemplateId": 12,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "attr-input",
                "name": "自定义",
                "value": null,
                "defaulted": 1,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "attr-dict",
                "name": "数据字典",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 13,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 59,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "更新字典",
            "type": "attr-dict",
            "value": null,
            "attribute": "dictUpdate",
            "conditionTemplateId": 109,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 118,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "多行文本",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 10,
        "name": "日期",
        "code": "mobile-date-picker",
        "group": "基础控件",
        "image": "https://s.xiaoyuanhao.com/workflow/img/edit_date_n.svg",
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "日期",
            "attribute": "title",
            "conditionTemplateId": 14,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 15,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "默认值",
            "type": "attr-default-select",
            "value": null,
            "attribute": "defaultValue",
            "conditionTemplateId": 16,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "attr-date-picker",
                "name": "自定义",
                "value": null,
                "defaulted": 1,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "attr-dict",
                "name": "数据字典",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 17,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 60,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "更新字典",
            "type": "attr-dict",
            "value": null,
            "attribute": "dictUpdate",
            "conditionTemplateId": 110,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 119,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "日期",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 11,
        "name": "日期时间",
        "code": "mobile-date-time-picker",
        "group": "基础控件",
        "image": "https://zj-education.oss-cn-hangzhou.aliyuncs.com/work-flow-img/edit_datetime_n.svg",
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "日期时间",
            "attribute": "title",
            "conditionTemplateId": 18,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 19,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "默认值",
            "type": "attr-default-select",
            "value": null,
            "attribute": "defaultValue",
            "conditionTemplateId": 20,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "attr-date-time-picker",
                "name": "自定义",
                "value": null,
                "defaulted": 1,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "attr-dict",
                "name": "数据字典",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 21,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 61,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "更新字典",
            "type": "attr-dict",
            "value": " ",
            "attribute": "dictUpdate",
            "conditionTemplateId": 111,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 120,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "日期时间",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 12,
        "name": "单选按钮组",
        "code": "mobile-radio-group",
        "group": "基础控件",
        "image": "https://zj-education.oss-cn-hangzhou.aliyuncs.com/work-flow-img/edit_radio_n.svg",
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "单选选项组",
            "attribute": "title",
            "conditionTemplateId": 22,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 23,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "选项",
            "type": "attr-radio-group",
            "value": null,
            "attribute": "options",
            "conditionTemplateId": 24,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "",
                "name": "选项1",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "",
                "name": "选项2",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "",
                "name": "选项3",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 25,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 62,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "更新字典",
            "type": "attr-dict",
            "value": null,
            "attribute": "dictUpdate",
            "conditionTemplateId": 113,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 121,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "单选选项组",
        "description": "",
        "required": 0,
        "values": [{
            "id": null,
            "conditionId": null,
            "code": "",
            "name": "选项1",
            "value": null,
            "defaulted": 0,
            "relations": null
          },
          {
            "id": null,
            "conditionId": null,
            "code": "",
            "name": "选项2",
            "value": null,
            "defaulted": 0,
            "relations": null
          },
          {
            "id": null,
            "conditionId": null,
            "code": "",
            "name": "选项3",
            "value": null,
            "defaulted": 0,
            "relations": null
          }
        ]
      },
      {
        "id": 13,
        "name": "复选框组",
        "code": "mobile-check-box-group",
        "group": "基础控件",
        "image": "https://zj-education.oss-cn-hangzhou.aliyuncs.com/work-flow-img/edit_checkbox_n.svg",
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "复选框组",
            "attribute": "title",
            "conditionTemplateId": 26,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 27,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "选项",
            "type": "attr-check-box-group",
            "value": null,
            "attribute": "options",
            "conditionTemplateId": 28,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "",
                "name": "选项1",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "",
                "name": "选项2",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "",
                "name": "选项3",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 29,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 63,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "更新字典",
            "type": "attr-dict",
            "value": null,
            "attribute": "dictUpdate",
            "conditionTemplateId": 114,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 122,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "复选框组",
        "description": "",
        "required": 0,
        "values": [{
            "id": null,
            "conditionId": null,
            "code": "",
            "name": "选项1",
            "value": null,
            "defaulted": 0,
            "relations": null
          },
          {
            "id": null,
            "conditionId": null,
            "code": "",
            "name": "选项2",
            "value": null,
            "defaulted": 0,
            "relations": null
          },
          {
            "id": null,
            "conditionId": null,
            "code": "",
            "name": "选项3",
            "value": null,
            "defaulted": 0,
            "relations": null
          }
        ]
      },
      {
        "id": 14,
        "name": "下拉框",
        "code": "mobile-select",
        "group": "基础控件",
        "image": "https://zj-education.oss-cn-hangzhou.aliyuncs.com/work-flow-img/edit_dropdown_n.svg",
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "下拉框",
            "attribute": "title",
            "conditionTemplateId": 30,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 31,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "选项",
            "type": "attr-radio-group",
            "value": null,
            "attribute": "options",
            "conditionTemplateId": 32,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "",
                "name": "选项1",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "",
                "name": "选项2",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "",
                "name": "选项3",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 33,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 64,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "更新字典",
            "type": "attr-dict",
            "value": null,
            "attribute": "dictUpdate",
            "conditionTemplateId": 115,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 123,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "下拉框",
        "description": "",
        "required": 0,
        "values": [{
            "id": null,
            "conditionId": null,
            "code": "",
            "name": "选项1",
            "value": null,
            "defaulted": 0,
            "relations": null
          },
          {
            "id": null,
            "conditionId": null,
            "code": "",
            "name": "选项2",
            "value": null,
            "defaulted": 0,
            "relations": null
          },
          {
            "id": null,
            "conditionId": null,
            "code": "",
            "name": "选项3",
            "value": null,
            "defaulted": 0,
            "relations": null
          }
        ]
      },
      {
        "id": 23,
        "name": "搜索下拉框",
        "code": "mobile-select-search",
        "group": "基础控件",
        "image": null,
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "搜索下拉框",
            "attribute": "title",
            "conditionTemplateId": 93,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 94,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "选项",
            "type": "attr-radio-group",
            "value": null,
            "attribute": "options",
            "conditionTemplateId": 96,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "",
                "name": "选项1",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "",
                "name": "选项2",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "",
                "name": "选项3",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 95,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": null,
            "attribute": "fixedFunction",
            "conditionTemplateId": 97,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 131,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "搜索下拉框",
        "description": "",
        "required": 0,
        "values": [{
            "id": null,
            "conditionId": null,
            "code": "",
            "name": "选项1",
            "value": null,
            "defaulted": 0,
            "relations": null
          },
          {
            "id": null,
            "conditionId": null,
            "code": "",
            "name": "选项2",
            "value": null,
            "defaulted": 0,
            "relations": null
          },
          {
            "id": null,
            "conditionId": null,
            "code": "",
            "name": "选项3",
            "value": null,
            "defaulted": 0,
            "relations": null
          }
        ]
      },
      {
        "id": 18,
        "name": "数字",
        "code": "mobile-number",
        "group": "基础控件",
        "image": null,
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "数字",
            "attribute": "title",
            "conditionTemplateId": 47,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": "",
            "attribute": "description",
            "conditionTemplateId": 48,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "默认值",
            "type": "attr-default-select",
            "value": "",
            "attribute": "defaultValue",
            "conditionTemplateId": 49,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "attr-input",
                "name": "自定义",
                "value": null,
                "defaulted": 1,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "attr-dict",
                "name": "数据字典",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": "",
            "attribute": "rule",
            "conditionTemplateId": 50,
            "verifiable": 1,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "required",
                "name": "必填",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "precision",
                "name": "保留N位小数",
                "value": "",
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "scopeLimit",
                "name": "限定范围",
                "value": "",
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 68,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "更新字典",
            "type": "attr-dict",
            "value": null,
            "attribute": "dictUpdate",
            "conditionTemplateId": 112,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 126,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "数字",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 20,
        "name": "定位",
        "code": "mobile-location",
        "group": "增强控件",
        "image": null,
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "定位",
            "attribute": "title",
            "conditionTemplateId": 54,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": "",
            "attribute": "description",
            "conditionTemplateId": 55,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": "",
            "attribute": "rule",
            "conditionTemplateId": 56,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 57,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 128,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "定位",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 25,
        "name": "图片",
        "code": "mobile-image-annex",
        "group": "增强控件",
        "image": "https://zj-education.oss-cn-hangzhou.aliyuncs.com/work-flow-img/edit_image_n.svg",
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "图片",
            "attribute": "title",
            "conditionTemplateId": 102,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 103,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 104,
            "verifiable": 1,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "required",
                "name": "必填",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "minSize",
                "name": "最小值",
                "value": "",
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "maxSize",
                "name": "最大值",
                "value": "",
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 105,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 116,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "图片",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 21,
        "name": "链接",
        "code": "mobile-link",
        "group": "增强控件",
        "image": null,
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "链接",
            "attribute": "title",
            "conditionTemplateId": 84,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": "",
            "attribute": "description",
            "conditionTemplateId": 85,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "默认值",
            "type": "attr-input",
            "value": "",
            "attribute": "defaultValue",
            "conditionTemplateId": 86,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": "",
            "attribute": "rule",
            "conditionTemplateId": 87,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 88,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 129,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "链接",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 22,
        "name": "附件",
        "code": "mobile-annex",
        "group": "增强控件",
        "image": null,
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "附件",
            "attribute": "title",
            "conditionTemplateId": 89,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 90,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 91,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": null,
            "attribute": "fixedFunction",
            "conditionTemplateId": 92,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 130,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "附件",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 27,
        "name": "成员单选",
        "code": "mobile-select-user-single",
        "group": "增强控件",
        "image": "https://zj-education.oss-cn-hangzhou.aliyuncs.com/work-flow-img/edit_people_n.svg",
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "成员单选",
            "attribute": "title",
            "conditionTemplateId": 133,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 134,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "可选范围",
            "type": "attr-default-value-select-person",
            "value": null,
            "attribute": "optionsLimit",
            "conditionTemplateId": 135,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "attr-user-select-limit",
                "name": "自定义",
                "value": null,
                "defaulted": 1,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "attr-dict",
                "name": "数据字典",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 137,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 143,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 145,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "更新字典",
            "type": "attr-dict",
            "value": null,
            "attribute": "dictUpdate",
            "conditionTemplateId": 147,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "成员单选",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 28,
        "name": "成员多选",
        "code": "mobile-select-user",
        "group": "增强控件",
        "image": "https://zj-education.oss-cn-hangzhou.aliyuncs.com/work-flow-img/edit_peoples_n.svg",
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "成员多选",
            "attribute": "title",
            "conditionTemplateId": 138,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 139,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "可选范围",
            "type": "attr-default-value-select-person",
            "value": null,
            "attribute": "optionsLimit",
            "conditionTemplateId": 140,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "attr-user-select-limit",
                "name": "自定义",
                "value": null,
                "defaulted": 1,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "attr-dict",
                "name": "数据字典",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 142,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 144,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 146,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "更新字典",
            "type": "attr-dict",
            "value": null,
            "attribute": "dictUpdate",
            "conditionTemplateId": 148,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "成员多选",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 24,
        "name": "签名",
        "code": "mobile-image-signature",
        "group": "增强控件",
        "image": null,
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "签名",
            "attribute": "title",
            "conditionTemplateId": 98,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 99,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 100,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": null,
            "attribute": "fixedFunction",
            "conditionTemplateId": 101,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 132,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "签名",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 29,
        "name": "部门单选",
        "code": "mobile-select-dept-single",
        "group": "增强控件",
        "image": null,
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "部门单选",
            "attribute": "title",
            "conditionTemplateId": 149,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 150,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "可选范围",
            "type": "attr-default-value-select-dept",
            "value": null,
            "attribute": "optionsLimit",
            "conditionTemplateId": 151,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "attr-dept-select-limit",
                "name": "自定义",
                "value": null,
                "defaulted": 1,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "attr-dict",
                "name": "数据字典",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 152,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 153,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 154,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "更新字典",
            "type": "attr-dict",
            "value": null,
            "attribute": "dictUpdate",
            "conditionTemplateId": 155,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "部门单选",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 30,
        "name": "部门多选",
        "code": "mobile-select-dept",
        "group": "增强控件",
        "image": null,
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "部门多选",
            "attribute": "title",
            "conditionTemplateId": 156,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 157,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "可选范围",
            "type": "attr-default-value-select-dept",
            "value": null,
            "attribute": "optionsLimit",
            "conditionTemplateId": 158,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "attr-dept-select-limit",
                "name": "自定义",
                "value": null,
                "defaulted": 1,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "attr-dict",
                "name": "数据字典",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "校验",
            "type": "attr-check-box",
            "value": null,
            "attribute": "rule",
            "conditionTemplateId": 159,
            "verifiable": 1,
            "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            }],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "表达式",
            "type": "attr-input",
            "value": "",
            "attribute": "fixedFunction",
            "conditionTemplateId": 160,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 161,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "更新字典",
            "type": "attr-dict",
            "value": null,
            "attribute": "dictUpdate",
            "conditionTemplateId": 162,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "部门多选",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 33,
        "name": "业务组件",
        "code": "mobile-business-component",
        "group": "基础控件",
        "image": null,
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "业务组件",
            "attribute": "title",
            "conditionTemplateId": 177,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": null,
            "attribute": "description",
            "conditionTemplateId": 178,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "默认值",
            "type": "attr-input",
            "value": null,
            "attribute": "defaultValue",
            "conditionTemplateId": 179,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "业务组件",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 19,
        "name": "分割线",
        "code": "mobile-divider",
        "group": "布局控件",
        "image": null,
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "分割线",
            "attribute": "title",
            "conditionTemplateId": 51,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": "",
            "attribute": "description",
            "conditionTemplateId": 52,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "线型",
            "type": "attr-tabs",
            "value": "normal",
            "attribute": "lineType",
            "conditionTemplateId": 53,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "transparent",
                "name": "透明",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "normal",
                "name": "常规",
                "value": null,
                "defaulted": 1,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "bold",
                "name": "加粗",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "字段标签",
            "type": "attr-select",
            "value": null,
            "attribute": "label",
            "conditionTemplateId": 127,
            "verifiable": 0,
            "conditionValues": [{
                "id": null,
                "conditionId": null,
                "code": "name",
                "name": "姓名",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dept",
                "name": "部门/班级",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "production",
                "name": "作品",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "workTitle",
                "name": "作品名称",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "dayNumber",
                "name": "天数",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "time",
                "name": "时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "startTime",
                "name": "开始时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "endTime",
                "name": "结束时间",
                "value": null,
                "defaulted": 0,
                "relations": null
              },
              {
                "id": null,
                "conditionId": null,
                "code": "other",
                "name": "其它",
                "value": null,
                "defaulted": 0,
                "relations": null
              }
            ],
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "分割线",
        "description": "",
        "required": 0,
        "values": null
      },
      {
        "id": 26,
        "name": "子表明细",
        "code": "mobile-sublist",
        "group": "布局控件",
        "image": null,
        "conditions": [{
            "id": null,
            "name": "标题",
            "type": "attr-input",
            "value": "子表明细",
            "attribute": "title",
            "conditionTemplateId": 106,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          },
          {
            "id": null,
            "name": "描述信息",
            "type": "attr-text-area",
            "value": "",
            "attribute": "description",
            "conditionTemplateId": 107,
            "verifiable": 0,
            "conditionValues": null,
            "selectId": "",
            "conditionUsers": null,
            "conditionDepts": null
          }
        ],
        "title": "子表明细",
        "description": "",
        "required": 0,
        "values": null
      }
    ],
    "widgets": [{
      "id": "1512987084151517186",
      "widgetTemplateId": "8",
      "widgetCode": "f455",
      "name": "单行文本",
      "code": "mobile-input",
      "title": "单行文本a",
      "description": "<div style=\"color:#7e878c;font-weight:normal;white-space: pre-wrap\">abbbbb</div>",
      "defaultValue": null,
      "relations": null,
      "required": 0,
      "changeable": 1,
      "values": [],
      "conditionUsers": null,
      "conditionDepts": null,
      "conditions": [{
          "id": "1512987084151517187",
          "name": "标题",
          "type": "attr-input",
          "value": "单行文本a",
          "attribute": "title",
          "conditionTemplateId": 5,
          "verifiable": 0,
          "conditionValues": null,
          "selectId": "",
          "conditionUsers": null,
          "conditionDepts": null
        },
        {
          "id": "1512987084151517188",
          "name": "描述信息",
          "type": "attr-text-area",
          "value": "<div style=\"color:#7e878c;font-weight:normal;white-space: pre-wrap\">abbbbb</div>",
          "attribute": "description",
          "conditionTemplateId": 6,
          "verifiable": 0,
          "conditionValues": null,
          "selectId": "",
          "conditionUsers": null,
          "conditionDepts": null
        },
        {
          "id": "1512987084151517189",
          "name": "格式值",
          "type": "attr-select",
          "value": "无",
          "attribute": "format",
          "conditionTemplateId": 7,
          "verifiable": 1,
          "conditionValues": [{
              "id": "1512987084151517190",
              "conditionId": "1512987084151517189",
              "code": "",
              "name": "无",
              "value": null,
              "defaulted": 1,
              "relations": null
            },
            {
              "id": "1512987084151517191",
              "conditionId": "1512987084151517189",
              "code": "phone",
              "name": "手机号",
              "value": null,
              "defaulted": 0,
              "relations": null
            },
            {
              "id": "1512987084151517192",
              "conditionId": "1512987084151517189",
              "code": "card",
              "name": "身份证",
              "value": null,
              "defaulted": 0,
              "relations": null
            }
          ],
          "selectId": "",
          "conditionUsers": null,
          "conditionDepts": null
        },
        {
          "id": "1512987084151517193",
          "name": "默认值",
          "type": "attr-default-select",
          "value": null,
          "attribute": "defaultValue",
          "conditionTemplateId": 8,
          "verifiable": 0,
          "conditionValues": [{
              "id": null,
              "conditionId": null,
              "code": "attr-input",
              "name": "自定义",
              "value": null,
              "defaulted": 1,
              "relations": null
            },
            {
              "id": null,
              "conditionId": null,
              "code": "attr-dict",
              "name": "数据字典",
              "value": null,
              "defaulted": 0,
              "relations": null
            }
          ],
          "selectId": "",
          "conditionUsers": null,
          "conditionDepts": null
        },
        {
          "id": "1512987084151517194",
          "name": "校验",
          "type": "attr-check-box",
          "value": null,
          "attribute": "rule",
          "conditionTemplateId": 9,
          "verifiable": 1,
          "conditionValues": [{
              "id": "1512987084151517195",
              "conditionId": "1512987084151517194",
              "code": "required",
              "name": "必填",
              "value": null,
              "defaulted": 0,
              "relations": null
            },
            {
              "id": "1512987084151517196",
              "conditionId": "1512987084151517194",
              "code": "repeat",
              "name": "不允许重复值",
              "value": null,
              "defaulted": 0,
              "relations": null
            }
          ],
          "selectId": "",
          "conditionUsers": null,
          "conditionDepts": null
        },
        {
          "id": "1512987084151517197",
          "name": "表达式",
          "type": "attr-input",
          "value": "",
          "attribute": "fixedFunction",
          "conditionTemplateId": 58,
          "verifiable": 0,
          "conditionValues": null,
          "selectId": "",
          "conditionUsers": null,
          "conditionDepts": null
        },
        {
          "id": "1512987084151517198",
          "name": "更新字典",
          "type": "attr-dict",
          "value": null,
          "attribute": "dictUpdate",
          "conditionTemplateId": 108,
          "verifiable": 0,
          "conditionValues": null,
          "selectId": "",
          "conditionUsers": null,
          "conditionDepts": null
        },
        {
          "id": "1512987084151517199",
          "name": "字段标签",
          "type": "attr-select",
          "value": null,
          "attribute": "label",
          "conditionTemplateId": 117,
          "verifiable": 0,
          "conditionValues": [{
              "id": "1512987084151517200",
              "conditionId": "1512987084151517199",
              "code": "name",
              "name": "姓名",
              "value": null,
              "defaulted": 0,
              "relations": null
            },
            {
              "id": "1512987084151517201",
              "conditionId": "1512987084151517199",
              "code": "dept",
              "name": "部门/班级",
              "value": null,
              "defaulted": 0,
              "relations": null
            },
            {
              "id": "1512987084151517202",
              "conditionId": "1512987084151517199",
              "code": "production",
              "name": "作品",
              "value": null,
              "defaulted": 0,
              "relations": null
            },
            {
              "id": "1512987084151517203",
              "conditionId": "1512987084151517199",
              "code": "workTitle",
              "name": "作品名称",
              "value": null,
              "defaulted": 0,
              "relations": null
            },
            {
              "id": "1512987084151517204",
              "conditionId": "1512987084151517199",
              "code": "dayNumber",
              "name": "天数",
              "value": null,
              "defaulted": 0,
              "relations": null
            },
            {
              "id": "1512987084151517205",
              "conditionId": "1512987084151517199",
              "code": "time",
              "name": "时间",
              "value": null,
              "defaulted": 0,
              "relations": null
            },
            {
              "id": "1512987084151517206",
              "conditionId": "1512987084151517199",
              "code": "startTime",
              "name": "开始时间",
              "value": null,
              "defaulted": 0,
              "relations": null
            },
            {
              "id": "1512987084151517207",
              "conditionId": "1512987084151517199",
              "code": "endTime",
              "name": "结束时间",
              "value": null,
              "defaulted": 0,
              "relations": null
            },
            {
              "id": "1512987084151517208",
              "conditionId": "1512987084151517199",
              "code": "other",
              "name": "其它",
              "value": null,
              "defaulted": 0,
              "relations": null
            }
          ],
          "selectId": "",
          "conditionUsers": null,
          "conditionDepts": null
        }
      ],
      "functionWidget": null,
      "parentCode": "",
      "sublist": null,
      "widgetLabel": null,
      "formId": 277
    }]
  },
  "requestId": "f8cab0e4a6465262d931d2c6"
}