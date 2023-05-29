/**
 * @description: 实现可编辑表格(分离数据 与 行为状态)
 * @param {Map} propMap 存储表格row和状态数据的键值对
 * @param {Array} refArr 存储Map中的value值，将其变为响应式（若是在vue3中使用，则无需refArr）
 * @param {Function} createRowState 自定义编辑状态
 * @return {Object}
 */
 export function useEditTable (propMap, refArr, createRowState) {
   let oldTable = [];
   let oldProps = [];
   // 求差集
   const getDiffSet = (bigSet, smallSet) => bigSet.filter(item => !smallSet.includes(item))
   // 增
   const addRowState = (addArr, curProps) => {
     addArr.forEach(item => {
       const rowState = createRowState(curProps, {});
       propMap.set(item, rowState);
       refArr.push(rowState);
     })
   }
   // 删
   const delRowState = (delArr) => {
     delArr.forEach(item => {
       const rowState = propMap.get(item);
       const index = refArr.findIndex(it => it === rowState);
       propMap.delete(item);
       refArr.splice(index, 1);
     })
   }
   // 改
   const modRowState = (addArr, delArr, curProps) => {
     addArr.forEach((item, index) => {
       const preItem = delArr[index];
       const preRowState = propMap.get(preItem);
       const curRowState = createRowState(curProps, preRowState);
       propMap.set(item, curRowState).delete(preItem);
     })
   }
   // 设置行对应的状态属性
   const setRowState = (newTable, curProps) => {
     if (!curProps.length) return;
     // 取差值
     const diffLen = newTable.length - oldTable.length;

     if (diffLen > 0) {  // add
       addRowState(getDiffSet(newTable, oldTable), curProps);
     } else if (diffLen < 0) {  // del
       delRowState(getDiffSet(oldTable, newTable));
     } else {  // mod
       modRowState(getDiffSet(newTable, oldTable), getDiffSet(oldTable, newTable), curProps);
     }
     // 缓存
     oldProps = [...curProps];
     oldTable = [...newTable];
   }
   // 更新单个属性的状态
   const updatePropState = (curProps) => {
     // propMap为空时（表格从纯展示到可编辑状态）
     if (!propMap.size) addRowState(oldTable, curProps);
     // 更新属性状态
     const addProps = getDiffSet(curProps, oldProps);
     const delProps = getDiffSet(oldProps, curProps);

     if (!addProps.length && !delProps.length) return;

     for (const rowState of propMap.values()) {
       // 创建单个状态属性
       createRowState(addProps, rowState);
       // 删除单个状态属性（置空）
       delProps.forEach(prop => rowState[prop] = null);
     }
     // 缓存当前的可编辑属性列表
     oldProps = [...curProps];
   }
   return {
     setRowState,
     updatePropState
   }
}
