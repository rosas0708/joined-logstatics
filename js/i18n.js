// Simple static site internationalization (i18n) support.
// Usage: add data-i18n="key" (or data-i18n-placeholder / data-i18n-title) to elements.
// Then define translation strings below.

(function () {
  const translations = {
    en: {
      title: "Joined Link Logistics | China Freight Forwarder & Global Logistics Services",
      title_home: "Joined Link Logistics | China Freight Forwarder & Global Logistics Services",
      title_about: "About Joined Link Logistics | Company Profile & Partners",
      title_services: "Logistics Services | Ocean Freight, Air Freight, Customs & Warehousing",
      title_contact: "Contact Joinedlink Logistics | China Freight Forwarding Support",
      title_gallery: "Logistics Gallery | Joinedlink Logistics Projects & Events",
      title_error: "Page Not Found | Joinedlink Logistics",
      gallery_title: "Our Gallery",
      gallery_image_alt: "Project image",
      gallery_popup_alt: "Popup image",
      error_heading: "404 - Page Not Found",
      error_subtitle: "Something Went Wrong",
      error_message: "Oops! The page you are looking for cannot be found",
      error_back: "Back To Home",
      nav_home: "Home",
      nav_about: "About Us",
      nav_services: "Services",
      nav_contact: "Contact",
      nav_subscribe: "Subscribe",
      nav_menu: "Menu",
      about_nav_profile: "Company Profile",
      about_nav_philosophy: "Service Philosophy",
      about_nav_org: "Organization Structure",
      about_nav_partners: "Partners",
      header_title: "Joined Link Logistics",
      top_contact_support: "Contact Support",
      top_helpline: "24/7 Helpline",
      banner_heading: "Shipping From China <br> To All Over The World",
      banner_cta: "Contact Us",
      carousel_img_1: "images/images_lib/home/C.png",
      carousel_title_1: "Reliable Logistics",
      carousel_desc_1: "We deliver your cargo safely and on time.",
      carousel_img_2: "images/images_lib/home/C.png",
      carousel_title_2: "Global Coverage",
      carousel_desc_2: "From China to the world, we connect your shipment everywhere.",
      about_page_title: "About Us",
      about_intro: "Joined Link Logistics Co., Ltd. is a dynamic logistics company rooted in China. With years of practical industry experience, our team is committed to delivering efficient, reliable, and practical logistics solutions for customers worldwide.",
      about_extra_1: "Guided by our philosophy of international vision, efficient service, and refined cost control, we focus on customer needs, strengthen execution, and continuously improve service quality. We have built long-term partnerships and stable logistics resources across domestic and overseas markets.",
      about_extra_2: "We handle diversified logistics business, including DDU, DDP, FOB, C&F, Ex-work and other trade and transport solutions. Our service network covers key markets such as the United States, Europe, Africa, the Middle East, and Southeast Asia. With broad partner resources and strong professional capabilities, we provide flexible and customized logistics support for different industries and shipping needs, including:",
      about_services_list: "A) Ocean Freight Forwarding of LCL, FCL, RO/RO, BULK vessel (door to door)<br/>B) Air Freight Forwarding (door to door)<br/>C) Consolidation<br/>D) Customs clearance and documentation service<br/>E) Local handling and Inland Transportation<br/>F) Project Cargo Handling<br/>G) Inspection and Cargo Insurance<br/>H) Transportation Network Planning and Optimization<br/>J) System wide Track & Trace/Internet Supply Chain Visibility<br/>K) Customs Brokerage and Licensing — Imports/Export<br/>L) Value-Added Warehousing, Inventory Control and Supplier Management<br/>M) Logistics solution<br/>",
      about_section_heading: "SHIPPING FROM CHINA TO ALL OVER THE WORLD",
      about_image_1: "images/images_lib/commercial/1.jpg",
      about_image_2: "images/images_lib/commercial/3.jpg",
      about_image_3: "images/images_lib/commercial/4.jpg",
      about_image_4: "images/images_lib/commercial/5.jpg",
      section_about_title: "Join Us at Global Logistics Exhibitions",
      section_about_body: "<p>At Joined Link Logistics, we are proud to participate in major logistics exhibitions around the world, showcasing our innovative solutions and expanding our global network. These events provide us with the perfect opportunity to connect with partners, customers, and industry leaders, while exchanging valuable insights and exploring new business opportunities.</p><p>We believe that collaboration and partnerships are key to driving success in the logistics industry. Our presence at these exhibitions reflects our commitment to strengthening relationships, enhancing our service offerings, and building a more connected global supply chain.</p><p>We welcome partners from all corners of the world to reach out to us for collaboration and business discussions. Whether you are seeking reliable logistics solutions or looking to expand your market reach, Joined Link Logistics is here to help you navigate the complexities of global trade with efficiency and precision.</p><p>Feel free to contact us to explore how we can work together and grow your business internationally.</p>",
      services_heading: "We Provide Safe & High-efficiency Shipping Services around the world",
      services_core_eyebrow: "Core Services",
      services_core_title: "Core Business Categories",
      services_core_intro: "Built around end-to-end international logistics from China, our core services cover major transport modes, customs support, warehousing coordination, and cargo protection solutions.",
      services_nav_eyebrow: "Service Navigation",
      services_nav_title: "Choose A Specific Service From The Navigation Menu",
      services_nav_intro: "This page now serves as the service navigation hub. Please move to the navigation bar, open the Services menu, and select the exact business category you want to view in detail.",
      service_sea_title: "Ocean Freight",
      service_sea_desc: "Ocean Freight Forwarding of LCL, FCL, RO/RO, Break Bulk vessel (door to door).",
      service_sea_detail: "Full-container, LCL, break bulk and project cargo solutions with booking coordination, schedule planning, and door to door execution support.",
      service_air_title: "Air Freight",
      service_air_desc: "Air Freight Forwarding (door to door).",
      service_air_detail: "Fast air export solutions for urgent, high-value or time-sensitive cargo, including routing support for special goods and major airport departures.",
      service_rail_title: "Rail Freight",
      service_rail_desc: "Rail Freight services.",
      service_rail_detail: "Cross-border rail options that balance transit time and cost, ideal for multimodal transport planning and Eurasian cargo corridors.",
      service_container_title: "Container Services",
      service_container_desc: "Full container load (FCL) and less than container load (LCL) options.",
      service_container_detail: "Standard, high-cube and other suitable container equipment matched to your cargo type, loading plan and shipment volume.",
      service_drayage_title: "Drayage & Trucking",
      service_drayage_desc: "Flexible drayage and first/last mile trucking services.",
      service_drayage_detail: "Flexible first-mile and last-mile transport between ports, yards, warehouses and final delivery points to reduce handoff delays.",
      service_customs_title: "Customs Clearance",
      service_customs_desc: "Customs clearance for export and import.",
      service_customs_detail: "Export and import declaration support, document review and compliance coordination to help cargo clear customs more smoothly.",
      service_warehousing_title: "Warehousing and Storage",
      service_warehousing_desc: "We can collect the goods in our warehouse and do consolidation.",
      service_warehousing_detail: "Cargo receiving, temporary storage, consolidation, labeling and shipment staging services for better supplier and order coordination.",
      service_special_title: "Special Containers",
      service_special_desc: "Temperature-controlled, open-top and other special containers.",
      service_special_detail: "Open-top, flat-rack, reefer and other special container arrangements for oversized, irregular or temperature-sensitive cargo.",
      service_dg_title: "Dangerous Goods",
      service_dg_desc: "Hazardous materials declaration and safe handling.",
      service_dg_detail: "Dangerous goods declaration, packing review and transport arrangement handled according to shipment needs and carrier requirements.",
      service_insurance_title: "Insurance",
      service_insurance_desc: "We can help to buy insurance for all the shipments.",
      service_insurance_detail: "Cargo insurance planning that adds protection against transit loss, damage and unexpected logistics incidents.",
      service_view_more: "View Details",
      choose_title: "Our Core Services",
      choose_title_1: "Dedicated to safe, efficient transport of all cargo worldwide",
      home_map_title: "Global Service Network",
      home_map_desc: "Connected to major ports and inland hubs across the globe—providing seamless door to door logistics for all-sized shipments.",
      home_map_point_1: "Global coverage from Asia to Americas",
      home_map_point_2: "Ocean, air, rail, & land transport",
      home_map_point_3: "Secure handling & customs support",
      route_map_eyebrow: "Global Route Visibility",
      route_map_title: "Joined Link Logistics Global Service Network",
      route_map_desc: "Centered on China, the map shows direct route links to key countries across North America, Western Africa, Europe, Southeast Asia, the Middle East, and South America.",
      route_map_tag_1: "China-to-country route links",
      route_map_tag_2: "Coverage across six key regions",
      route_map_tag_3: "Dynamic global route display",
      route_legend_north_america: "North America",
      route_legend_west_africa: "West Africa",
      route_legend_europe: "Europe",
      route_legend_southeast_asia: "Southeast Asia",
      route_legend_middle_east: "Middle East",
      route_legend_south_america: "South America",
      home_partners_title: "Partners",
      home_partners_desc: "Joined Link Logistics maintains cooperative relationships with major shipping lines including MSK, COSCO, EMC, HPL, PIL, OOCL, ONE, CMA, WHL, MSC, YML, TSL, ESL and so on. We also work closely with long-term airline partners such as CX, CV, RU, QR, ET, TK, EK, CZ, CA, and PO. Through strong alliances and our NVOCC Class-A freight forwarding qualification, we provide customers with more stable and competitive logistics support.",
      choose_subtext: "<p>Joined Link Logistics is a dynamic logistics company rooted in China. With years of practical industry experience, our team is committed to delivering efficient, reliable, and practical logistics solutions for customers worldwide.</p><p>Guided by our philosophy of international vision, efficient service, and refined cost control, we focus on customer needs, strengthen execution, and continuously improve service quality. We have built long-term partnerships and stable logistics resources across domestic and overseas markets.</p><h1><strong>Our Services:</strong></h1><p>We handle diversified logistics business, including DDU, DDP, FOB, C&amp;F, Ex-work and other trade and transport solutions, with service coverage across the United States, Europe, Africa, the Middle East, and Southeast Asia.</p><p>With an extensive partner network and strong professional capabilities, we provide flexible and customized logistics support for different industries and shipment needs, helping customers reduce logistics costs and improve supply chain efficiency.</p><h1><strong>Our Mission:</strong></h1><p>To create lasting value for customers through professional service and efficient execution, and grow into a trusted global logistics service brand.</p><p>We welcome you to work with us and build a broader future in global logistics.</p>",
      shipping_heading: "WE ARE READY TO ASSIST YOU FOR ALL KINDS OF SHIPMENT",
      shipping_body: "Joined Link Logistics is a young and dynamic logistics company in China, but our team all have several years of experience in the logistics area. Our business philosophy is: pattern internationalization, service efficiency, and cost refinement. We have established long-term cooperation and win-win strategic partnerships with many partners from all over the world. They have deep and extensive industry contacts and channel systems at home and abroad. They provide DDUs, DDUs, etc. in Hong Kong, Guangzhou, Shenzhen, and exports to Africa, Middle East, South East Asia, Europe and the USA.",
      blog_quote: "Our goal is to continue to build an organization that challenges traditional supply chain methodology. Through the use of state of the art technology and a team of client advocates, we are dedicated to putting our clients first, creating innovative global transportation and logistics services that are efficiently and cost-effectively addressing our client’s challenges. Our vision is to become the leader in providing our customers the best logistics services.",
      blog_author: "----------Denny Liu (Managing Director)",
      blog_card1_title: "Air Shipping Cargo Transport",
      blog_card1_text: "We can ship the cargo from all the ports in China by air. For some special cargo with batteries or with liquid/powder, we can ship it from Hongkong airport.",
      blog_card2_title: "Sea Shipping Cargo Transport",
      blog_card2_text: "Our sea shipping services include FCL and LCL. If you have several suppliers, we can collect your goods together and ship to your side with one shipment.",
      blog_card_more: "Click More",
      contact_heading: "Get In Touch",
      contact_send_message: "Send us a message",
      contact_fullname: "Full name",
      contact_subject: "Subject",
      contact_email: "mail@example.com",
      contact_phone: "Phone number",
      contact_message: "Message",
      contact_send_button: "Send",
      contact_info_title: "Contact Information",
      contact_info_body: "Please feel free to contact us if you need to ship anything from China.",
      contact_address: "Luohu District, Shenzhen, China",
      footer_top_title: "Contact Us",
      footer_top_body: "Call us, we are 24/7 Helpline",
      footer_who_we_are: "Who we are",
      footer_who_we_are_body: "Joined Link Logistics Co., Ltd. is a leading logistics company located in Shenzhen, China. We ship goods from China to worldwide destinations by air and sea. We have an experienced and powerful team to support you.",
      footer_useful_links: "Useful Links",
      footer_terms: "Terms & Conditions",
      footer_privacy: "Privacy Policy",
      footer_subscribe: "Subscribe",
      footer_subscribe_body: "By subscribing to our mailing list you will get latest news and updates from us.",
      footer_subscribe_placeholder: "Enter your email...",
      collect_from: "Collect from <a href=\"http://www.cssmoban.com/\" title=\"网站模板\">网站模板</a>",
      footer_copyright: "Copyright © 2019. Company name All rights reserved by Joined Link Logistics Co., Ltd. 深圳市嘉领物流有限公司",
      qr_open: "Customer Service",
      qr_title: "Customer Service",
      qr_desc: "Scan to contact us",
      qr_alt: "QR Code",
      qr_image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='200' height='200' fill='%23eee'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23999'>QR</text></svg>",
      lang_en: "EN",
      lang_zh: "CH",
    },
    zh: {
      title: "嘉领物流 | 中国货运代理与全球物流服务",
      title_home: "嘉领物流 | 中国货运代理与全球物流服务",
      title_about: "关于嘉领物流 | 公司简介与合作伙伴",
      title_services: "物流服务 | 海运、空运、报关与仓储服务",
      title_contact: "联系嘉领物流 | 中国货运代理服务支持",
      title_gallery: "物流图库 | 嘉领物流项目与活动展示",
      title_error: "页面未找到 | 嘉领物流",
      gallery_title: "我们的画廊",
      gallery_image_alt: "项目图片",
      gallery_popup_alt: "弹窗图片",
      error_heading: "404 - 页面未找到",
      error_subtitle: "出了点问题",
      error_message: "抱歉！您要访问的页面无法找到",
      error_back: "返回首页",
      nav_home: "首页",
      nav_about: "关于我们",
      nav_services: "主营业务",
      nav_contact: "联系我们",
      nav_subscribe: "订阅",
      nav_menu: "菜单",
      about_nav_profile: "公司简介",
      about_nav_philosophy: "服务理念",
      about_nav_org: "组织架构",
      about_nav_partners: "合作伙伴",
      header_title: "深圳市嘉领物流有限公司",
      top_contact_support: "联系支持",
      top_helpline: "24/7 客服热线",
      banner_heading: "从中国出发<br>覆盖全球",
      banner_cta: "联系我们",
      carousel_img_1: "images/images_lib/home/C.png",
      carousel_title_1: "可靠物流",
      carousel_desc_1: "我们将您的货物安全、准时送达。",
      carousel_img_2: "images/images_lib/home/C.png",
      carousel_title_2: "全球覆盖",
      carousel_desc_2: "从中国到世界，我们连接每一段运输。",
      about_page_title: "关于我们",
      about_intro: "嘉领物流是一家立足中国、充满活力与创新精神的物流企业。凭借多年行业实战经验，我们始终致力于为客户提供高效、可靠、可落地的物流解决方案。",
      about_extra_1: "我们秉持“国际化、服务高效化、成本精细化”的经营理念，以客户需求为核心，持续提升服务品质与运营效率，并已与众多海内外合作伙伴建立长期稳定的协作关系。",
      about_extra_2: "我们承接多元化物流业务，包括 DDU、DDP、FOB、C&F、Ex-work 等运输及贸易模式，服务覆盖美国、欧洲、非洲、中东及东南亚等重点市场。依托广泛的合作伙伴网络和专业能力，我们可根据不同行业与客户需求，提供灵活、高效、定制化的物流服务，包括：",
      about_services_list: "A）海运拼箱/整箱/滚装/散杂货（门到门）<br/>B）空运（门到门）<br/>C）拼箱集运<br/>D）清关与单证服务<br/>E）本地操作与内陆运输<br/>F）项目货物处理<br/>G）检验与货运保险<br/>H）运输网络规划与优化<br/>J）全流程追踪与供应链可视化<br/>K）报关代理与进出口许可<br/>L）增值仓储、库存控制与供应商管理<br/>M）物流解决方案<br/>",
      about_section_heading: "从中国出发，服务全球",
      about_image_1: "images/images_lib/commercial/1.jpg",
      about_image_2: "images/images_lib/commercial/3.jpg",
      about_image_3: "images/images_lib/commercial/4.jpg",
      about_image_4: "images/images_lib/commercial/5.jpg",
      section_about_title: "加入我们的全球物流展会之旅",
      section_about_body: "<p>在嘉领物流，我们积极参与全球各大物流展会，展示创新解决方案并不断拓展国际网络。这些活动为我们提供了与合作伙伴、客户及行业领袖建立联系的宝贵机会，也让我们能够交流前沿洞察、探索更多业务合作可能。</p><p>我们始终相信，协作与伙伴关系是推动物流行业持续成功的关键。持续参与这些展会，体现了我们在巩固合作关系、提升服务能力以及建设更紧密全球供应链方面的长期承诺。</p><p>我们欢迎来自世界各地的合作伙伴与我们联系，开展合作洽谈与业务交流。无论您是在寻找可靠的物流解决方案，还是希望进一步拓展国际市场，嘉领物流都将以高效、专业、精准的服务，协助您应对全球贸易中的各类挑战。</p><p>欢迎随时联系我们，一起探索如何携手合作，推动您的业务在国际市场持续成长。</p>",
      services_heading: "我们为全球客户提供高效、安全的运输服务",
      services_core_eyebrow: "核心业务",
      services_core_title: "主营业务分类",
      services_core_intro: "围绕从中国出发的端到端国际物流需求，我们的核心业务覆盖主要运输方式、报关支持、仓储协同以及货物保障等关键环节。",
      services_nav_eyebrow: "服务导航",
      services_nav_title: "请从导航栏的服务菜单中选择具体业务",
      services_nav_intro: "当前服务页作为业务导航入口使用。请在顶部导航栏中打开“服务”下拉菜单，直接选择你想查看的具体业务详情。",
      service_sea_title: "海运服务",
      service_sea_desc: "提供拼箱、整箱、滚装、散杂货船运输（门到门）。",
      service_sea_detail: "提供整箱、拼箱、散杂货及项目货运输方案，涵盖订舱协调、船期规划与门到门执行支持。",
      service_air_title: "空运服务",
      service_air_desc: "提供空运服务（门到门）。",
      service_air_detail: "面向时效要求高、货值高或紧急出运货物提供快速空运方案，并支持特殊货物航线安排及主要机场出运。",
      service_rail_title: "铁路运输",
      service_rail_desc: "提供铁路运输服务。",
      service_rail_detail: "提供兼顾时效与成本的跨境铁路运输方案，适用于多式联运规划及欧亚通道货物运输。",
      service_container_title: "集装箱服务",
      service_container_desc: "提供整箱和拼箱的集装箱服务。",
      service_container_detail: "根据货物属性、装载方案及出货体量匹配标准箱、高箱及其他适配箱型，提升运输效率与安全性。",
      service_drayage_title: "拖车/短驳服务",
      service_drayage_desc: "提供灵活的拖车与头程/尾程运输服务。",
      service_drayage_detail: "提供港口、堆场、仓库与收货地之间灵活的头程和尾程运输服务，减少节点交接延误。",
      service_customs_title: "报关服务",
      service_customs_desc: "提供进出口报关服务。",
      service_customs_detail: "提供进出口申报、单证审核与合规协调支持，帮助货物更加顺畅地完成清关流程。",
      service_warehousing_title: "仓储服务",
      service_warehousing_desc: "我们可在仓库接收货物并进行拼箱。",
      service_warehousing_detail: "提供收货、暂存、集货、贴标及出运前备货服务，帮助多供应商订单实现更高效协同。",
      service_special_title: "特种箱服务",
      service_special_desc: "提供温控、敞顶等特种箱运输服务。",
      service_special_detail: "可安排开顶箱、框架箱、冷藏箱等特种箱型，满足超尺寸、异形或温控货物运输需求。",
      service_dg_title: "危品申报",
      service_dg_desc: "危险品申报与安全处理服务。",
      service_dg_detail: "根据货物属性及承运要求，提供危险品申报、包装审核及运输安排等配套支持。",
      service_insurance_title: "保险服务",
      service_insurance_desc: "可协助为所有货物购买运输保险。",
      service_insurance_detail: "提供货运保险规划服务，为运输过程中的货损、货差及突发物流风险增加保障。",
      service_view_more: "查看详情",
      choose_title: "主营业务",
      choose_title_1: "致力于全球各类货物安全高效运输",
      home_map_title: "嘉领物流全球服务网",
      home_map_desc: "连接全球主要港口与内陆枢纽，提供无缝门到门物流服务，覆盖各类货物运输需求。",
      home_map_point_1: "覆盖亚太、美洲等核心市场",
      home_map_point_2: "海运、空运、铁路与陆运一体化",
      home_map_point_3: "安全专业的报关与货物保障",
      route_map_eyebrow: "Global Route Visibility",
      route_map_title: "嘉领物流全球服务网",
      route_map_desc: "以中国为核心出发点，连线北美、西非、欧洲、东南亚、中东及南美重点国家，直观展示全球国家级航线覆盖能力。",
      route_map_tag_1: "中国直连重点国家",
      route_map_tag_2: "六大区域航线覆盖",
      route_map_tag_3: "全球动态航线示意",
      route_legend_north_america: "北美",
      route_legend_west_africa: "西非",
      route_legend_europe: "欧洲",
      route_legend_southeast_asia: "东南亚",
      route_legend_middle_east: "中东",
      route_legend_south_america: "南美",
      home_partners_title: "合作伙伴",
      home_partners_desc: "嘉领物流与多家船公司MSK、COSCO、EMC、HPL、PIL、OOCL、ONE、CMA、WHL、MSC、YML、TSL、ESL等有合作关系。以及与CX、CV、RU、QR、ET、TK、EK、CZ、CA、PO等航线长期合作，强强联合，更具有NVOCC一级货运代理资格！",
      choose_subtext: "<p>嘉领物流是一家立足中国、充满活力与创新精神的物流企业。凭借多年行业实战经验，我们始终致力于为客户提供高效、可靠、可落地的物流解决方案。</p><p>我们秉持“国际化、服务高效化、成本精细化”的经营理念，以客户需求为核心，持续提升服务品质与运营效率，并已与众多海内外合作伙伴建立长期稳定的协作关系。</p><h1><strong>我们的服务：</strong></h1><p>我们承接多元化物流业务，包括 DDU、DDP、FOB、C&amp;F、Ex-work 等运输及贸易模式，服务覆盖美国、欧洲、非洲、中东及东南亚等重点市场。</p><p>依托广泛的合作伙伴网络和专业能力，我们可根据不同行业与客户需求，提供灵活、高效、定制化的物流服务，帮助客户降低物流成本、提升供应链效率。</p><h1><strong>我们的使命：</strong></h1><p>通过专业服务与高效执行，持续为客户创造价值，成长为值得信赖的全球物流服务品牌。</p><p>我们诚邀您携手合作，共同开拓全球物流更广阔的未来。</p>",
      shipping_heading: "我们随时为各类货物运输提供支持",
      shipping_body: "嘉领物流是一家年轻而充满活力的中国物流公司，我们的团队拥有多年物流行业经验。我们的经营理念是：国际化布局、服务高效、成本精细化。我们与来自世界各地的合作伙伴建立了长期合作与互利共赢的战略关系，拥有国内外深厚的行业资源与渠道体系，在香港、广州、深圳等地提供DDU/DDP等服务，并面向非洲、中东、东南亚、欧洲及美国等地区开展出口业务。",
      blog_quote: "我们的目标是持续打造一个敢于挑战传统供应链方式的组织。通过先进技术与客户倡导团队，我们坚持以客户为先，提供创新的全球运输与物流服务，以更高效率和更优成本解决客户挑战。我们的愿景是成为为客户提供最佳物流服务的行业领导者。",
      blog_author: "——刘丹尼（总经理）",
      blog_card1_title: "空运货物运输",
      blog_card1_text: "我们可从中国各港口空运货物。对于带电、液体或粉末等特殊货物，可安排从香港机场出运。",
      blog_card2_title: "海运货物运输",
      blog_card2_text: "我们的海运服务包含整箱FCL、拼箱LCL。如您有多个供应商，我们可集中收货并一次性发运到您所在地。",
      blog_card_more: "查看更多",
      contact_heading: "联系我们",
      contact_send_message: "给我们留言",
      contact_fullname: "姓名",
      contact_subject: "主题",
      contact_email: "邮箱地址",
      contact_phone: "电话号码",
      contact_message: "留言内容",
      contact_send_button: "发送",
      contact_info_title: "联系方式",
      contact_info_body: "如需从中国发货，欢迎随时联系我们。",
      contact_address: "中国深圳市罗湖区",
      footer_top_title: "联系我们",
      footer_top_body: "请致电，我们提供24小时服务",
      footer_who_we_are: "关于我们",
      footer_who_we_are_body: "嘉领物流有限公司位于中国深圳，是一家领先的物流企业。我们提供从中国到全球各地的空运与海运服务，并拥有经验丰富的团队为您支持。",
      footer_useful_links: "常用链接",
      footer_terms: "条款与条件",
      footer_privacy: "隐私政策",
      footer_subscribe: "订阅",
      footer_subscribe_body: "订阅我们的邮件列表，获取最新动态与资讯。",
      footer_subscribe_placeholder: "输入您的邮箱...",
      collect_from: "模板来源：<a href=\"http://www.cssmoban.com/\" title=\"网站模板\">网站模板</a>",
      footer_copyright: "版权所有 © 2019。Joined Link Logistics Co., Ltd. 深圳市嘉领物流有限公司 保留所有权利。",
      qr_open: "客服",
      qr_title: "客服",
      qr_desc: "扫码联系我们",
      qr_alt: "二维码",
      qr_image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='200' height='200' fill='%23eee'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23999'>QR</text></svg>",
      lang_en: "EN",
      lang_zh: "CH",
    },
  };

  const storageKey = "siteLanguage";

  function getLangFromUrl() {
    try {
      const params = new URLSearchParams(window.location.search);
      const lang = params.get("lang");
      if (lang && translations[lang]) {
        return lang;
      }
    } catch (e) {
      // ignore invalid URLs
    }
    return null;
  }

  function getSavedLanguage() {
    const urlLang = getLangFromUrl();
    if (urlLang) {
      return urlLang;
    }

    const saved = localStorage.getItem(storageKey);
    if (saved && translations[saved]) {
      return saved;
    }

    const navLang = navigator.language || navigator.userLanguage || "en";
    return navLang.toLowerCase().startsWith("zh") ? "zh" : "en";
  }

  function updateImages(langDict) {
    document.querySelectorAll("[data-i18n-src]").forEach((el) => {
      const key = el.getAttribute("data-i18n-src");
      if (!key) return;
      const value = langDict[key];
      if (!value) return;
      el.setAttribute("src", value);
    });

    document.querySelectorAll("[data-i18n-srcset]").forEach((el) => {
      const key = el.getAttribute("data-i18n-srcset");
      if (!key) return;
      const value = langDict[key];
      if (!value) return;
      el.setAttribute("srcset", value);
    });
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;

    document.documentElement.lang = lang;

    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      const titleKey = titleEl.getAttribute("data-i18n");
      const titleValue = dict[titleKey] || dict.title;
      if (titleValue) {
        titleEl.textContent = titleValue;
      }
    } else {
      document.title = dict.title || document.title;
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      // Skip <title> because handled above
      if (el.tagName.toLowerCase() === "title") return;
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const value = dict[key];
      if (value === undefined) return;
      el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      const value = dict[key];
      if (value === undefined) return;
      el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (!key) return;
      const value = dict[key];
      if (value === undefined) return;
      el.setAttribute("title", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (!key) return;
      const value = dict[key];
      if (value === undefined) return;
      el.setAttribute("alt", value);
    });

    updateImages(dict);

    document.querySelectorAll(".lang-link").forEach((link) => {
      const linkLang = link.getAttribute("data-lang");
      if (!linkLang) return;
      link.classList.toggle("active-lang", linkLang === lang);
    });
  }

  function setLanguage(lang, options = {}) {
    if (!translations[lang]) return;

    const scrollPos = window.scrollY || window.pageYOffset || 0;

    localStorage.setItem(storageKey, lang);
    applyTranslations(lang);

    if (options.updateUrl !== false) {
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", lang);
        window.history.replaceState({}, "", url.toString());
      } catch (e) {
        // ignore
      }
    }

    // Preserve scroll position when text size/length changes
    window.requestAnimationFrame(() => {
      window.scrollTo(0, scrollPos);
    });
  }

  function handleLangClick(event) {
    const target = event.currentTarget;
    const lang = target.getAttribute("data-lang");
    if (!lang) return;
    event.preventDefault();
    setLanguage(lang);
  }

  function init() {
    const lang = getSavedLanguage();
    applyTranslations(lang);

    document.querySelectorAll(".lang-link").forEach((link) => {
      link.addEventListener("click", handleLangClick);
    });

    // Handle carousel and QR modal triggers
    document.querySelectorAll("[data-carousel-prev]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const carousel = btn.closest("[data-carousel]");
        if (carousel) rotateCarousel(carousel, -1);
      });
    });
    document.querySelectorAll("[data-carousel-next]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const carousel = btn.closest("[data-carousel]");
        if (carousel) rotateCarousel(carousel, 1);
      });
    });

    document.querySelectorAll("[data-qr-open]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const target = btn.getAttribute("data-qr-open") || "qr-modal";
        openQrModal(target);
      });
    });

    document.querySelectorAll("[data-qr-close]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        closeQrModal();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeQrModal();
      }
    });
  }

  function rotateCarousel(container, direction) {
    const slides = Array.from(container.querySelectorAll("[data-carousel-slide]"));
    if (!slides.length) return;
    const activeIndex = slides.findIndex((slide) => slide.classList.contains("active"));
    let nextIndex = activeIndex + direction;
    if (nextIndex < 0) nextIndex = slides.length - 1;
    if (nextIndex >= slides.length) nextIndex = 0;
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === nextIndex);
    });
  }

  function openQrModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeQrModal() {
    const modal = document.getElementById("qr-modal");
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }

  document.addEventListener("DOMContentLoaded", init);

  window.setSiteLanguage = setLanguage;
})();
