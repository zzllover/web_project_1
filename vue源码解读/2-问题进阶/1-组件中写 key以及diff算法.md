
# 1. 写 React / Vue 项目时为什么要在组件中写 key，其作用是什么

## 一、什么是diff算法

渲染真实DOM的开销是很大的，比如有时候我们修改了某个数据，如果直接渲染到真实dom上会引起整个dom树的**重绘和重排**，有没有可能我们只更新我们修改的那**一小块dom**而不要更新整个dom呢？**diff算法**能够帮助我们

diff的过程就是调用名为**patch**的函数，比较新旧节点，一边比较一边给真实的DOM打补丁。

patch函数接收两个参数oldVnode和Vnode分别代表新的节点和之前的旧节点

判断两节点是否值得比较，1.值得比较则执行**patchVnode**
                      2.如果两个节点不一样那就说明Vnode完全被改变了，就可以直接替换oldVnode。

**patchVnode**
这个函数的原理

```js
patchVnode (oldVnode, vnode) {
    const el = vnode.el = oldVnode.el
    let i, oldCh = oldVnode.children, ch = vnode.children
    if (oldVnode === vnode) return//判断Vnode和oldVnode是否指向同一个对象，如果是，那么直接return
    if (oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text) {
        //如果他们都有文本节点并且不相等，那么将el的文本节点设置为Vnode的文本节点。
        api.setTextContent(el, vnode.text)
    }else {
        updateEle(el, vnode, oldVnode)
        if (oldCh && ch && oldCh !== ch) {
           //如果两者都有子节点，则执行updateChildren函数比较子节点，这一步很重要
            updateChildren(el, oldCh, ch)
        }else if (ch){
            //如果oldVnode没有子节点而Vnode有，则将Vnode的子节点真实化之后添加到el
            createEle(vnode) //create el's children dom
        }else if (oldCh){
            //如果oldVnode有子节点而Vnode没有，则删除el的子节点
            api.removeChildren(el)
        }
    }
}
```

updateChildren:交叉对比中，当新节点跟旧节点头尾交叉对比没有结果时,会根据新节点的key去对比旧节点数组中的key，从而找到相应旧节点（这里对应的是一个key => index 的map映射）。如果没找到就认为是一个新增节点。而如果没有key，那么就会采用遍历查找的方式去找到对应的旧节点。一种一个**map映射**，另一种是**遍历查找**。相比而言。map映射的速度更快。

```js
updateChildren (parentElm, oldCh, newCh) {
    let oldStartIdx = 0, newStartIdx = 0
    let oldEndIdx = oldCh.length - 1
    let oldStartVnode = oldCh[0]
    let oldEndVnode = oldCh[oldEndIdx]
    let newEndIdx = newCh.length - 1
    let newStartVnode = newCh[0]
    let newEndVnode = newCh[newEndIdx]
    let oldKeyToIdx
    let idxInOld
    let elmToMove
    let before
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {//停止条件
        if (oldStartVnode == null) {   // 对于vnode.key的比较，会把oldVnode = null
            oldStartVnode = oldCh[++oldStartIdx]
        }else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx]
        }else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx]
        }else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx]
        }else if (sameVnode(oldStartVnode, newStartVnode)) {
            //交叉比较
            //old的头 和 new 的头 匹配上了
            patchVnode(oldStartVnode, newStartVnode)
            oldStartVnode = oldCh[++oldStartIdx]
            newStartVnode = newCh[++newStartIdx]
        }else if (sameVnode(oldEndVnode, newEndVnode)) {
            //old的尾 和 new 的尾 匹配上了
            patchVnode(oldEndVnode, newEndVnode)
            oldEndVnode = oldCh[--oldEndIdx]
            newEndVnode = newCh[--newEndIdx]
        }else if (sameVnode(oldStartVnode, newEndVnode)) {
            // old的头 和 new 的尾 匹配上了
            patchVnode(oldStartVnode, newEndVnode)
            api.insertBefore(parentElm, oldStartVnode.el, api.nextSibling(oldEndVnode.el))
            oldStartVnode = oldCh[++oldStartIdx]
            newEndVnode = newCh[--newEndIdx]
        }else if (sameVnode(oldEndVnode, newStartVnode)) {
            // old的尾 和 头 的尾 匹配上了
            patchVnode(oldEndVnode, newStartVnode)
            api.insertBefore(parentElm, oldEndVnode.el, oldStartVnode.el)
            oldEndVnode = oldCh[--oldEndIdx]
            newStartVnode = newCh[++newStartIdx]
        }else {
            // 使用key时的比较
            //交叉比较四种情况都不成立的情况
            if (oldKeyToIdx === undefined) {
                oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx) // 有key生成index表
            }
            idxInOld = oldKeyToIdx[newStartVnode.key]
            if (!idxInOld) {
                api.insertBefore(parentElm, createEle(newStartVnode).el, oldStartVnode.el)
                newStartVnode = newCh[++newStartIdx]
            }
            else {
                elmToMove = oldCh[idxInOld]
                if (elmToMove.sel !== newStartVnode.sel) {
                    api.insertBefore(parentElm, createEle(newStartVnode).el, oldStartVnode.el)
                }else {
                    patchVnode(elmToMove, newStartVnode)
                    oldCh[idxInOld] = null
                    api.insertBefore(parentElm, elmToMove.el, oldStartVnode.el)
                }
                newStartVnode = newCh[++newStartIdx]
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].el
        addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx)
    }else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
    }
}
```