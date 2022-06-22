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
// router.get('/userInfo', function(req, res) {
// 	let data = {
// 		resultMsg: '成功',
// 		resultCode: 200,
// 		data: {
// 			username: 'admin',
// 			avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
// 		}
// 	}
// 	res.send(data)
// })
//菜单
let token = 123
router.post('/userInfo', function(req, res) {
	res.header('authorization',token)
	for (let i = 0; i < 6; i++) {

	}
	let data = {
		resultMsg: '成功',
		resultCode: '200',
		data: {
			permissions:[],
			userInfo:{
				username: 'admin',
				avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
			},
			menuList: [{
					id: Mock.mock('@id'),
					url: 'onlineDev',
					menuName: '在线开发',
					permission: 'onlineDev',
					hideInMenu: false,
					children: [{
							id: Mock.mock('@id'),
							menuName: '功能设计',
							url: 'onlineDev/webDesign',
							permission: 'onlineDev_webDesign',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '移动设计',
							url: 'onlineDev/appDesign',
							permission: 'onlineDev_appDesign',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '报表设计',
							url: 'onlineDev/dataReport',
							permission: 'onlineDev_dataReport',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '大屏设计',
							url: 'onlineDev/dataScreen',
							permission: 'onlineDev_dataScreen',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '门户设计',
							url: 'onlineDev/visualPortal',
							permission: 'onlineDev_visualPortal',
							hideInMenu: false,
							children: []
						}
					]
				},
				{
					id: Mock.mock('@id'),
					url: 'generator',
					menuName: '代码生成',
					permission: 'generator',
					hideInMenu: false,
					children: [{
							id: Mock.mock('@id'),
							menuName: '功能表单',
							url: 'generator/webForm',
							permission: 'generator_webForm',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '移动表单',
							url: 'generator/appForm',
							permission: 'generator_appForm',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '流程表单',
							url: 'generator/flowForm',
							permission: 'generator_flowForm',
							hideInMenu: false,
							children: []
						}
					]
				},
				{
					id: Mock.mock('@id'),
					url: 'system',
					menuName: '系统管理',
					permission: 'system',
					hideInMenu: false,
					children: [{
							id: Mock.mock('@id'),
							menuName: '系统配置',
							url: 'system/sysConfig',
							permission: 'system_sysConfig',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '系统公告',
							url: 'system/notice',
							permission: 'system_notice',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '系统调度',
							url: 'system/task',
							permission: 'system_task',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '系统缓存',
							url: 'system/cache',
							permission: 'system_cache',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '系统日志',
							url: 'system/log',
							permission: 'system_log',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '系统监控',
							url: 'system/monitor',
							permission: 'system_monitor',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '系统图标',
							url: 'system/icons',
							permission: 'system_icons',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '菜单管理',
							url: 'system/menu',
							permission: 'system_menu',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '行政区划',
							url: 'system/area',
							permission: 'system_area',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '单据规则',
							url: 'system/billRule',
							permission: 'system_billRule',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '数据应用',
							url: 'systemData',
							permission: 'systemData',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									menuName: '数据连接',
									url: 'systemData/dataSource',
									permission: 'systemData_dataSource',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '数据建模',
									url: 'systemData/dataModel',
									permission: 'systemData_dataModel',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '数据备份',
									url: 'systemData/dataBackup',
									permission: 'systemData_dataBackup',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '数据字典',
									url: 'systemData/dictionary',
									permission: 'systemData_dictionary',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '数据接口',
									url: 'systemData/dataInterface',
									permission: 'systemData_dataInterface',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '数据同步',
									url: 'systemData/dataSync',
									permission: 'systemData_dataSync',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '数据地图',
									url: 'systemData/map',
									permission: 'systemData_map',
									hideInMenu: false,
									children: []
								}
							]
						},
						{
							id: Mock.mock('@id'),
							menuName: '微信配置',
							url: 'weChat',
							permission: 'weChat',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									menuName: '公众号配置',
									url: 'weChat/mpConfig',
									permission: 'weChat_mpConfig',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '公众号菜单',
									url: 'weChat/mpMenu',
									permission: 'weChat_mpMenu',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '公众号用户',
									url: 'weChat/mpUser',
									permission: 'weChat_mpUser',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '公众号消息',
									url: 'weChat/mpMessage',
									permission: 'weChat_mpMessage',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '公众号素材',
									url: 'weChat/mpMaterial',
									permission: 'weChat_mpMaterial',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '企业号配置',
									url: 'weChat/qyhConfig',
									permission: 'weChat_qyhConfig',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '企业号组织',
									url: 'weChat/qyDepartment',
									permission: 'weChat_qyDepartment',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '企业号用户',
									url: 'weChat/qyUser',
									permission: 'weChat_qyUser',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '企业号消息',
									url: 'weChat/qyMessage',
									permission: 'weChat_qyMessage',
									hideInMenu: false,
									children: []
								}
							]
						}
					]
				},
				{
					id: Mock.mock('@id'),
					url: 'permission',
					menuName: '系统权限',
					permission: 'permission',
					hideInMenu: false,
					children: [{
							id: Mock.mock('@id'),
							menuName: '组织管理',
							url: 'permission/organize',
							permission: 'permission_organize',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '部门管理',
							url: 'permission/department',
							permission: 'permission_department',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '岗位管理',
							url: 'permission/position',
							permission: 'permission_position',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '用户管理',
							url: 'permission/user',
							permission: 'permission_user',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '角色管理',
							url: 'permission/role',
							permission: 'permission_role',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '权限管理',
							url: 'permission/authorize',
							permission: 'permission_authorize',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '在线用户',
							url: 'permission/userOnline',
							permission: 'permission_userOnline',
							hideInMenu: false,
							children: []
						}
					]
				},
				{
					id: Mock.mock('@id'),
					url: 'workFlow',
					menuName: '工作流程',
					permission: 'workFlow',
					hideInMenu: false,
					children: [{
							id: Mock.mock('@id'),
							menuName: '流程设计',
							url: 'workFlow/flowEngine',
							permission: 'workFlow_flowEngine',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '我发起的',
							url: 'workFlow/flowLaunch',
							permission: 'workFlow_flowLaunch',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '待办事宜',
							url: 'workFlow/flowTodo',
							permission: 'workFlow_flowTodo',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '已办事宜',
							url: 'workFlow/flowDone',
							permission: 'workFlow_flowDone',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '抄送事宜',
							url: 'workFlow/flowCirculate',
							permission: 'workFlow_flowCirculate',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '流程委托',
							url: 'workFlow/entrust',
							permission: 'workFlow_entrust',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '流程监控',
							url: 'workFlow/flowMonitor',
							permission: 'workFlow_flowMonitor',
							hideInMenu: false,
							children: []
						}
					]
				},
				{
					id: Mock.mock('@id'),
					url: 'extend',
					menuName: '扩展应用',
					permission: 'extend',
					hideInMenu: false,
					children: [
						{
							id: Mock.mock('@id'),
							menuName: '报表示例',
							url: 'dataReport',
							permission: 'dataReport',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									menuName: '交叉占比',
									url: 'dataReport/jiaocha',
									permission: 'dataReport_jiaocha',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '员工薪水占比',
									url: 'dataReport/yuangong',
									permission: 'dataReport_yuangong',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '向下分组统计',
									url: 'dataReport/xiangxia',
									permission: 'dataReport_xiangxia',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '可钻取交叉',
									url: 'dataReport/kezhan',
									permission: 'dataReport_kezhan',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '交叉统计',
									url: 'dataReport/jiaochatongji',
									permission: 'dataReport_jiaochatongji',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '横向多片交叉',
									url: 'dataReport/hengxiang',
									permission: 'dataReport_hengxiang',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '用户列表',
									url: 'dataReport/yonghu',
									permission: 'dataReport_yonghu',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '错行分组',
									url: 'dataReport/cuoxing',
									permission: 'dataReport_cuoxing',
									hideInMenu: false,
									children: []
								}
							]
						},
						{
							id: Mock.mock('@id'),
							menuName: '大屏示例',
							url: 'reportBI',
							permission: 'reportBI',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									menuName: '乡村振兴普惠金融服务平台',
									url: 'http://localhost:8100/DataV/view/5bf2f01582b7481a9daa8db940dd4caa?token=bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE2NTMyMzAxNTgsImF1dGhvcml0aWVzIjpbImFhIl0sImp0aSI6IjRkZmIzYzcwLTAxNzgtNGJlNC1hNGZkLTU4NDUzNjcxYmFhYyIsImNsaWVudF9pZCI6ImFkbWluIiwidG9rZW4iOiJsb2dpbl90b2tlbl80YTVhNWE0MjFlNjE0MmNkYTg3ZWU4YWExNWRkZGY1ZiJ9.EdyBIyK9K6UoXifeH1xx2vQ8B7qhDJxOD3wLAmAjeLhRb_iFKD_XsOq-hSJA-KzeSvo9fA34R3m8-tPAKReTI0fTRYIh-3CzTa1DWw0htS-NXOl--08nTCMBwclB3ruYcltvUhyqo9xQLZ54a7NjP0VYclZ-c3gt_SFdoHrvi96pX9ql_okODseQfQoCq9oMsmDvPny3nYpBaRZhMnHKM_JBukaHJdYwlMW_Ov35P-R_Q9Yv8HlW0w45gYzLyDKyr7QgBtDtyBOoWkeiMxZVZba-77dn09E0IXglGQkIIKWDt29FsT-k2fn_5yD75tnouEtEkUHCc0tgixv2oNgCLQ',
									permission:'xiangzheng',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '网络机房设备信息',
									url: 'http://localhost:8100/DataV/view/a5bc61d662f8444a901d3a48c716f0b8?token=bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE2NTMyMzAxNTgsImF1dGhvcml0aWVzIjpbImFhIl0sImp0aSI6IjRkZmIzYzcwLTAxNzgtNGJlNC1hNGZkLTU4NDUzNjcxYmFhYyIsImNsaWVudF9pZCI6ImFkbWluIiwidG9rZW4iOiJsb2dpbl90b2tlbl80YTVhNWE0MjFlNjE0MmNkYTg3ZWU4YWExNWRkZGY1ZiJ9.EdyBIyK9K6UoXifeH1xx2vQ8B7qhDJxOD3wLAmAjeLhRb_iFKD_XsOq-hSJA-KzeSvo9fA34R3m8-tPAKReTI0fTRYIh-3CzTa1DWw0htS-NXOl--08nTCMBwclB3ruYcltvUhyqo9xQLZ54a7NjP0VYclZ-c3gt_SFdoHrvi96pX9ql_okODseQfQoCq9oMsmDvPny3nYpBaRZhMnHKM_JBukaHJdYwlMW_Ov35P-R_Q9Yv8HlW0w45gYzLyDKyr7QgBtDtyBOoWkeiMxZVZba-77dn09E0IXglGQkIIKWDt29FsT-k2fn_5yD75tnouEtEkUHCc0tgixv2oNgCLQ',
									permission:'jifang',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '数据大屏管理驾驶舱',
									url: 'http://localhost:8100/DataV/view/6c2c820a2a704292bedf635dcaa9c3d8?token=bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE2NTMyMzAxNTgsImF1dGhvcml0aWVzIjpbImFhIl0sImp0aSI6IjRkZmIzYzcwLTAxNzgtNGJlNC1hNGZkLTU4NDUzNjcxYmFhYyIsImNsaWVudF9pZCI6ImFkbWluIiwidG9rZW4iOiJsb2dpbl90b2tlbl80YTVhNWE0MjFlNjE0MmNkYTg3ZWU4YWExNWRkZGY1ZiJ9.EdyBIyK9K6UoXifeH1xx2vQ8B7qhDJxOD3wLAmAjeLhRb_iFKD_XsOq-hSJA-KzeSvo9fA34R3m8-tPAKReTI0fTRYIh-3CzTa1DWw0htS-NXOl--08nTCMBwclB3ruYcltvUhyqo9xQLZ54a7NjP0VYclZ-c3gt_SFdoHrvi96pX9ql_okODseQfQoCq9oMsmDvPny3nYpBaRZhMnHKM_JBukaHJdYwlMW_Ov35P-R_Q9Yv8HlW0w45gYzLyDKyr7QgBtDtyBOoWkeiMxZVZba-77dn09E0IXglGQkIIKWDt29FsT-k2fn_5yD75tnouEtEkUHCc0tgixv2oNgCLQ',
									permission:'dapingshuju',
									hideInMenu: false,
									children: []
								}
							]
						},
						{
							id: Mock.mock('@id'),
							menuName: '图表示例',
							url: 'extend.graphDemo',
							permission:'graphDemo',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									menuName: 'E-柱状图',
									url: 'extend/graphDemo/echartsBar',
									permission:'extend_echartsBar',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'E-饼状图',
									url: 'extend/graphDemo/echartsPie',
									permission:'extend_echartsPie',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'E-横状条形图',
									url: 'extend/graphDemo/echartsBarAcross',
									permission:'graphDemo_echartsBarAcross',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'E-仪表图',
									url: 'extend/graphDemo/echartsGauge',
									permission:'graphDemo_echartsGauge',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'E-线形图',
									url: 'extend/graphDemo/echartsLineArea',
									permission:'graphDemo_echartsLineArea',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'E-散点图',
									url: 'extend/graphDemo/echartsScatter',
									permission:'graphDemo_echartsScatter',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'E-K线图',
									url: 'extend/graphDemo/echartsCandlestick',
									permission:'graphDemo_echartsCandlestick',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'E-折柱混合图',
									url: 'extend/graphDemo/echartsLineBar',
									permission:'graphDemo_echartsLineBar',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'E-树形图',
									url: 'extend/graphDemo/echartsTree',
									permission:'graphDemo_echartsTree',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'E-漏斗图',
									url: 'extend/graphDemo/echartsFunnel',
									permission:'graphDemo_echartsFunnel',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'H-散点图',
									url: 'extend/graphDemo/highchartsScatter',
									permission:'graphDemo_highchartsScatter',
									hideInMenu: false,
									children: []
								},

								{
									id: Mock.mock('@id'),
									menuName: 'H-词云图',
									url: 'extend/graphDemo/highchartsWordcloud',
									permission:'graphDemo_highchartsWordcloud',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'H-线性图',
									url: 'extend/graphDemo/highchartsLine',
									permission:'graphDemo_highchartsLine',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'H-面积图',
									url: 'extend/graphDemo/highchartsArea',
									permission:'graphDemo_highchartsArea',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'H-仪表图',
									url: 'extend/graphDemo/highchartsGauge',
									permission:'graphDemo_highchartsGauge',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'H-贝尔曲线',
									url: 'extend/graphDemo/highchartsBellcurve',
									permission:'graphDemo_highchartsBellcurve',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'H-漏斗图',
									url: 'extend/graphDemo/highchartsFunnel',
									permission:'graphDemo_highchartsFunnel',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'H-子弹图',
									url: 'extend/graphDemo/highchartsBullet',
									permission:'graphDemo_highchartsBullet',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'H-柱状图',
									url: 'extend/graphDemo/highchartsColumn',
									permission:'graphDemo_highchartsColumn',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: 'H-饼状图',
									url: 'extend/graphDemo/highchartsPie',
									permission:'graphDemo_highchartsPie',
									hideInMenu: false,
									children: []
								}
							]
						},
						{
							id: Mock.mock('@id'),
							menuName: '表格示例',
							url: 'extend.tableDemo',
							permission:'tableDemo',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									menuName: '普通表格',
									url: 'extend/tableDemo/commonTable',
									permission:'tableDemo_commonTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '表格统计',
									url: 'extend/tableDemo/statisticsTable',
									permission:'tableDemo_statisticsTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '表格锁定',
									url: 'extend/tableDemo/lockTable',
									permission:'tableDemo_lockTable',
									hideInMenu: false,
									children: []
								},

								{
									id: Mock.mock('@id'),
									menuName: '表格分组',
									url: 'extend/tableDemo/groupingTable',
									permission:'tableDemo_groupingTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '表格编辑',
									url: 'extend/tableDemo/redactTable',
									permission:'tableDemo_redactTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '复杂表头',
									url: 'extend/tableDemo/complexHeader',
									permission:'tableDemo_complexHeader',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '表格合并',
									url: 'extend/tableDemo/mergeTable',
									permission:'tableDemo_mergeTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '表格打印',
									url: 'extend/tableDemo/printTable',
									permission:'tableDemo_printTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '延伸扩展',
									url: 'extend/tableDemo/extension',
									permission:'tableDemo_extension',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '树形表格',
									url: 'extend/tableDemo/treeTable',
									permission:'tableDemo_treeTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '表格批注',
									url: 'extend/tableDemo/postilTable',
									permission:'tableDemo_postilTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '表格标记',
									url: 'extend/tableDemo/signTable',
									permission:'tableDemo_signTable',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '表格树形',
									url: 'extend/tableDemo/tableTree',
									permission:'tableDemo_tableTree',
									hideInMenu: false,
									children: []
								}
							]
						},
						{
							id: Mock.mock('@id'),
							menuName: '表单示例',
							url: 'extend.formDemo',
							permission:'formDemo',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									menuName: '表单验证',
									url: 'extend/formDemo/verifyForm',
									permission:'formDemo_verifyForm',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '表单验证1',
									url: 'extend/formDemo/verifyForm1',
									permission:'formDemo_verifyForm1',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '表单字段1',
									url: 'extend/formDemo/fieldForm1',
									permission:'formDemo_fieldForm1',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '表单字段2',
									url: 'extend/formDemo/fieldForm2',
									permission:'formDemo_fieldForm2',
									hideInMenu: false,
									children: []
								},

								{
									id: Mock.mock('@id'),
									menuName: '表单字段3',
									url: 'extend/formDemo/fieldForm3',
									permission:'formDemo_fieldForm3',
									hideInMenu: false,
									children: []

								},
								{
									id: Mock.mock('@id'),
									menuName: '表单字段4',
									url: 'extend/formDemo/fieldForm4',
									permission:'formDemo_fieldForm4',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '表单字段5',
									url: 'extend/formDemo/fieldForm5',
									permission:'formDemo_fieldForm5',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '表单字段6',
									url: 'extend/formDemo/fieldForm6',
									permission:'formDemo_fieldForm6',
									hideInMenu: false,
									children: []
								}
							]
						},
						{
							id: Mock.mock('@id'),
							menuName: '功能示例',
							url: 'gongnegshili',
							permission:'gongnegshili',
							hideInMenu: false,
							children: [{
									id: Mock.mock('@id'),
									menuName: '应收费用',
									url: 'model/2323232',
									permission:'gongnegshili_2323232',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '大客户信息',
									url: 'model/kehuxinxi',
									permission:'gongnegshili_kehuxinxi',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '库房管理',
									url: 'model/kufang',
									permission:'gongnegshili_kufang',
									hideInMenu: false,
									children: []
								},
								{
									id: Mock.mock('@id'),
									menuName: '入职申请',
									url: 'model/ruzhi',
									permission:'gongnegshili_ruzhi',
									hideInMenu: false,
									children: []
								}

							]
						},
						{
							id: Mock.mock('@id'),
							menuName: '百万数据',
							url: 'extend/bigData',
							permission:'extend_bigData',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '导入导出',
							url: 'extend/importAndExport',
							permission:'extend_importAndExport',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '电子签名',
							url: 'extend/signature',
							permission:'extend_signature',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '电子签章',
							url: 'extend/signet',
							permission:'extend_signet',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '日程安排',
							url: 'extend/schedule',
							permission:'extend_schedule',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '邮件收发',
							url: 'extend/email',
							permission:'extend_email',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '知识管理',
							url: 'extend/document',
							permission:'extend_document',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '文件预览',
							url: 'extend/documentPreview',
							permission:'extend_documentPreview',
							hideInMenu: false,
							children: []
						},

						{
							id: Mock.mock('@id'),
							menuName: '条码示例',
							url: 'extend/barCode',
							permission:'extend_barCode',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '打印示例',
							url: 'extend/printData',
							permission:'extend_printData',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '地图示例',
							url: 'extend/map',
							permission:'extend_map',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '订单管理',
							url: 'extend/order',
							permission:'extend_order',
							hideInMenu: false,
							children: []
						},
						{
							id: Mock.mock('@id'),
							menuName: '项目管理',
							url: 'extend/projectGantt',
							permission:'extend_projectGantt',
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
