import { Button, Select,Option, Tabs,TabPane,Tag, Radio,RadioGroup,RadioButton,Switch,TimePicker,DatePicker ,Dialog ,Form,FormItem, Input, InputNumber,Divider,Table,TableColumn,Popover,Pagination 
} from 'element-ui';
let plugins = [Button,Select, Option, Tabs, TabPane, Tag, Radio, RadioGroup, RadioButton, Switch,TimePicker,DatePicker,Dialog,Form,FormItem, Input,InputNumber,Divider ,Table,
  TableColumn, Popover,Pagination 
  ]

export default  function getElementUi(app)
{
    plugins.forEach((item) => {
        return app.use(item)
    })



}