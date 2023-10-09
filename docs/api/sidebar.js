module.exports = [
  { type: "doc", id: "api/harvester-apis" },
  {
    type: "category",
    label: "Volumes",
    items: [
      {
        type: "doc",
        id: "api/create-namespaced-persistent-volume-claim",
        label: "Create a Persistent Volume Claim",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/delete-namespaced-persistent-volume-claim",
        label: "Delete a Persistent Volume Claim",
        className: "api-method delete",
      },
    ],
  },
  {
    type: "category",
    label: "SSH Keys",
    items: [
      {
        type: "doc",
        id: "api/create-namespaced-key-pair",
        label: "Create a Key Pair",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/delete-namespaced-key-pair",
        label: "Delete a Key Pair",
        className: "api-method delete",
      },
    ],
  },
  {
    type: "category",
    label: "Support Bundles",
    items: [
      {
        type: "doc",
        id: "api/create-namespaced-support-bundle",
        label: "Create a Support Bundle",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/delete-namespaced-support-bundle",
        label: "Delete a Support Bundle",
        className: "api-method delete",
      },
    ],
  },
  {
    type: "category",
    label: "Upgrades",
    items: [
      {
        type: "doc",
        id: "api/create-namespaced-upgrade",
        label: "Create an Upgrade",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/delete-namespaced-upgrade",
        label: "Delete an Upgrade",
        className: "api-method delete",
      },
    ],
  },
  {
    type: "category",
    label: "Networks",
    items: [
      {
        type: "doc",
        id: "api/create-namespaced-node-network",
        label: "Create a Node Network",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/delete-namespaced-node-network",
        label: "Delete a Node Network",
        className: "api-method delete",
      },
    ],
  },
];
