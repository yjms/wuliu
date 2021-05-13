<template>
	<view class="whole">
		<view class="header">
			<view class="headRow" @click="checkAddress(1)">
				<view class="jIcon">寄</view>
				<view class="jInfo">
					<view class="infobox">
						
						<view class="rowBox">
							<text class="name">{{prams.data.ma_receiver}}</text>
							<text class="phone">{{prams.data.ma_Mobile}}</text>
						</view>
						<view class="rowBox">
							<text>{{prams.data.zoneName ? prams.data.zoneName : '请选择寄货地址'}}</text>
						</view>	
						<view class="rowBox">
							<text>{{prams.data.ma_address}}</text>
						</view>
						
					</view>
					<text class="rigIcon iconfont icon-youjiantou-copy"></text>	
					<view class="dzIcon">
						<text class="iconfont icon-dizhi addIcon"></text>
						<text>地址簿</text>
					</view>	
				</view>
			</view>
			<view class="headCenter">
				<text class="iconfont icon-zhuanhuan"></text>
				<view class="linebox"></view>
			</view>
			<view class="headRow" @click="checkAddress(2)">
				<view class="sIcon">收</view>
				<view class="jInfo">
					<view class="infobox">
							<view class="rowBox">
								<text class="name">{{prams2.data.ma_receiver}}</text>
								<text class="phone">{{prams2.data.ma_Mobile}}</text>
							</view>
							<view class="rowBox">
								<text>{{prams2.data? prams2.data.zoneName:'请选择收货地址'}}</text>
							</view>	
							<view class="rowBox">
								<text>{{prams2.data.ma_address}}</text>
							</view>
					</view>
					<text class="rigIcon iconfont icon-youjiantou-copy"></text>	
					<view class="dzIcon">
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
					<view class="sbtn" :class="qjType==2?'qjact':''" @click="()=>{this.qjType=2}">官方取件</view>
					<view class="sbtn" :class="qjType==1?'qjact':''" @click="()=>{this.qjType=1}">服务点自寄</view>
				</view>
			</view>
			
			<view class="ulItem">
				<text>付款方式</text>
				<view class="right">
					<view class="sbtn" :class="paytype==1?'qjact':''" @click="()=>{this.paytype=1}">寄付</view>
					<view class="sbtn" :class="paytype==2?'qjact':''" @click="()=>{this.paytype=2}">到付</view>
					<view class="sbtn" :class="paytype==3?'qjact':''" @click="()=>{this.paytype=3}">月付</view>
				</view>
			</view>
			
			<view class="ulItem" @click="showPop(1)">
				<text>物品 & 重量 & 体积</text>
				<view class="right">
					<text class="selectTxt">{{wigths>0||tiji>0||wpthings>0?`${wigths},${tiji},${wpthings}`:'请选择'}}</text>
					<text class="iconfont icon-youjiantou-copy selectIcon"></text>
				</view>
			</view>
			
			<view class="ulItem" @click="showPop(3)">
				<text>对快递员说</text>
				<view class="right">
					<text class="selectTxt">{{remark?remark:'有什么对快递员说的吗'}}</text>
					<text class="iconfont icon-youjiantou-copy selectIcon"></text>
				</view>
			</view>
			
			<view class="ulItem" @click="showPop(2)">
				<text>保价</text>
				<view class="right">
					<text class="selectTxt">{{bxprice?bxprice:'若物品价值超过500元建议保价！'}}</text>
					<text class="iconfont icon-youjiantou-copy selectIcon"></text>
				</view>
			</view>
			
		</view>
		<view class="footer">
			<view class="left">
				费用以快递员揽件核实为准
			</view>
			<view class="right" @click="submit">
				提交
			</view>
		</view>
		<Footpop :showType="showType"  ref="foot"></Footpop>
		
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
				showType:0, // 默认不显示弹窗
				qjType:2,// 默认取件方式
				prams:{},// 接收寄件数据
				prams2:{},// 收货地址
				paytype:1, //付款方式1寄付2到付3月结
				tiji:0,// 默认体积
				wigths:0,// 默认重量
				remark:'',// 默认备注
				bxprice:0,// 保险价值
				wpthings:0,//物品数量
				shaddId:'',// 收件人地址id
				fhaddId:'',// 发货人地址id
				wpType:'',// 物品名字
				funtype:'',// 是否是编辑
				orderId:'',// 订单id
			}
		},
		onLoad(prams){
			// console.log('看看pram',JSON.parse(prams.query));
			if(prams.query){
				let obj = JSON.parse(prams.query);
				this.qjType = obj.jijianfangshi;
				this.paytype = obj.mo_fukuanfangshi;
				this.wigths = obj.mo_weight;
				this.tiji = obj.mo_volume;
				this.remark =obj.mo_qujianbeizhu;
				this.bxprice = obj.mo_baoxianjiazhi;
				this.pinming = obj.wpType;
				this.funtype = 'edit';
				this.orderId = obj.mo_id;
				this.$refs.foot.updata(obj);
			}
			// console.log(this.$refs.foot)
		},
		onShow(){
			// console.log("666",JSON.parse(this.$tool.getstorage("pram")));
			if(this.$tool.getstorage("pram")){
				    let pram =JSON.parse(this.$tool.getstorage("pram"));
					let obj = {};
					obj.type = pram.type.ix;
					obj.data = pram.obj;
					this.prams = obj;
			}
			if(this.$tool.getstorage("pram2")){
				    let pram2 =JSON.parse(this.$tool.getstorage("pram2"));
					let obj2 = {};
					obj2.type = pram2.type.ix;
					obj2.data = pram2.obj;
					this.prams2 = obj2;
			}
		},
		methods: {
			showPop(ix){
				// 显示不同弹窗
				this.showType = ix;
			},
			checkAddress(ix){
				// 去选择地址
				this.$tool.jump_nav(`/pages/address/address?ix=${ix}`);
			},
			submit(){
				//  点击提交按钮
				// console.log('寄件方式',this.qjType,'体积',this.tiji,'重量',this.wigths,'保价',this.bxprice,'备注',this.remark);
				// return;
				if(!this.prams.data){
					this.$tool.showTip("请选择寄件地址！");
					return
				}
				if(!this.prams2.data){
					this.$tool.showTip("请选择收件地址！");
					return
				}
				if(!this.wpthings>0){
					this.$tool.showTip("请填写件数!");
					return
				}
				// console.log()
				let obj = this.prams.data;
				let obj2 = this.prams2.data;
				let dat = {
					functionType:18,
					weixinID:this.$tool.getstorage("openid"),
					jijianfangshi:this.qjType,// 寄件方式
					fukuanfangshi:this.paytype,  // 付款方式 付款方式1寄付2到付3月结
					tiji:this.tiji,   //体积
					zhongliang:this.wigths,   // 重量
					jianshu:this.wpthings,   // 件数
					beizhu:this.remark,   // 取件备注
					baoxianjiazhi:this.bxprice,  // 保险价值
					mo_fahuorenxingming:obj.ma_receiver, // 发货人姓名
					mo_fahuorenTel:obj.ma_Mobile, //mo_fahuorenTel
					address_sender:obj.ma_address,//发货人地址
					mo_zoneID_sender:obj.ZoneID,//发货人区域ID
					mo_shouhuorenxingming:obj2.ma_receiver,//收货人姓名
					mo_shouhuorenTel:obj2.ma_Mobile,//收货人电话
					address_recer:obj2.ma_address,//收货人地址
					mo_zoneID_recer:obj2.ZoneID,//收货人区域ID
					pinming:this.wpType,// 物品名字
					// address_id_sender:this.prams.data.ma_id,  // 发货人地址数据id 
					// address_id_recer:this.prams2.data.ma_id, // 收货人地址id
					mo_id_str:this.funtype=="edit"?this.orderId:0  // 新增 默认为0 编辑为订单id
				}
				this.$api(dat).then(res=>{
					// if(res.data.M)
					if(res.data.MsgID == 1){
						this.$tool.showTip("预约成功！");
						this.$tool.jump_red("/pages/sendThing/sendThing");
					}else{
						this.$tool.showTip(res.data.Msg);
					}
				})
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
		max-width: 400upx;
		overflow: hidden;
		text-overflow:ellipsis; 
		white-space: nowrap;
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
	.rowBox{
		width: 100%;
		height: 40upx;
		display: flex;
		overflow: hidden;
		text-overflow:ellipsis; 
		white-space: nowrap;
		.name,.phone{
			max-width: 70%;
			overflow: hidden;
			text-overflow:ellipsis; 
			white-space: nowrap;
		}
		.phone{
			padding-left: 20upx;
		}
	}
	.gzhBox{
		width: 150upx;
		height: 60upx;
		// background-color: red;
		position: fixed;
		right: 0;
		bottom: 180upx;
		overflow: hidden;
		// border-radius: ;
	}
	.hzBox{
		width: 200upx;
		height: 60upx;
		border-radius: 40upx;
		background-color: $all-font-Tcolor;
		// background-color: ;
		background-image: linear-gradient(to right,#5393FD,#FA7240);
		color: #fff;
		font-size: 26upx;
		display: flex;
		line-height: 60upx;
		// align-items: center;
		padding-left: 26upx;
		box-sizing: border-box;
	}
</style>
