// 详情页;
$(function () {
  function i(e) {
    $("#originalpic li").hide(),
      $("#originalpic li").eq(e).stop(!0, !0).fadeIn(800),
      $(".thumbpic li").eq(e).addClass("hover").siblings().removeClass("hover"),
      $("#aPrev,#aNext").css(
        "height",
        $("#originalpic li").eq(e).height() + "px"
      );
  }
  function s() {
    e >= 0 && e < n - 1 ? (++e, i(e)) : "";
    if (r < 0 || r > n - t) return !1;
    $("#piclist ul").animate(
      {
        left: "-=97px",
      },
      200
    ),
      r++;
  }
  function o() {
    !1;
    e >= 1 && (--e, i(e));
    if (r < 2 || r > n + t) return !1;
    $("#piclist ul").animate(
      {
        left: "+=97px",
      },
      200
    ),
      r--;
  }
  var e = 0,
    t = 4,
    n = $("#originalpic li").length,
    r = 1;
  $("#originalpic li").eq(0).show(),
    $("#aPrev,#aNext").css(
      "height",
      $("#originalpic li").eq(0).height() + "px"
    ),
    $(".thumbpic li").eq(0).addClass("hover"),
    $(".bntnext,#aNext").click(function () {
      s();
    }),
    $(".bntprev,#aPrev").click(function () {
      o();
    }),
    $(".thumbpic li").click(function () {
      e = $(".thumbpic li").index(this);
      i(e);
    });

  //获取商品数组
  const dataMock = window.dataMock;
  // 2 获取url上的商品id
  const fr = window.location.search;
  const str1 = fr.slice(1);
  console.log(str1);
  const id = str1.split("=")[1];
  // let imgSrc;
  // console.log(str1.splice("="));
  // 当前要显示 要购买的商品对象
  let goodsdetail = dataMock.find(function (item) {
    return item.id == id;
  });
  // console.log(goodsdetail);
  //替换商品大图
  // console.log(
  //   id,
  //   goodsdetail.imgSrc
  //   // $("#originalpic li:eq(1) a  #44", 3333, $("#44"))
  // );
  console.log(goodsdetail);
  $("#44:first").prop("src", goodsdetail.imgSrc);
  // console.log($("#originalpic li a img "));

  //替换商品的名称
  $(".sku-name").text(goodsdetail.name);

  //价格
  $(" #totalPrice").text(goodsdetail.price);
  //人气
  $("#cout").text(goodsdetail.popularity);
  // 重头戏 是点击 添加到购物车
  // JSON  本地存储 数组的去重 ...

  /* 
  1 从缓存中拿到旧的数组
    1 返回值 要么 是 字符串 要么是 null 
    2 字符串 => JSON.parse(strList) 
    3 null  => [] 
  2 将新的值存入到 旧数组中
    1 数组去重 
    2 如果这个商品没有购买过
      0 给商品 增加一个属性 count=1
      1 直接数组push 即可
    3 如果这个商品购买过 (提示别人 这个商品购买了几个 数量)
      2 给商品的数量count ++ 

  3 将旧数组 存入到 缓存中 
   */
  //从缓存中拿到旧的数组

  // 绑定加入购物车事件
  console.log($("#addcat"));
  $("#addcat").click(function () {
    //  1 获取缓存中的数据  null 或者 字符串
    const strList = localStorage.getItem("goods");
    // strList =  null || 字符串
    // 2 获取到数组
    const list = strList ? JSON.parse("strList") : [];
    // 3 添加商品到数组中
    // 如果没有购买过 就添加一个新属性count=1 再push
    // 如果有购买过 那么找到这个商品 同时给它count ++

    // 如果判断一个元素是否存在于数组中 ??
    const index = list.findIndex(function (item) {
      return item.id == goodsdetail.id;
    });
    // 没有购买过商品
    if (index == -1) {
      goodsdetail.count = 1;
      goodsdetail.checked = true;
      list.push(goodsdetail);
      console.log(index);
    } else {
      // 表示存在旧的商品
      // 旧商品如何获取 list[index]
      list[index].count++;
    }
    const jsonList = JSON.stringify(list);
    localStorage.setItem(goods, jsonList);
    if (confirm("靓仔，靓女添加成功，是否跳转到购物车页面")) {
      //点击确定
      location.href = "cart.html";
    }
  });
});
