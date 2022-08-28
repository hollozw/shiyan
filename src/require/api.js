import request from './require'

//首页
export const GetHomeList = () =>request.get('/index/index');

//搜索页面
export const SearchLists = () =>request.get('/search/index');

//搜索字
export const Searching = (params) =>request.get('/search/helper',{params});

//商品分类
export const GoodsLists = (params) =>request.get('/goods/list',{params});

//回车后搜索
export const searchWord = (params) =>request.get('/goods/list',{params});


//专题
export const Topics = (params) => request.get('/topic/list',{params});



//分类接口
export const Catalogs = () => request.get('/catalog/index');
export const Catadatas = (params) => request.get('/catalog/current',{params});


//分类数据获取
export const Checkeds = (params) => request.get('/goods/category',{params})

//品牌详情
export const Pingpa =(params) =>request.get('/goods/detail',{params});

//用户登入
export const useLoads = (params) => request.post('/auth/loginByWeb',params);

//获取购物车数据
export const cartData = (token) => request.get('/cart/index',{
    headers:{
        'X-Nideshop-Token':token,
    }
    
})


//点击切换商品选中状态
export const checkCart = (params)=>request.post('/cart/checked',params);

//商品步进器
export const cartUpadte =(params)=>request.post('/cart/update',params);

//删除商品
export const deleteData = (params) => request.post('/cart/delete',params);


//获取购物车产品数量
export const getNumbers = (token)=>request.get('/cart/goodscount',{
    headers:{
        'X-Nideshop-Token':token,
    }
})


//加入购物车
export const addCart = (goodsId,productId,number) => request.post('/cart/add',{
    goodsId,
    productId,
    number
    
})

//清空历史记录
export const clearData = (token) =>request.post('/search/clearhistory',{
    headers:{
        'X-Nideshop-Token':token,
    }
})

//相关产品
export const goodsRelated = (params)=>request.get('/goods/related',{params});


//品牌详情
export const brandDetails = (params)=>request.get('/brand/detail',{params});

