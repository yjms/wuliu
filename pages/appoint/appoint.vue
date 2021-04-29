<template>
	<view class="whole">
		<view class="header">
			<view class="headRow">
				<view class="jIcon">寄</view>
				<view class="jInfo">
					<view class="infobox" @click="jump_nav(1)">点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人  </view>
					<text class="rigIcon iconfont icon-youjiantou-copy"></text>	
					<view class="dzIcon" @click="jump_nav(3)">
						<text class="iconfont icon-dizhi addIcon"></text>
						<text>地址簿</text>
					</view>	
				</view>
			</view>
			<view class="headCenter">
				<text class="iconfont icon-zhuanhuan"></text>
				<view class="linebox"></view>
			</view>
			<view class="headRow">
				<view class="sIcon">收</view>
				<view class="jInfo">
					<view class="infobox"  @click="jump_nav(2)">点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人点击添加寄件人  </view>
					<text class="rigIcon iconfont icon-youjiantou-copy"></text>	
					<view class="dzIcon" @click="jump_nav(4)">
						<text class="iconfont icon-dizhi addIcon"></text>
						<text>地址簿</text>
					</view>	
				</view>
			</view>
		</view>
		<view class="contentBox">
			
			<view class="ulItem">
				<text>寄件方式</text>
				<view class="right">
					<view class="sbtn" :class="qjType==1?'qjact':''" @click="()=>{this.qjType=1}">官方取件</view>
					<view class="sbtn" :class="qjType==2?'qjact':''" @click="()=>{this.qjType=2}">服务点自寄</view>
				</view>
			</view>
			
			<view class="ulItem">
				<text>付款方式</text>
				<view class="right">
					
				</view>
			</view>
			
			<view class="ulItem" @click="showPop(1)">
				<text>物品 & 重量 & 体积</text>
				<view class="right">
					<text class="selectTxt">请选择</text>
					<text class="iconfont icon-youjiantou-copy selectIcon"></text>
				</view>
			</view>
			
			<view class="ulItem" @click="showPop(3)">
				<text>对快递员说</text>
				<view class="right">
					<text class="selectTxt">有什么对快递员说的吗</text>
					<text class="iconfont icon-youjiantou-copy selectIcon"></text>
				</view>
			</view>
			
			<view class="ulItem" @click="showPop(2)">
				<text>保价</text>
				<view class="right">
					<text class="selectTxt">若物品价值超过500元建议报价！</text>
					<text class="iconfont icon-youjiantou-copy selectIcon"></text>
				</view>
			</view>
			
		</view>
		<view class="footer">
			<view class="left">
				费用以快递员揽件核实为准
			</view>
			<view class="right">
				提交
			</view>
		</view>
		<Footpop :showType="showType"></Footpop>
</view>
</template>
<!-- @font-face {
  font-family: "iconfont";
  src: url('@/static/font/iconfont.ttf'); /* IE9 */
} -->
<script>
	import Footpop from "../components/Footpop.vue"
	export default {
		components:{
			Footpop
		},
		data() {
			return {
				showType:1, // 默认不显示弹窗
				qjType:1,// 默认取件方式
			}
		},
		methods: {
			showPop(ix){
				// 显示不同弹窗
				this.showType = ix;
			},
			jump_nav(ix){
				// 跳转到不同的页面并携带参数
				let arr = [
					`/pages/editaddress/editaddress?ix=${ix}`,
					`/pages/editaddress/editaddress?ix=${ix}`,
					`/pages/address/address?ix=${ix}`,
					`/pages/address/address?ix=${ix}`
					]
				this.$tool.jump_nav(arr[ix-1]);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.whole{
		width: 100vw;
		height: 100vh;
		background-color: $self-body-bgColor;
	}
	.header{
		// padding: 0 20upx;
		box-sizing: border-box;
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		padding-top: 40upx;
	}
	.headRow{
		width: 100%;
		height: 170upx;
		align-items: center;
		display: flex;
		padding-left: 20upx;
		box-sizing: border-box;
	}
	.jIcon,.sIcon{
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		color: #FFFFFF;
		background-color: #227DF6;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32upx;
	}
	.sIcon{
		background-color: #F4923C;
	}
	.jInfo{
		display: flex;
		flex: 1;
		height: 100%;
		align-items: center;
	}
	.infobox{
		flex: 1;
		font-size: 28upx;
		color: #999;
		letter-spacing: 4upx;
		padding-left: 20upx;
		height: 70%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.dzIcon{
		width: 120upx;
		color: $all-font-Hcolor;
		font-size: 30upx;
		height: 60%;
		flex-direction: column;
		display: flex;
		padding: 0 8upx;
		align-items: center;
		justify-content: center;
		border-left: 2upx solid #dedede;
	}
	.rigIcon{
		margin-right: 18upx;
	}
	.addIcon{
		font-size: 50upx;
		color: $all-font-Tcolor;
	}
	.headCenter{
		display: flex;
		align-items: center;
		padding-left: 30rpx;
		width: 100%;
		box-sizing: border-box;
	}
	.headCenter>text{
		color: #999;
	}
	.headCenter>.linebox{
		// width: ;
		flex: 1;
		margin-left: 18upx;
		height: 2upx;
		background-color: #dedede;
	}
	.contentBox{
		width: 100%;
		padding-left: 20upx;
		display: flex;
		margin-top: 10upx;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #FFFFFF;
		color: #666;
		font-size: 34upx;
		.ulItem{
			height: 94upx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		>text{
			font-size: 30upx;
		}
		.ulItem:not(:last-child){
			border-bottom: 2upx solid #dedede;
		}
		.right{
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.sbtn{
				font-size: 28upx;
				padding: 8upx 20upx;
				border: 1upx solid #dedede;
				margin-right: 18upx;
				border-radius: 30upx;
			}
		}
	}
	.ulItem>.right>.selectTxt{
		margin-right: 18upx;
		font-size: 26upx;
	}
	.ulItem>.right>.selectIcon{
		margin-right: 20upx;
	}
	.footer{
		width: 100vw;
		height: 110upx;
		display: flex;
		position: fixed;
		background-color: #FFFFFF;
		align-items: center;
		left: 0;
		bottom: 0;
	}
	.footer>.right{
		width: 200upx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		font-size: 34upx;
		height: 100%;
		background-color: $all-font-Tcolor;
	}
	.footer>.left{
		flex: 1;
		display: flex;
		align-items: center;
		// color: $all-font-Tcolor;
		color: $all-font-Hcolor;
		font-size: 32upx;
		padding-left: 20upx;
	}
	.ulItem>.right>view.qjact{
		color: $all-font-Tcolor;
		border: 1upx solid $all-font-Tcolor;
	}
</style>
