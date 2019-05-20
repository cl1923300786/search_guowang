/**
 * api请求地址
 */
export const API_URL: string = process.env.NODE_ENV === 'development' ? '' : 'http://10.168.3.216'

/**
 * 默认请求超时时间
 */
export const REQUEST_TIME_OUT: number = 10000

/**
 * 分页最多显示的页数(最多10个按钮)
 */
export const defaultPageNationsLength: number = 10

/**
 * 当前分页序号为6时，至为中间页。(即右边4页，左边5页)
 */
export const defaultPageNationsInterval: number = 6

/**
 * 搜索默认每次搜10条
 */
export const defaultPageSize: number = 10

export const defaultSearchResults: any[] = [
  {
    highlight: {
      std_org: '[JB] 机械行业<em>标准</em>...',
      used_std: "[{'bcybz': 'NEMA<em>标准</em>', 'cygx': '参照'}]..."
    },
    _index: 'cy_spider_data_2019_05_08',
    _type: '_doc',
    doc: {
      zh_title: '交流低压电机散嵌绕组匝间绝缘试验方法',
      belongs_org: '',
      issus_date: '1988-01-01 00:00:00',
      std_org: '[JB] 机械行业标准',
      eng_title: '',
      source: '',
      language_type: '中文',
      usage_std: '[]',
      ccs_type: "['【K20】旋转电机综合']",
      issuer: '',
      substracted_std: '[]',
      ics_type: '[]',
      std_no: 'JB/Z 294-1987',
      expire_date: '2000-10-01 00:00:00',
      publish_org: '',
      issue_org: '',
      record: '',
      std_abs: '',
      used_std: "[{'bcybz': 'NEMA标准', 'cygx': '参照'}]",
      publish_date: '',
      status: '作废',
      substract_std: "[{'tdbz': 'JB/T 9615.1-2000', 'tdgx': '全部代替', 'zfrq': '2010-02-24 00:00:00'}]"
    },
    _id: 'qEWSlWoBQALCGhUSN2Ki'
  },
  {
    highlight: {
      std_org: '[JB] 机械行业<em>标准</em>...',
      used_std: "[{'bcybz': 'NEMA<em>标准</em>', 'cygx': '参照'}]..."
    },
    _index: 'cy_spider_data_2019_05_08',
    _type: '_doc',
    doc: {
      zh_title: '交流低压电机散嵌绕组匝间绝缘试验方法',
      belongs_org: null,
      issus_date: '1988-01-01 00:00:00',
      std_org: '[JB] 机械行业标准',
      eng_title: null,
      source: null,
      language_type: '中文',
      usage_std: '[]',
      ccs_type: "['【K20】旋转电机综合']",
      issuer: null,
      substracted_std: '[]',
      ics_type: '[]',
      std_no: 'JB/Z 294-1987',
      expire_date: '2000-10-01 00:00:00',
      publish_org: null,
      issue_org: null,
      record: null,
      std_abs: null,
      used_std: "[{'bcybz': 'NEMA标准', 'cygx': '参照'}]",
      publish_date: null,
      status: '作废',
      substract_std: "[{'tdbz': 'JB/T 9615.1-2000', 'tdgx': '全部代替', 'zfrq': '2010-02-24 00:00:00'}]"
    },
    _id: 'AEWSlWoBQALCGhUSns0C'
  },
  {
    highlight: {
      std_org: '[GB] 中国国家<em>标准</em>...',
      issue_org:
        '本<em>标准</em>起草单位:天津市地毯研究所。本<em>标准</em>参加起草单位:天津市卫生防病中心、南开大学、军事医学科学院卫生学环境医学研究所、山东威海海马集团公司。...',
      used_std: "[{'bcybz': '美国地毯协会CRI<em>标准</em>', 'cygx': '等同'}]...",
      issuer:
        '<em>标准</em>主要起草人:张玉芬、李孝文、刘洪亮、白志鹏、袭著革、张波、宁淑英、陈贵生、武淑文、刘洪运、马永民、贾纯荣。...'
    },
    _index: 'cy_spider_data_2019_05_08',
    _type: '_doc',
    doc: {
      zh_title: '室内装饰装修材料  地毯、地毯衬垫及地毯胶粘剂有害物质释放限量',
      belongs_org: '',
      issus_date: '2002-01-01 00:00:00',
      std_org: '[GB] 中国国家标准',
      eng_title:
        // tslint:disable-next-line:max-line-length
        'Indoor decorating and refurbishing materials--Limitations of harmful substances emitted from carpets,carpet cushions and adhesives',
      source: '',
      language_type: '中文',
      usage_std: '[]',
      ccs_type: "['【W56】毯类']",
      issuer:
        '标准主要起草人:张玉芬、李孝文、刘洪亮、白志鹏、袭著革、张波、宁淑英、陈贵生、武淑文、刘洪运、马永民、贾纯荣。',
      substracted_std: '[]',
      ics_type: "['【59.080.60】Textile floor coverings']",
      std_no: 'GB 18587-2001',
      expire_date: '',
      publish_org: '',
      issue_org:
        '本标准起草单位:天津市地毯研究所。本标准参加起草单位:天津市卫生防病中心、南开大学、军事医学科学院卫生学环境医学研究所、山东威海海马集团公司。',
      record: '',
      std_abs: '',
      used_std: "[{'bcybz': '美国地毯协会CRI标准', 'cygx': '等同'}]",
      publish_date: '2001-12-10 00:00:00',
      status: '有效',
      substract_std: '[]'
    },
    _id: 'mEWSlWoBQALCGhUSDCAm'
  },
  {
    highlight: {
      std_org: '[GB] 中国国家<em>标准</em>...',
      issue_org:
        '本<em>标准</em>起草单位:天津市地毯研究所。本<em>标准</em>参加起草单位:天津市卫生防病中心、南开大学、军事医学科学院卫生学环境医学研究所、山东威海海马集团公司。...',
      used_std: "[{'bcybz': '美国地毯协会CRI<em>标准</em>', 'cygx': '等同'}]...",
      issuer:
        '<em>标准</em>主要起草人:张玉芬、李孝文、刘洪亮、白志鹏、袭著革、张波、宁淑英、陈贵生、武淑文、刘洪运、马永民、贾纯荣。...'
    },
    _index: 'cy_spider_data_2019_05_08',
    _type: '_doc',
    doc: {
      zh_title: '室内装饰装修材料  地毯、地毯衬垫及地毯胶粘剂有害物质释放限量',
      belongs_org: null,
      issus_date: '2002-01-01 00:00:00',
      std_org: '[GB] 中国国家标准',
      eng_title:
        // tslint:disable-next-line:max-line-length
        'Indoor decorating and refurbishing materials--Limitations of harmful substances emitted from carpets,carpet cushions and adhesives',
      source: null,
      language_type: '中文',
      usage_std: '[]',
      ccs_type: "['【W56】毯类']",
      issuer:
        '标准主要起草人:张玉芬、李孝文、刘洪亮、白志鹏、袭著革、张波、宁淑英、陈贵生、武淑文、刘洪运、马永民、贾纯荣。',
      substracted_std: '[]',
      ics_type: "['【59.080.60】Textile floor coverings']",
      std_no: 'GB 18587-2001',
      expire_date: null,
      publish_org: null,
      issue_org:
        '本标准起草单位:天津市地毯研究所。本标准参加起草单位:天津市卫生防病中心、南开大学、军事医学科学院卫生学环境医学研究所、山东威海海马集团公司。',
      record: null,
      std_abs: null,
      used_std: "[{'bcybz': '美国地毯协会CRI标准', 'cygx': '等同'}]",
      publish_date: '2001-12-10 00:00:00',
      status: '有效',
      substract_std: '[]'
    },
    _id: '8EWSlWoBQALCGhUSV4pq'
  },
  {
    highlight: {
      std_org: '[GB] 中国国家<em>标准</em>...',
      issue_org:
        // tslint:disable-next-line:max-line-length
        '本<em>标准</em>起草单位：天津化工研究设计院、天津碱厂、内蒙古远兴天然碱股份有限公司、锡林郭勒苏尼特碱业有限公司、山东海化集团有限公司小苏打厂、中国石化集团南京化学工业有限公司连云港碱厂、自贡鸿鹤化工股份有限公司...',
      used_std: "[{'bcybz': '国际食品法典委员会（CAC）<em>标准</em>', 'cygx': '非等效'}]...",
      issuer:
        '<em>标准</em>主要起草人：刘幽若、赵美敬、王平、付永礼、马文元、李培军、耿文法、邹红、刘真、韩洋、李莉莉、李业泳、高润庚、李永忠。...'
    },
    _index: 'cy_spider_data_2019_05_08',
    _type: '_doc',
    doc: {
      zh_title: '食品添加剂 碳酸氢钠',
      belongs_org: null,
      issus_date: '2008-06-01 00:00:00',
      std_org: '[GB] 中国国家标准',
      eng_title: 'Food additive - Sodium bicarbonate',
      source: null,
      language_type: '中文',
      usage_std: '[]',
      ccs_type: "['【X42】合成食品添加剂']",
      issuer:
        '标准主要起草人：刘幽若、赵美敬、王平、付永礼、马文元、李培军、耿文法、邹红、刘真、韩洋、李莉莉、李业泳、高润庚、李永忠。',
      substracted_std: "[{'btdbz': 'GB 1887-1998', 'tdgx': '全部代替', 'zfrq': '2008-06-01 00:00:00'}]",
      ics_type: "['【67.220.20】Food additives']",
      std_no: 'GB 1887-2007',
      expire_date: '2016-03-22 00:00:00',
      publish_org: null,
      issue_org:
        // tslint:disable-next-line:max-line-length
        '本标准起草单位：天津化工研究设计院、天津碱厂、内蒙古远兴天然碱股份有限公司、锡林郭勒苏尼特碱业有限公司、山东海化集团有限公司小苏打厂、中国石化集团南京化学工业有限公司连云港碱厂、自贡鸿鹤化工股份有限公司、江苏德邦兴华化工股份有限公司、青岛碱业股份有限公司、衡阳市裕华化工实业有限公司、衡阳市海联盐卤化工有限公司、广州市南先化工有限公司、内蒙古远兴天然碱股份有限公司碱湖试验站。',
      record: null,
      std_abs: null,
      used_std: "[{'bcybz': '国际食品法典委员会（CAC）标准', 'cygx': '非等效'}]",
      publish_date: '2007-10-29 00:00:00',
      status: '作废',
      substract_std: "[{'tdbz': 'GB 1886.2-2015', 'tdgx': '全部代替', 'zfrq': ''}]"
    },
    _id: 'QUWSlWoBQALCGhUSnt4D'
  },
  {
    highlight: {
      std_org: '[GB] 中国国家<em>标准</em>...',
      issue_org:
        // tslint:disable-next-line:max-line-length
        '本<em>标准</em>起草单位：天津化工研究设计院、天津碱厂、内蒙古远兴天然碱股份有限公司、锡林郭勒苏尼特碱业有限公司、山东海化集团有限公司小苏打厂、中国石化集团南京化学工业有限公司连云港碱厂、自贡鸿鹤化工股份有限公司...',
      used_std: "[{'bcybz': '国际食品法典委员会（CAC）<em>标准</em>', 'cygx': '非等效'}]...",
      issuer:
        '<em>标准</em>主要起草人：刘幽若、赵美敬、王平、付永礼、马文元、李培军、耿文法、邹红、刘真、韩洋、李莉莉、李业泳、高润庚、李永忠。...'
    },
    _index: 'cy_spider_data_2019_05_08',
    _type: '_doc',
    doc: {
      zh_title: '食品添加剂 碳酸氢钠',
      belongs_org: '',
      issus_date: '2008-06-01 00:00:00',
      std_org: '[GB] 中国国家标准',
      eng_title: 'Food additive - Sodium bicarbonate',
      source: '',
      language_type: '中文',
      usage_std: '[]',
      ccs_type: "['【X42】合成食品添加剂']",
      issuer:
        '标准主要起草人：刘幽若、赵美敬、王平、付永礼、马文元、李培军、耿文法、邹红、刘真、韩洋、李莉莉、李业泳、高润庚、李永忠。',
      substracted_std: "[{'btdbz': 'GB 1887-1998', 'tdgx': '全部代替', 'zfrq': '2008-06-01 00:00:00'}]",
      ics_type: "['【67.220.20】Food additives']",
      std_no: 'GB 1887-2007',
      expire_date: '2016-03-22 00:00:00',
      publish_org: '',
      issue_org:
        // tslint:disable-next-line:max-line-length
        '本标准起草单位：天津化工研究设计院、天津碱厂、内蒙古远兴天然碱股份有限公司、锡林郭勒苏尼特碱业有限公司、山东海化集团有限公司小苏打厂、中国石化集团南京化学工业有限公司连云港碱厂、自贡鸿鹤化工股份有限公司、江苏德邦兴华化工股份有限公司、青岛碱业股份有限公司、衡阳市裕华化工实业有限公司、衡阳市海联盐卤化工有限公司、广州市南先化工有限公司、内蒙古远兴天然碱股份有限公司碱湖试验站。',
      record: '',
      std_abs: '',
      used_std: "[{'bcybz': '国际食品法典委员会（CAC）标准', 'cygx': '非等效'}]",
      publish_date: '2007-10-29 00:00:00',
      status: '作废',
      substract_std: "[{'tdbz': 'GB 1886.2-2015', 'tdgx': '全部代替', 'zfrq': ''}]"
    },
    _id: '6UWSlWoBQALCGhUSV3Nn'
  },
  {
    highlight: {
      zh_title: '<em>标准</em>产品标记编写细则...',
      std_org: '[CB] 船舶行业<em>标准</em>...',
      used_std: "[{'bcybz': 'ISO第5号指南《国际<em>标准</em>化对象的标记》', 'cygx': '非等效'}]..."
    },
    _index: 'cy_spider_data_2019_05_08',
    _type: '_doc',
    doc: {
      zh_title: '标准产品标记编写细则',
      belongs_org: '',
      issus_date: '1992-07-01 00:00:00',
      std_org: '[CB] 船舶行业标准',
      eng_title: '',
      source: '',
      language_type: '中文',
      usage_std: '[]',
      ccs_type: "['【U01】技术管理']",
      issuer: '',
      substracted_std: "[{'btdbz': 'CB* 3261-1985', 'tdgx': '全部代替', 'zfrq': ''}]",
      ics_type: '[]',
      std_no: 'CB 3261-1991',
      expire_date: '2008-10-01 00:00:00',
      publish_org: '',
      issue_org: '',
      record: '',
      std_abs: '',
      used_std: "[{'bcybz': 'ISO第5号指南《国际标准化对象的标记》', 'cygx': '非等效'}]",
      publish_date: '1991-11-08 00:00:00',
      status: '作废',
      substract_std: "[{'tdbz': 'CB/T 3261-2008', 'tdgx': '全部代替', 'zfrq': ''}]"
    },
    _id: 'k0WSlWoBQALCGhUSDCwr'
  },
  {
    highlight: {
      zh_title: '<em>标准</em>产品标记编写细则...',
      std_org: '[CB] 船舶行业<em>标准</em>...',
      used_std: "[{'bcybz': 'ISO第5号指南《国际<em>标准</em>化对象的标记》', 'cygx': '非等效'}]..."
    },
    _index: 'cy_spider_data_2019_05_08',
    _type: '_doc',
    doc: {
      zh_title: '标准产品标记编写细则',
      belongs_org: null,
      issus_date: '1992-07-01 00:00:00',
      std_org: '[CB] 船舶行业标准',
      eng_title: null,
      source: null,
      language_type: '中文',
      usage_std: '[]',
      ccs_type: "['【U01】技术管理']",
      issuer: null,
      substracted_std: "[{'btdbz': 'CB* 3261-1985', 'tdgx': '全部代替', 'zfrq': ''}]",
      ics_type: '[]',
      std_no: 'CB 3261-1991',
      expire_date: '2008-10-01 00:00:00',
      publish_org: null,
      issue_org: null,
      record: null,
      std_abs: null,
      used_std: "[{'bcybz': 'ISO第5号指南《国际标准化对象的标记》', 'cygx': '非等效'}]",
      publish_date: '1991-11-08 00:00:00',
      status: '作废',
      substract_std: "[{'tdbz': 'CB/T 3261-2008', 'tdgx': '全部代替', 'zfrq': ''}]"
    },
    _id: '60WSlWoBQALCGhUSeZZN'
  },
  {
    highlight: {
      zh_title: '高<em>标准</em>农田建设<em>标准 </em>...',
      std_org: '[NY] 农业行业<em>标准</em>...',
      issue_org:
        '本<em>标准</em>起草单位：农业部工程建设服务中心。本<em>标准</em>起草协作单位：全国农业技术推广服务中心、中国农业科学院农业环境与可持续发展研究所、农业部农业机械化技术开发推广总站、中国农业大学。...',
      issuer:
        '<em>标准</em>主要起草人：李书民、彭世琪、黄洁、崔勇、李光永、严昌荣、张树阁、张铁军、王海鹏、赵秉强、王蕾、洪俊君。...'
    },
    _index: 'cy_spider_data_2019_05_08',
    _type: '_doc',
    doc: {
      zh_title: '高标准农田建设标准 ',
      belongs_org: null,
      issus_date: '2012-06-01 00:00:00',
      std_org: '[NY] 农业行业标准',
      eng_title: 'Criterion of high standard farmland',
      source: null,
      language_type: '中文',
      usage_std: '[]',
      ccs_type: "['【B91】农机具']",
      issuer:
        '标准主要起草人：李书民、彭世琪、黄洁、崔勇、李光永、严昌荣、张树阁、张铁军、王海鹏、赵秉强、王蕾、洪俊君。',
      substracted_std: '[]',
      ics_type: "['【65.040】Farm buildings, structures and installations']",
      std_no: 'NY/T 2148-2012',
      expire_date: null,
      publish_org: null,
      issue_org:
        '本标准起草单位：农业部工程建设服务中心。本标准起草协作单位：全国农业技术推广服务中心、中国农业科学院农业环境与可持续发展研究所、农业部农业机械化技术开发推广总站、中国农业大学。',
      record: null,
      std_abs: null,
      used_std: '[]',
      publish_date: '2012-03-01 00:00:00',
      status: '有效',
      substract_std: '[]'
    },
    _id: 'J0WSlWoBQALCGhUSntoD'
  },
  {
    highlight: {
      zh_title: '高<em>标准</em>农田建设<em>标准 </em>...',
      std_org: '[NY] 农业行业<em>标准</em>...',
      issue_org:
        '本<em>标准</em>起草单位：农业部工程建设服务中心。本<em>标准</em>起草协作单位：全国农业技术推广服务中心、中国农业科学院农业环境与可持续发展研究所、农业部农业机械化技术开发推广总站、中国农业大学。...',
      issuer:
        '<em>标准</em>主要起草人：李书民、彭世琪、黄洁、崔勇、李光永、严昌荣、张树阁、张铁军、王海鹏、赵秉强、王蕾、洪俊君。...'
    },
    _index: 'cy_spider_data_2019_05_08',
    _type: '_doc',
    doc: {
      zh_title: '高标准农田建设标准 ',
      belongs_org: '',
      issus_date: '2012-06-01 00:00:00',
      std_org: '[NY] 农业行业标准',
      eng_title: 'Criterion of high standard farmland',
      source: '',
      language_type: '中文',
      usage_std: '[]',
      ccs_type: "['【B91】农机具']",
      issuer:
        '标准主要起草人：李书民、彭世琪、黄洁、崔勇、李光永、严昌荣、张树阁、张铁军、王海鹏、赵秉强、王蕾、洪俊君。',
      substracted_std: '[]',
      ics_type: "['【65.040】Farm buildings, structures and installations']",
      std_no: 'NY/T 2148-2012',
      expire_date: '',
      publish_org: '',
      issue_org:
        '本标准起草单位：农业部工程建设服务中心。本标准起草协作单位：全国农业技术推广服务中心、中国农业科学院农业环境与可持续发展研究所、农业部农业机械化技术开发推广总站、中国农业大学。',
      record: '',
      std_abs: '',
      used_std: '[]',
      publish_date: '2012-03-01 00:00:00',
      status: '有效',
      substract_std: '[]'
    },
    _id: 'z0WSlWoBQALCGhUSV29n'
  }
]
