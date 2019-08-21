window.app = {
	
	/**
	 * http请求的地址
	 */
	serverUrl:'http://192.168.0.103:8080',
	
	/**
	 * websocket请求的地址
	 */
	wsUrl:'ws://192.168.0.103:8081/ws',
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
	
	/**
	 * 获取用户的全局对象
	 */
	getGlobalUserInfo:function(){
		return plus.storage.getItem("userInfo");
	}
	
}
