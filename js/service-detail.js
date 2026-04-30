(function () {
  const labels = {
    en: {
      overview: "Service Overview",
      scope: "Service Scope",
      routes: "Main Routes",
      advantages: "Service Advantages"
    },
    zh: {
      overview: "业务介绍",
      scope: "服务范围",
      routes: "主要航线",
      advantages: "服务优势"
    }
  };

  const overviewSectionLabels = {
    en: ["Service Positioning", "Operational Support", "Key Strengths"],
    zh: ["服务定位", "操作支持", "核心亮点"]
  };

  const services = {
    sea: {
      icon: "fa-ship",
      image: "images/images_lib/services/sea.png",
      related: ["container", "customs", "insurance"],
      en: {
        badge: "Core Service Detail",
        title: "Ocean Freight",
        lead: "Ocean freight forwarding remains one of our core logistics services, covering FCL, LCL, RO/RO, break bulk vessel and selected door to door shipment arrangements from China to major overseas markets.",
        overview: [
          "Our ocean freight service covers FCL, LCL, RO/RO and break bulk shipments from major China ports. We support booking, schedule follow-up, customs coordination, marine insurance and destination-side delivery arrangements, giving customers clearer control over regular export cargo and long-term route planning."
        ],
        scope: [
          "FCL, LCL, RO/RO, break bulk vessel and selected port to port, port to door, door to port and door to door ocean freight arrangements",
          "Booking, SO follow-up, container loading coordination, shipping schedule tracking, bill of lading support and export document matching",
          "Linked services including trucking, warehouse receiving, cargo consolidation, customs declaration, inspection, fumigation and marine insurance",
          "Support for regular export cargo, supplier-consolidated cargo, project cargo and shipments requiring practical coordination across several logistics stages"
        ],
        routes: [
          "North America: USA, Canada, Mexico",
          "Western Africa: Ghana, Nigeria, Ivory Coast, Benin",
          "Europe: United Kingdom, France, Germany, Netherlands, Belgium, Italy, Spain, Poland",
          "Southeast Asia: Thailand, Malaysia, Indonesia, Philippines, Laos, Vietnam, Singapore",
          "Middle East: Jordan, Iraq, UAE, Iran, Saudi Arabia, Qatar, Kuwait",
          "South America: Brazil, Argentina, Peru, Venezuela, Colombia"
        ],
        advantages: [
          "Channel stability across North America, Western Africa, Europe, Southeast Asia, the Middle East and South America, making long-term shipments easier to arrange steadily",
          "Long-term cooperation with major carriers gives us more practical route choices and steadier booking coordination for routine export cargo"
        ],
        scenarios: [
          "Regular export shipments and repeat cargo orders from China factories and trading companies",
          "Orders moving to our advantage markets such as USA, Canada, Mexico, Ghana, Nigeria, Ivory Coast, Benin, United Kingdom, France, Germany, Netherlands, Belgium, Italy, Spain, Poland, Thailand, Malaysia, Indonesia, Philippines, Laos, Vietnam, Singapore, Jordan, Iraq, UAE, Iran, Saudi Arabia, Qatar, Kuwait, Brazil, Argentina, Peru, Venezuela and Colombia",
          "Cargo where customers want clearer business scope, more specific route support and cost-effective ocean freight planning from China origin to overseas destination"
        ],
        sideTitle: "Why Choose This Service",
        sideCopy: "Sea freight creates value when booking, cargo readiness and loading execution are managed early. We help make the plan realistic before the vessel cutoff becomes a problem.",
        relatedTitle: "Related Services",
        contactTitle: "Talk With Our Team",
        contactCopy: "If you need a practical sea freight quotation, container plan or route suggestion, we can help review the shipment with you.",
        contactBtn: "Contact Us"
      },
      zh: {
        badge: "主营业务详情",
        title: "海运服务",
        lead: "海运货代仍然是我们最核心的物流服务之一，可承接整箱、拼箱、滚装、散杂货船及部分门到门运输安排，服务中国出口至全球主要市场的客户。",
        overview: [
          "海运是我们核心物流服务之一，主要承接整箱、拼箱、滚装、散杂货船及部分门到门运输。可从中国主要港口安排出口，并配合订舱、船期跟踪、报关、保险及尾程派送等操作，适合常规出口货和长期发货客户。"
        ],
        scope: [
          "承接整箱、拼箱、滚装、散杂货船以及港到港、港到门、门到门、门到港、门到站、港到站、站到门、站到港、站到站运输安排",
          "提供订舱、SO跟进、装柜协调、船期跟踪、提单衔接及出口单证支持",
          "可联动拖车、仓储收货、集货、报关、商检、熏蒸、海运保险等配套服务",
          "支持常规出口货、多供应商集货订单、项目货以及需要多环节衔接的海运业务"
        ],
        routes: [
          "北美：美国、加拿大、墨西哥",
          "西非：加纳、尼日利亚、科特迪瓦、贝宁",
          "欧洲：英国、法国、德国、荷兰、比利时、意大利、西班牙、波兰",
          "东南亚：泰国、马来西亚、印度尼西亚、菲律宾、老挝、越南、新加坡",
          "中东：约旦、伊拉克、阿联酋、伊朗、沙特、卡塔尔、科威特",
          "南美：巴西、阿根廷、秘鲁、委内瑞拉、哥伦比亚"
        ],
        advantages: [
          "渠道稳定，北美、西非、欧洲、东南亚、中东和南美等市场都有较成熟的海运服务基础，长期发货更便于保持稳定安排",
          "专业清关，可支持双清包税，团队更熟悉英国、美国、加拿大及欧洲市场清关流程与规则",
          "时效相对稳定，可衔接报关出口、目的港清关、进仓以及尾程派送整体流程",
          "尾程派送灵活，可结合自建海外仓安排卡派、快递派送及热门仓库预约专车配送"
        ],
        scenarios: [
          "中国工厂、贸易公司及长期有出口需求客户的常规海运出货",
          "发往美国、加拿大、墨西哥、加纳、尼日利亚、科特迪瓦、贝宁、英国、法国、德国、荷兰、比利时、意大利、西班牙、波兰、泰国、马来西亚、印度尼西亚、菲律宾、老挝、越南、新加坡、约旦、伊拉克、阿联酋、伊朗、沙特、卡塔尔、科威特、巴西、阿根廷、秘鲁、委内瑞拉、哥伦比亚等优势市场的货物",
          "需要英国、美国、加拿大、欧洲等专线渠道、双清包税或海外仓尾程派送支持的订单",
          "希望把承运方式、业务范围、优势航线和出口配套服务一次梳理清楚的海运订单"
        ],
        sideTitle: "为什么选择这项服务",
        sideCopy: "海运服务不只是订一个舱位，更关键的是把承运方式、业务范围、航线和配套操作在前期梳理清楚，后面执行才更稳。",
        relatedTitle: "相关服务",
        contactTitle: "联系业务团队",
        contactCopy: "如果你需要更具体的海运报价、优势航线建议、承运方式选择或业务范围评估，我们可以结合货物情况一起梳理。",
        contactBtn: "联系我们"
      }
    },
    air: {
      icon: "fa-plane",
      image: "images/images_lib/services/air.png",
      related: ["customs", "insurance", "dg"],
      en: {
        badge: "Core Service Detail",
        title: "Air Freight",
        lead: "Air freight is designed for urgent, high-value and time-sensitive cargo that cannot wait for the longer transit time of ocean shipping.",
        overview: [
          "Our air freight service supports urgent cargo, high-value goods, e-commerce cargo and selected special shipments. We can arrange airport booking, customs coordination, pickup, warehousing and destination delivery support from major China gateways for customers needing faster and more controlled export transport."
        ],
        scope: [
          "Economy air freight services from major China airport gateways",
          "Multimodal solutions linking air, sea and land transport",
          "Pickup, booking, import and export customs clearance, declaration, inspection, airport operation and inland transfer supervision support",
          "Packaging, warehousing, distribution and selected bonded or special cargo transport services"
        ],
        routes: [
          "Domestic gateways: Beijing, Shanghai, Tianjin, Guangzhou, Wuhan, Qingdao, Shenzhen, Xiamen, Hong Kong",
          "Airline and capacity resources include CX, CV, 5Y, KZ, OZ, KE, BR and major airport lanes such as LAX, JFK, ORD, CVG, MIA, ATL, BOS and DFW",
          "Route coverage: Europe, North America, Central and South America, Southeast Asia, Australia and the Middle East"
        ],
        advantages: [
          "Mature airfreight supply chain with more than 30 routes via Shenzhen and Hong Kong to worldwide destinations",
          "Long-term cooperation with domestic and international logistics companies and airlines, with stronger route coordination and space support",
          "Able to handle oversized cargo, heavy cargo, dangerous goods, power banks, pure batteries, e-cigarettes, balance scooters and other special shipments",
          "One-to-one tailored customs clearance planning for shipments with stronger timing or compliance requirements",
          "Established cargo packaging, checking and transport service systems for better execution quality"
        ],
        scenarios: [
          "Samples, consumer electronics, accessories and replacement parts",
          "Orders facing delivery penalties, launch deadlines or urgent customer commitments",
          "Cargo where speed and schedule reliability carry more value than lowest freight cost"
        ],
        sideTitle: "Why Choose This Service",
        sideCopy: "Air freight works best when timing, documents and cargo acceptance are lined up before handoff. We help reduce surprises at the airport stage.",
        relatedTitle: "Related Services",
        contactTitle: "Talk With Our Team",
        contactCopy: "If you need urgent flight planning, airport coordination or a realistic air freight comparison, we can help assess the shipment.",
        contactBtn: "Contact Us"
      },
      zh: {
        badge: "主营业务详情",
        title: "空运服务",
        lead: "空运适用于对交付时间高度敏感的货物，特别是无法等待海运周期、又希望尽快完成国际运输的紧急订单。",
        overview: [
          "空运服务适合紧急货、高货值货、电商货及部分特殊货物运输。可依托国内主要空港安排订舱出运，并配合提货、报关、清关、仓储及尾程配送等操作，适合对时效、仓位保障和运输稳定性要求较高的出口订单。"
        ],
        scope: [
          "提供经济航空运输服务",
          "提供空、海、陆多式联运服务",
          "提供提货、订舱、进出口清关、报关、商检、机场运营及陆空联运监管服务",
          "提供吊挂、特殊及保税货物运输服务",
          "提供货物包装、仓储、配送等相关配套服务"
        ],
        routes: [
          "国内网点包括：北京、上海、天津、广州、武汉、青岛、深圳、厦门、香港，海外代理机构遍布全球",
          "航司及仓位资源包括：CX、CV、5Y、KZ、OZ、KE、BR，以及LAX、JFK、ORD、CVG、MIA、ATL、BOS、DFW等全货机固定位收货",
          "可承接大货、泡货、超尺寸货、电商小包等对时效和仓位要求较高的货物",
          "服务范围覆盖：欧洲、北美及中南美洲、东南亚、澳洲、中东等地区"
        ],
        advantages: [
          "成熟的供应链资源，可依托深圳、香港等口岸提供30多条航线出运安排",
          "与国内外多家物流企业及航空公司长期合作，具备更稳定的航线协调和仓位保障能力",
          "除普货外，也可承接超大件、超重货、危险品、移动电源、纯电池、电子烟、平衡车等特殊货物",
          "可提供一对一清关方案，兼顾时效、成本及个性化运输需求",
          "具备较成熟的包装检测体系和运输服务体系，整体执行更完整"
        ],
        scenarios: [
          "样品、消费电子、配件、备件等时效敏感型货物",
          "面临客户交期罚则、上线节点或紧急交付承诺的订单",
          "相比运费，更在意速度和航班稳定性的货物"
        ],
        sideTitle: "为什么选择这项服务",
        sideCopy: "空运的关键不是单纯快，而是要在交仓前把时间、资料和承运条件全部对齐，真正做到能按计划起飞。",
        relatedTitle: "相关服务",
        contactTitle: "联系业务团队",
        contactCopy: "如果你需要评估紧急空运方案、航班选择或机场操作安排，我们可以先帮你把可执行性梳理清楚。",
        contactBtn: "联系我们"
      }
    },
    rail: {
      icon: "fa-train",
      image: "images/images_lib/services/rail.png",
      related: ["container", "drayage", "customs"],
      en: {
        badge: "Core Service Detail",
        title: "Rail Freight",
        lead: "Rail freight offers a middle option between ocean and air for selected routes, especially when customers need better transit balance between budget and delivery time.",
        overview: [
          "Rail transport has become a useful choice for cargo moving toward inland destinations across Eurasian corridors. It is especially relevant when ocean transit is too long for the project schedule, but air freight is too expensive for the shipment value or volume.",
          "We review route suitability, cargo type, customs setup, inland connection and destination handling before recommending rail. This helps customers use rail where it genuinely improves the supply plan rather than choosing it simply because it sounds faster than sea freight."
        ],
        scope: [
          "Cross-border rail planning for Eurasian routes and selected inland-destination cargo programs",
          "Container-based rail transport coordination with trucking, warehousing and customs linkage",
          "Multimodal planning where rail forms one leg of a broader China-to-destination logistics solution"
        ],
        advantages: [
          "Provides a more balanced option for shipments that sit between sea and air requirements",
          "Useful for inland destination planning where total delivery time matters",
          "Adds route diversification for customers who want alternatives to single-mode transport dependence"
        ],
        scenarios: [
          "Cargo moving to inland markets or customers away from seaport destinations",
          "Orders too urgent for ocean but not economical enough for air freight",
          "Supply chains that need backup route planning across different transport modes"
        ],
        sideTitle: "Why Choose This Service",
        sideCopy: "Rail is valuable when corridor, cargo and timing all match. We help confirm whether it is the right transport logic for the shipment.",
        relatedTitle: "Related Services",
        contactTitle: "Talk With Our Team",
        contactCopy: "If you are comparing sea, rail and air for a shipment, we can help judge whether rail is practical for your route.",
        contactBtn: "Contact Us"
      },
      zh: {
        badge: "主营业务详情",
        title: "铁路运输",
        lead: "铁路运输在特定线路上能够兼顾一定时效和成本控制，适合那些海运偏慢、空运又偏高的中间型运输需求。",
        overview: [
          "铁路运输适合发往欧洲及欧亚内陆市场、对时效要求高于海运但预算又不适合空运的货物。可结合集装箱运输、国内提货、报关及末端交付做整体安排，适用于常规出口货、多式联运项目及需要稳定中间时效方案的订单。"
        ],
        scope: [
          "提供欧亚方向跨境铁路运输规划及部分内陆目的地物流方案评估",
          "支持基于集装箱的铁路运输协调，并联动陆运、仓储和报关环节",
          "可作为多式联运中的一段，与海运、卡车或仓储方案组合使用"
        ],
        advantages: [
          "适合发往欧洲及欧亚内陆市场的货物，可兼顾时效要求与整体运输成本控制",
          "可结合集装箱、国内提货、报关及末端派送做一票式衔接，减少中间节点反复协调",
          "对于交期高于海运、但预算不适合空运的订单，更便于制定稳定的中间时效方案",
          "可与海运、陆运、仓储等方案组合使用，适合需要多式联运或备选运输路径的项目"
        ],
        scenarios: [
          "发往欧洲或欧亚内陆市场的货物",
          "交期要求高于海运、但整体预算又不适合空运的订单",
          "希望为供应链增加备选运输通道的客户"
        ],
        sideTitle: "为什么选择这项服务",
        sideCopy: "铁路最有价值的地方，不是看起来比海运快，而是它是否真的适合你的线路、货型和交付要求。",
        relatedTitle: "相关服务",
        contactTitle: "联系业务团队",
        contactCopy: "如果你正在比较海运、铁路和空运，我们可以结合目的地和交期一起判断铁路是否适合。",
        contactBtn: "联系我们"
      }
    },
    container: {
      icon: "fa-cube",
      image: "images/images_lib/services/container.png",
      related: ["sea", "special", "warehousing"],
      en: {
        badge: "Core Service Detail",
        title: "Container Services",
        lead: "Container planning is about matching cargo size, packaging and loading method with the right equipment so the shipment can move more safely and efficiently.",
        overview: [
          "Choosing a container is not only about fitting cargo inside a box. The wrong equipment choice can affect loading safety, cargo utilization, transport cost, route suitability and even whether the shipment can proceed without adjustment.",
          "We review dimensions, weight distribution, packaging style, loading sequence and shipment volume to help customers decide between standard containers, high-cube equipment and other practical options. This is especially important when cargo comes from several suppliers or has stricter loading limits."
        ],
        scope: [
          "Selection support for standard containers, high-cube containers and other suitable equipment types",
          "Loading review based on cargo dimensions, weight, packaging and stuffing sequence",
          "Coordination before stuffing, warehouse handoff and export departure planning"
        ],
        advantages: [
          "Improves space use and reduces avoidable waste in loading plans",
          "Helps lower the risk of poor equipment matching, overloading or unsuitable stuffing arrangement",
          "Creates a clearer basis for sea freight execution, supplier consolidation and cost planning"
        ],
        scenarios: [
          "Regular FCL business with stable shipment volume",
          "Cargo with stricter loading, stacking or packaging requirements",
          "Orders requiring consolidation from multiple suppliers before container stuffing"
        ],
        sideTitle: "Why Choose This Service",
        sideCopy: "A good container plan solves problems before loading day. Equipment choice made early usually prevents later operational pressure.",
        relatedTitle: "Related Services",
        contactTitle: "Talk With Our Team",
        contactCopy: "If you want to confirm which container setup fits the cargo best, we can review the loading details with you.",
        contactBtn: "Contact Us"
      },
      zh: {
        badge: "主营业务详情",
        title: "集装箱服务",
        lead: "集装箱服务的核心不是单纯选箱，而是根据货物尺寸、包装方式和装载需求，匹配更合适的箱型与装柜方案。",
        overview: [
          "集装箱运输是将杂货装入统一规格箱体内进行运输，可结合海运、铁路、公路等方式衔接。我们可根据货物尺寸、重量、装箱要求及运输方式，匹配普通柜、冷柜等方案，适合整箱出口、门到门及多式联运业务。"
        ],
        scope: [
          "提供20尺柜、40尺柜、40尺高柜及冷柜等常见箱型选择建议和装箱方案评估",
          "可结合海运、铁路、公路等运输方式，支持整箱运输、门到门及多式联运安排",
          "根据货物尺寸、重量、包装方式和装箱顺序做装载可行性评估，减少超重、偏载和空间浪费",
          "可衔接大连、天津、青岛、上海、广州黄埔、深圳等主要港口的装箱及出口安排"
        ],
        advantages: [
          "集装箱运输中途可换船、换车而无需重新卸货，有助于提高装卸效率并减少货损",
          "更适合机械化装卸和标准化操作，可简化中转手续、加快车船周转并降低整体运输成本",
          "可实现从发货人仓库到收货人仓库的门到门运输，减少对中转仓库的依赖",
          "普通柜适合常规普货装运，冷柜可承接肉类、蔬菜等温控货物，制冷范围可覆盖-30°C至20°C的常见运输需求"
        ],
        scenarios: [
          "整箱出货较稳定、需要长期规划装柜方式的业务",
          "对堆叠、装载或包装限制较多的货物",
          "需要多家供应商统一集货后再装柜出口的订单"
        ],
        sideTitle: "为什么选择这项服务",
        sideCopy: "很多问题其实在装柜前就能解决。越早把箱型和装载逻辑判断清楚，后面执行就越稳。",
        relatedTitle: "相关服务",
        contactTitle: "联系业务团队",
        contactCopy: "如果你想确认更适合的箱型或装柜方式，我们可以先根据货物资料帮你做判断。",
        contactBtn: "联系我们"
      }
    },
    drayage: {
      icon: "fa-road",
      image: "images/images_lib/services/drayage.png",
      related: ["container", "warehousing", "customs"],
      en: {
        badge: "Core Service Detail",
        title: "Drayage & Trucking",
        lead: "Drayage and short-haul trucking keep cargo moving between local nodes such as terminals, yards, warehouses and final city delivery points.",
        overview: [
          "A long international route can still be delayed by a short local movement if the handoff is not arranged properly. Drayage becomes especially important where terminal pickup, warehouse delivery, empty return, local transfer or time-sensitive urban distribution are involved.",
          "We coordinate local transport around port and warehouse nodes so cargo can move through the first-mile and last-mile stages with fewer interruptions. This helps protect the continuity of the wider shipping plan, especially when local timing is tight."
        ],
        scope: [
          "Port to warehouse, warehouse to port and terminal to yard short-haul transport arrangements",
          "First-mile and last-mile coordination around container handoff, local transfer and delivery appointments",
          "Scheduling support linked with warehouse receiving, cargo release timing and onward transport plans"
        ],
        advantages: [
          "Improves continuity across local logistics stages where delays often occur",
          "Useful for shipments requiring precise transfer between terminal, yard and warehouse nodes",
          "Helps reduce avoidable waiting time and handoff disruption in integrated logistics projects"
        ],
        scenarios: [
          "Cargo moving between ports, depots and city warehouses",
          "Shipments with fixed loading or unloading appointment windows",
          "Projects involving several local handoff points before final release"
        ],
        sideTitle: "Why Choose This Service",
        sideCopy: "Short-haul transport may look simple, but many avoidable delays happen exactly there. Good drayage coordination keeps the full plan connected.",
        relatedTitle: "Related Services",
        contactTitle: "Talk With Our Team",
        contactCopy: "If you need local port transfer, warehouse delivery or first/last-mile support, we can help map the timing.",
        contactBtn: "Contact Us"
      },
      zh: {
        badge: "主营业务详情",
        title: "拖车/短驳服务",
        lead: "拖车和短驳服务主要解决港口、堆场、仓库和本地交付点之间的短距离运输问题，是很多项目里容易被忽视但非常关键的一环。",
        overview: [
          "拖车服务可承接散货、拼箱、集装箱、超尺寸大件货及港口拖车运输，常见车型包括集装箱拖车、吨车、中港车、冷冻车及危险品专用拖车。适合工厂提货、港口进站、保税仓交仓及中港进出口运输业务。"
        ],
        scope: [
          "提供集装箱拖车、吊机车、冷冻车、平板车等运输业务",
          "提供监管仓、保税仓吨车交仓、报关及出库运输服务",
          "提供危险品拖车运输以及国内运输、进站、装车等配套操作",
          "支持签发提单、运杂费结算、单证快邮、进口报关、纳税、拆箱转运、送货及部分国外代理业务",
          "可承接中港拖车进出口流程，包括香港提柜、口岸通关、大陆送货、空柜返场及出口还柜等操作"
        ],
        advantages: [
          "拖车类型较齐全，可覆盖集装箱拖车、吨车、中港车、冷冻车及危险品专用车辆等不同运输需求",
//          "公司可调用多台拖车，广东地区一般贸易及封关运输业务配套更成熟，能更快响应客户用车需求",
          "中港吨拖车车型覆盖3吨、5吨、8吨、10吨、12吨、20GP、40GP、40HQ、45GP，可满足不同货量和柜型安排",
//          "皇岗、文锦渡、沙头角、深圳湾等口岸均有报关备案，便于中港拖车通关及进出口衔接",
          "拖车运输适用范围广、调度灵活、效率较高，但也会受天气、道路和口岸拥堵等因素影响"
        ],
        scenarios: [
          "在港口、堆场和城市仓库之间流转的货物",
          "装卸时间窗口固定、预约要求明确的订单",
          "涉及多个本地交接点、需要连续排程的项目"
        ],
        sideTitle: "为什么选择这项服务",
        sideCopy: "短驳距离不长，但最容易把整票货卡住。把本地节点排顺，后面的执行才会更连贯。",
        relatedTitle: "相关服务",
        contactTitle: "联系业务团队",
        contactCopy: "如果你需要港口短驳、仓库送货或头程/尾程安排，我们可以先帮你把本地节点梳理清楚。",
        contactBtn: "联系我们"
      }
    },
    customs: {
      icon: "fa-file-text-o",
      image: "images/images_lib/services/customs-short.png",
      related: ["sea", "air", "dg"],
      en: {
        badge: "Core Service Detail",
        title: "Customs Clearance",
        lead: "Customs clearance support helps keep cargo, documents and declaration timing aligned so shipments can move with fewer avoidable interruptions.",
        overview: [
          "In customs work, small document inconsistencies can create large operational delays. Product names, HS references, invoice details, packing information, declaration timing and cargo handoff must all line up before filing becomes smooth.",
          "We help customers review declaration documents and connect the customs process with the actual shipment plan. This is especially useful for orders where timing is tight, documents are complex or the cargo has stronger compliance sensitivity."
        ],
        scope: [
          "Export and import declaration support together with document review before submission",
          "Coordination of invoice, packing list, cargo data and selected supporting materials",
          "Timing linkage between declaration, cargo handoff, port/airport operation and onward shipment plans"
        ],
        advantages: [
          "Reduces disruption caused by basic document mismatch or weak pre-filing preparation",
          "Helps align declaration progress with actual cargo movement instead of handling them separately",
          "Useful for cargo with tighter compliance demands, special documentation or higher delay cost"
        ],
        scenarios: [
          "Shipments with more detailed product information or stricter compliance review",
          "Orders where invoice, packing list and cargo data come from multiple parties",
          "Cargo that can incur meaningful downstream cost if customs timing slips"
        ],
        sideTitle: "Why Choose This Service",
        sideCopy: "Good customs work starts before filing. Clear document review early usually prevents bigger delays later in the shipment.",
        relatedTitle: "Related Services",
        contactTitle: "Talk With Our Team",
        contactCopy: "If you need declaration support or want documents checked before filing, we can help review the shipment details.",
        contactBtn: "Contact Us"
      },
      zh: {
        badge: "主营业务详情",
        title: "报关服务",
        lead: "报关服务的重点，是让货物信息、单证内容和申报时间节点保持一致，避免因为前期资料问题影响整票货物的出运节奏。",
        overview: [
          "报关服务是进出口货物办理海关申报、交验单证、接受查验、征税和放行等手续的重要环节。我们可协助客户处理报关、报检及相关单证审核，适用于机械、家具、纺织品、手工工具、装饰品及危险品等多类货物申报业务。"
        ],
        scope: [
          "提供进出口货物报关服务，协助办理海关申报、查验、征税、放行等手续",
          "支持进出口货物报关单、许可证、商品检验证书、动植物检疫证书、食品卫生检验证书等资料审核与申报配合",
          "可处理提货单、装货单、运单、发票、装箱单等基础单证的整理与匹配",
          "接受机械、家具、纺织品、衣物、手工工具、装饰品、危险品等多类品名出口申报业务",
          "提供报检、报验及进出口商品检验检疫申请等相关配套服务"
        ],
        advantages: [
          "可协助客户把申报、查验、征税、放行等报关环节统一梳理，减少因资料不齐影响通关进度",
          "能够处理多种品名货物的出口申报业务，适用范围更广",
          "报关、报检及单证审核可同步配合，便于客户把口岸操作和出运节奏统一安排",
          "在盐田、蛇口设有报关服务配套，经验较丰富，可为客户提供更高效、更周到的通关支持"
        ],
        scenarios: [
          "品名、规格、资料要求相对细致的出口货物",
          "发票、箱单和货物信息分别来自不同主体的订单",
          "一旦申报延后，就会影响后续船期、航班或交期承诺的货物"
        ],
        sideTitle: "为什么选择这项服务",
        sideCopy: "报关最怕临时补资料。越早把单证和申报逻辑理顺，后面放行和出运就越稳。",
        relatedTitle: "相关服务",
        contactTitle: "联系业务团队",
        contactCopy: "如果你需要申报支持，或者想在正式报关前先把单证核对一遍，我们可以协助梳理。",
        contactBtn: "联系我们"
      }
    },
    warehousing: {
      icon: "fa-building",
      image: "images/images_lib/services/warehousing.png",
      related: ["drayage", "container", "insurance"],
      en: {
        badge: "Core Service Detail",
        title: "Warehousing and Storage",
        lead: "Warehousing support gives customers a practical way to receive, hold, sort and consolidate cargo before export or onward domestic transfer.",
        overview: [
          "Warehouse service is not only about storing cargo. In many export projects, it is the working space where shipments are organized, consolidated, relabeled, checked and prepared for the next transport stage. This becomes especially valuable when goods arrive from different suppliers at different times.",
          "We support cargo receiving, temporary storage and pre-shipment handling so customers can create a cleaner loading plan, reduce supplier coordination pressure and gain more control over export readiness before cargo leaves origin."
        ],
        scope: [
          "Cargo receiving, temporary storage and inventory-style holding before export or dispatch",
          "Consolidation support for multi-supplier purchase orders and split production schedules",
          "Sorting, labeling, packaging check and pre-shipment preparation before loading or handoff"
        ],
        advantages: [
          "Improves cargo organization before container loading, customs handoff or airport/port delivery",
          "Useful when suppliers deliver on different dates and customers need one combined shipping plan",
          "Helps connect warehousing with trucking, container planning and export execution more clearly"
        ],
        scenarios: [
          "Buyers sourcing from several factories across one production cycle",
          "Orders needing temporary holding and consolidation before final shipment release",
          "Cargo requiring sorting, labeling or staged preparation before export"
        ],
        sideTitle: "Why Choose This Service",
        sideCopy: "Warehousing adds control before departure. When cargo is organized well at origin, later export execution usually becomes much smoother.",
        relatedTitle: "Related Services",
        contactTitle: "Talk With Our Team",
        contactCopy: "If you need receiving, temporary storage or consolidation before export, we can help map the warehouse workflow.",
        contactBtn: "Contact Us"
      },
      zh: {
        badge: "主营业务详情",
        title: "仓储服务",
        lead: "仓储服务可以帮助客户在正式出运前完成收货、暂存、分拣和集货，让货物在离开原产地之前先整理得更有秩序。",
        overview: [
          "仓储服务可为出口、进口、空运、区域配送、集装箱堆场及特殊仓储提供非危险品货物储存与分拨支持。可根据客户需求安排收货、暂存、包装、分拣、配送及库存管理，并提供货物免费存放15天，适合跨境电商、出口备货及多批次集货业务。"
        ],
        scope: [
          "可按照客户要求对产品进行分类包装、打托、分拣、贴唛及订单管理",
          "提供跨码头整箱与拼箱服务、小件货物储存与操作、集装箱装卸及货物分拨",
          "支持跨境中转、物料存仓及管理、物料配送、分拨、拼装、集运和库存查询服务",
          "提供退厂保税返修复出口业务、保税仓储业务及非工作时间、周末额外服务",
          "可提供装箱、拆箱、换包装、拼箱、精密设备特种包装、条形码管理及配送物流等增值服务"
        ],
        advantages: [
          "可覆盖出口、进口、空运、区域配送、集装箱堆场及特殊仓储等多种仓储需求场景",
          "提供免费存放15天，便于客户进行多批次集货、备货及出运前统筹",
          "配送范围可覆盖北美、欧洲及澳洲，不受单票重量、体积限制，旺季也更便于保持仓储和配送节奏",
          "可帮助客户进行实时库存管理与监测，缩短到货时间，提升整体履约效率和买家满意度",
          "仓储、分拨、包装、配送及库存查询可一体化配合，降低物流运营成本并提升操作效率"
        ],
        scenarios: [
          "同一采购周期内从多家工厂采购的货物",
          "需要暂存后统一集货、再安排出口的订单",
          "出运前需要分拣、贴标或阶段性备货整理的项目"
        ],
        sideTitle: "为什么选择这项服务",
        sideCopy: "货物在出运前整理得越清楚，后面装柜、交仓和发运就越容易少出错。",
        relatedTitle: "相关服务",
        contactTitle: "联系业务团队",
        contactCopy: "如果你的货物需要先收货、暂存或集中整理后再出口，我们可以帮你把仓储流程排顺。",
        contactBtn: "联系我们"
      }
    },
    special: {
      icon: "fa-cubes",
      images: [
        "images/images_lib/services/Flat Rack Container.png",
        "images/images_lib/services/Reefer Container.png",
        "images/images_lib/services/OPen Top Container.png",
        "images/images_lib/services/Car Container.jpg"
      ],
      related: ["container", "sea", "insurance"],
      en: {
        badge: "Core Service Detail",
        title: "Special Containers",
        lead: "Special container service supports cargo that cannot be handled efficiently by standard equipment, including oversized, irregular and temperature-sensitive goods.",
        overview: [
          "When cargo exceeds standard container dimensions or requires special handling conditions, the equipment plan becomes the center of the transport solution. Open-top, flat-rack, reefer and other special equipment need earlier review of loading method, route practicality, terminal handling and protection requirements.",
          "We help customers assess whether the cargo should move by special container, how it should be loaded and which connected services must be arranged around it. This is especially useful for machinery, engineering cargo, irregular structures and selected temperature-controlled shipments."
        ],
        scope: [
          "Planning support for open-top, flat-rack, reefer and other special equipment options",
          "Review of cargo dimensions, loading feasibility, lashing considerations and handling conditions",
          "Coordination with trucking, port operation, stuffing site and related insurance planning"
        ],
        advantages: [
          "Creates a more workable transport plan for cargo outside normal equipment limits",
          "Helps improve loading safety and equipment suitability before execution starts",
          "Useful for project cargo, machinery, irregular cargo and certain cold-chain requirements"
        ],
        scenarios: [
          "Oversized machinery, equipment and engineering parts",
          "Cargo with non-standard shape that cannot be loaded well in a regular container",
          "Selected shipments requiring temperature control or special handling conditions"
        ],
        sideTitle: "Why Choose This Service",
        sideCopy: "Special-container transport should be planned early. Equipment, loading and route conditions need to fit together before booking.",
        relatedTitle: "Related Services",
        contactTitle: "Talk With Our Team",
        contactCopy: "If your cargo does not fit standard equipment, we can help review the special-container approach before execution.",
        contactBtn: "Contact Us"
      },
      zh: {
        badge: "主营业务详情",
        title: "特种箱服务",
        lead: "特种箱服务适用于标准集装箱难以承运的货物，包括超尺寸、异形结构以及部分需要温控条件的运输需求。",
        overview: [
          "特种箱服务适用于超高、超宽、超尺寸、温控及液体类等特殊货物运输。可提供开顶柜、平板柜、框架柜、槽罐柜、挂衣柜、冷冻柜等方案，并承接珠三角及北方主要港口的调柜、装运及出口运输服务。"
        ],
        scope: [
          "提供开顶柜、平板柜、框架柜、槽罐Tank柜、挂衣柜、冷冻柜等特种集装箱方案",
          "可承接珠三角地区及北方主要港口的调柜、运输、装箱及出口安排",
          "支持OOG特种柜运输，包括冷藏柜、开顶柜、框架柜、平板柜、罐式柜、挂衣柜等特殊设备操作",
          "可根据货物特点安排大型设备、冷藏生鲜、高档服装、散装液体、液化气体等特殊产品进出口运输服务",
          "可联动拖车、港区作业、装载绑扎及保险等配套服务"
        ],
        advantages: [
          "特种柜类型较齐全，可覆盖超高、超宽、超尺寸、液体、温控、挂衣及大型设备等多种运输需求",
          "可根据货物特性匹配开顶柜、框架柜、平板柜、冷冻柜、Tank柜等更合适的箱型方案",
          "适合冷藏生鲜产品、大型机械、高档服装、散装液体、液化气体等特殊产品进出口运输",
          "可结合调柜、运输、装箱、港区操作和后续出口流程统一安排，减少特殊货物中途反复协调",
          "对于普通柜无法承运的货物，可通过特种箱方案提升装载可行性和整体运输安全性"
        ],
        scenarios: [
          "超尺寸机械设备、工程部件和大型结构件",
          "无法用普通集装箱顺利装载的异形货物",
          "对温控或特殊作业条件有明确要求的部分货物"
        ],
        sideTitle: "为什么选择这项服务",
        sideCopy: "特种箱运输最怕临时判断。越早把设备、装载和路线条件评估清楚，执行就越可控。",
        relatedTitle: "相关服务",
        contactTitle: "联系业务团队",
        contactCopy: "如果你的货物不适合走标准箱，我们可以先根据尺寸和要求帮你判断特种箱方案。",
        contactBtn: "联系我们"
      }
    },
    dg: {
      icon: "fa-exclamation-triangle",
      image: "images/images_lib/services/dg.png",
      related: ["air", "sea", "insurance"],
      en: {
        badge: "Core Service Detail",
        title: "Dangerous Goods",
        lead: "Dangerous goods service helps align declaration, packaging and transport conditions for cargo that must meet stricter handling and acceptance standards.",
        overview: [
          "DG cargo requires more than normal booking preparation. Carrier acceptance rules, packaging condition, labeling, document accuracy and shipment classification all matter before cargo can move smoothly. If these elements are weak, the shipment may be delayed, rejected or repeatedly reworked.",
          "We help customers review hazardous cargo readiness early and connect the declaration process with actual transport planning. This gives customers a clearer view of what must be prepared before booking submission, handoff and final shipment acceptance."
        ],
        scope: [
          "Dangerous goods declaration support and readiness review before booking or transport handoff",
          "Packaging, labeling and selected document checks based on carrier and cargo requirements",
          "Coordination of shipment conditions with ocean, air or related special cargo arrangements"
        ],
        advantages: [
          "Improves completeness of preparation before carrier submission or cargo acceptance",
          "Helps reduce the risk of rejection caused by poor labeling, weak packaging or missing readiness items",
          "Makes hazardous cargo execution more controlled and easier to plan step by step"
        ],
        scenarios: [
          "Hazard-classified cargo requiring stricter declaration and handling review",
          "Shipments where packaging, labels and technical documents must be checked carefully",
          "Orders using routes or carriers with stronger dangerous goods acceptance requirements"
        ],
        sideTitle: "Why Choose This Service",
        sideCopy: "Dangerous goods leave very little room for incomplete preparation. Early review helps avoid much larger disruption later in the process.",
        relatedTitle: "Related Services",
        contactTitle: "Talk With Our Team",
        contactCopy: "If you need support assessing DG readiness, declaration needs or packaging review, we can help evaluate the shipment.",
        contactBtn: "Contact Us"
      },
      zh: {
        badge: "主营业务详情",
        title: "危品申报",
        lead: "危品服务主要帮助客户把申报、包装、标签和运输条件提前对齐，适用于处理标准和承运审核要求都更严格的货物。",
        overview: [
          "危险品申报服务适用于具有爆炸、易燃、毒害、腐蚀、放射性等特性的货物运输。我们可协助客户完成危险品订舱、资料审核、申报、装箱、报关及提单确认等操作，适合出口危险货物及需要特殊运输条件的项目。"
        ],
        scope: [
          "提供危险品特色申报通关服务，支持爆炸品、气体、液体、易燃固体、氧化剂、毒害品、放射性物品、腐蚀性物质及杂项危险品等类别申报",
          "协助客户完成危险品订舱，并审核中英文品名、箱型、危险品级别（CLASS）、联合国编码（UN NO.）、危包及特殊要求",
          "可配合危险品包装性能检验结果单、包装使用鉴定结果单、产品说明、报关单、发票、装箱单等申报资料准备",
          "支持危险品装箱进港、危标和海洋污染标记粘贴、照片取证、出口报关、提单确认及费用结算等操作",
          "出口报关结束后可配合返还报关单及相关单证，便于客户退税核销"
        ],
        advantages: [
          "可对危险品订舱、申报资料、危包文件及运输条件进行提前审核，减少因资料不全影响出运",
          "能够配合危险品装箱、贴标、拍照取证、报关、提单确认等多个环节，流程衔接更完整",
          "适用于多类别危险货物出口业务，对不同危险品属性有更具体的申报和操作配合",
          "可帮助客户提前安排船边直装、危险品仓库装箱及相关进港时间，降低临时延误风险",
          "便于客户把危险品运输中的申报、报关、单证和后续核销流程统一处理"
        ],
        scenarios: [
          "需要进行危险品申报和运输审核的货物",
          "对包装、标签及技术资料准确性要求较高的订单",
          "使用审核标准更严格线路或承运人的运输项目"
        ],
        sideTitle: "为什么选择这项服务",
        sideCopy: "危品运输最怕准备不完整。越早把条件评估清楚，后面越不容易反复返工。",
        relatedTitle: "相关服务",
        contactTitle: "联系业务团队",
        contactCopy: "如果你需要判断危品货物是否具备出运条件，或者需要申报与包装审核支持，我们可以协助评估。",
        contactBtn: "联系我们"
      }
    },
    insurance: {
      icon: "fa-shield",
      image: "images/images_lib/services/insurance.png",
      related: ["sea", "air", "special"],
      en: {
        badge: "Core Service Detail",
        title: "Insurance",
        lead: "Cargo insurance adds an extra layer of protection for shipments facing loss, damage or other transport risks during international movement.",
        overview: [
          "Insurance is most useful when it is considered before cargo departs, not after a problem occurs. For many shipments, especially those with higher value, longer distance or multiple handoff points, insurance is part of practical risk planning rather than an optional afterthought.",
          "We help customers review whether insurance is appropriate based on cargo value, route exposure, transport mode and shipment sensitivity. The goal is to match protection logic with the real movement profile of the cargo."
        ],
        scope: [
          "Cargo insurance support for international shipments moving by sea, air and selected special transport arrangements",
          "Review based on cargo type, declared value, route exposure and number of transport nodes",
          "Coordination with the wider shipment plan so insurance fits the actual transport structure"
        ],
        advantages: [
          "Adds financial protection against cargo damage, loss and other unexpected transport incidents",
          "Useful for high-value cargo, long-distance routes and shipments with several transfer points",
          "Helps customers build stronger logistics risk management into the shipment plan"
        ],
        scenarios: [
          "Higher-value cargo and orders with stronger commercial exposure if damage occurs",
          "Project shipments, machinery cargo and irregular transport arrangements",
          "International movements involving several stages, handoffs or longer route uncertainty"
        ],
        sideTitle: "Why Choose This Service",
        sideCopy: "Insurance does not replace careful execution, but it becomes an important safeguard when cargo value and route exposure are higher.",
        relatedTitle: "Related Services",
        contactTitle: "Talk With Our Team",
        contactCopy: "If you want to review whether insurance is suitable for your shipment, we can help assess the cargo and route profile.",
        contactBtn: "Contact Us"
      },
      zh: {
        badge: "主营业务详情",
        title: "保险服务",
        lead: "货运保险能够为国际运输中的货损、货差及其他突发风险增加一层更实际的保障，尤其适合货值较高或运输链路较长的货物。",
        overview: [
          "保险服务适用于海运、空运、特种箱及多节点国际运输货物。可根据货物类型、申报货值、运输路线及交接环节协助客户安排投保，帮助降低货损、货差、受潮、破损及运输异常带来的风险，适合高货值货物和长距离运输订单。"
        ],
        scope: [
          "提供海运、空运、特种箱及部分多式联运项目的货物保险安排",
          "可根据货物类型、申报货值、运输路线、包装方式及交接节点情况协助评估投保方案",
          "支持常规货、高货值货、设备货、项目货及多节点国际运输货物的保险配置",
          "可配合整票运输方案同步安排保险，便于与订舱、报关、出运和交付流程衔接"
        ],
        advantages: [
          "可针对货损、货差、受潮、破损及运输异常等常见风险提供更具体的保障安排",
          "适合海运长航线、空运高货值货物、设备货及经过多个交接节点的国际运输项目",
          "可结合实际货值、运输方式和路线风险安排更匹配的投保方案，而不是统一套用单一保障",
          "与整票物流操作同步处理时，更便于客户在出运前把风险控制、费用预算和运输计划一起梳理清楚"
        ],
        scenarios: [
          "货值较高、发生损失后商业影响较大的货物",
          "项目货、设备货及运输结构相对复杂的订单",
          "经过多个运输阶段、交接点较多或线路不确定性较高的国际运输"
        ],
        sideTitle: "为什么选择这项服务",
        sideCopy: "保险不能代替扎实执行，但在货值高、节点多、线路长的项目里，它会是很重要的一层保障。",
        relatedTitle: "相关服务",
        contactTitle: "联系业务团队",
        contactCopy: "如果你想评估当前货物是否建议配置保险，我们可以结合货值和路线一起判断。",
        contactBtn: "联系我们"
      }
    }
  };

  function currentLang() {
    return (document.documentElement.lang || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
  }

  function currentServiceKey() {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get("service") || "sea";
    } catch (e) {
      return "sea";
    }
  }

  function fillList(id, items) {
    const el = document.getElementById(id);
    el.innerHTML = "";
    items.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      el.appendChild(li);
    });
  }

  function fillParagraphs(id, items, lang) {
    const el = document.getElementById(id);
    el.innerHTML = "";
    const sectionLabels = overviewSectionLabels[lang] || overviewSectionLabels.en;
    const showLabels = items.length > 1;
    items.forEach(function (item, index) {
      const wrapper = document.createElement("div");
      wrapper.className = "service-overview-item";

      const p = document.createElement("p");
      p.textContent = item;

      if (showLabels) {
        const label = document.createElement("div");
        label.className = "service-overview-label";
        label.textContent = sectionLabels[index] || sectionLabels[sectionLabels.length - 1];
        wrapper.appendChild(label);
      }
      wrapper.appendChild(p);
      el.appendChild(wrapper);
    });
  }

  function fillRelated(id, lang) {
    const el = document.getElementById(id);
    el.innerHTML = "";
    const activeKey = currentServiceKey();
    Object.keys(services).forEach(function (key) {
      const service = services[key];
      if (!service) return;
      const a = document.createElement("a");
      a.className = "service-related-link";
      if (key === activeKey) {
        a.className += " active";
      }
      a.href = "service-detail.html?service=" + key;
      a.innerHTML = '<span class="fa ' + service.icon + '" aria-hidden="true"></span><span>' + service[lang].title + "</span>";
      el.appendChild(a);
    });
  }

  function fillTags(id, texts) {
    const el = document.getElementById(id);
    el.innerHTML = "";
    texts.forEach(function (text) {
      const span = document.createElement("span");
      span.className = "service-detail-tag";
      span.textContent = text;
      el.appendChild(span);
    });
  }

  function renderServiceImage(service, data, serviceKey) {
    const panel = document.getElementById("service-image-panel");
    const image = document.getElementById("service-detail-image");
    const imagesGrid = document.getElementById("service-images-grid");
    if (!panel || !image) return;

    // Check if service has multiple images (for special containers)
    if (service.images && service.images.length > 0) {
      // Hide single image
      image.removeAttribute("src");
      image.alt = "";
      image.style.display = "none";
      
      // Render multiple images grid
      imagesGrid.innerHTML = "";
      service.images.forEach(function(imgSrc) {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = data.title;
        imagesGrid.appendChild(img);
      });
      panel.classList.remove("service-detail-image-contain");
      panel.style.display = "";
    } else if (service.image) {
      // Single image rendering
      image.src = service.image;
      image.alt = data.title;
      image.style.display = "";
      imagesGrid.innerHTML = "";
      panel.classList.toggle("service-detail-image-contain", serviceKey === "customs");
      panel.style.display = "";
    } else {
      image.removeAttribute("src");
      image.alt = "";
      image.style.display = "none";
      imagesGrid.innerHTML = "";
      panel.classList.remove("service-detail-image-contain");
      panel.style.display = "none";
    }
  }

  function render() {
    const lang = currentLang();
    const key = currentServiceKey();
    const service = services[key] || services.sea;
    const data = service[lang];
    const copy = labels[lang];
    const breadcrumbHome = lang === "zh" ? "首页" : "Home";
    const breadcrumbCore = lang === "zh" ? "核心业务" : "Core Services";
    const relatedTitle = lang === "zh" ? "主营业务" : "Core Services";

    const badgeEl = document.getElementById("service-detail-badge");
    const leadEl = document.getElementById("service-detail-lead");
    const titleEl = document.getElementById("service-detail-title");
    const tagsEl = document.getElementById("service-detail-tags");

    badgeEl.textContent = breadcrumbHome + " / " + breadcrumbCore + " / " + data.title;
    if (titleEl) {
      titleEl.textContent = data.title;
    }
    leadEl.textContent = data.lead;
    if (tagsEl) {
      fillTags("service-detail-tags", [data.title, copy.scope, copy.advantages]);
    }

    document.getElementById("service-overview-heading").textContent = copy.overview;
    document.getElementById("service-scope-heading").textContent = copy.scope;
    document.getElementById("service-routes-heading").textContent = copy.routes;
    document.getElementById("service-advantages-heading").textContent = copy.advantages;

    fillParagraphs("service-overview-body", data.overview, lang);
    renderServiceImage(service, data, key);
    fillList("service-scope-list", data.scope);
    const routesPanel = document.getElementById("service-routes-panel");
    if (data.routes && data.routes.length) {
      routesPanel.style.display = "";
      fillList("service-routes-list", data.routes);
    } else {
      routesPanel.style.display = "none";
    }
    fillList("service-advantages-list", data.advantages);

    document.getElementById("service-related-title").textContent = relatedTitle;
    fillRelated("service-related-links", lang);

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

  document.addEventListener("site-language-applied", function () {
    render();
  });
})();
