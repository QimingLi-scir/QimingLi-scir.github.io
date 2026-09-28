---
layout: academic-home
permalink: /
title: "Qiming Li · Multimodal AI Research"
excerpt: "Qiming Li, master student at HIT-SCIR. Research on vision-language model post-training, coding and GUI agents, and multimodal hallucination."
redirect_from:
  - /about/
  - /about.html
---
<div class="home-modern">
  <section class="about-copy" id="about" aria-labelledby="about-title">
    <p class="section-kicker">A little about me</p>
    <p class="intro">Hello, I am Qiming Li (启明 李), a master's student at <a href="http://ir.hit.edu.cn/">HIT-SCIR</a>, advised by <a href="https://homepage.hit.edu.cn/fengxiaocheng?lang=zh">Prof. Xiaocheng Feng</a> and <a href="https://homepage.hit.edu.cn/qinbing">Prof. Bing Qin</a>. I am currently a research intern with the <a href="https://github.com/meituan-longcat">Meituan Longcat Team</a>. Previously, I was a visiting student at <a href="https://nlp.csai.tsinghua.edu.cn/">THUNLP</a>, working with <a href="https://nlp.csai.tsinghua.edu.cn/~lzy/">Prof. Zhiyuan Liu</a>, and a research assistant at <a href="https://hkunlp.github.io/">HKUNLP</a>, working with <a href="https://xcfeng.net/">Dr. Xiachong Feng</a> and <a href="https://ikekonglp.github.io/">Prof. Lingpeng Kong</a>. My research focuses on <strong>VLM mid- and post-training</strong>, including RL and On-Policy Distillation, Coding & GUI agents, and hallucination.</p>
    <div class="research-grid">
      <div class="research-card"><span class="research-number">01 / TRAIN</span><h3>VLM Post-Training</h3><p>SFT &amp; On-Policy Distillation</p></div>
      <div class="research-card"><span class="research-number">02 / ACT</span><h3>Visual Agents</h3><p>Coding &amp; GUI Interaction</p></div>
      <div class="research-card"><span class="research-number">03 / TRUST</span><h3>Reliable Perception</h3><p>Hallucination &amp; Interpretability</p></div>
    </div>
  </section>
  <section id="experience" class="detail-section" aria-labelledby="experience-title">
    <p class="section-kicker">Where I've worked</p><h2 id="experience-title">Research Experience</h2>
    {% capture experience %}{% include home-experience.md %}{% endcapture %}{{ experience | markdownify }}
  </section>
  <section id="publications" aria-labelledby="publications-title">
    <p class="section-kicker">Research portfolio</p>
    <div class="section-heading"><h2 id="publications-title">Selected Publications</h2><a href="{{ site.author.googlescholar }}">Google Scholar ↗</a></div>
    <p class="section-note">* Equal contribution.</p>
    <div class="pub-filters" aria-label="Filter publications" hidden>
      <button type="button" class="active" data-filter="all" aria-pressed="true">All Research</button>
      <button type="button" data-filter="Multimodal Coding Agent" aria-pressed="false">Coding Agents</button>
      <button type="button" data-filter="OPD of VLMs" aria-pressed="false">VLM Post-Training</button>
      <button type="button" data-filter="Hallucination of VLMs" aria-pressed="false">Hallucination</button>
      <button type="button" data-filter="Multilingual VLMs" aria-pressed="false">Multilingual VLMs</button>
    </div>
    <p class="sr-only" id="filter-status" role="status" aria-live="polite"></p>
    {% include selected-publications.html %}
  </section>
  <section id="education" class="detail-section" aria-labelledby="education-title">
    <p class="section-kicker">Academic journey</p><h2 id="education-title">Education</h2>
    {% capture education %}{% include home-education.md %}{% endcapture %}{{ education | markdownify }}
  </section>
  <div class="columns">
    <section id="service" class="detail-section" aria-labelledby="service-title"><p class="section-kicker">Giving back</p><h2 id="service-title">Academic Service</h2>{% capture service %}{% include home-service.md %}{% endcapture %}{{ service | markdownify }}<h3>Teaching</h3>{% capture teaching %}{% include home-teaching.md %}{% endcapture %}{{ teaching | markdownify }}</section>
    <section id="awards" class="detail-section" aria-labelledby="awards-title"><p class="section-kicker">Milestones</p><h2 id="awards-title">Honors &amp; Awards</h2>{% capture awards %}{% include home-awards.md %}{% endcapture %}{{ awards | markdownify }}</section>
  </div>
  <div class="contact"><p class="section-kicker">Let's connect</p><h2>Interested in Multimodal AI?</h2><p><a href="mailto:qmli@ir.hit.edu.cn">qmli@ir.hit.edu.cn <span aria-hidden="true">↗</span></a></p></div>
  <section class="visitor-map" aria-labelledby="visitor-map-title">
    <p class="section-kicker">A global audience</p>
    <!-- <h2 id="visitor-map-title">Visitors from around the world</h2> -->
    <!-- <p class="map-note">Approximate visitor locations, updated automatically.</p> -->
    <div class="visitor-map-frame">
      <script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=JlK_ojZkG4rP4iFipfTcmOprD4HYOmgccf9iIbZtOxk&amp;cl=ffffff&amp;w=a"></script>
    </div>
  </section>
</div>
