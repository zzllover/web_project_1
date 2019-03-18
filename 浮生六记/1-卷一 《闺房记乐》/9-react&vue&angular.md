
# react.js

## 虚拟dom

（1）随着react的诞生而诞生，由facebook提出.可以看作是一个使用javascript模拟了DOM结构的树形结构，这个树结构包含整个DOM结构的信息
（2）为什么要：操作DOM是一件非常麻烦的一件事情，在浏览器里一遍又一遍的渲染DOM是非常非常消耗性能的，所以尽量减少对DOM的操作，vdom就是将DOM的对比放在了js层，通过对比不同之处来选择新渲染DOM节点，从而提高渲染效率。

# vue.js

# angular.js

ng-if会移除dom，生成dom，而ng-show只是改变其display属性
类似于 v-if 和 v-show

angularjs1中control间通信最好使用什么方式？ ：广播
用$emit(向上)/ $broadcast(向下)和on来完成，同级控制器，就先向上emit，然后上级收到Controller在broadcast

v-model应用于：input和变量的双向绑定

```html
<div ng-bind="obj.value"></div>
```

angularjs1中的$apply()的作用：更新绑定的model到view上

angularjs1中指令中的compile参数是在什么时候运行的？：

在DOM节点树生成后开始管理节点的，生成后寻找ng-app标记，然后其下属所有节点均由ng来管理。
使用compile可以改变原始的dom,在ng创建原始dom实例以及创建scope实例之前. ng-repeat就是
一个最好的例子,它就在是compile函数阶段改变原始的dom生成多个原始dom节点,然后每个又生成
element实例.

Angular大大减少了对DOM的访问。//使用虚拟dom
jQuery极大的丰富了DOM操作

Angular 依赖注入：

依赖注入（Dependency Injection），是这样一个过程：由于某客户类只依赖于服务类的一个接口，而不依赖于具体服务类，所以客户类只定义一个注入点。在程序 运行过程中，客户类不直接实例化具体服务类实例，而是客户类的运行上下文环境或专门组件负责实例化服务类，然后将其注入到客户类中，保证客户类的正常运行。

# angular组建通信

Angular 的知识，没有$send.
  $emit只能向parent controller传递event与data
  $broadcast只能向child controller传递event与data
  $on用于接收event与data

## 父子组件发送接收消息：

发送消息： $scope.$emit(name, data) 或者 $scope.$broadcast(name, data);

接收消息： $scope.on(name,function(event,data){ });

区别： $emit 广播给父controller   $broadcast 广播给子controller

broadcast 是从发送者向他的子scope广播一个事件。

$emit 广播给父controller，父controller 是可以收到消息

$on 有两个参数function(event,msg)  第一个参数是事件对象，第二个参数是接收到消息信息