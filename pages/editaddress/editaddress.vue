<template>
	<view class="whole">
		<view class="iptBox bgWhile">
			<view class="row1 iptRow">
				<input type="text" value="" placeholder="姓名" class="iptItem"/>
			</view>
			<view class="row1 iptRow">
				<input type="text" value="" placeholder="手机号码或固话" class="iptItem"/>
			</view>
			<view class="row1 iptRow">
				<picker class="setwh" @change="bindPickerChange" @columnchange="columnchange"  mode="multiSelector" :value="index" :range="array">
					<view class="uni-input setwh flex_col">地区</view>
				</picker>
				<!-- <input type="text" value="" placeholder="请选择省-市-区" class="iptItem"/> -->
			</view>
			<view class="row1 iptRow">
				<input type="text" value="" placeholder="输入街道、门牌号等信息" class="iptItem"/>
			</view>
			<view class="row1 iptRow">
				<view class="towcol">
					<text class="iconfont icon-weixuanzhong"></text>
					<text class="iconfont icon-xuanzhong" v-show="false"></text>
				</view>
				<text class="clear">清空</text>
			</view>
		</view>
		<view class="comBtn">
			确定
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				 array:[['深圳', '广州', '东莞', '佛山','金华'],['宝安区','龙华区','龙岗区','盐田区','南山区','福田区','罗湖区','坪山区','光明区']],
				 index:0
			}
		},
		methods: {
			bindPickerChange(){// 选择地址
				
			},
			columnchange(e){
				console.log("看看是啥",e);
			}
		}
	}
</script>

<style lang="scss">
	// 公共样式
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
		background-color: $self-body-bgColor;
	}
	.iptBox>.iptRow:not(:last-child){
		border-bottom: 1upx solid #dedede;
	}
	.iptRow{
		display: flex;
		align-items: center;
		height: 88upx;
		justify-content: space-between;
	}
	.iptItem{
		width: 100%;
		font-size: 30upx;
		padding: 0 10upx;
		box-sizing: border-box;
	}
	.comBtn{
		width: 700upx;
		height: 88upx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		font-size: 32upx;
		background-color: $all-font-Tcolor;
		border-radius: 50upx;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 20upx;
	}
	.icon-weixuanzhong{
		font-size: 36upx;
	}
	.icon-xuanzhong{
		color: $all-font-Tcolor;
	}
	.clear{
		color: $all-font-Hcolor;
		font-size: 32upx;
	}
	.towcol{
		padding: 0 10upx;
		box-sizing: border-box;
	}
	.setwh{
		width: 100%;
		// height: 100%;
	}
</style>
