(function () {
  const labels = {
    en: {
      relatedTitle: "About Navigation"
    },
    zh: {
      relatedTitle: "关于导航"
    }
  };

  const partnerLogos = [
    { src: "images/images_lib/partners/1.png", name: "Maersk" },
    { src: "images/images_lib/partners/2.png", name: "COSCO Shipping" },
    { src: "images/images_lib/partners/3.png", name: "Evergreen" },
    { src: "images/images_lib/partners/4.png", name: "Hapag-Lloyd" },
    { src: "images/images_lib/partners/5.png", name: "PIL" },
    { src: "images/images_lib/partners/6.png", name: "OOCL" },
    { src: "images/images_lib/partners/7.png", name: "ONE" },
    { src: "images/images_lib/partners/8.png", name: "CMA CGM" },
    { src: "images/images_lib/partners/9.png", name: "Wan Hai Lines" },
    { src: "images/images_lib/partners/10.png", name: "MSC" },
    { src: "images/images_lib/partners/11.png", name: "Yang Ming" },
    { src: "images/images_lib/partners/12.png", name: "TS Lines" },
    { src: "images/images_lib/partners/13.png", name: "ESL" },
    { src: "images/images_lib/partners/14.png", name: "Cathay Pacific" },
    { src: "images/images_lib/partners/15.png", name: "Cargolux" },
    { src: "images/images_lib/partners/16.png", name: "Aeroflot" },
    { src: "images/images_lib/partners/17.png", name: "Qatar Airways" },
    { src: "images/images_lib/partners/18.png", name: "Ethiopian Airlines" },
    { src: "images/images_lib/partners/19.png", name: "Turkish Airlines" },
    { src: "images/images_lib/partners/20.png", name: "Emirates" },
    { src: "images/images_lib/partners/21.png", name: "China Southern" },
    { src: "images/images_lib/partners/22.png", name: "Air China" },
    { src: "images/images_lib/partners/23.png", name: "Polar Air Cargo" }
  ];

  const sections = {
    profile: {
      icon: "fa-building",
      en: {
        title: "Company Profile",
        companyName: "Joined Link Logistics Co., Ltd.",
        lead: "",
        body: [
          "Joined Link Logistics is a dynamic logistics company rooted in China. Backed by years of industry experience, our team is committed to delivering efficient, reliable, and practical logistics solutions for customers worldwide.",
          "Guided by our philosophy of international vision, efficient service, and refined cost control, we focus on customer needs, strengthen execution, and continuously improve service quality. We have built long-term partnerships and stable logistics resources across both domestic and overseas markets.",
          "Our Services:",
          "We handle diversified logistics business, including DDU, DDP, FOB, C&F, Ex-work and other trade and transport solutions, with service coverage across the United States, Europe, Africa, the Middle East, and Southeast Asia.",
          "With an extensive partner network and strong professional capabilities, we provide flexible and customized logistics support for different industries and shipment needs, helping customers reduce logistics costs and improve supply chain efficiency.",
          "Our Mission:",
          "To create lasting value for customers through professional service and efficient execution, and grow into a trusted global logistics service brand.",
          "We welcome you to work with us and build a broader future in global logistics."
        ]
      },
      zh: {
        title: "公司简介",
        companyName: "深圳市嘉领物流有限公司",
        lead: "",
        body: [
          "嘉领物流是一家立足中国、充满活力与创新精神的物流企业。凭借多年行业实战经验，我们始终致力于为客户提供高效、可靠、可落地的物流解决方案。",
          "我们秉持“国际化、服务高效化、成本精细化”的经营理念，以客户需求为核心，持续提升服务品质与运营效率，并已与众多海内外合作伙伴建立长期稳定的协作关系。",
          "我们的服务：",
          "我们承接多元化物流业务，包括 DDU、DDP、FOB、C&F、Ex-work 等运输及贸易模式，服务覆盖美国、欧洲、非洲、中东及东南亚等重点市场。",
          "依托广泛的合作伙伴网络和专业能力，我们可根据不同行业与客户需求，提供灵活、高效、定制化的物流服务，帮助客户降低物流成本、提升供应链效率。",
          "我们的使命：",
          "通过专业服务与高效执行，持续为客户创造价值，成长为值得信赖的全球物流服务品牌。",
          "我们诚邀您携手合作，共同开拓全球物流更广阔的未来。"
        ]
      }
    },
    philosophy: {
      icon: "fa-compass",
      en: {
        title: "Service Philosophy",
        companyName: "Joined Link Logistics Co., Ltd.",
        lead: "",
        body: [
          "Built on Trust, Connected Globally",
          "Integrity is the foundation of our international logistics services. We provide transparent quotations, controllable timelines, and reliable execution throughout the entire process, helping customers overcome cross-border barriers and honoring every shipment entrusted to us.",
          "Efficient Cross-border Logistics, Time First",
          "Relying on a mature global network and deep cooperation with carriers and airlines, we use intelligent systems for real-time coordination, flexibly adapt to port dynamics, and reduce transit and customs clearance time to help customers seize global business opportunities.",
          "End-to-end Care, Safety First",
          "We provide customized protection plans for different cargo types, follow standardized operations throughout the shipment process, and combine global cargo insurance options to reduce cross-border transportation risks from every angle.",
          "Customized Service, Global Fit",
          "We reject one-size-fits-all solutions. From full-container ocean freight and LCL consolidation to air express and overseas warehouse delivery, we offer diversified solutions tailored to e-commerce, foreign trade, and different customer needs.",
          "Win-win Partnership, Linking the World",
          "We regard customers as global partners, deeply understand their business needs, and continuously upgrade our services in line with international logistics trends, working together to expand global markets and share the benefits of trade."
        ]
      },
      zh: {
        title: "服务理念",
        companyName: "深圳市嘉领物流有限公司",
        lead: "",
        body: [
          "以信立基，连通全球",
          "诚信是我们立足国际物流的根基，全流程报价透明、时效可控，以可靠服务打通跨境壁垒，不负每一份托付。",
          "高效跨境，时效为先",
          "依托全球成熟网络与航企深度合作，智能系统实时调度，灵活适配口岸动态，压缩中转清关时间，为您抢占国际商机。",
          "全程呵护，安全至上",
          "针对不同货物提供定制化防护方案，全流程标准化操作，搭配全球货运险，全方位规避跨境运输风险。",
          "定制服务，适配全球",
          "拒绝“一刀切”，提供整柜海运、散货拼箱、航空快递、海外仓配送等多元方案，适配电商、外贸等不同客户需求。",
          "携手共赢，链接世界",
          "视客户为全球伙伴，深入布局业务需求，紧跟国际物流趋势升级服务，与您共拓全球市场，共享贸易红利。"
        ]
      }
    },
    org: {
      icon: "fa-sitemap",
      en: {
        title: "Organization Structure",
        companyName: "Joined Link Logistics Co., Ltd.",
        lead: "",
        body: []
      },
      zh: {
        title: "组织架构",
        companyName: "深圳市嘉领物流有限公司",
        lead: "",
        body: []
      }
    },
    partners: {
      icon: "fa-handshake-o",
      en: {
        title: "Partners",
        companyName: "Joined Link Logistics Co., Ltd.",
        lead: "",
        body: [
          "Partnership is the foundation for stable logistics. We cooperate with shipping lines, airlines, trucking providers, warehouses, and overseas agents to support practical door to door plans."
        ]
      },
      zh: {
        title: "合作伙伴",
        companyName: "深圳市嘉领物流有限公司",
        lead: "",
        body: [
          "合作伙伴关系决定了跨境物流的持续执行能力。我们在不同地区与多家承运人、操作资源方及海外代理保持合作，以支持更稳定的舱位协调、节点交接与目的港服务。"
        ]
      }
    }
  };

  function currentLang() {
    return (document.documentElement.lang || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
  }

  function currentSectionKey() {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get("section") || "profile";
    } catch (e) {
      return "profile";
    }
  }

  function fillParagraphs(id, items, sectionKey) {
    const el = document.getElementById(id);
    el.innerHTML = "";
    el.className = sectionKey === "philosophy" ? "philosophy-copy" : "";
    items.forEach(function (item, index) {
      const p = document.createElement("p");
      if (sectionKey === "philosophy") {
        p.className = index % 2 === 0 ? "philosophy-title" : "philosophy-desc";
      } else if (sectionKey === "profile" && /^(Our Services:|Our Mission:|我们的服务：|我们的使命：)$/.test(item)) {
        p.className = "profile-section-title";
      }
      p.textContent = item;
      el.appendChild(p);
    });
  }

  function fillRelated(id, lang) {
    const el = document.getElementById(id);
    el.innerHTML = "";
    const activeKey = currentSectionKey();
    Object.keys(sections).forEach(function (key) {
      const section = sections[key];
      if (!section) return;
      const a = document.createElement("a");
      a.className = "service-related-link";
      if (key === activeKey) {
        a.className += " active";
      }
      a.href = "about-detail.html?section=" + key;
      a.innerHTML =
        '<span class="fa ' +
        section.icon +
        '" aria-hidden="true"></span><span>' +
        section[lang].title +
        "</span>";
      el.appendChild(a);
    });
  }

  function renderPartnerLogos(id, items, visible) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = "";
    el.style.display = visible ? "grid" : "none";

    if (!visible) {
      return;
    }

    items.forEach(function (item) {
      const card = document.createElement("div");
      card.className = "partner-logo-card";

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.name;
      img.loading = "lazy";

      card.appendChild(img);
      el.appendChild(card);
    });
  }

  function render() {
    const lang = currentLang();
    const key = currentSectionKey();
    const section = sections[key] || sections.profile;
    const data = section[lang];
    const copy = labels[lang];

    const breadcrumbHome = lang === "zh" ? "首页" : "Home";
    const breadcrumbAbout = lang === "zh" ? "关于我们" : "About Us";

    document.getElementById("about-detail-badge").textContent =
      breadcrumbHome + " / " + breadcrumbAbout + " / " + data.title;

    const companyNameEl = document.getElementById("about-company-name");
    if (companyNameEl) {
      if (key === "profile") {
        companyNameEl.style.display = "";
        companyNameEl.textContent =
          data.companyName ||
          (lang === "zh"
            ? "深圳市嘉领物流有限公司"
            : "Joined Link Logistics Co., Ltd.");
      } else {
        companyNameEl.style.display = "none";
      }
    }

    const profileImageEl = document.getElementById("about-profile-image");
    if (profileImageEl) {
      profileImageEl.style.display = key === "profile" ? "" : "none";
    }

    const structureImageEl = document.getElementById("about-structure-image");
    if (structureImageEl) {
      structureImageEl.style.display = key === "org" ? "block" : "none";
    }

    renderPartnerLogos("partner-logo-grid", partnerLogos, key === "partners");

    document.getElementById("about-related-title").textContent = copy.relatedTitle;
    fillParagraphs("about-overview-body", data.body || [], key);
    fillRelated("about-related-links", lang);
    document.title = data.title + " | Joined Link Logistics";
  }

  document.addEventListener("DOMContentLoaded", function () {
    render();
    document.querySelectorAll(".lang-link").forEach(function (link) {
      link.addEventListener("click", function () {
        window.requestAnimationFrame(render);
      });
    });
  });
})();
