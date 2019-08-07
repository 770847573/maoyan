<template>
  <div class="ye">
    <my-header shownum="7"></my-header>
    <div class="container">
      <div class="content">
       <div class="proDetail">
          <nav>
              <span class="index">首页</span>
              <div class="triangle"></div>
              <span>商城</span>
              <div class="triangle"></div>
              <span>林人之妻</span>
          </nav>

          <div class="general">
                <div class="detail-titleImages">
                    <div class="big">
                        <img src="https://p0.meituan.net/movie/190dacde3e05a60abf0d9a5f45ec9dae593909.png@750w_750h_2e" alt="">
                    </div>
                    <div class="small">
                        <ul>
                            <li class="activeImg">
                                <img src="https://p0.meituan.net/movie/190dacde3e05a60abf0d9a5f45ec9dae593909.png@750w_750h_2e" alt="">
                            </li>
                            <li>
                                <img src="https://p0.meituan.net/movie/e9f49769e6e27af1e54d94eafc98fc95527481.png@750w_750h_2e" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
          <div class="detail-purchase">
              <h3>邻人之妻</h3>
              <p class="price">
                  <span>$45</span>
                  <span>$21</span>
              </p>
              <p class="service">
                  <span>服务:</span>
                  <span>
                      <span class="dot">.</span>
                      正版授权
                  </span>
                  <span class="service-saled">售后服务</span>
              </p>
              <p class="notic">
                  <span>说明:</span>
                  该商品由第三方卖家提供
              </p>
              <div class="purchase-btn">立即抢购</div>
          </div>
          </div>
        
           <div class="detail-info">
               <div class="ant-tabs-nav-scroll">
                   <div class="tushu">图书详情</div>
                   <div>购买须知</div>
               </div>
               
               <div class="info-text">
                   <div>
                       <p>
                           <span>商品名称</span>
                           :
                           <span>邻人之妻</span>
                       </p>
                       <p>
                            <span>数量</span>
                           :
                           <span>1本</span>
                       </p>
                       <p>
                            <span>价格</span>
                           :
                           <span>78</span>
                       </p>
                   </div>
                   <div>
                       <p>
                           <span>品牌</span>
                           :
                           <span>中信书店</span>
                       </p>
                   </div>
                   <div>
                         <p>
                             <span>产地</span>
                           :
                           <span>北京</span>
                       </p>
                   </div>
               </div>
           </div>


     </div>
            
      </div>
    </div>
     <my-footer></my-footer>
  </div>
</template>

<style scoped="scoped">
.container {
  width: 1200px;
  margin: 81px auto;
}
.content {
  overflow: hidden;
  padding: 0 18px;
}
.proDetail {
    padding: 60px 0 60px 100px;
}
.proDetail nav {
    padding-bottom: 15px;
    border-bottom: 1px solid #dedede;
    font-size: 18px;
}
.proDetail nav .index {
    margin: 0;
    color: #333;
}
.proDetail nav .triangle {
    width: 10px;
    height: 10px;
    content: "";
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    display: inline-block;
}
.proDetail nav span {
    margin: 0 0 0 8px;
    color: #999;
}
.proDetail nav span {
    margin: 0 0 0 8px;
    color: #999;
}
.proDetail .general {
    margin: 40px 0 94px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}
.proDetail .general .detail-titleImages {
    margin-right: 40px;
    -webkit-flex-basis: 440px;
    -ms-flex-preferred-size: 440px;
    flex-basis: 440px;
}
.proDetail .general .detail-titleImages .big {
    width: 100%;
    border: 1px solid #dedede;
}

.proDetail .general .detail-titleImages .big img {
    width: 100%;
}
.proDetail .general .detail-titleImages .small {
    height: 76px;
    margin: 15px 0 0 -15px;
}
.proDetail .general .detail-titleImages .small ul {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
}
.proDetail .general .detail-titleImages .small ul li {
    height: 100%;
    display: inline-block;
    margin: 0 0 15px 15px;
    cursor: pointer;
}
.proDetail .general .detail-titleImages .small ul li img {
    height: 100%;
}
.proDetail .general .detail-titleImages .small ul .activeImg {
    border: 1px solid #f03d37;
}

.proDetail .general .detail-purchase {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #333;
    box-sizing: border-box;
}
.proDetail .general .detail-purchase .price {
    height: 100px;
    background-color: #f5f5f5;
    padding: 0 0 0 25px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.proDetail .general .detail-purchase h3 {
    padding: 20px 0;
    font-size: 32px; 
    margin: 0;
    color: rgba(0,0,0,.85);
    font-weight: 500;
}
.proDetail .general .detail-purchase .price span:first-child {
    font-size: 48px;
    color: #f03d37;
    margin-right: 20px;
}
.proDetail .general .detail-purchase .price span:nth-child(2) {
    font-size: 28px;
    color: #999;
    text-decoration: line-through;
}
.proDetail .general .detail-purchase p {
    margin-bottom: 30px;
}
.proDetail .general .detail-purchase .service {
    font-size: 12px;
    color: #999;
}
.proDetail .general .detail-purchase .service span {
    margin-right: 20px;
}
.proDetail .general .detail-purchase .service span .dot {
    color: #faaf00;
    margin: 0;
}
.proDetail .general .detail-purchase .notic {
    font-size: 12px;
    color: #faaf00;
}
.proDetail .general .detail-purchase .notic span {
    margin-right: 20px;
}
.proDetail .general .detail-purchase .purchase-btn {
    width: 200px;
    height: 60px;
    background-color: #f03d37;
    border-radius: 30px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
}
.ant-tabs-nav-scroll {
     border-bottom: 1px solid #e8e8e8;
    margin: 0 0 16px;
    outline: none;
}
 .ant-tabs-nav-scroll div {
     display: inline-block;
         height: 100%;
    margin: 0 32px 0 0;
    padding: 12px 16px;
    font-weight: 500;
    font-size: 20px;
 } 
 .ant-tabs-nav-scroll .tushu {
     color: #f03d37;
 }
 .proDetail .detail-info .info-text {
    background: rgba(240,61,55,.05);
    font-size: 14px;
    padding: 11px 10px;
}
.proDetail .detail-info .info-text p {
    color: #333;
    padding: 4px 0;
}
.proDetail .detail-info .info-text p span:nth-child(2) {
    color: #666;
    margin-left: 20px;
}
.proDetail .detail-info .info-text p span:first-child {
    min-width: 60px;
    font-weight: 700;
    display: inline-block;
}
</style>
