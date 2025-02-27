---
sidebar_position: 1
sidebar_label: 升级 Harvester
title: "升级 Harvester"
keywords:
  - Harvester
  - harvester
  - Rancher
  - rancher
  - 升级 Harvester
Description: 升级 Harvester 有两种方法。你可以使用 ISO 镜像或通过 UI 进行升级。
---

## 升级支持矩阵

下表介绍了版本的升级路径：

| 原版本 | 支持的新版本 |
|----------------------|--------------------------|
| [v1.1.2](./v1-1-2-to-v1-2-0.md) | v1.2.0 |
| [v1.1.0, v1.1.1](./v1-1-to-v1-1-2.md) | v1.1.2 |
| [v1.0.3](./v1-0-3-to-v1-1-1.md) | v1.1.0, v1.1.1（建议使用 v1.1.1） |
| [v1.0.2](./previous-releases/v1-0-2-to-v1-0-3.md) | v1.0.3 |
| [v1.0.1](./previous-releases/v1-0-1-to-v1-0-2.md) | v1.0.2 |
| [v1.0.0](./previous-releases/v1-0-0-to-v1-0-1.md) | v1.0.1 |

## Rancher 升级

如果你使用 Rancher 来管理 Harvester 集群，建议你先升级 Rancher Server 。有关更多信息，请参阅 [Rancher 升级指南](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades)。

有关 Harvester & Rancher 支持矩阵，请访问[此页面](https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/)。

:::note

- 升级 Rancher 不会自动升级你的 Harvester 集群。升级 Rancher 后，你仍然需要升级 Harvester 集群。
- 升级 Rancher 不会降低你的 Harvester 集群的性能。你仍然可以使用 Harvester 集群的虚拟 IP 来访问它。

:::

## 开始升级

:::caution

- 在升级 Harvester 集群之前，我们强烈建议：
   - 要从 v1.0.3 升级到 v1.1.0/v1.1.1，请先关闭所有虚拟机（Harvester GUI > Virtual Machines > 选择虚拟机 > Actions > Stop）。查看[链接](./v1-0-3-to-v1-1-1.md#通用信息)了解更多信息。
   - 如果需要，备份虚拟机。
- 不要在升级期间操作集群，例如，创建新的虚拟机、上传新的镜像等。
- 确保你的硬件符合**首选**[硬件要求](../install/requirements.md#硬件要求)。这是因为升级会消耗中间资源。
- 确保每个节点至少有 30 GiB 的可用系统分区空间 (`df -h /usr/local/`)。如果集群中任何节点的可用系统分区空间少于 30 GiB，升级将被拒绝。有关更多信息，请参阅[空闲系统分区空间要求](#空闲系统分区空间要求)。
- 在 Harvester Control Plane 节点上运行预检查脚本。请根据你的集群版本选择脚本：https://github.com/harvester/upgrade-helpers/tree/main/pre-check。

:::

:::caution

- 确保所有节点的时间同步。建议使用 NTP 服务器来同步时间。如果你在安装期间没有配置 NTP 服务器，你可以**在每个节点上**手动添加一个 NTP 服务器：

   ```
   $ sudo -i

   # 添加时间服务器
   $ vim /etc/systemd/timesyncd.conf
   [ntp]
   NTP=0.pool.ntp.org

   # 启用并启动 systemd-timesyncd
   $ timedatectl set-ntp true

   # 检查状态
   $ sudo timedatectl status
   ```

:::

:::caution

- 连接到 PCI 网桥的 NIC 可能会在升级后重命名。请查看[知识库](https://harvesterhci.io/kb/nic-naming-scheme)了解更多信息。

:::

- 请务必先阅读本文档顶部的警告内容。
- Harvester 会定期检查是否有新的可升级版本。如果有新版本，仪表板页面上会显示升级按钮。
   - 如果集群处于离线环境中，请先参阅[准备离线升级](#准备离线升级)。你还可以使用该部分中的方法加速 ISO 下载。
- 导航到 Harvester GUI，然后单击仪表板页面上的升级按钮：

   ![](/img/v1.2/upgrade/upgrade_button.png)

- 选择要升级的版本：

   ![](/img/v1.2/upgrade/upgrade_select_version.png)

- 单击顶部的圆圈以显示升级进度：
   ![](/img/v1.2/upgrade/upgrade_progress.png)


## 准备离线升级

:::caution

请务必先查看[升级支持矩阵](#升级支持矩阵)了解可升级的版本。

:::

- 从 [Releases 页面](https://github.com/harvester/harvester/releases)下载 Harvester ISO 文件。
- 将 ISO 保存到本地 HTTP 服务器。假设文件托管在 `http://10.10.0.1/harvester.iso` 中。
- 从 Releases 页面下载版本文件，例如 `https://releases.rancher.com/harvester/{version}/version.yaml`。

   - 替换 `version.yaml` 文件中的 `isoURL` 值：

      ```
      apiVersion: harvesterhci.io/v1beta1
      kind: Version
      metadata:
        name: v1.0.2
        namespace: harvester-system
      spec:
        isoChecksum: <SHA-512 checksum of the ISO>
        isoURL: http://10.10.0.1/harvester.iso  # change to local ISO URL
        releaseDate: '20220512'
      ```

   - 假设文件托管在 `http://10.10.0.1/version.yaml` 中。

- 登录到其中一个 control plane 节点。
- 成为 root 并创建一个版本：

   ```
   rancher@node1:~> sudo -i
   rancher@node1:~> kubectl create -f http://10.10.0.1/version.yaml
   ```

- Harvester GUI Dashboard 页面上应显示升级按钮。

## 空闲系统分区空间要求

_从 v1.2.0 起可用_

Harvester v1.2.0 要求的最小空闲系统分区空间为 30 GiB，每个版本都会对此进行修改。

选择 **Upgrade** 时，Harvester 将检查每个节点上的可用系统分区空间量。如果任何节点不满足要求，升级将被拒绝，如下：

![](/img/v1.2/upgrade/upgrade_free_space_check.png)

如果某些节点没有足够的可用系统分区空间，但你仍想尝试升级，你可以通过更新 `Version` 对象的 `harvesterhci.io/minFreeDiskSpaceGB` 注释来自定义升级。

```
apiVersion: harvesterhci.io/v1beta1
kind: Version
metadata:
  annotations:
    harvesterhci.io/minFreeDiskSpaceGB: "30" # the value is pre-defined and may be customized
  name: 1.2.0
  namespace: harvester-system
spec:
  isoChecksum: <SHA-512 checksum of the ISO>
  isoURL: http://192.168.0.181:8000/harvester-master-amd64.iso
  minUpgradableVersion: 1.1.2
  releaseDate: "20230609"
```

:::caution

如果你设置的值小于预定义的值，升级可能会失败，不建议在生产环境中使用。

:::
