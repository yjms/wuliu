<template>
	<view class="whole">
		<view class="header">
			<view class="iptBox">
				<text class="seachIcon iconfont icon-chaxun"></text>
				<input type="text" placeholder="请输入运单号" v-model="keyword"  @focus="search(1)" @blur="search(2)"/>
			</view>
			<view class="searchTxt" v-show="searchStatus" @click="search(3)">
				查询
			</view>
			<view class="saoma iconfont icon-saoma" v-show="!searchStatus" @click="scancode">
				<!-- 扫码 -->
			</view>
		</view>
		<view class="navBox">
			<view class="navItem" :class="currTab==1?'active':''" @click="changeTab(1)">
				我寄出的
			</view>
			<view class="navItem" :class="currTab==2?'active':''" @click="changeTab(2)">
				我收到的
			</view>
			<view class="navItem" :class="currTab==3?'active':''" @click="changeTab(3)"> 
				我关注的
			</view>
		</view>
		<view class="navTime">
			<view class="timeItem" :class="timeTab==1?'active':''" @click="changeTab(1,'time')">
				今天
			</view>
			<view class="timeItem" :class="timeTab==2?'active':''" @click="changeTab(2,'time')">
				近七天
			</view>
			<view class="timeItem" :class="timeTab==3?'active':''" @click="changeTab(3,'time')">
				近一个月
			</view>
			<view class="timeItem" :class="timeTab==4?'active':''" @click="changeTab(4,'time')">
				自定义
			</view>
		</view>
		<view class="kjList" v-if="!hasData">
			<text class="iconfont icon-zanwushuju nodata"></text>
			<text class="noText">暂无数据</text>
		</view>
		<view class="setbg row">
			<scroll-view class="ydList" scroll-y="true">
				<view class="bgWhile row1 yditem" v-for="it in 10">
					<view class="ydHeader">
						<text>运单号: HX123456789101214 </text>
						<text class="iconfont icon-fuzhicopy12"></text>
					</view>
					<view class="arive">
						<view class="arrLeft">
							<text class="cityName">上海市</text>
							<text class="towRow">得物App白冰冰</text>
						</view>
						<view class="arrcenter">
							<image src="../../static/image/dancheng.png"></image>
							<text class="setmar">已签收</text>
						</view>
						<view class="arrRight">
							<text class="cityName">长沙市</text>
							<text class="towRow">杨理松</text>
						</view>
					</view>
					<view class="statusBox">
						<text class="shink">已签收: </text>
						<view class="shink rigTxt">您的快件代签收(驿站)，如有疑问请电联快递员【易龙】,电话17673615001。疫情期间顺丰每</view>
					</view>
					<view class="timebox">
						 <text>签收时间: </text>
						 <text>2021-03-03 09:41</text>
					</view>
					<view class="ydFoot">
						<view class="share">
							分享
						</view>
						<view class="del">
							删除
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currTab:1,//默认显示今天的单号
				timeTab:1,// 默认选择今天查询 
				searchStatus:false, // 是否是搜索状态
				keyword:"",// 搜索关键字
				hasData:true,// 默认没数据
			}
		},
		onLoad() {
			console.log(6666)
		},
		methods: {
			changeTab(tab,type){
				type == "time"?this.timeTab = tab:this.currTab = tab;
			},
			search(type){
				type == 1 ? this.searchStatus = true : this.searchStatus = false;
				if(type ==  3){
					let str = this.keyword.trim();
					if(str)
					console.log(this.keyword);
				}
			},
			scancode(){
				// 只允许通过相机扫码
				uni.scanCode({
				    onlyFromCamera: true,
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			}
		}
	}
</script>

<style lang="scss">
	.bgWhile{
		background-color: #FFFFFF;
	}
	.row{
		width: 100%;
		padding: 0 28upx;
		box-sizing: border-box;
	}
	.row1{
		width: calc(100vw - 56upx);
		margin: 0 auto;
	}
	.flex_row{ // 横向居中 flex
		display: flex;
		justify-content: center;
		box-sizing: border-box;
	}
	.flex_col{// 纵向居中flex
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}
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
	.header>.searchTxt{
		color: #888;
		font-size: 30upx;
		margin-left: 2upx;
		border: 8upx solid #FFFFFF;
	}
	.setbg{
		background-color: $self-body-bgColor;
		flex: 1;
	}
	.ydList{
		width: 100%;
		height: calc(100vh - 350upx);
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 18upx;
	}
	.yditem{
		width: 100%;
		padding: 24upx 0 18upx 24upx;
		box-sizing: border-box;
		margin-bottom: 18upx;
		font-size: 28upx;
		.icon-fuzhicopy12{
			font-size: 34upx;
			padding-left: 6upx;
			color: #888;
		}
	}
	.yditem>.ydHeader{
		display: flex;
	}
	.arive{
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 0 20upx;
		box-sizing: border-box;
		margin:18upx 0;
	}
	.arive>view{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.arrcenter>image{
		width: 120upx;
		height: 20upx;
		object-fit: cover;
	}
	.setmar{
		margin-top: 10upx;
		font-weight: bold;
	}
	.towRow{
		color: #888;
		margin-top: 10upx;
	}
	.cityName{
		color: #000;
		font-size: 36upx;
	}
	.statusBox{
		width: 100%;
		display: flex;
		color: #777;
		.rigTxt{
			flex: 1;
			text-align: justify;
			padding: 0 18upx;
			box-sizing: border-box;
		}
	}
	.shink{
		flex-shrink: 0;
	}
	.timebox{
		display: flex;
		color: #777;
		margin: 18upx 0;
		border-bottom: 1upx solid #dedede;
		padding-bottom: 18upx;
	}
	.ydFoot{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		.share,.del{
			width: 160upx;
			height: 60upx;
			border: 1upx solid #dedede;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #666;
			border-radius: 35upx;
			margin-right: 18upx;
		}
		.del{
			margin-right: 26upx;
		}
	}
</style>
