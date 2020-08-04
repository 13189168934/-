// $(function () {
//     //获取本地存储的数据
//     const listStr = localStorage.getItem("goods");
//     const list = listStr ? JSON.parse(listStr) : [];
//     //页面加载时渲染一遍数据
//     renderHTML();
//     //渲染数据
//     function renderHTML() {
//         if (list.length > 0) {
//             $(".goodsList").show();

//             const htmlList = list.map(function (item) {
//                 return `
//                 <div class="item">
//                 <input type="checkbox"  class="pick" ${item.checked ? 'checked' : ''}>
//                 <div class="pic">
//                     <img src="${item.imgSrc}" alt="">
//                 </div>
//                 <div class="item_info">
//                     <p class="dingzhi">${item.name}</p>
//                     <p class="guige">规格：<span>定制诚意金(具体价格以设计方案为准)</span></p>
//                 </div>
//                 <div class="shopping_price"><span class="qian">￥<class class="total-money">${item.price}</class></span></div>
//                 <div class="shopping_num">
//                     <a href="javascript:void(0);"><input type="button" value="-" class="shopping_num_left"></a>
//                     <input type="text" readonly  unselectable="on" value="${item.count}" class="txt_shopping_num">
//                     <a href="javascript:void(0);"> <input type="button" value="+" class="shopping_num_right"></a>
//                 </div>
//                 <div class="shopping_subtotal"><span class="qian">￥<class class="total-money">${item.price * item.count}</class></span>
//                 </div>
//                 <div class="shopping_del">
//                     <a href="javascript:void(0);">删除</a>
//                 </div>
//             </div>
//     `;


//             });
//             $(".item-list").html(htmlList.join(''));
//             calcAll();
//         } else {
//             $(".item-list").html();
//             $(".goodsList").hide();

//         }
//     }
//     //计算数量和价格，是否全选
//     function calcAll() {
//         // 计算总的价格
//         let price = 0;
//         // 计算总的商品种类  就等于  checkedList 长度 
//         let cates = 0;
//         // 计算是否商品都选中=> 全选复习框的值

//         //  如果 所有商品的长度  =  选中了的商品的长度  = > 全选 
//         let allChecked = false;

//         // filter 过滤
//         // 过滤出来 用户选中了的商品
//         const checkedList = list.filter(function (item) {
//             // 返回了true的话就表示你想要这个 item 
//             return item.checked;
//         });

//         // 计算总的价格
//         checkedList.forEach(function (item) {
//             price += item.price * item.count;

//         })

//         // 计算商品的种类
//         cates = checkedList.length;
//         // console.log(checkedList, cates, price);

//         // 是否全选
//         allChecked = checkedList.length === list.length;

//         // 统一赋值 总的价格 商品的种类 全选
//         $(".total-moneys").text(price);
//         $(".selected").text(cates)
//         // 设置全选
//         $(".pick-all").prop("checked", allChecked);
//     }

//     // 全选的点击
//     $(".pick-all").click(function () {
//         // 1 获取当前的全选按钮的 选中状态
//         const checked = $(this).prop("checked");
//         // 2 循环 商品数组 修改里面的属性 
//         list.forEach(function (item) {
//             item.checked = checked;
//         });
//         // 3 希望dom元素也发生变化
//         renderHTML();
//         // 4 把数组存入到缓存中
//         localStorage.setItem("goods", JSON.stringify(list));
//     })

//     // 商品的单选 事件委托 
//     $(".item-list").on("click", ".pick", function () {
//         const checked = $(this).prop("checked");
//         console.log(checked);

//         // 获取索引  要操作的数组的索引
//         const index = $(this).parents(".item").index();

//         list[index].checked = checked;
//         // 根据修改后的数组 重新渲染页面
//         renderHTML();
//         //  把数组存入到缓存中
//         localStorage.setItem("goods", JSON.stringify(list));

//     })

//     // 商品的增加 事件委托 
//     $(".item-list").on("click", ".shopping_num_right", function () {
//         // 1 获取到要操作的数组中的元素 
//         // 2 给里面的购买数量 加加 
//         // 3 把数组的改变 映射到页面中 renderHTML();
//         // 4 把数组 存入到缓存中 
//         const index = $(this).parents(".item").index();
//         list[index].count++;
//         renderHTML();
//         localStorage.setItem("goods", JSON.stringify(list));
//     })

//     // 商品的减小 事件委托 
//     $(".item-list").on("click", ".shopping_num_left ", function () {
//         const index = $(this).parents(".item").index();
//         list[index].count--;

//         // 判断一下商品的数量是否为0 如果是的话 那么就执行删除
//         if (list[index].count === 0) {
//             // 执行删除 
//             if (confirm("您确定要删除此商品吗?")) {
//                 list.splice(index, 1);
//             } else {
//                 list[index].count++;
//             }
//         }

//         renderHTML();
//         localStorage.setItem("goods", JSON.stringify(list));
//     })

//     // 商品的删除 事件委托
//     $(".item-list").on("click", ".shopping_del>a", function () {
//         // 1 询问一下用户
//         if (confirm("您确定要删除此商品吗?")) {
//             // 还是要删除
//             const index = $(this).parents(".item").index();

//             // list.splice("要删除的元素的索引","要删除几个");
//             list.splice(index, 1);

//             renderHTML();
//             localStorage.setItem("goods", JSON.stringify(list));

//         } else {
//             // 不用删除
//         }



//     })

//     // 批量删除 事件委托
//     $(".cell.col-4").on("click", function () {
//         let checks = $(".pick:checked");
//         for (let i = 0; i < checks.length; i++) {
//             // 还是要删除
//             const index = $(checks[i]).parents(".item").index();
//             console.log(index);

//             // list.splice("要删除的元素的索引","要删除几个");
//             list.splice(index, 1);
//             renderHTML();
//             localStorage.setItem("goods", JSON.stringify(list));

//         }
//     })
// })
