"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7352],{72774:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"v0.3","label":"v0.3","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-v0.3","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Harvester Overview","href":"/harvester-docs/v0.3/","docId":"index"},{"type":"category","label":"Installation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"ISO Installation","href":"/harvester-docs/v0.3/install/iso-install","docId":"install/iso-install"},{"type":"link","label":"USB Installation","href":"/harvester-docs/v0.3/install/usb-install","docId":"install/usb-install"},{"type":"link","label":"PXE Boot Installation","href":"/harvester-docs/v0.3/install/pxe-boot-install","docId":"install/pxe-boot-install"},{"type":"link","label":"Harvester Configuration","href":"/harvester-docs/v0.3/install/harvester-configuration","docId":"install/harvester-configuration"},{"type":"link","label":"Management Address","href":"/harvester-docs/v0.3/install/management-address","docId":"install/management-address"}]},{"type":"link","label":"Authentication","href":"/harvester-docs/v0.3/authentication","docId":"authentication"},{"type":"link","label":"Upgrading Harvester","href":"/harvester-docs/v0.3/upgrade","docId":"upgrade"},{"type":"link","label":"Upload Images","href":"/harvester-docs/v0.3/upload-image","docId":"upload-image"},{"type":"link","label":"Host Management","href":"/harvester-docs/v0.3/host/","docId":"host/host"},{"type":"category","label":"VM Management","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create a Virtual Machine","href":"/harvester-docs/v0.3/vm/create-vm","docId":"vm/create-vm"},{"type":"link","label":"Access to the Virtual Machine","href":"/harvester-docs/v0.3/vm/access-to-the-vm","docId":"vm/access-to-the-vm"},{"type":"link","label":"VM Backup & Restore","href":"/harvester-docs/v0.3/vm/backup-restore","docId":"vm/backup-restore"},{"type":"link","label":"Live Migration","href":"/harvester-docs/v0.3/vm/live-migration","docId":"vm/live-migration"},{"type":"link","label":"Hot-Plug Volumes","href":"/harvester-docs/v0.3/vm/hotplug-volume","docId":"vm/hotplug-volume"}]},{"type":"category","label":"Networking","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Harvester Network","href":"/harvester-docs/v0.3/networking/harvester-network","docId":"networking/harvester-network"}]},{"type":"link","label":"Monitoring","href":"/harvester-docs/v0.3/monitoring/harvester-monitoring","docId":"monitoring/harvester-monitoring"},{"type":"category","label":"Rancher Integration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Rancher Integration","href":"/harvester-docs/v0.3/rancher/rancher-integration","docId":"rancher/rancher-integration"},{"type":"link","label":"Virtualization Management","href":"/harvester-docs/v0.3/rancher/virtualization-management","docId":"rancher/virtualization-management"},{"type":"category","label":"Harvester Node Driver","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Harvester Node Driver","href":"/harvester-docs/v0.3/rancher/node/node-driver","docId":"rancher/node/node-driver"},{"type":"link","label":"Creating an RKE1 Kubernetes Cluster","href":"/harvester-docs/v0.3/rancher/node/rke1-cluster","docId":"rancher/node/rke1-cluster"},{"type":"link","label":"Creating an RKE2 Kubernetes Cluster","href":"/harvester-docs/v0.3/rancher/node/rke2-cluster","docId":"rancher/node/rke2-cluster"}]},{"type":"link","label":"Harvester Cloud Provider","href":"/harvester-docs/v0.3/rancher/cloud-provider","docId":"rancher/cloud-provider"},{"type":"link","label":"Harvester CSI Driver","href":"/harvester-docs/v0.3/rancher/csi-driver","docId":"rancher/csi-driver"}]},{"type":"link","label":"Harvester Terraform Provider","href":"/harvester-docs/v0.3/terraform/terraform-provider","docId":"terraform/terraform-provider"},{"type":"category","label":"Troubleshooting","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/harvester-docs/v0.3/troubleshooting/installation","docId":"troubleshooting/installation"},{"type":"link","label":"Harvester","href":"/harvester-docs/v0.3/troubleshooting/harvester","docId":"troubleshooting/harvester"},{"type":"link","label":"Operating System","href":"/harvester-docs/v0.3/troubleshooting/os","docId":"troubleshooting/os"}]},{"type":"link","label":"FAQ","href":"/harvester-docs/v0.3/faq","docId":"faq"}]},"docs":{"authentication":{"id":"authentication","title":"Authentication","description":"After installation, user will be prompted to set the password for the default admin user on the first-time login.","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"FAQ","description":"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Harvester.","sidebar":"tutorialSidebar"},"host/host":{"id":"host/host","title":"Host Management","description":"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are more than three nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster.","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Harvester Overview","description":"Harvester is an open-source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open alternative to using a proprietary HCI stack that incorporates the design and ethos of Cloud Native Computing.","sidebar":"tutorialSidebar"},"install/harvester-configuration":{"id":"install/harvester-configuration","title":"Harvester Configuration","description":"Configuration Example","sidebar":"tutorialSidebar"},"install/iso-install":{"id":"install/iso-install","title":"ISO Installation","description":"To get the Harvester ISO, download it from the Github releases.","sidebar":"tutorialSidebar"},"install/management-address":{"id":"install/management-address","title":"Management Address","description":"Harvester provides a fixed virtual IP (VIP) as the management address. Users can see the management address on the console dashboard after installation.","sidebar":"tutorialSidebar"},"install/pxe-boot-install":{"id":"install/pxe-boot-install","title":"PXE Boot Installation","description":"Starting from version 0.2.0, Harvester can be installed automatically. This document provides an example to do an automatic installation with PXE boot.","sidebar":"tutorialSidebar"},"install/usb-install":{"id":"install/usb-install","title":"USB Installation","description":"Create a bootable USB flash drive","sidebar":"tutorialSidebar"},"monitoring/harvester-monitoring":{"id":"monitoring/harvester-monitoring","title":"Monitoring","description":"Available as of v0.3.0","sidebar":"tutorialSidebar"},"networking/harvester-network":{"id":"networking/harvester-network","title":"Harvester Network","description":"Harvester is built on top of Kubernetes and leverages its built-in CNI mechanism to provide the interface between network providers and its VM networks.","sidebar":"tutorialSidebar"},"rancher/cloud-provider":{"id":"rancher/cloud-provider","title":"Harvester Cloud Provider","description":"Available as of v0.3.0","sidebar":"tutorialSidebar"},"rancher/csi-driver":{"id":"rancher/csi-driver","title":"Harvester CSI Driver","description":"The Harvester Container Storage Interface (CSI) Driver provides a CSI interface used by guest Kubernetes clusters in Harvester. It connects to the host cluster and hot-plugs host volumes to the virtual machines (VMs) to provide native storage performance.","sidebar":"tutorialSidebar"},"rancher/node/node-driver":{"id":"rancher/node/node-driver","title":"Harvester Node Driver","description":"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you\'ll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters.","sidebar":"tutorialSidebar"},"rancher/node/rke1-cluster":{"id":"rancher/node/rke1-cluster","title":"Creating an RKE1 Kubernetes Cluster","description":"Users can now provision RKE1 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver.","sidebar":"tutorialSidebar"},"rancher/node/rke2-cluster":{"id":"rancher/node/rke2-cluster","title":"Creating an RKE2 Kubernetes Cluster","description":"Users can now provision RKE2 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver.","sidebar":"tutorialSidebar"},"rancher/rancher-integration":{"id":"rancher/rancher-integration","title":"Rancher Integration","description":"Available as of v0.3.0","sidebar":"tutorialSidebar"},"rancher/virtualization-management":{"id":"rancher/virtualization-management","title":"Virtualization Management","description":"For Harvester v0.3.0 and above, virtualization management with the multi-cluster management feature will be supported using Rancher v2.6.x.","sidebar":"tutorialSidebar"},"terraform/terraform-provider":{"id":"terraform/terraform-provider","title":"Harvester Terraform Provider","description":"Requirements","sidebar":"tutorialSidebar"},"troubleshooting/harvester":{"id":"troubleshooting/harvester","title":"Harvester","description":"Generate a Support Bundle","sidebar":"tutorialSidebar"},"troubleshooting/installation":{"id":"troubleshooting/installation","title":"Installation","description":"The following sections contain tips to troubleshoot or get assistance with failed installations.","sidebar":"tutorialSidebar"},"troubleshooting/os":{"id":"troubleshooting/os","title":"Operating System","description":"Harvester runs on an OpenSUSE-based OS. The OS is an artifact produced by the cOS toolkit. The following sections contain information and tips to help users troubleshoot OS-related issues.","sidebar":"tutorialSidebar"},"upgrade":{"id":"upgrade","title":"Upgrading Harvester","description":"Upgrade is not supported from previous versions to v0.3.0 version.","sidebar":"tutorialSidebar"},"upload-image":{"id":"upload-image","title":"Upload Images","description":"Currently, there are three ways that are supported to create an image: uploading images via URL, uploading images via local files, and creating images via volumes.","sidebar":"tutorialSidebar"},"vm/access-to-the-vm":{"id":"vm/access-to-the-vm","title":"Access to the Virtual Machine","description":"Once the VM is up and running, you can access it using either the Virtual Network Computing (VNC) client or the serial console from the Harvester UI.","sidebar":"tutorialSidebar"},"vm/backup-restore":{"id":"vm/backup-restore","title":"VM Backup & Restore","description":"Available as of v0.3.0","sidebar":"tutorialSidebar"},"vm/create-vm":{"id":"vm/create-vm","title":"Create a Virtual Machine","description":"How to Create a VM","sidebar":"tutorialSidebar"},"vm/hotplug-volume":{"id":"vm/hotplug-volume","title":"Hot-Plug Volumes","description":"Harvester supports adding hot-plug volumes to a running VM.","sidebar":"tutorialSidebar"},"vm/live-migration":{"id":"vm/live-migration","title":"Live Migration","description":"Live migration means moving a virtual machine to a different host without downtime.","sidebar":"tutorialSidebar"}}}')}}]);