const express = require('express')
const router = express.Router()
const Mock = require('mockjs')
const constData = require('./../../mock/const.js')
const dataArr = function(mock, length) {
	let arr = []
	for (let i = 0; i < length; i++) {
		arr.push(Mock.mock(mock))
	}
	return arr
}
//登录
router.get('/userInfo', function(req, res) {
	let data = {
		resultMsg: '成功',
		resultCode: 200,
		data: {
			username: 'admin',
			avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
		}
	}
	res.send(data)
})
//菜单
router.get('/meuList', function(req, res) {
	let ids = []
	for (let i = 0; i < 6; i++) {

	}
	let data = {
		resultMsg: '成功',
		resultCode: 200,
		data: {
			menuList: [{
					id: Mock.mock('@id'),
					path: '/onlineDev',
					title: '在线开发',
					unique: 'onlineDev',
					hideInMenu: false,
					children: [{
							id: Mock.mock('@id'),
							title: '功能设计',
							path: '/onlineDev/webDesign',
							unique: 'onlineDev_webDesign',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '移动设计',
							path: '/onlineDev/appDesign',
							unique: 'onlineDev_appDesign',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '报表设计',
							path: '/onlineDev/dataReport',
							unique: 'onlineDev_dataReport',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '大屏设计',
							path: '/onlineDev/dataScreen',
							unique: 'onlineDev_dataScreen',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '门户设计',
							path: '/onlineDev/visualPortal',
							unique: 'onlineDev_visualPortal',
							hideInMenu: false,
							children: []
						}
					]
				},
				{
					id: Mock.mock('@id'),
					path: '/generator',
					title: '代码生成',
					unique: 'generator',
					hideInMenu: false,
					children: [{
							id: Mock.mock('@id'),
							title: '功能表单',
							path: '/generator/webForm',
							unique: 'generator_webForm',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '移动表单',
							path: '/generator/appForm',
							unique: 'generator_webForm',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '流程表单',
							path: '/generator/flowForm',
							unique: 'generator_webForm',
							hideInMenu: false,
							children: []
						}
					]
				},
				{
					id: Mock.mock('@id'),
					path: '/system',
					title: '系统管理',
					unique: 'system',
					hideInMenu: false,
					children: [{
							id: Mock.mock('@id'),
							title: '系统配置',
							path: '/system/sysConfig',
							unique: 'system_sysConfig',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '系统公告',
							path: '/system/notice',
							unique: 'system_notice',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '系统调度',
							path: '/system/task',
							unique: 'system_task',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '系统缓存',
							path: '/system/cache',
							unique: 'system_cache',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '系统日志',
							path: '/system/log',
							unique: 'system_log',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '系统监控',
							path: '/system/monitor',
							unique: 'system_monitor',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '系统图标',
							path: '/system/icons',
							unique: 'system_icons',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '菜单管理',
							path: '/system/menu',
							unique: 'system_menu',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '行政区划',
							path: '/system/area',
							unique: 'system_area',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '单据规则',
							path: '/system/billRule',
							unique: 'system_billRule',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '数据应用',
							path: '/systemData',
							unique: 'systemData',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									title: '数据连接',
									path: '/systemData/dataSource',
									unique: 'systemData_dataSource',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '数据建模',
									path: '/systemData/dataModel',
									unique: 'systemData_dataModel',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '数据备份',
									path: '/systemData/dataBackup',
									unique: 'systemData_dataBackup',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '数据字典',
									path: '/systemData/dictionary',
									unique: 'systemData_dictionary',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '数据接口',
									path: '/systemData/dataInterface',
									unique: 'systemData_dataInterface',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '数据同步',
									path: '/systemData/dataSync',
									unique: 'systemData_dataSync',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '数据地图',
									path: '/systemData/map',
									unique: 'systemData_map',
									hideInMenu: false,
									children: []
								}
							]
						},
						{
							id: Mock.mock('@id'),
							title: '微信配置',
							path: '/weChat',
							unique: 'weChat',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									title: '公众号配置',
									path: '/weChat/mpConfig',
									unique: 'weChat_mpConfig',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '公众号菜单',
									path: '/weChat/mpMenu',
									unique: 'weChat_mpMenu',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '公众号用户',
									path: '/weChat/mpUser',
									unique: 'weChat_mpUser',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '公众号消息',
									path: '/weChat/mpMessage',
									unique: 'weChat_mpMessage',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '公众号素材',
									path: '/weChat/mpMaterial',
									unique: 'weChat_mpMaterial',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '企业号配置',
									path: '/weChat/qyhConfig',
									unique: 'weChat_qyhConfig',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '企业号组织',
									path: '/weChat/qyDepartment',
									unique: 'weChat_qyDepartment',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '企业号用户',
									path: '/weChat/qyUser',
									unique: 'weChat_qyUser',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '企业号消息',
									path: '/weChat/qyMessage',
									unique: 'weChat_qyMessage',
									hideInMenu: false,
									children: []
								}
							]
						}
					]
				},
				{
					id: Mock.mock('@id'),
					path: '/permission',
					title: '系统权限',
					unique: 'permission',
					hideInMenu: false,
					children: [{
							id: Mock.mock('@id'),
							title: '组织管理',
							path: '/permission/organize',
							unique: 'permission_organize',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '部门管理',
							path: '/permission/department',
							unique: 'permission_department',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '岗位管理',
							path: '/permission/position',
							unique: 'permission_position',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '用户管理',
							path: '/permission/user',
							unique: 'permission_user',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '角色管理',
							path: '/permission/role',
							unique: 'permission_role',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '权限管理',
							path: '/permission/authorize',
							unique: 'permission_authorize',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '在线用户',
							path: '/permission/userOnline',
							unique: 'permission_userOnline',
							hideInMenu: false,
							children: []
						}
					]
				},
				{
					id: Mock.mock('@id'),
					path: '/workFlow',
					title: '工作流程',
					unique: 'workFlow',
					hideInMenu: false,
					children: [{
							id: Mock.mock('@id'),
							title: '流程设计',
							path: '/workFlow/flowEngine',
							unique: 'workFlow_flowEngine',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '我发起的',
							path: '/workFlow/flowLaunch',
							unique: 'workFlow_flowLaunch',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '待办事宜',
							path: '/workFlow/flowTodo',
							unique: 'workFlow_flowTodo',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '已办事宜',
							path: '/workFlow/flowDone',
							unique: 'workFlow_flowDone',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '抄送事宜',
							path: '/workFlow/flowCirculate',
							unique: 'workFlow_flowCirculate',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '流程委托',
							path: '/workFlow/entrust',
							unique: 'workFlow_entrust',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '流程监控',
							path: '/workFlow/flowMonitor',
							unique: 'workFlow_flowMonitor',
							hideInMenu: false,
							children: []
						}
					]
				},
				{
					id: Mock.mock('@id'),
					path: '/extend',
					title: '扩展应用',
					unique: 'extend',
					hideInMenu: false,
					children: [
						{
							id: Mock.mock('@id'),
							title: '报表示例',
							path: '/dataReport',
							unique: 'dataReport',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									title: '交叉占比',
									path: '/dataReport/jiaocha',
									unique: 'dataReport_jiaocha',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '员工薪水占比',
									path: '/dataReport/yuangong',
									unique: 'dataReport_yuangong',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '向下分组统计',
									path: '/dataReport/xiangxia',
									unique: 'dataReport_xiangxia',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '可钻取交叉',
									path: '/dataReport/kezhan',
									unique: 'dataReport_kezhan',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '交叉统计',
									path: '/dataReport/jiaochatongji',
									unique: 'dataReport_jiaochatongji',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '横向多片交叉',
									path: '/dataReport/hengxiang',
									unique: 'dataReport_hengxiang',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '用户列表',
									path: '/dataReport/yonghu',
									unique: 'dataReport_yonghu',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '错行分组',
									path: '/dataReport/cuoxing',
									unique: 'dataReport_cuoxing',
									hideInMenu: false,
									children: []
								}
							]
						},
						{
							id: Mock.mock('@id'),
							title: '大屏示例',
							path: '/reportBI',
							unique: 'reportBI',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									title: '乡村振兴普惠金融服务平台',
									path: 'http://localhost:8100/DataV/view/5bf2f01582b7481a9daa8db940dd4caa?token=bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE2NTMyMzAxNTgsImF1dGhvcml0aWVzIjpbImFhIl0sImp0aSI6IjRkZmIzYzcwLTAxNzgtNGJlNC1hNGZkLTU4NDUzNjcxYmFhYyIsImNsaWVudF9pZCI6ImFkbWluIiwidG9rZW4iOiJsb2dpbl90b2tlbl80YTVhNWE0MjFlNjE0MmNkYTg3ZWU4YWExNWRkZGY1ZiJ9.EdyBIyK9K6UoXifeH1xx2vQ8B7qhDJxOD3wLAmAjeLhRb_iFKD_XsOq-hSJA-KzeSvo9fA34R3m8-tPAKReTI0fTRYIh-3CzTa1DWw0htS-NXOl--08nTCMBwclB3ruYcltvUhyqo9xQLZ54a7NjP0VYclZ-c3gt_SFdoHrvi96pX9ql_okODseQfQoCq9oMsmDvPny3nYpBaRZhMnHKM_JBukaHJdYwlMW_Ov35P-R_Q9Yv8HlW0w45gYzLyDKyr7QgBtDtyBOoWkeiMxZVZba-77dn09E0IXglGQkIIKWDt29FsT-k2fn_5yD75tnouEtEkUHCc0tgixv2oNgCLQ',
									unique:'xiangzheng',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '网络机房设备信息',
									path: 'http://localhost:8100/DataV/view/a5bc61d662f8444a901d3a48c716f0b8?token=bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE2NTMyMzAxNTgsImF1dGhvcml0aWVzIjpbImFhIl0sImp0aSI6IjRkZmIzYzcwLTAxNzgtNGJlNC1hNGZkLTU4NDUzNjcxYmFhYyIsImNsaWVudF9pZCI6ImFkbWluIiwidG9rZW4iOiJsb2dpbl90b2tlbl80YTVhNWE0MjFlNjE0MmNkYTg3ZWU4YWExNWRkZGY1ZiJ9.EdyBIyK9K6UoXifeH1xx2vQ8B7qhDJxOD3wLAmAjeLhRb_iFKD_XsOq-hSJA-KzeSvo9fA34R3m8-tPAKReTI0fTRYIh-3CzTa1DWw0htS-NXOl--08nTCMBwclB3ruYcltvUhyqo9xQLZ54a7NjP0VYclZ-c3gt_SFdoHrvi96pX9ql_okODseQfQoCq9oMsmDvPny3nYpBaRZhMnHKM_JBukaHJdYwlMW_Ov35P-R_Q9Yv8HlW0w45gYzLyDKyr7QgBtDtyBOoWkeiMxZVZba-77dn09E0IXglGQkIIKWDt29FsT-k2fn_5yD75tnouEtEkUHCc0tgixv2oNgCLQ',
									unique:'jifang',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '数据大屏管理驾驶舱',
									path: 'http://localhost:8100/DataV/view/6c2c820a2a704292bedf635dcaa9c3d8?token=bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE2NTMyMzAxNTgsImF1dGhvcml0aWVzIjpbImFhIl0sImp0aSI6IjRkZmIzYzcwLTAxNzgtNGJlNC1hNGZkLTU4NDUzNjcxYmFhYyIsImNsaWVudF9pZCI6ImFkbWluIiwidG9rZW4iOiJsb2dpbl90b2tlbl80YTVhNWE0MjFlNjE0MmNkYTg3ZWU4YWExNWRkZGY1ZiJ9.EdyBIyK9K6UoXifeH1xx2vQ8B7qhDJxOD3wLAmAjeLhRb_iFKD_XsOq-hSJA-KzeSvo9fA34R3m8-tPAKReTI0fTRYIh-3CzTa1DWw0htS-NXOl--08nTCMBwclB3ruYcltvUhyqo9xQLZ54a7NjP0VYclZ-c3gt_SFdoHrvi96pX9ql_okODseQfQoCq9oMsmDvPny3nYpBaRZhMnHKM_JBukaHJdYwlMW_Ov35P-R_Q9Yv8HlW0w45gYzLyDKyr7QgBtDtyBOoWkeiMxZVZba-77dn09E0IXglGQkIIKWDt29FsT-k2fn_5yD75tnouEtEkUHCc0tgixv2oNgCLQ',
									unique:'dapingshuju',
									hideInMenu: false,
									children: []
								}
							]
						},
						{
							id: Mock.mock('@id'),
							title: '图表示例',
							path: '/extend.graphDemo',
							unique:'graphDemo',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									title: 'E-柱状图',
									path: '/extend/graphDemo/echartsBar',
									unique:'graphDemo',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'E-饼状图',
									path: '/extend/graphDemo/echartsPie',
									unique:'graphDemo',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'E-横状条形图',
									path: '/extend/graphDemo/echartsBarAcross',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'E-仪表图',
									path: '/extend/graphDemo/echartsGauge',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'E-线形图',
									path: '/extend/graphDemo/echartsLineArea',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'E-散点图',
									path: '/extend/graphDemo/echartsScatter',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'E-K线图',
									path: '/extend/graphDemo/echartsCandlestick',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'E-折柱混合图',
									path: '/extend/graphDemo/echartsLineBar',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'E-树形图',
									path: '/extend/graphDemo/echartsTree',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'E-漏斗图',
									path: '/extend/graphDemo/echartsFunnel',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'H-散点图',
									path: '/extend/graphDemo/highchartsScatter',
									hideInMenu: false,
									children: []
								},

								{
									id: Mock.mock('@id'),
									title: 'H-词云图',
									path: '/extend/graphDemo/highchartsWordcloud',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'H-线性图',
									path: '/extend/graphDemo/highchartsLine',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'H-面积图',
									path: '/extend/graphDemo/highchartsArea',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'H-仪表图',
									path: '/extend/graphDemo/highchartsGauge',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'H-贝尔曲线',
									path: '/extend/graphDemo/highchartsBellcurve',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'H-漏斗图',
									path: '/extend/graphDemo/highchartsFunnel',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'H-子弹图',
									path: '/extend/graphDemo/highchartsBullet',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'H-柱状图',
									path: '/extend/graphDemo/highchartsColumn',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: 'H-饼状图',
									path: '/extend/graphDemo/highchartsPie',
									hideInMenu: false,
									children: []
								}
							]
						},
						{
							id: Mock.mock('@id'),
							title: '表格示例',
							path: '/extend.tableDemo',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									title: '普通表格',
									path: '/extend/tableDemo/commonTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '表格统计',
									path: '/extend/tableDemo/statisticsTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '表格锁定',
									path: '/extend/tableDemo/lockTable',
									hideInMenu: false,
									children: []
								},

								{
									id: Mock.mock('@id'),
									title: '表格分组',
									path: '/extend/tableDemo/groupingTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '表格编辑',
									path: '/extend/tableDemo/redactTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '复杂表头',
									path: '/extend/tableDemo/complexHeader',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '表格合并',
									path: '/extend/tableDemo/mergeTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '表格打印',
									path: '/extend/tableDemo/printTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '延伸扩展',
									path: '/extend/tableDemo/extension',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '树形表格',
									path: '/extend/tableDemo/treeTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '表格批注',
									path: '/extend/tableDemo/postilTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '表格标记',
									path: '/extend/tableDemo/signTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '表格树形',
									path: '/extend/tableDemo/tableTree',
									hideInMenu: false,
									children: []
								}
							]
						},
						{
							id: Mock.mock('@id'),
							title: '表单示例',
							path: '/extend.formDemo',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									title: '表单验证',
									path: '/extend/formDemo/verifyForm',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '表单验证1',
									path: '/extend/formDemo/verifyForm1',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '表单字段1',
									path: '/extend/formDemo/fieldForm1',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '表单字段2',
									path: '/extend/formDemo/fieldForm2',
									hideInMenu: false,
									children: []
								},

								{
									id: Mock.mock('@id'),
									title: '表单字段3',
									path: '/extend/formDemo/fieldForm3',
									hideInMenu: false,
									children: []

								},
								{
									id: Mock.mock('@id'),
									title: '表单字段4',
									path: '/extend/formDemo/fieldForm4',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '表单字段5',
									path: '/extend/formDemo/fieldForm5',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '表单字段6',
									path: '/extend/formDemo/fieldForm6',
									hideInMenu: false,
									children: []
								}
							]
						},
						{
							id: Mock.mock('@id'),
							title: '功能示例',
							path: '/gongnegshili',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									title: '应收费用',
									path: '/model/2323232',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '大客户信息',
									path: '/model/kehuxinxi',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '库房管理',
									path: '/model/kufang',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									title: '入职申请',
									path: '/model/ruzhi',
									hideInMenu: false,
									children: []
								}

							]
						},
						{
							id: Mock.mock('@id'),
							title: '百万数据',
							path: '/extend/bigData',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '导入导出',
							path: '/extend/importAndExport',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '电子签名',
							path: '/extend/signature',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '电子签章',
							path: '/extend/signet',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '日程安排',
							path: '/extend/schedule',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '邮件收发',
							path: '/extend/email',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '知识管理',
							path: '/extend/document',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '文件预览',
							path: '/extend/documentPreview',
							hideInMenu: false,
							children: []
						},

						{
							id: Mock.mock('@id'),
							title: '条码示例',
							path: '/extend/barCode',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '打印示例',
							path: '/extend/printData',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '地图示例',
							path: '/extend/map',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '订单管理',
							path: '/extend/order',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							title: '项目管理',
							path: '/extend/projectGantt',
							hideInMenu: false,
							children: []
						}
					]
				}
			]
		}
	}
	res.send(data)
})

module.exports = router
