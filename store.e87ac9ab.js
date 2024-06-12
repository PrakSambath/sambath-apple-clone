var a={};a=JSON.parse('[{"imageUrl":"/assets/images/store/store-card-13-mac-nav-202310.png","alt":"Mac","name":"Mac","link":"#"},{"imageUrl":"/assets/images/store/store-card-13-iphone-nav-202309_GEO_US.png","alt":"Ipnone","name":"Iphone","link":"#"},{"imageUrl":"/assets/images/store/store-card-13-ipad-nav-202210.png","alt":"Ipad","name":"Ipad","link":"#"},{"imageUrl":"/assets/images/store/store-card-13-watch-nav-202309.png","alt":"Apple Watch","name":"Apple Watch","link":"#"},{"imageUrl":"/assets/images/store/store-card-13-vision-pro-nav-202401.png","alt":"Apple Vision Pro","name":"Apple Vision Pro","link":"#"},{"imageUrl":"/assets/images/store/store-card-13-airpods-nav-202209.png","alt":"AirPods","name":"AirPods","link":"#"},{"imageUrl":"/assets/images/store/store-card-13-airtags-nav-202108.png","alt":"AirTag","name":"AirTag","link":"#"},{"imageUrl":"/assets/images/store/store-card-13-appletv-nav-202210.png","alt":"Apple TV 4K","name":"Apple TV 4K","link":"#"},{"imageUrl":"/assets/images/store/store-card-13-homepod-nav-202301.png","alt":"HomePod","name":"HomePod","link":"#"},{"imageUrl":"/assets/images/store/store-card-13-accessories-nav-202403.png","alt":"Accessories","name":"Accessories","link":"#"},{"imageUrl":"/assets/images/store/store-card-13-holiday-giftcards-asit-agc-nav-202111.png","alt":"Apple Gift Card","name":"Apple Gift Card","link":"#"}]');var s={};s=JSON.parse('[{"imageUrl":"/assets/images/store/store-card-40-iphone-15-pro-202309.jpg","alt":"IPHONE 15 PRO","name":"IPHONE 15 PRO","desc":"Titanium","unitPrice":"$999","monthlyPay":"$41.62","totalMonth":"24","cssClass":"card-darkbg"},{"imageUrl":"/assets/images/store/store-card-40-vision-pro-202401.jpg","alt":"APPLE VISION PRO","name":"APPLE VISION PRO","desc":"Welcome to spatial computing","unitPrice":"$3499","monthlyPay":"$219.58","totalMonth":"24","cssClass":""},{"imageUrl":"/assets/images/store/store-card-40-macbook-air-202402.jpg","alt":"MACBOOK AIR","name":"MACBOOK AIR","desc":"Designed to go places","unitPrice":"$999","monthlyPay":"$83.25","totalMonth":"24","cssClass":""},{"imageUrl":"/assets/images/store/store-card-40-watch-s9-202309.jpg","alt":"APPLE WATCH SERIES 9","name":"APPLE WATCH SERIES 9","desc":"Smarter. Brighter. Mightier.","unitPrice":"$399","monthlyPay":"$33.25","totalMonth":"12","cssClass":"card-darkbg"},{"imageUrl":"/assets/images/store/store-card-40-iphone-15-pro-202309.jpg","alt":"IPHONE 15 PRO","name":"IPHONE 15 PRO","desc":"Titanium","unitPrice":"$999","monthlyPay":"$41.62","totalMonth":"24","cssClass":"card-darkbg"},{"imageUrl":"/assets/images/store/store-card-40-vision-pro-202401.jpg","alt":"APPLE VISION PRO","name":"APPLE VISION PRO","desc":"Welcome to spatial computing","unitPrice":"$3499","monthlyPay":"$219.58","totalMonth":"24","cssClass":""},{"imageUrl":"/assets/images/store/store-card-40-macbook-air-202402.jpg","alt":"MACBOOK AIR","name":"MACBOOK AIR","desc":"Designed to go places","unitPrice":"$999","monthlyPay":"$83.25","totalMonth":"24","cssClass":""},{"imageUrl":"/assets/images/store/store-card-40-watch-s9-202309.jpg","alt":"APPLE WATCH SERIES 9","name":"APPLE WATCH SERIES 9","desc":"Smarter. Brighter. Mightier.","unitPrice":"$399","monthlyPay":"$33.25","totalMonth":"12","cssClass":"card-darkbg"}]');const e=window.document.querySelector("#product-category");a.forEach(a=>{e.innerHTML+=`
          <div class="product-card-item">
            <div class="card-image">
              <img src="${a.imageUrl}" alt="${a.alt}">
            </div>
            <div class="card-info">
              <a href="#">${a.name}</a>
            </div>
          </div>
  `});const t=window.document.querySelector("#new-product");s.forEach(a=>{t.innerHTML+=`
          <div class="product-card-item">
            <div class="card-wrapper ${a.cssClass}">
              <div class="card-image-full">
                <img src="${a.imageUrl}" alt="${a.alt}">
              </div>
              <div class="card-info-top">
                <div class="card-content-header-upper">
                  <h3>${a.name}</h3>
                </div>
                <div class="card-content-header-lower">
                  <a href="#">${a.desc}</a>
                </div>
                <div class="card-content-desc">From <span>${a.unitPrice}</span> or <span>${a.monthlyPay}</span>/mo. for ${a.totalMonth} mon.</div>
              </div>
            </div>
          </div>
  `});
//# sourceMappingURL=store.e87ac9ab.js.map
