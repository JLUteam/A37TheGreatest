import {  Select,Option, Tabs,TabPane,Tag, Radio,RadioGroup,RadioButton,} from 'element-ui';
let plugins = [Select, Option, Tabs, TabPane, Tag,Radio,RadioGroup,RadioButton,]
export default  function getElementUi(app)
{
    plugins.forEach((item) => {
        return app.use(item)
    })
}