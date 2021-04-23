class tools {
	constructor(arg) {

	}
	jump_nav(url) {
		uni.navigateTo({ // 不请空页面栈跳转
			url: `${url}`,
			animationType: 'pop-in',
			animationDuration: 200
		})
	}
	jump_red(url) { //情况当前页面栈跳转
		uni.redirectTo({ 
			url: `${url}`,
			animationType: 'pop-in',
			animationDuration: 200
		})
	}
	jump_run(url) { // 清空所有页面栈跳转
		uni.reLaunch({
			url: `${url}`,
			animationType: 'pop-in',
			animationDuration: 200
		})
	}
	jump_switch(url) { // 导航栏跳转
		uni.switchTab({
			url: `${url}`
		})
	}
	jump_back(url) { // 返回 传数字
		uni.navigateBack({
			delta: `${url}`,
		});
	}
	jump_pre(url) { // 预加载跳转 
		uni.preloadPage({
			url: `${url}`
		});
	}
	showTip(val,type="none"){
		uni.showToast({
			title:val,
			icon:type,
			mask:true
		})
	}
}
export default {
	jump_nav: (new tools).jump_nav,
	jump_red: (new tools).jump_red,
	jump_run: (new tools).jump_run,
	jump_switch: (new tools).jump_switch,
	jump_back: (new tools).jump_back,
	jump_pre: (new tools).jump_pre,
	showTip:(new tools).showTip
}
