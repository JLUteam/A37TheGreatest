import {  Select,Option, Tabs,TabPane,Tag,} from 'element-ui';
let plugins = [Select, Option, Tabs, TabPane, Tag,]
export default  function getElementUi(app)
{
    plugins.forEach((item) => {
        return app.use(item)
    })
}