
# vue生命周期

1. beforeCreate
2. created
3. beforeMount
4. mounted
5. beforeUpdate
6. updated
7. beforeDestroy
8. destroyed

![avatar](./vue生命周期.png)

1.在beforeCreate和created钩子函数之间的生命周期
在这个生命周期之间，进行初始化事件，进行数据的观测，可以看到在created的时候数据已经和data属性进行绑定（放在data中的属性当值发生改变的同时，视图也会改变）。
注意看下：此时还是没有el选项：指明 Vue 实例的挂载目标【值为目标的ID,如：el:'#app'】

2.created钩子函数和beforeMount间的生命周期
首先会判断对象是否有el选项。如果有的话就继续向下编译，如果没有el选项，则停止编译，也就意味着停止了生命周期，直到在该vue实例上调用vm.$mount(el)
如果我们在后面继续调用vm.$mount(el),可以发现代码继续向下执行了

然后，我们往下看，**template**参数选项的有无对生命周期的影响。
（1）.如果vue实例对象中有template参数选项，则将其作为**模板**编译成render函数。
（2）.如果没有template选项，则将**外部HTML**作为模板编译。
（3）.可以看到template中的模板优先级要**高于**outer HTML的优先级。

在vue对象中还有一个render函数，它是以createElement作为参数，然后做渲染操作，而且我们可以直接嵌入JSX.

```js
new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement('h1', 'this is createElement')
    }
})
```

render函数选项 > template选项 > outer HTML.

3.beforeMount和mounted 钩子函数间的生命周期
可以看到此时是给vue实例对象添加$el成员，并且替换掉挂在的DOM元素。因为在之前console中打印的结果可以看到beforeMount之前el上还是undefined。

4.mounted
在mounted之前h1中还是通过{{message}}进行占位的，
因为此时还有挂在到页面上，还是JavaScript中的虚拟DOM形式存在的。在mounted之后可以看到h1中的内容发生了变化。

5.beforeUpdate钩子函数和updated钩子函数间的生命周期
当vue发现data中的数据发生了改变，会触发对应组件的**重新渲染**，先后调用beforeUpdate和updated钩子函数。
【注，diff算法就是在这里，即调用patch函数】

6.beforeDestroy和destroyed钩子函数间的生命周期
beforeDestroy钩子函数在实例销毁之前调用。在这一步，实例仍然完全可用。
destroyed钩子函数在Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

小结：
beforecreated：el 和 data 并未初始化
created:完成了 data 数据的初始化，el没有
beforeMount：完成了 el 和 data 初始化/*现el还是 {{message}}，这里就是应用的 Virtual DOM（虚拟Dom）技术，先把坑占住了*/
mounted ：完成挂载【数据视图挂载】