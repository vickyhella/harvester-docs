---
sidebar_position: 7
sidebar_label: 管理地址
title: "管理地址"
keywords:
  - VIP
Description: Harvester 提供一个虚拟 IP 作为管理地址。
---

Harvester 提供固定的虚拟 IP（VIP）作为管理地址，VIP 必须与所有节点 IP 都不一样。安装后，你可以在控制台仪表盘上找到管理地址。

:::note

如果你选择了通过 DHCP 配置 IP 地址，则需要在 DHCP 服务器上配置静态 MAC 到 IP 地址的映射，以便获得持久的虚拟 IP。

:::

![](/img/v1.2/install/iso-installed.png)

## 如何获取 VIP MAC 地址

要获取 VIP MAC 地址，在管理节点上运行以下命令：
```shell
$ kubectl get svc -n kube-system ingress-expose -ojsonpath='{.metadata.annotations}'
```

输出示例：
```json
{"kube-vip.io/hwaddr":"02:00:00:09:7f:3f","kube-vip.io/requestedIP":"10.84.102.31"}
```

## 用途
管理地址：

- 允许通过 `HTTPS` 协议访问 Harvester API/UI。
- 允许其他节点加入集群。
   ![](/img/v1.2/install/configure-management-address.png)
