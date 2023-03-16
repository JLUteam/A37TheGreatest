import { Button, Select,Option, Tabs,TabPane,Tag, Radio,RadioGroup,RadioButton,Switch,TimePicker,DatePicker ,Dialog ,Form,
  FormItem, Input,
  InputNumber,} from 'element-ui';
let plugins = [Button,Select, Option, Tabs, TabPane, Tag, Radio, RadioGroup, RadioButton, Switch,TimePicker,DatePicker,Dialog,Form,
  FormItem, Input,
  InputNumber,]

export default  function getElementUi(app)
{
    plugins.forEach((item) => {
        return app.use(item)
    })



}