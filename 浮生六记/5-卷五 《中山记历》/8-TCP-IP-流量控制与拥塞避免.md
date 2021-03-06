
# TCP/IP

## TCP/IP流量控制

1.利用**滑动窗口**实现流量控制
如果发送方把数据发送得过快，接收方可能会来不及接收，这就会造成数据的丢失。所谓流量控制就是让发送方的发送速率不要太快，要让接收方来得及接收。
利用滑动窗口机制可以很方便地在TCP连接上实现对发送方的流量控制。

设A向B发送数据。在连接建立时，B告诉了A：“我的接收窗口是 rwnd = 400 ”(这里的 rwnd 表示 receiver window) 。因此，发送方的发送窗口不能超过接收方给出的接收窗口的数值。请注意，TCP的窗口单位是字节，不是报文段。TCP连接建立时的窗口协商过程在图中没有显示出来。再设每一个报文段为100字节长，而数据报文段序号的初始值设为1。大写ACK表示首部中的确认位ACK，小写ack表示确认字段的值ack。
B进行了三次流量控制。第一次把窗口减少到 rwnd = 300 ，第二次又减到了 rwnd = 100 ，最后减到 rwnd = 0 ，即不允许发送方再发送数据了。这种使发送方暂停发送的状态将持续到主机B重新发出一个新的窗口值为止。B向A发送的三个报文段都设置了 ACK = 1 ，只有在ACK=1时确认号字段才有意义。
2.必须考虑**传输速率**
可以用不同的机制来控制TCP报文段的发送时机。如： <1>. TCP维持一个变量，它等于最大报文段长度MSS。只要缓存中存放的数据达到MSS字节时，就组装成一个TCP报文段发送出去。<2>. 由发送方的应用进程指明要求发送报文段，即TCP支持的推送( push )操作。<3>. 发送方的一个计时器期限到了，这时就把已有的缓存数据装入报文段(但长度不能超过MSS)发送出去。

Nagle算法：若发送应用进程把要发送的数据逐个字节地送到TCP的发送缓存，则发送方就把第一个数据字节先发送出去，把后面到达的数据字节都缓存起来。当发送方接收对第一个数据字符的确认后，再把发送缓存中的所有数据组装成一个报文段再发送出去，同时继续对随后到达的数据进行缓存。只有在收到对前一个报文段的确认后才继续发送下一个报文段。当数据到达较快而网络速率较慢时，用这样的方法可明显地减少所用的网络带宽。Nagle算法还规定：当到达的数据已达到 发送窗口大小的一半或已达到报文段的最大长度时，就立即发送一个报文段。

另，糊涂窗口综合证： TCP接收方的缓存已满，而交互式的应用进程一次只从接收缓存中读取1字节（这样就使接收缓存空间仅腾出1字节），然后向发送方发送确认，并把窗口设置为1个字节（但发送的数据报为40字节的的话）。接收，发送方又发来1个字节的数据（发送方的IP数据报是41字节）。接收方发回确认，仍然将窗口设置为1个字节。这样，网络的效率很低。要解决这个问题，可让接收方等待一段时间，使得或者接收缓存已有足够空间容纳一个最长的报文段，或者等到接收方缓存已有一半空闲的空间。只要出现这两种情况，接收方就发回确认报文，并向发送方通知当前的窗口大小。此外，发送方也不要发送太小的报文段，而是把数据报积累成足够大的报文段，或达到接收方缓存的空间的一半大小。

## TCP的拥塞控制

为了防止网络的拥塞现象，TCP提出了一系列的拥塞控制机制。最初由V. Jacobson在1988年的论文中提出的TCP的拥塞控制由
“慢启动(Slow start)”
和“拥塞避免(Congestion avoidance)”组成，
后来TCP Reno版本中又针对性的加入了
“快速重传(Fast retransmit)”
、“快速恢复(Fast Recovery)”算法，
再后来在TCP NewReno中又对“快速恢复”算法进行了改进，近些年又出现了选择性应答( selective acknowledgement,SACK)算法，还有其他方面的大大小小的改进，成为网络研究的一个热点。

TCP的拥塞控制主要原理依赖于一个**拥塞窗口**(cwnd)来控制，在之前我们还讨论过TCP还有一个对端通告的接收窗口(rwnd)用于流量控制。窗口值的大小就代表能够发送出去的但还没有收到ACK的最大数据报文段，显然窗口越大那么数据发送的速度也就越快，但是也有越可能使得网络出现拥塞，如果窗口值为1，那么就简化为一个停等协议，每发送一个数据，都要等到对方的确认才能发送第二个数据包，显然数据传输效率低下。TCP的拥塞控制算法就是要在这两者之间权衡，选取最好的cwnd值，从而使得网络吞吐量最大化且不产生拥塞。

由于需要考虑拥塞控制和流量控制两个方面的内容，因此TCP的真正的发送窗口=min(rwnd, cwnd)。但是rwnd是由对端确定的，网络环境对其没有影响，所以在考虑拥塞的时候我们一般不考虑rwnd的值，我们暂时只讨论如何确定cwnd值的大小。关于cwnd的单位，在TCP中是以字节来做单位的，我们假设TCP每次传输都是按照MSS大小来发送数据的，因此你可以认为cwnd按照数据包个数来做单位也可以理解，所以有时我们说cwnd增加1也就是相当于字节数增加1个MSS大小.

**慢启动**：最初的TCP在连接建立成功后会向网络中发送大量的数据包，这样很容易导致网络中路由器缓存空间耗尽，从而发生拥塞。因此新建立的连接不能够一开始就大量发送数据包，而只能根据网络情况逐步增加每次发送的数据量，以避免上述现象的发生。具体来说，当新建连接时，cwnd初始化为1个最大报文段(MSS)大小，发送端开始按照拥塞窗口大小发送数据，每当有一个报文段被确认，cwnd就增加1个MSS大小。这样cwnd的值就随着网络往返时间(Round Trip Time,RTT)呈指数级增长，事实上，慢启动的速度一点也不慢，只是它的起点比较低一点而已。我们可以简单计算下：

   开始           --->     cwnd = 1
   经过1个RTT后   --->     cwnd = 2*1 = 2
   经过2个RTT后   --->     cwnd = 2*2= 4
   经过3个RTT后   --->     cwnd = 4*2 = 8
如果带宽为W，那么经过RTT*log2W时间就可以占满带宽

**拥塞避免**：从慢启动可以看到，cwnd可以很快的增长上来，从而最大程度利用网络带宽资源，但是cwnd不能一直这样无限增长下去，一定需要某个限制。TCP使用了一个叫**慢启动门限**(ssthresh)的变量，当cwnd超过该值后，慢启动过程结束，进入拥塞避免阶段。对于大多数TCP实现来说，ssthresh的值是65536(同样以字节计算)。拥塞避免的主要思想是加法增大，也就是cwnd的值不再指数级往上升，开始加法增加。此时当窗口中所有的报文段都被确认时，cwnd的大小加1，cwnd的值就随着RTT开始**线性增加**，这样就可以避免增长过快导致网络拥塞，慢慢的增加调整到网络的最佳值。

当发现拥塞了cwnd又该怎样去调整呢？

首先来看TCP是如何确定网络进入了拥塞状态的，TCP认为网络拥塞的主要依据是它重传了一个报文段。上面提到过，TCP对每一个报文段都有一个定时器，称为重传定时器(RTO)，当RTO**超时**且还没有得到数据确认，那么TCP就会对该报文段进行重传，当发生超时时，那么出现拥塞的可能性就很大，某个报文段可能在网络中某处丢失，并且后续的报文段也没有了消息，在这种情况下，TCP反应比较“强烈”：

1. 把ssthresh降低为cwnd值的一半
2. 把cwnd重新设置为1
3. 重新进入慢启动过程。

从整体上来讲，TCP拥塞控制窗口变化的原则是AIMD原则，即加法增大、乘法减小。可以看出TCP的该原则可以较好地保证流之间的公平性，因为一旦出现丢包，那么立即减半退避，可以给其他新建的流留有足够的空间，从而保证整个的公平性。

其实TCP还有一种情况会进行**重传**：那就是收到**3个相同的ACK**。TCP在收到乱序到达包时就会立即发送ACK，TCP利用3个相同的ACK来判定数据包的丢失，此时进行**快速重传**，快速重传做的事情有：(快速重传，重新传递)

1. 把ssthresh设置为cwnd的一半
2. 把cwnd再设置为ssthresh的值(具体实现有些为ssthresh+3)
3. 重新进入拥塞避免阶段。

  后来的“快速恢复”算法是在上述的“快速重传”算法后添加的，当收到**3个重复ACK时**，TCP最后进入的不是拥塞避免阶段，而是快速恢复阶段。快速重传和快速恢复算法一般同时使用。快速恢复的思想是“数据包守恒”原则，即同一个时刻在网络中的数据包数量是恒定的，只有当“老”数据包离开了网络后，才能向网络中发送一个“新”的数据包，如果发送方收到一个重复的ACK，那么根据TCP的ACK机制就表明有一个数据包离开了网络，于是cwnd加1。如果能够严格按照该原则那么网络中很少会发生拥塞，事实上拥塞控制的目的也就在修正违反该原则的地方。

具体来说**快速恢复**的主要步骤是：

1. 当收到3个重复ACK时，把ssthresh设置为cwnd的一半，把cwnd设置为ssthresh的值加3，然后重传丢失的报文段，加3的原因是因为收到3个重复的ACK，表明有3个“老”的数据包离开了网络。
2. 再收到重复的ACK时，拥塞窗口增加1。
3. 当收到新的数据包的ACK时，把cwnd设置为第一步中的ssthresh的值。原因是因为该ACK确认了新的数据，说明从重复ACK时的数据都已收到，该恢复过程已经结束，可以回到恢复之前的状态了，也即再次进入拥塞避免状态。

## TCP报文的首部

  【16位源端口】 + 【16位目的端口】
  【32位序列号】
  【32位确定号】
  【4位首部长 】 + 【6位保留位】 + URG + ACK + PSH + RST + SYN + FIN + 【16位窗口大小】
  【16位校验位】 + 【16位紧急指针】

## 三次握手

客户端：SYN=1,seq=x;
服务端：SYN=1,seq=y,ack = x+1,ACK=1;
客户端：ACK=1,ack=y+1;

## 四次挥手

客户端：FIN=1,seq=x;
服务端：ACK=1,ack=x+1,seq=y;
服务端：FIN=1,ACK=1,ack=x+1,seq=z;
客户端：ACK=1,ack=z+1,seq=x+1;