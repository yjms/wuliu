<template>
	<view class="whole">
		<view class="header">
			<view class="iptBox">
				<text class="seachIcon iconfont icon-chaxun"></text>
				<input type="text" placeholder="请输入运单号"/>
			</view>
			<view class="saoma iconfont icon-saoma">
				<!-- 扫码 -->
			</view>
		</view>
		<view class="navBox">
			<view class="navItem active">
				我寄出的
			</view>
			<view class="navItem">
				我收到的
			</view>
			<view class="navItem">
				我关注的
			</view>
		</view>
		<view class="navTime">
			<view class="timeItem active">
				今天
			</view>
			<view class="timeItem">
				近七天
			</view>
			<view class="timeItem">
				近一个月
			</view>
			<view class="timeItem">
				自定义
			</view>
		</view>
		<view class="kjList">
			<text class="iconfont icon-zanwushuju nodata"></text>
			<text class="noText">暂无数据</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.whole{
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		// justify-content: center;
	}
	.header{
		width: $all-width;
		display: flex;
		position: fixed;
		left: 50%;
		top: 20upx;
		transform: translateX(-50%);
		align-items: center;
		
	}
	.iptBox{
		display: flex;
		width:615upx;
		height: 70upx;
		border-radius: 35upx;
		background-color: #F7F7F7;
		align-items: center;
		padding: 0 28upx;
		box-sizing: border-box;
	}
	.iptBox>input{
		margin-left: 12upx;
		flex: 1;
		font-size: 28upx;
	}
	.navBox{
		width: 100%;
		padding: 0 50upx;
		padding-bottom: 6upx;
		padding-top: 130upx;
		display: flex;
		justify-content: space-around;
		border-bottom: 2upx solid #F2F2F2;
	}
	//all-font-Tcolor
	.navBox>.navItem{
		display: flex;
		justify-content: center;
		padding-bottom: 20upx;
		font-size: 30upx;
		color: $all-font-Hcolor;
	}
	.navBox>.active{
		color: $all-font-Tcolor;
		position: relative;
	}
	.navBox>.active::before{
		content: "";
		width: 100%;
		height: 4upx;
		background-color: $all-font-Tcolor;
		position: absolute;
		bottom: 0;
	}
	.navTime{
		width: 100%;
		height: 108upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.navTime>.timeItem{
		width: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #333;
		height: 60upx;
		font-size: 30upx;
		border-radius: 30upx;
		background-color: #F2F2F2;
	}
	.navTime>.active{
		color: $all-font-Tcolor;
		background-color: #EDF3FE;
	}
	.kjList{
		width: 100%;
		flex: 1;
		background-color: #F2F2F2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.kjList>.nodata{
		font-size: 80upx;
		color: #ddd;
	}
	.kjList>.noText{
		font-size: 32upx;
		color: #ddd;
	}
	.seachIcon{
		font-size: 52upx;
		color: #999;
	}
	.saoma{
		font-size: 46upx;
		margin-left: 18upx;
	}
</style>
