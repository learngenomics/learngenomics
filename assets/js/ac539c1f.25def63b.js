"use strict";(self.webpackChunklearngenomics_dev=self.webpackChunklearngenomics_dev||[]).push([[952],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,p=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(p,i(i({ref:t},h),{},{components:n})):a.createElement(p,i({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3507:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Cancer Development and Control",track:"Advanced Topics"},l=void 0,c={unversionedId:"advanced-topics/cancer-primer",id:"advanced-topics/cancer-primer",title:"Cancer Development and Control",description:'Since any two people share 99.6%--99.9% of their nucleotide sequence, genomic analysts generally focus on the remaining 0.1%--0.4%. While genomic variations may be beneficial or without effect, these variations are implicated in the genesis and progression of many diseases, including many cancers. Historically, cancer researchers focused on "driver" mutations that negatively affect cell function, causing or influencing cancer. More recent work is broader, including beneficial mutations that may prevent or slow cancer.',source:"@site/docs/06-advanced-topics/cancer-primer.md",sourceDirName:"06-advanced-topics",slug:"/advanced-topics/cancer-primer",permalink:"/docs/advanced-topics/cancer-primer",draft:!1,editUrl:"https://github.com/stjude/learngenomics.dev/tree/main/docs/06-advanced-topics/cancer-primer.md",tags:[],version:"current",frontMatter:{title:"Cancer Development and Control",track:"Advanced Topics"},sidebar:"tutorialSidebar",previous:{title:"Alternative Splicing",permalink:"/docs/advanced-topics/alternative-splicing"}},h={},d=[{value:"Tumor vs. Germline Mutations",id:"tumor-vs-germline-mutations",level:2},{value:"Hallmarks of Cancer",id:"hallmarks-of-cancer",level:2},{value:"Oncogenes and Tumor Suppressors",id:"oncogenes-and-tumor-suppressors",level:2},{value:"The Evolutionary Basis for Controlled Growth",id:"the-evolutionary-basis-for-controlled-growth",level:2},{value:"Control Signals and the Immune System",id:"control-signals-and-the-immune-system",level:2},{value:"Gain and Loss of Function",id:"gain-and-loss-of-function",level:2},{value:"Genomic Instability",id:"genomic-instability",level:2},{value:"Gene Pathways",id:"gene-pathways",level:2},{value:"The RAS Pathway",id:"the-ras-pathway",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Since any two people share 99.6%--99.9% of their nucleotide sequence, genomic analysts generally focus on the remaining 0.1%--0.4%. While genomic variations may be beneficial or without effect, these variations are implicated in the genesis and progression of many diseases, including many cancers. Historically, cancer researchers focused on "driver" mutations that negatively affect cell function, causing or influencing cancer. More recent work is broader, including beneficial mutations that may prevent or slow cancer.'),(0,r.kt)("p",null,"Today cancer genomics is not limited to basic research. In real time, computational biologists uncover and interpret mutations within the tumors of individual patients. This knowledge enables the clinician to precisely select the drugs or therapies that are most likely to provide a cure. All of this is possible due to the understanding of the human genome and cancer."),(0,r.kt)("p",null,"Cancer is, at its root, a disease of the genetic code that causes cell growth to accelerate out of control, adversely affecting the organism. The ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Causes_of_cancer"},"majority of cancers derive")," from genetic mutations that arise from environmental and lifestyle factors while the remainder are due to inherited genetic mutations. From these initiating mutations, cancer develops in stages, adapting by resisting the body's checks on growth."),(0,r.kt)("h2",{id:"tumor-vs-germline-mutations"},"Tumor vs. Germline Mutations"),(0,r.kt)("p",null,"In cancer, rapidly growing masses of abnormal cells are known as\xa0",(0,r.kt)("strong",{parentName:"p"},"tumors"),". Commonly, these masses are derived from mutations in the non-reproductive or\xa0",(0,r.kt)("strong",{parentName:"p"},"somatic"),"\xa0cells of the body. The body's reproductive cells are called\xa0",(0,r.kt)("strong",{parentName:"p"},"germline"),"\xa0cells. The distinction is important because mutations in germline cells are interpreted differently from mutations in tumors. Germline mutations are most often inherited family traits that may predispose disease. Mutations in tumors are the changes that drive the cancer and arise due to environmental or developmental effects."),(0,r.kt)("h2",{id:"hallmarks-of-cancer"},"Hallmarks of Cancer"),(0,r.kt)("p",null,"There are over 100 types of human cancer and, by one recent estimate,\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6029450/"},"299 driver genes"),"\xa0and many more driver mutations. While genes associated with cancer are diverse, the disease has certain hallmarks. For example, cancer cells are self-sufficient, stimulating their own growth and resisting signals to stop. In addition, cancer cells evade the immune system by modifying its response. Further, cancer cells fuel themselves by reprogramming their metabolism and growing new blood vessels to acquire more nutrients. Last, if left untreated, cancer cells will multiply indefinitely and eventually spread across the body."),(0,r.kt)("p",null,"Normal cells accrue these hallmarks through successive mutations as the disease develops. A recent study found that anywhere from\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.sanger.ac.uk/news/view/1-10-mutations-are-needed-drive-cancer-scientists-find"},"one to ten driver mutations"),"\xa0may have to pile up in a normal cell before it becomes cancerous. Cancer cells do this by developing unstable genomes that tolerate and enable mutations."),(0,r.kt)("h2",{id:"oncogenes-and-tumor-suppressors"},"Oncogenes and Tumor Suppressors"),(0,r.kt)("p",null,'The normal growth rate of cells can be likened to a car driving the speed limit down a highway. As stated above, cancer can be summed up as cells growing "out of control". This is analogous to the car greatly exceeding the speed limit after the driver loses control. In this scenario, two things can contribute to the car\'s increased speed:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A brick could be dropped on the gas pedal, which would push the car to go faster than desired leaving the driver unable to regulate the speed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The brake pedal could go out, hampering the driver's ability to slow when the car is going too fast."))),(0,r.kt)("p",null,"These two events are analogous to increased expression of\xa0",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Oncogene"},(0,r.kt)("strong",{parentName:"a"},"oncogenes")),"\xa0and loss of function in\xa0",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tumor_suppressor"},(0,r.kt)("strong",{parentName:"a"},"tumor suppressor genes")),"\xa0respectively. Broadly speaking, an oncogene is a gene that encourages cell growth and pushes the cell to proliferate. These driver genes are frequently mutated and/or highly expressed in tumor cells. They can function in a variety of ways including signaling the cell to grow, preventing cell death and enabling cells to move throughout the body. Tumor suppressor genes have the opposite effect: they protect a cell from becoming cancerous by throttling cell growth. Scientists hypothesize genomes needs multiple mutations to drive cancer, so both oncogenes and tumor suppressors may be mutated in a given genome."),(0,r.kt)("h2",{id:"the-evolutionary-basis-for-controlled-growth"},"The Evolutionary Basis for Controlled Growth"),(0,r.kt)("p",null,"For bacteria and other single-cell organisms, the fastest growing cell claims the most territory, has the most progeny, and wins the evolutionary battle. Growth is only limited by resources and environmental conditions like temperature. In multicellular organisms, resources are shared and the cells must function as a unit if the whole is to survive. To achieve that end, multicellular organisms have evolved elaborate control mechanisms to manage growth and keep individual cells in check. These additional mechanisms are maintained, through systems of genes working together, or\xa0",(0,r.kt)("strong",{parentName:"p"},"pathways"),". In cancerous cells, these pathways are disabled by the loss of functional tumor suppressors, returning the cell to a state like the primitive signal-cell organism. The takeaway is that cells are wired for growth naturally, which is why removing controls are so consequential."),(0,r.kt)("h2",{id:"control-signals-and-the-immune-system"},"Control Signals and the Immune System"),(0,r.kt)("p",null,'The body controls the genome and cellular growth at several levels. These control mechanisms are analogous to how cars are regulated in traffic. On the road, drivers stay safe by continually adjusting to the traffic lights, turn signals and actions of the cars around them. In the body, healthy cells continuously respond to growth-limiting chemical signals from neighboring cells and from the bloodstream. Drivers monitor the performance of their car through meters on the dashboard, pulling over if a "check engine" light comes on or the engine becomes too hot. In the cell, stability genes monitor the integrity of the DNA, arresting cell division whenever a repair is needed. On the highway, if the driver fails to comply with traffic signals the police pull them over. In the body, if a cell ignores stop signals and continues to grow excessively, the immune system will generally detect and destroy it.'),(0,r.kt)("p",null,'In the body, there are consequences to cells that ignore anti-growth signals. Cells that continue to grow and detach from neighboring cells are triggered to self-destruct in a process known as "programmed cell death" or ',(0,r.kt)("strong",{parentName:"p"},"apoptosis"),". This process is also triggered whenever the DNA of cell is too damaged to repair. Programmed cell death is not limited to disease, this process normally happens during development. For example, in the womb, the cells that make up the webbing between the fetus' fingers are eliminated by cell death. In cancer, programmed cell death is disabled, as are other controls."),(0,r.kt)("h2",{id:"gain-and-loss-of-function"},"Gain and Loss of Function"),(0,r.kt)("p",null,"Because it is easier to break something than to build it, loss of function mutations seen in tumor suppressors are more prevalent than the gain of function mutations seen in oncogenes. Many variations in the coding region sequence of a transcript have the potential to disable the gene product. As a result, there are generally many distinct mutations that can disable a tumor suppressor and initiate cancer."),(0,r.kt)("p",null,"Even the addition or deletion of a single base can cause the loss the function of the protein by shifting the reading frame, so that when translated, the incorrect amino acids are assembled. A single base change can also alter the splicing of the transcript, causing an exon to be skipped or an intron to be retained. A skipped exon may still be in frame and functional, while a retained intron is likely to add dysfunctional parts to the protein or to cause translation to terminate early."),(0,r.kt)("p",null,"Fortunately, normal cells have two copies of each gene, one from each parent, so disruption of one copy does not result in total loss of function in the cell. For a tumor suppressor gene to be fully deactivated, it is necessary for both copies of the gene to have a disabling mutation. Multiple deactivating mutations in the same gene in the same type of tumor indicate that a gene may be a tumor suppressor."),(0,r.kt)("p",null,"By contrast, gain of function mutations are often due to a change that alters the resulting protein in a precise way. Gain of function mutations are often in frame fusions where RNA exons that encode functional domains are spliced together producing a novel protein. In these cases, one mutation in one copy of the gene can be enough to change the cell. Gain of function mutations are repeatedly observed in similar tumors at the same location in the protein. This pattern of repeated mutation is evidence that the gene in question is an oncogene."),(0,r.kt)("h2",{id:"genomic-instability"},"Genomic Instability"),(0,r.kt)("p",null,"Every time a new cell is formed there is the potential for a genetic mutation. Within the human body, there are an estimated\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.smithsonianmag.com/smart-news/there-are-372-trillion-cells-in-your-body-4941473/"},"37.2 trillion cells"),"\xa0with 6 billion bases to copy each time a cell divides. Given these astronomical numbers, even an extremely small error rate will produce many mistakes. To protect itself, the cell has evolved control mechanisms mentioned above for preventing, detecting and correcting these errors in DNA. The genes that maintain the integrity of the genome are called stability genes, and some also act as tumor suppressors. The loss of stability genes predisposes a person to cancer by removing the checks on the genome. Mutations are tolerated instead of repaired, enabling the progression of the disease. The result is genomic instability, one cancer's hallmarks. It is genomic instability that gives rise to wide range of variants in the genome."),(0,r.kt)("h2",{id:"gene-pathways"},"Gene Pathways"),(0,r.kt)("p",null,"To effectively stop a car, all the parts of the braking system must work together, from the brake pedal on the floor to the discs on the wheels. Likewise, cells employ teams of proteins and other molecules to work together through a series of interactions to alter the state of the cell. As mentioned above, these molecular systems are commonly called pathways."),(0,r.kt)("p",null,"Just as each protein has a function, each pathway has a purpose. Synthetic pathways act like assembly lines building up molecules step by step. Other pathways breakdown molecules to provide energy for other processes. Signaling pathways detect and respond to environmental cues and enable the cell to adapt by turning genes on and off. In cancer, synthetic pathways are redirected to enhance cell division, metabolic processes are reprogrammed to fuel tumor growth, and signaling pathways are altered to ignore cell death signals and to stimulate growth."),(0,r.kt)("p",null,"In genomics it is common to survey the genetic mutations within a given type of cancer and to group those mutations by pathway. The reasoning is that disrupting different genes within the same pathway can produce similar changes in the behavior of the cell. Further, understanding how commonly mutated genes work in the larger context of a pathway is important because treatments can be designed to alter other genes in a pathway when frequently mutated genes cannot be targeted. This is the case in the RAS pathway, where the RAS gene is often mutated but does not respond well to drugs."),(0,r.kt)("h2",{id:"the-ras-pathway"},"The RAS Pathway"),(0,r.kt)("p",null,"The RAS pathway is a signaling pathway made up of genes that are frequently mutated in cancer. The pathway normally regulates cell division and proliferation. It does this by transmitting information from the cell's environment to the cell's internal mechanisms. In the healthy normal cell, the pathway begins with an external chemical signal, called a growth factor. The factor binds and is recognized by a receptor protein on the cell's surface. This receptor protein, in turn, modifies another protein inside the cell activating it. This newly activated protein then modifies RAS which, in turn, activates more proteins downstream, amplifying the effects of the original signal. Eventually, proteins known as transcription factors are modified such that they can enter the nucleus, bind DNA and turn on or off certain genes. Once made into proteins, these genes change the state of the cell. In this case, they stimulate cell growth and division. Mutations of genes in this pathway can have multiple consequences. A mutation may keep activating proteins on, or it may remove the need for the external signal."))}u.isMDXComponent=!0}}]);