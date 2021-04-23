<template>
	<view class="whole">
		<view class="centerBox">
			<text class="loginText">登录</text>
			<view class="photoBox">
				<text class="iconfont icon-zhanghao loginicon"></text>
				<input type="text"  placeholder="账号"/>
			</view>
			<view class="codeBox">
				<text class="iconfont icon-mima loginicon"></text>
				<input type="text" placeholder="密码" />
			</view>
			<button class="loginBtn" @click="login">登录</button>
		</view>
	</view>
</template>

<script>
	import tools from "../../static/tool.js"
	export default {
		data() {
			return {
				title: '这是首页'
			}
		},
		onLoad() {

		},
		methods: {
			login(){
				tools.showTip("登录成功");
				tools.jump_red("/pages/home/home")
			},
			jump_nav(){
				tools.jump_nav('/pages/checklogistics/checklogistics');
			}
		}
	}
</script>

<style lang="scss">
	.whole{
		width: 100vw;
		height: 100vh;
		padding: 0 46upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.centerBox{
		width: 100%;
	}
	.loginText{
		color: #333;
		font-size: 56upx;
		font-weight: bold;
		letter-spacing: 8upx;
	}
	.photoBox,.codeBox{
		display: flex;
		align-items: center;
		margin-bottom: 62upx;
		border-bottom: 2upx solid #dedede;
		padding-bottom: 20upx;
	}
	.photoBox{
		margin-top: 100upx;
	}
	.loginicon{
		font-size: 46upx;
		color: #5897E3;
	}
	.photoBox>.loginicon{
		font-size: 52upx;
	}
	.photoBox>input,.codeBox>input{
		flex: 1;
		margin-left: 32upx;
		font-size: 32upx;
	}
	.loginBtn{
		width: 609upx;
		height: 90upx;
		border-radius: 20upx;
		background-color: #5393FD;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		font-size: 34upx;
		letter-spacing: 8upx;
		margin-top: 140upx;
	}
</style>
