$(function() {
    const list = window.dataMock;
    const htmlList = list.map(function name(item) {
        return `
        <li class="gio_click" data-id="1932" data-item="5201">
        <a href="../xqy/goodsList-detail.html?id=${item.id}" target="_blank">
        <img src="${item.imgSrc}">
            <i>￥${item.price}<em>人气:<em>${item.popularity}</em></em></i>
            <span>${item.name}</span>
        </a>
        <div class="DoYouLove">
            <em class="DoYouShe">咨询客服</em>
            <em data-goods_id="1932" data-name="索菲亚阿维尼翁系列全屋柜类定制" class="unLove">喜欢</em>
        </div>
    </li>`;
    });
    $(".class_list_box ul").html(htmlList.join(""));

    function fn() {
        const htmlList = list.map(function name(item) {
            return `
            <li class="gio_click" data-id="1932" data-item="5201">

            <a href="../goodsList.html?id=${item.id}" target="_blank">
            <img src="${item.imgSrc}">
                <i>￥${item.price}<em>人气:<em>${item.popularity}</em></em></i>
                <span>${item.name}</span>
            </a>
            <div class="DoYouLove">
                <em class="DoYouShe">咨询客服</em>
                <em data-goods_id="1932" data-name="索菲亚阿维尼翁系列全屋柜类定制" class="unLove">喜欢</em>
            </div>
        </li>`;
        });
        $(".class_list_box ul").html(htmlList.join(""));
    }

    $(".menu_01:first").on("click", function() {
        list.sort((a, b) => {
            return a.popularity - b.popularity;
        });
        fn();
    });

    $(".menu_02").on("click", function() {
        list.sort((a, b) => {
            return a.price - b.price;
        });
        fn();
    });
    $(".menu11111").on("click", function() {
        list.sort((a, b) => {
            return a.id - b.id;
        });
        fn();
    });
});