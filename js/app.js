window.app = {
	
	/**
	 * http请求的地址
	 */
	// serverUrl:'http://192.168.0.100:8080',
	serverUrl:'http://10.4.34.4:8080',
	
	/**
	 * websocket请求的地址
	 */
	// wsUrl:'ws://192.168.0.103:8081/ws',
	wsUrl:'ws://10.4.34.4:8081/ws',
	/**
	 * 判断字符串是否为空，true代表不为空，false代表为空
	 * @param {Object} str
	 */
	isNotNull: function(str) {
		return str != null && str != "" && str != undefined;
	},
	
	/**
	 * 保存用户的全局信息，当登录之后
	 * @param {Object} user
	 */
	setGlobalUserInfo:function(user){
		var userInfoStr = JSON.stringify(user);
		//保存到手机缓存中取
		plus.storage.setItem("userInfo",userInfoStr);
	},
	
	setGlobalMsg:function(msg, providerKey){
		var msgStr = JSON.stringify(meg)
		plus.storage.setItem(providerKey, msgStr);
	},
	
	/**
	 * 获取用户的全局对象
	 */
	getGlobalUserInfo:function(){
		var userInfo = plus.storage.getItem("userInfo");
		return JSON.parse(userInfo);
	},
	
	
	setGlobalUserImg:function(userId, msgType, msg){
		var msgList = plus.storage.getItem(userId+"_"+msgType);
		//如果是空，则创建新的数组
		if(msgList == null){
			msgList = new Array();
			msgList[0] = msg;
			plus.storage.setItem(userId+"_"+msgType, msgList);
		}else{
			msgList.push(msg);
			plus.storage.setItem(userId+"_"+msgType, msgList);
		}
	},
	
	//todo 先返回所有，后期改为分页
	getGlobalUserImg:function(userId, msgType, pageId, pageSize){
		var userInfo = plus.storage.getItem(userId+"_"+msgType);
		return JSON.parse(userInfo);
	}
	
}
