import {  Select,Option, Tabs,TabPane,Tag, Radio,RadioGroup,RadioButton,Switch,TimePicker,DatePicker } from 'element-ui';
let plugins = [Select, Option, Tabs, TabPane, Tag, Radio, RadioGroup, RadioButton, Switch,TimePicker,DatePicker]

export default  function getElementUi(app)
{
    plugins.forEach((item) => {
        return app.use(item)
    })



}