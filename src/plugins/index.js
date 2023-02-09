import {  Select,Option, Tabs,TabPane,Tag, Radio,RadioGroup,RadioButton,Switch,MessageBox } from 'element-ui';
let plugins = [Select, Option, Tabs, TabPane, Tag, Radio, RadioGroup, RadioButton, Switch]

export default  function getElementUi(app)
{
    plugins.forEach((item) => {
        return app.use(item)
    })



}