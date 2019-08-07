<template>
  <div class="sc">
    <my-header shownum="7"></my-header>
    <div class="containerss">
      <div class="content">
        <div class="merchant">
          <div class="merchant-btn">
            <a href="#">商家入驻</a>
          </div>
        </div>
            <div class="product">
                <div class="prodect-item">
                    <div class="product-img">
                        <a href="/edimall">
                        <img src="https://p0.meituan.net/movie/190dacde3e05a60abf0d9a5f45ec9dae593909.png@348w_348h_2e" alt="">
                        </a>
                    </div>
                    <div class="product-info">
                        <p>领仍自弃</p>
                        <p>
                            <strong>$20</strong>
                            <span>$30</span>
                        </p>
                    </div>
                </div>

                 <div class="prodect-item">
                    <div class="product-img">
                        <img src="https://p0.meituan.net/movie/190dacde3e05a60abf0d9a5f45ec9dae593909.png@348w_348h_2e" alt="">
                    </div>
                    <div class="product-info">
                        <p>领仍自弃</p>
                        <p>
                            <strong>$20</strong>
                            <span>$30</span>
                        </p>
                    </div>
                </div>

                 <div class="prodect-item">
                    <div class="product-img">
                        <img src="https://p0.meituan.net/movie/190dacde3e05a60abf0d9a5f45ec9dae593909.png@348w_348h_2e" alt="">
                    </div>
                    <div class="product-info">
                        <p>领仍自弃</p>
                        <p>
                            <strong>$20</strong>
                            <span>$30</span>
                        </p>
                    </div>
                </div>

                 <div class="prodect-item">
                    <div class="product-img">
                        <img src="https://p0.meituan.net/movie/190dacde3e05a60abf0d9a5f45ec9dae593909.png@348w_348h_2e" alt="">
                    </div>
                    <div class="product-info">
                        <p>领仍自弃</p>
                        <p>
                            <strong>$20</strong>
                            <span>$30</span>
                        </p>
                    </div>
                </div>
            </div>

            
      </div>
    </div>
     <my-footer></my-footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped="scoped">
.containerss {
  width: 1200px;
  margin: 81px auto;
}
.content {
  overflow: hidden;
  padding: 0 18px;
}
.merchant {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin:30px;
}
.merchant .merchant-btn {
  border: 1px solid #f03d37;
  padding: 10px 15px;
  font-size: 15px;
  color: #f03d37;
  border-radius: 22.5px;
}
.merchant-btn a {
  color: #f03d37;
}

.product {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    text-align: center;
}
.product .prodect-item {
    cursor: pointer;
    margin-bottom: 30px;
}
.product .prodect-item .product-img {
    width: 380px;
    height: 285px;
}
.product .prodect-item img {
    height: 100%;
    /* width: 100%; */
}
.product .prodect-item .product-info {
    padding: 20px 0 0;
}
.product .prodect-item .product-info p {
    font-size: 18px;
    color: #333;
}
.product .prodect-item .product-info strong {
    color: #f03d37;
    margin-right: 6px;
}
.product .prodect-item .product-info span {
    color: #999;
    text-decoration: line-through;
}
</style>
