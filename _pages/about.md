---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<style>
  /* 针对有侧边栏的页面，拉宽右侧内容区 */
  @media (min-width: 64em) {
    .archive, .page {
      width: calc(100% - 250px) !important; /* 250px是侧边栏预留宽度 */
      padding-right: 40px !important;
      max-width: 1200px !important; /* 限制一个最大宽度，防止太宽导致阅读困难 */
    }
  }

  /* 暴力拉宽主容器 */
  .wrapper {
    max-width: 95% !important;
  }
</style>

{% include base_path %}

Hello, I'm Qiming Li (启明 李), a master student of [HIT-SCIR](http://ir.hit.edu.cn/) under the supervision of [Prof.Xiaocheng Feng](https://homepage.hit.edu.cn/fengxiaocheng?lang=zh) and [Prof.Bing Qin](https://homepage.hit.edu.cn/qinbing). I am currently working as a research intern at [Meituan Longcat Team](https://github.com/meituan-longcat). Previously, I'm a visiting student of [THUNLP](https://nlp.csai.tsinghua.edu.cn/) under the supervision of [Prof.Zhiyuan Liu](https://nlp.csai.tsinghua.edu.cn/~lzy/), and a research assistant of [HKUNLP](https://hkunlp.github.io/) under the supervision of [Postdoc.Xiachong Feng](https://xcfeng.net/) and [Prof.Lingpeng Kong](https://ikekonglp.github.io/). My research interests focus on **VLM Post-training**, including **SFT & OPD**, **Coding & Web Agent** and **Hallucination**. 

Academic Research Experience
=====
* Mar.2025 - Sep.2025: [HKUNLP](https://hkunlp.github.io/), The University of HongKong, Research Intern
  * Supervisor: [Postdoc.Xiachong Feng](https://xcfeng.net/) and [Prof.Lingpeng Kong](https://ikekonglp.github.io/)

* Jul.2024 - Feb.2025: [THUNLP](https://nlp.csai.tsinghua.edu.cn/), Tsinghua University, Research Intern
  * Supervisor: [Prof.Zhiyuan Liu](https://nlp.csai.tsinghua.edu.cn/~lzy/)

Industry Research Experience
=====
* May.2026 - now: [Meituan, Longcat Team](https://github.com/meituan-longcat), Research Intern
* Jan.2026 - May.2026: [Alibaba, Abot Team](https://github.com/amap-cvlab), Research Intern
* Oct.2025 - Jan.2026: [Huawei, Xiaoyi](), Research Intern
* July.2024 - Feb.2025: [ModelBest](https://modelbest.cn/), Research Intern  
* Oct.2023 - Jan.2024: [iFLYTEK](https://www.iflytek.com/), Research Intern 
* Oct.2022 - Aug.2023: [HITCRT](https://baike.baidu.com/item/%E5%93%88%E5%B0%94%E6%BB%A8%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6%E7%AB%9E%E6%8A%80%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%98%9F#7), Vision Control Algorithm Engineer  
* Jan.2022 - Feb.2022: [Leju (Shenzhen) Robotics](https://www.lejurobot.com/), Vision Algorithm Engineer

Selected Publications
=====
## 0. Multimodal Coding Agent
<span style="color: blue;">**(arXiv)**</span>
**MT-Web2Code: A Multi-Turn Multimodal Benchmark for Iterative Web UI Coding** [[pdf]]()

**Qiming Li**, Intern @ Longcat Team

## 1. OPD of VLMs
<span style="color: blue;">**(arXiv)**</span>
**PRPO: Perception-Reinforced Policy Optimization via Token-Level Dynamic Advantage Reshaping** [[pdf]](https://arxiv.org/pdf/2606.08708)

**Qiming Li**, Tianlun Li, Xiaolong Cheng, Hangyu Li, Ruiyan Gong, Kangning Niu, Kaitao Jiang, Mu Xu

<span style="color: blue;">**(arXiv)**</span>
**Not All Tokens See Equally: Perception-Grounded Policy Optimization for Large Vision-Language Models** [[pdf]](https://arxiv.org/pdf/2604.01840)

Zekai Ye, **Qiming Li**, Xiaocheng Feng, Ruihan Chen, Ziming Li, Haoyu Ren, Kun Chen, Dandan Tu, Bing Qin

## 2. Halluciantion of VLMs

<span style="color: red;">**(WAICA2026 Oral, 世界人工智能大会论文)**</span>
**CAST: Mitigating Object Hallucination in Large Vision-Language Models via Caption-Guided Visual Attention Steering** [[pdf]](https://arxiv.org/pdf/2605.04641)

**Qiming Li**, Zekai Ye, Xiaocheng Feng, Weihong Zhong, Ruihan Chen, Lei Huang, Baohang Li, Bing Qin

<span style="color: red;">**(AAAI2026 Oral Top-4%)**</span>
**Causal Tracing of Object Representations in Large Vision Language Models: Mechanistic Interpretability and Hallucination Mitigation** [[pdf]](https://arxiv.org/abs/2511.05923)

**Qiming Li**, Zekai Ye, Xiaocheng Feng, Weihong Zhong, Weitao Ma, Xiachong Feng 

<span style="color: red;">**(ACL2025 Main)**</span>
**CLAIM: Mitigating Multilingual Object Hallucination in Large Vision-Language Models with Cross-Lingual Attention Intervention** [[pdf]](https://arxiv.org/pdf/2506.11073)

Zekai Ye*, __Qiming Li*__, Xiaocheng Feng, Libo Qin, Yichong Huang, Baohang Li, Kui Jiang, Yang Xiang, Zhirui Zhang, Yunfei Lu, Duyu Tang, Dandan Tu, Bing Qin

<span style="color: red;">**(CVPR2025 Highlight Top-3%)**</span>
**RLAIF-V: Open-Source AI Feedback Leads to Super GPT-4V Trustworthiness** [[pdf]](https://arxiv.org/abs/2405.17220)

Tianyu Yu, Haoye Zhang, **Qiming Li**, Qixin Xu, Yuan Yao, Da Chen, Xiaoman Lu, Ganqu Cui, Yunkai Dang, Taiwen He, Xiaocheng Feng, Jun Song, Bo Zheng, Zhiyuan Liu, Tat-Seng Chua, Maosong Sun

<span style="color: red;">**(ACL2024 Main)**</span>
**Investigating and Mitigating the Multimodal Hallucination Snowballing in Large Vision-Language Models** [[pdf]](https://arxiv.org/abs/2407.00569)

Weihong Zhong, Xiaocheng Feng, Liang Zhao, **Qiming Li**, Lei Huang, Yuxuan Gu, Weitao Ma, Yuan Xu, Bing Qin

## 3. Multilingual VLMs
<span style="color: red;">**(ACL2026 Main)**</span>
**Unlocking Multilingual Reasoning Capability of LLMs and LVLMs through Representation Engineering** [[pdf]](https://arxiv.org/abs/2511.23231)

**Qiming Li**, Xiaocheng Feng, Yixuan Ma, Zekai Ye, Ruihan Chen, Xiachong Feng, Bing Qin

<span style="color: red;">**(ACL2026 Main)**</span>
**MPR-GUI: Benchmarking and Enhancing Multilingual Perception and Reasoning in GUI Agents** [[pdf]](https://arxiv.org/abs/2512.00756)

Ruihan Chen*, __Qiming Li*__, Xiaocheng Feng, Xiaoliang Yang, Weihong Zhong, Yuxuan Gu, Zekun Zhou, Bing Qin


Professional Services
=====
* 2025: ACL ARR (Reviewer), AAAI (Program Committee), ICLR (Reviewer)
* 2026: ACL ARR (Reviewer), AAAI (Program Committee), ACM MM (Reviewer), NeurIPS (Reviewer) 

Teaching
=====
* Teaching Assistant @ Harbin Institute of Technology
  * 22CS31052 Knowledge Representation and Reasoning, Spring 2025
 
Education
=====
- <img src="https://www.hit.edu.cn/_upload/article/images/d3/ec/8fcaa5d24cb59a8e9660324ef50b/735df70a-538b-4bd6-8e52-3f373085a616.png" alt="Harbin Institute of Technology Logo" style="width:35px;height:30px;"> B.S. in Computer Science, Harbin Institute of Technology, Aug.2020-June.2024
- <img src="https://www.hit.edu.cn/_upload/article/images/d3/ec/8fcaa5d24cb59a8e9660324ef50b/735df70a-538b-4bd6-8e52-3f373085a616.png" alt="Harbin Institute of Technology Logo" style="width:35px;height:30px;"> M.S. in Computer Science, Harbin Institute of Technology, Aug.2024-2027(expected)
  - Supervisor: [Prof.Xiaocheng Feng](http://ir.hit.edu.cn/~xcfeng/)
    
Awards
=====
* HIT(ShenZhen) Insun Scholarship (Top-1%)
* Graduate Entrance Scholarship (Top Class)
* Graduate Academic Scholarship (Top Class)
* HIT Outstanding Graduate Student Award
* 2023 National Robotics Competition [Robomaster](https://www.robomaster.com/zh-CN)
  * [RoboMaster2023 National First Prize(6/32)](https://www.robomaster.com/zh-CN/resource/pages/announcement/1617)
  * [RoboMaster2023 Central Region Champion(First time in HIT history)](https://www.robomaster.com/zh-CN/resource/pages/announcement/1607)

  
