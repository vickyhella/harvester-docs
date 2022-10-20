"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),g=l,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const o={sidebar_position:1,sidebar_label:"Logging",title:"",keywords:["Harvester","harvester","Logging"]},r="Harvester Logging",i={unversionedId:"logging/logging",id:"logging/logging",title:"",description:"Available as of v1.1.0",source:"@site/docs/logging/logging.md",sourceDirName:"logging",slug:"/logging/",permalink:"/zh/v1.1/logging/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/logging/logging.md",tags:[],version:"current",lastUpdatedAt:1666228482,formattedLastUpdatedAt:"2022\u5e7410\u670820\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Logging",title:"",keywords:["Harvester","harvester","Logging"]},sidebar:"tutorialSidebar",previous:{title:"Single NIC with Non VLAN-aware Switch",permalink:"/zh/v1.1/networking/best-practice/single-nic-non-vlan-aware-switch"},next:{title:"Monitoring",permalink:"/zh/v1.1/monitoring/"}},s={},p=[{value:"Collected Logs",id:"collected-logs",level:2},{value:"Configuring Log Resources",id:"configuring-log-resources",level:2},{value:"From UI",id:"from-ui",level:3},{value:"From CLI",id:"from-cli",level:3},{value:"Configuring Log Destinations",id:"configuring-log-destinations",level:2},{value:"Clustered vs Namespaced",id:"clustered-vs-namespaced",level:3},{value:"From UI",id:"from-ui-1",level:3},{value:"Creating Outputs",id:"creating-outputs",level:4},{value:"Output",id:"output",level:5},{value:"Output Buffer",id:"output-buffer",level:5},{value:"Labels &amp; Annotations",id:"labels--annotations",level:5},{value:"Creating Flows",id:"creating-flows",level:4},{value:"Matches",id:"matches",level:5},{value:"Outputs",id:"outputs",level:5},{value:"Filters",id:"filters",level:5},{value:"From CLI",id:"from-cli-1",level:3},{value:"Referencing Secrets",id:"referencing-secrets",level:4},{value:"Example <code>Outputs</code>",id:"example-outputs",level:2},{value:"Elasticsearch",id:"elasticsearch",level:3},{value:"Graylog",id:"graylog",level:3},{value:"Splunk",id:"splunk",level:3},{value:"Loki",id:"loki",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"harvester-logging"},"Harvester Logging"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,l.kt)("p",null,"The Harvester logging infrastructure allows you to aggregate Harvester logs into an external service such as ",(0,l.kt)("a",{parentName:"p",href:"https://www.elastic.co/elasticsearch/"},"Elasticsearch"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://grafana.com/oss/loki/"},"Grafana Loki"),", or ",(0,l.kt)("a",{parentName:"p",href:"https://www.splunk.com/"},"Splunk"),"."),(0,l.kt)("h2",{id:"collected-logs"},"Collected Logs"),(0,l.kt)("p",null,"See below for a list logs that are collected:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Logs from all cluster ",(0,l.kt)("inlineCode",{parentName:"li"},"Pods")),(0,l.kt)("li",{parentName:"ul"},"Kernel logs from each node"),(0,l.kt)("li",{parentName:"ul"},"Logs from select systemd services from each node",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rke2-server")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rke2-agent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rancherd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rancher-system-agent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wicked")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"iscsid"))))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"While users are able to configure and modify where the aggregated logs are sent, as well as some basic filtering, they cannot change which logs are aggregated.")),(0,l.kt)("h2",{id:"configuring-log-resources"},"Configuring Log Resources"),(0,l.kt)("p",null,"Underneath Banzai Cloud's logging operator are ",(0,l.kt)("a",{parentName:"p",href:"https://www.fluentd.org/"},(0,l.kt)("inlineCode",{parentName:"a"},"fluentd"))," and ",(0,l.kt)("a",{parentName:"p",href:"https://fluentbit.io/"},(0,l.kt)("inlineCode",{parentName:"a"},"fluent-bit")),", which handle the log routing and collecting respectively.\nIf desired, you can modify how many resources are dedicated to those components."),(0,l.kt)("h3",{id:"from-ui"},"From UI"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Navigate to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Configuration")," page under ",(0,l.kt)("inlineCode",{parentName:"li"},"Monitoring & Logging > Logging"),"."),(0,l.kt)("li",{parentName:"ol"},"Under the ",(0,l.kt)("inlineCode",{parentName:"li"},"Fluentbit")," tab, change the resource requests and limits."),(0,l.kt)("li",{parentName:"ol"},"Under the ",(0,l.kt)("inlineCode",{parentName:"li"},"Fluentd")," tab, change the resource requests and limits."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Save")," on the bottom right of the screen.")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(51329).Z,width:"1920",height:"936"})),(0,l.kt)("h3",{id:"from-cli"},"From CLI"),(0,l.kt)("p",null,"You can also change the resource configurations from the command line using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl edit managedchart -n fleet-local rancher-logging")," and modifying the relevant files."),(0,l.kt)("p",null,"For harvester version ",(0,l.kt)("inlineCode",{parentName:"p"},">= v1.1.0"),", the related paths and default values are:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# fluentbit\nvalues.fluentbit.resources.limits.cpu: 200m\nvalues.fluentbit.resources.limits.memory: 200mi\nvalues.fluentbit.resources.requests.cpu: 50m\nvalues.fluentbit.resources.requests.memory: 50mi\n---\n#fluentd\nvalues.fluentbit.resources.limits.cpu: 200m\nvalues.fluentbit.resources.limits.memory: 200mi\nvalues.fluentbit.resources.requests.cpu: 50m\nvalues.fluentbit.resources.requests.memory: 50mi\n")),(0,l.kt)("h2",{id:"configuring-log-destinations"},"Configuring Log Destinations"),(0,l.kt)("p",null,"Logging is backed by the ",(0,l.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/"},"Banzai Cloud Logging Operator"),", and so is controlled by ",(0,l.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/flow/"},(0,l.kt)("inlineCode",{parentName:"a"},"Flows"),"/",(0,l.kt)("inlineCode",{parentName:"a"},"ClusterFlows"))," and ",(0,l.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/output/"},(0,l.kt)("inlineCode",{parentName:"a"},"Outputs"),"/",(0,l.kt)("inlineCode",{parentName:"a"},"ClusterOutputs")),". You can route and filter logs as you like by applying these ",(0,l.kt)("inlineCode",{parentName:"p"},"CRD"),"s to the Harvester cluster."),(0,l.kt)("p",null,"When applying new ",(0,l.kt)("inlineCode",{parentName:"p"},"Ouptuts")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Flows")," to the cluster, it can take some time for the logging operator to effectively apply them. So please allow a few minutes for the logs to start flowing."),(0,l.kt)("h3",{id:"clustered-vs-namespaced"},"Clustered vs Namespaced"),(0,l.kt)("p",null,"One important thing to understand when routing logs is the difference between ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," vs ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," vs ",(0,l.kt)("inlineCode",{parentName:"p"},"Output"),". The main difference between the clustered and non-clustered version of each is that the non-clustered versions are namespaced."),(0,l.kt)("p",null,"The biggest implication of this is that ",(0,l.kt)("inlineCode",{parentName:"p"},"Flows")," can only access ",(0,l.kt)("inlineCode",{parentName:"p"},"Outputs")," that are within the same namespace, but can still access any ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"."),(0,l.kt)("p",null,"For more information, see the documentation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/flow/"},(0,l.kt)("inlineCode",{parentName:"a"},"Flows"),"/",(0,l.kt)("inlineCode",{parentName:"a"},"ClusterFlows"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/output/"},(0,l.kt)("inlineCode",{parentName:"a"},"Outputs"),"/",(0,l.kt)("inlineCode",{parentName:"a"},"ClusterOutputs")))),(0,l.kt)("h3",{id:"from-ui-1"},"From UI"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"UI images are for ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," whose configuration process is almost identical to their clustered counterparts. Any differences will be noted in the steps below.")),(0,l.kt)("h4",{id:"creating-outputs"},"Creating Outputs"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Choose the option to create a new ",(0,l.kt)("inlineCode",{parentName:"li"},"Output")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"ClusterOutput"),"."),(0,l.kt)("li",{parentName:"ol"},"If creating an ",(0,l.kt)("inlineCode",{parentName:"li"},"Output"),", select the desired namespace."),(0,l.kt)("li",{parentName:"ol"},"Add a name for the resources."),(0,l.kt)("li",{parentName:"ol"},"Select the logging type."),(0,l.kt)("li",{parentName:"ol"},"Select the logging output type.")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(15253).Z,width:"1894",height:"934"})),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Configure the output buffer if necessary.")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(85237).Z,width:"1894",height:"934"})),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"Add any labels or annotations.")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(94266).Z,width:"1894",height:"934"})),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"Once done, click ",(0,l.kt)("inlineCode",{parentName:"li"},"Create")," on the lower right.")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Depending on the output selected (Splunk, Elasticsearch, etc), there will be additional fields to specify in the form.")),(0,l.kt)("h5",{id:"output"},"Output"),(0,l.kt)("p",null,"The fields present in the ",(0,l.kt)("strong",{parentName:"p"},"Output")," form will change depending on the ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," chosen, in order to expose the fields present for each ",(0,l.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/plugins/outputs/"},"output plugin"),"."),(0,l.kt)("h5",{id:"output-buffer"},"Output Buffer"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Output Buffer")," editor allows you to describe how you want the output buffer to behave. You can find the documentation for the buffer fields ",(0,l.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/plugins/outputs/buffer/"},"here"),"."),(0,l.kt)("h5",{id:"labels--annotations"},"Labels & Annotations"),(0,l.kt)("p",null,"You can append labels and annotations to the created resource."),(0,l.kt)("h4",{id:"creating-flows"},"Creating Flows"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Choose the option to create a new ",(0,l.kt)("inlineCode",{parentName:"li"},"Flow")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"ClusterFlow"),"."),(0,l.kt)("li",{parentName:"ol"},"If creating a ",(0,l.kt)("inlineCode",{parentName:"li"},"Flow"),", select the desired namespace."),(0,l.kt)("li",{parentName:"ol"},"Add a name for the resource."),(0,l.kt)("li",{parentName:"ol"},"Select any nodes whose logs to include or exclude.")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(15928).Z,width:"1894",height:"934"})),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Select target ",(0,l.kt)("inlineCode",{parentName:"li"},"Outputs")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"ClusterOutputs"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(50444).Z,width:"1894",height:"934"})),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Add any filters if desired.")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(28905).Z,width:"1892",height:"935"})),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"Once done, click ",(0,l.kt)("inlineCode",{parentName:"li"},"Create")," on the lower left.")),(0,l.kt)("h5",{id:"matches"},"Matches"),(0,l.kt)("p",null,"Matches allow you to filter which logs you want to include in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow"),". The form only allows you to include or exclude node logs, but if needed, you can add other match rules supported by the resource by selecting ",(0,l.kt)("inlineCode",{parentName:"p"},"Edit as YAML"),"."),(0,l.kt)("p",null,"For more information about the match directive, see ",(0,l.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/log-routing/"},"Routing your logs with match directive"),"."),(0,l.kt)("h5",{id:"outputs"},"Outputs"),(0,l.kt)("p",null,"Outputs allow you to select one or more ",(0,l.kt)("inlineCode",{parentName:"p"},"OutputRefs")," to send the aggregated logs to. When creating or editing a ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFLow"),", it is required that the user selects at least one ",(0,l.kt)("inlineCode",{parentName:"p"},"Output"),"."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"There must be at least one existing ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," that can be attached to the flow, or you will not be able to create / edit the flow.")),(0,l.kt)("h5",{id:"filters"},"Filters"),(0,l.kt)("p",null,"Filters allow you to transform, process, and mutate the logs. In the text edit, you will find descriptions of the supported filters, but for more information, you can visit the list of ",(0,l.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/plugins/filters/"},"supported filters"),"."),(0,l.kt)("h3",{id:"from-cli-1"},"From CLI"),(0,l.kt)("p",null,"To configure log routes via the command line, you only need to define the YAML files for the relevant resources:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# elasticsearch-logging.yaml\napiVersion: logging.banzaicloud.io/v1beta1\nkind: Output\nmetadata:\n   name: elasticsearch-example\n   namespace: fleet-local\n   labels:\n      example-label: elasticsearch-example\n   annotations:\n      example-annotation: elasticsearch-example\nspec:\n   elasticsearch:\n      host: <url-to-elasticsearch-server>\n      port: 9200\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: Flow\nmetadata:\n   name: elasticsearch-example\n   namespace: fleet-local\nspec:\n   match:\n      - select: {}\n   globalOutputRefs:\n      - elasticsearch-example\n")),(0,l.kt)("p",null,"And then apply them:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f elasticsearch-logging.yaml\n")),(0,l.kt)("h4",{id:"referencing-secrets"},"Referencing Secrets"),(0,l.kt)("p",null,"There are 3 ways Banzai Cloud allows specifying secret values via yaml values."),(0,l.kt)("p",null,"The simplest is to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," key, which is a simple string value for the desired secret. This method should only be used for testing and never in production:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'aws_key_id:\n  value: "secretvalue"\n')),(0,l.kt)("p",null,"The next is to use ",(0,l.kt)("inlineCode",{parentName:"p"},"valueFrom"),", which allows referencing a specific value from a secret by a name and key pair:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"aws_key_id:\n   valueFrom:\n      secretKeyRef:\n         name: <kubernetes-secret-name>\n         key: <kubernetes-secret-key>\n")),(0,l.kt)("p",null,"Some plugins require a file to read from rather than simply receiving a value from the secret (this is often the case for CA cert files). In these cases, you need to use ",(0,l.kt)("inlineCode",{parentName:"p"},"mountFrom"),", which will mount the secret as a file to the underlying ",(0,l.kt)("inlineCode",{parentName:"p"},"fluentd")," deployment and point the plugin to the file. The ",(0,l.kt)("inlineCode",{parentName:"p"},"valueFrom")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"mountFrom")," object look the same:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"tls_cert_path:\n   mountFrom:\n      secretKeyRef:\n         name: <kubernetes-secret-name>\n         key: <kubernetes-secret-key>\n")),(0,l.kt)("p",null,"For more information, you can find the related documentation ",(0,l.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/plugins/outputs/secret/"},"here"),"."),(0,l.kt)("h2",{id:"example-outputs"},"Example ",(0,l.kt)("inlineCode",{parentName:"h2"},"Outputs")),(0,l.kt)("h3",{id:"elasticsearch"},"Elasticsearch"),(0,l.kt)("p",null,"For the simplest deployment, you can deploy Elasticsearch on your local system using docker:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --name elasticsearch -p 9200:9200 -p 9300:9300 -e xpack.security.enabled=false -e node.name=es01 -it docker.elastic.co/elasticsearch/elasticsearch:6.8.23\n")),(0,l.kt)("p",null,"Make sure that you have set ",(0,l.kt)("inlineCode",{parentName:"p"},"vm.max_map_count")," to be >= 262144 or the docker command above will fail. Once the Elasticsearch server is up, you can create the yaml file for the ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlow"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cat << EOF > elasticsearch-example.yaml\napiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n  name: elasticsearch-example\n  namespace: cattle-logging-system\nspec:\n  elasticsearch:\n    host: 192.168.0.119\n    port: 9200\n    buffer:\n      timekey: 1m\n      timekey_wait: 30s\n      timekey_use_utc: true\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n  name: elasticsearch-example\n  namespace: cattle-logging-system\nspec:\n  match:\n    - select: {}\n  globalOutputRefs:\n    - elasticsearch-example\nEOF\n")),(0,l.kt)("p",null,"And apply the file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f elasticsearch-example.yaml\n")),(0,l.kt)("p",null,"After allowing some time for the logging operator to apply the resources, you can test that the logs are flowing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl localhost:9200/fluentd/_search\n{\n  "took": 1,\n  "timed_out": false,\n  "_shards": {\n    "total": 5,\n    "successful": 5,\n    "skipped": 0,\n    "failed": 0\n  },\n  "hits": {\n    "total": 11603,\n    "max_score": 1,\n    "hits": [\n      {\n        "_index": "fluentd",\n        "_type": "fluentd",\n        "_id": "yWHr0oMBXcBggZRJgagY",\n        "_score": 1,\n        "_source": {\n          "stream": "stderr",\n          "logtag": "F",\n          "message": "I1013 02:29:43.020384       1 csi_handler.go:248] Attaching \\"csi-974b4a6d2598d8a7a37b06d06557c428628875e077dabf8f32a6f3aa2750961d\\"",\n          "kubernetes": {\n            "pod_name": "csi-attacher-5d4cc8cfc8-hd4nb",\n            "namespace_name": "longhorn-system",\n            "pod_id": "c63c2014-9556-40ce-a8e1-22c55de12e70",\n            "labels": {\n              "app": "csi-attacher",\n              "pod-template-hash": "5d4cc8cfc8"\n            },\n            "annotations": {\n              "cni.projectcalico.org/containerID": "857df09c8ede7b8dee786a8c8788e8465cca58f0b4d973c448ed25bef62660cf",\n              "cni.projectcalico.org/podIP": "10.52.0.15/32",\n              "cni.projectcalico.org/podIPs": "10.52.0.15/32",\n              "k8s.v1.cni.cncf.io/network-status": "[{\\n    \\"name\\": \\"k8s-pod-network\\",\\n    \\"ips\\": [\\n        \\"10.52.0.15\\"\\n    ],\\n    \\"default\\": true,\\n    \\"dns\\": {}\\n}]",\n              "k8s.v1.cni.cncf.io/networks-status": "[{\\n    \\"name\\": \\"k8s-pod-network\\",\\n    \\"ips\\": [\\n        \\"10.52.0.15\\"\\n    ],\\n    \\"default\\": true,\\n    \\"dns\\": {}\\n}]",\n              "kubernetes.io/psp": "global-unrestricted-psp"\n            },\n            "host": "harvester-node-0",\n            "container_name": "csi-attacher",\n            "docker_id": "f10e4449492d4191376d3e84e39742bf077ff696acbb1e5f87c9cfbab434edae",\n            "container_hash": "sha256:03e115718d258479ce19feeb9635215f98e5ad1475667b4395b79e68caf129a6",\n            "container_image": "docker.io/longhornio/csi-attacher:v3.4.0"\n          }\n        }\n      },\n       \n      ...\n       \n    ]\n  }\n}\n')),(0,l.kt)("h3",{id:"graylog"},"Graylog"),(0,l.kt)("p",null,"You can follow the instructions ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w13915984028/harvester-develop-summary/blob/main/integrate-harvester-logging-with-log-servers.md#integrate-harvester-logging-with-graylog"},"here")," to deploy and view cluster logs via ",(0,l.kt)("a",{parentName:"p",href:"https://www.graylog.org/"},"Graylog"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n  name: "all-logs-gelf-hs"\n  namespace: "cattle-logging-system"\nspec:\n  globalOutputRefs:\n    - "example-gelf-hs"\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n  name: "example-gelf-hs"\n  namespace: "cattle-logging-system"\nspec:\n  gelf:\n    host: "192.168.122.159"\n    port: 12202\n    protocol: "udp"\n')),(0,l.kt)("h3",{id:"splunk"},"Splunk"),(0,l.kt)("p",null,"You can follow the instructions ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w13915984028/harvester-develop-summary/blob/main/test-log-event-audit-with-splunk.md"},"here")," to deploy and view cluster logs via ",(0,l.kt)("a",{parentName:"p",href:"https://www.splunk.com/"},"Splunk"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n  name: harvester-logging-splunk\n  namespace: cattle-logging-system \nspec:\n splunkHec:\n    hec_host: 192.168.122.101\n    hec_port: 8088\n    insecure_ssl: true\n    index: harvester-log-index\n    hec_token:\n      valueFrom:\n        secretKeyRef:\n          key: HECTOKEN\n          name: splunk-hec-token2\n    buffer:\n      chunk_limit_size: 3MB\n      timekey: 2m\n      timekey_wait: 1m\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n   name: harvester-logging-splunk\n   namespace: cattle-logging-system\nspec:\n   filters:\n      - tag_normaliser: {}\n   match:\n   globalOutputRefs:\n      - harvester-logging-splunk\n")),(0,l.kt)("h3",{id:"loki"},"Loki"),(0,l.kt)("p",null,"You can follow the instructions in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/joshmeranda/harvester/blob/logging/enhancements/20220525-system-logging.md"},"logging HEP")," on deploying and viewing cluster logs via ",(0,l.kt)("a",{parentName:"p",href:"https://grafana.com/oss/loki/"},"Grafana Loki"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n  name: harvester-loki\n  namespace: cattle-logging-system\nspec:\n  match:\n    - select: {}\n  globalOutputRefs:\n    - harvester-loki\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n  name: harvester-loki\n  namespace: cattle-logging-system\nspec:\n  loki:\n    url: http://loki-stack.cattle-logging-system.svc:3100\n    extra_labels:\n      logOutput: harvester-loki\n")))}u.isMDXComponent=!0},28905:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-flow-filters-e6b4e332e511c03cad22f4183ee403d3.png"},15928:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-flow-matches-e84e72fc6237b7c3e958ee431be10d67.png"},50444:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-flow-outputs-62d17c11b0d45b348d1aa8025d340d25.png"},85237:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-output-buffer-62c1b78c41a02d731c76f6cbc4126340.png"},94266:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-output-labels-and-annotations-5a91c9c7380fea1f056de1dcfbd8d192.png"},15253:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-output-4780f942ae8568cb56cdca16e364b74e.png"},51329:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/modify-logging-fluent-resources-5c54722eedbcc1c4018af4accd8b6348.png"}}]);