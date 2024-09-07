export default{
  formItem: [
    {
      type: 'input',
      label: '姓名',
      name: 'user',
      placeholder: '请输入姓名'
    },
    {
      type: 'password',
      label: '密码',
      name: 'password',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '选择城市',
      name: 'city',
      placeholder: '请选择城市',
      option: [
        {
          label: '上海',
          value: 0
        },
        {
          label: '北京',
          value: 1
        },
        {
          label: '广州',
          value: 2
        },
      ]
    },
    {
      type: 'date',
      label: '创建日期',
      name: 'date',
      placeholder: '请选择创建日期'
    },
    {
      type: 'datepicker',
      label: '选择日期',
      name: 'datepicker',
      placeholder: '请选择开始日期',
      option: {
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        type: 'daterange'
      }
    },
    {
      type: 'switch',
      label: '是否同意',
      name: 'switch',
    },
  ],
  labelWidth: '100px',
  rules: {
    user: [
      { required: true, message: '请输入名字', trigger: 'blur' },
      { min: 3, max: 9, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    city: [
      {
        required: true,
        message: '请选择城市',
        trigger: 'change',
      },
    ],
    date: [
      {
        type: 'date',
        required: true,
        message: '请设置日期',
        trigger: 'change',
      },
    ],
  }
}